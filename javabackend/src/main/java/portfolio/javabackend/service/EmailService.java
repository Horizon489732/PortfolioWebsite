package portfolio.javabackend.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleRefreshTokenRequest;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.json.gson.GsonFactory;
import com.sun.mail.smtp.SMTPTransport;
import jakarta.mail.Session;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import portfolio.javabackend.request.ContactRequest;

import java.util.Properties;
import java.util.logging.ConsoleHandler;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class EmailService {

    @Value("${gmail.client-id}")
    private String clientId;

    @Value("${gmail.client-secret}")
    private String clientSecret;

    @Value("${gmail.refresh-token}")
    private String refreshToken;

    @Value("${gmail.from-email}")
    private String fromEmail;

    @Value("${gmail.smtp.host}")
    private String smtpHost;

    @Value("${gmail.smtp.port}")
    private int smtpPort;

    @Value("${gmail.smtp.auth}")
    private boolean smtpAuth;

    @Value("${gmail.smtp.starttls}")
    private boolean smtpStarttls;

    public void enableGoogleHttpLogging() {
        // Logger for Google HTTP Client
        Logger logger = Logger.getLogger("com.google.api.client");
        logger.setLevel(Level.ALL);

        // Console handler
        ConsoleHandler handler = new ConsoleHandler();
        handler.setLevel(Level.ALL);

        // Add handler if not already added
        if (logger.getHandlers().length == 0) {
            logger.addHandler(handler);
        }

        System.out.println("Google HTTP logging enabled");
    }

    private String getAccessToken() throws Exception {
        enableGoogleHttpLogging();

        GoogleRefreshTokenRequest request = new GoogleRefreshTokenRequest(
                GoogleNetHttpTransport.newTrustedTransport(),
                GsonFactory.getDefaultInstance(),
                refreshToken.replace("\"", ""), // remove quotes
                clientId.replace("\"", ""),
                clientSecret.replace("\"", ""));

        // Enable logging and curl output
        request.setRequestInitializer(new HttpRequestInitializer() {
            @Override
            public void initialize(HttpRequest httpRequest) {
                httpRequest.setLoggingEnabled(true); // full HTTP debug
                httpRequest.setCurlLoggingEnabled(true); // prints curl equivalent
            }
        });

        return request.execute().getAccessToken();
    }

    public void sendEmail(ContactRequest request) throws Exception {
        String accessToken = getAccessToken();
        System.out.println("Access token: " + accessToken);

        Properties props = new Properties();
        props.put("mail.smtp.auth", smtpAuth);
        props.put("mail.smtp.starttls.enable", smtpStarttls);
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.port", smtpPort);
        props.put("mail.smtp.auth.mechanisms", "XOAUTH2");
        props.put("mail.smtp.auth.login.disable", "true");
        props.put("mail.smtp.auth.plain.disable", "true");
        props.put("mail.smtp.auth.ntlm.disable", "true");

        Session session = Session.getInstance(props);
        session.setDebug(true); // enable full SMTP debug

        MimeMessage message = new MimeMessage(session);
        message.setFrom(new InternetAddress(fromEmail, "Beyond The Horizon"));
        message.setRecipients(MimeMessage.RecipientType.TO, InternetAddress.parse(request.getEmail()));
        message.setSubject(request.getSubject());
        message.setText(request.getMessage());

        SMTPTransport transport = (SMTPTransport) session.getTransport("smtp");
        try {
            System.out.println("Connecting to SMTP server...");
            transport.connect(smtpHost, smtpPort, fromEmail, accessToken);
            System.out.println("SMTP Response: " + transport.getLastServerResponse());

            System.out.println("Sending message...");
            transport.sendMessage(message, message.getAllRecipients());

            System.out.println("Email sent successfully!");
        } catch (Exception e) {
            System.err.println("Failed to send email:");
            e.printStackTrace();
            throw e;
        } finally {
            transport.close();
        }
    }
}
