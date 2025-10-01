package portfolio.javabackend.service;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.internet.MimeMessage;
import portfolio.javabackend.request.ContactRequest;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

@Service
public class EmailService {

    @Value("${spring.mail.username}")
    private String fromEmail;

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(ContactRequest request) throws Exception {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(request.getEmail());
        helper.setSubject(request.getSubject());
        helper.setText(request.getMessage(), true);
        helper.setFrom(fromEmail, "Beyond The Horizon");

        mailSender.send(message);
        System.out.println("Email sent to: " + request.getEmail());
    }
}
