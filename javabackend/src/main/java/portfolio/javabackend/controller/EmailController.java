package portfolio.javabackend.controller;

import org.springframework.web.bind.annotation.RestController;

import portfolio.javabackend.request.ContactRequest;
import portfolio.javabackend.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class EmailController {

    @Autowired
    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/form/contact")
    public ResponseEntity<String> requestMethodName(@RequestBody ContactRequest request) {
        try {
            this.emailService.sendEmail(request);
            return ResponseEntity.ok("Email sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to send email: " + e.getMessage());
        }
    }

}
