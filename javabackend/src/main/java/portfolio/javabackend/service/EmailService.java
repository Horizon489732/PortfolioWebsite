package portfolio.javabackend.service;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import portfolio.javabackend.request.ContactRequest;

import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;

@Service
public class EmailService {

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${spring.mail.personal}")
    private String personalEmail;

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(ContactRequest request) throws Exception {
        // Email to client
        sendEmailHelper(
                request.getEmail(),
                fromEmail,
                "Beyond The Horizon",
                "Thank you for contacting us!",
                "Hi " + request.getName() + ",\n\nWe received your message");

        // Email to me
        sendEmailHelper(
                personalEmail,
                fromEmail,
                "Admin",
                "New contact request from " + request.getName(),
                "Name: " + request.getName() + "\nEmail: " + request.getEmail() +
                        "\nSubject: " + request.getSubject() + "\nMessage: " + request.getMessage());
    }

    public void sendEmailHelper(String to, String from, String fromName, String subject, String body) throws Exception {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, StandardCharsets.UTF_8.name());
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body, true);

        helper.setFrom(new InternetAddress(from, fromName));

        mailSender.send(message);
    }
}
