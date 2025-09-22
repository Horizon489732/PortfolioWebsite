package portfolio.javabackend.controller;

import org.springframework.web.bind.annotation.RestController;

import portfolio.javabackend.service.LegendreService;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class LegendreController {

    @Autowired
    private final LegendreService legendreService;

    public LegendreController(LegendreService legendreService) {
        this.legendreService = legendreService;
    }

    @GetMapping("/legendre/")
    @ResponseBody
    public Mono<ResponseEntity<String>> hasQSolution(
            @RequestParam String A,
            @RequestParam String B,
            @RequestParam String C) {

        double a, b, c;

        try {
            a = Double.parseDouble(A);
            b = Double.parseDouble(B);
            c = Double.parseDouble(C);
        } catch (NumberFormatException e) {
            return Mono.just(ResponseEntity
                    .badRequest()
                    .body("Invalid input: A, B, and C must be numeric."));
        }

        return legendreService.hasQSolution(a, b, c).map(
                result -> ResponseEntity.ok(
                        result ? "It has a Q solution." : "It does not have a Q solution."))
                .onErrorResume(e -> Mono.just(ResponseEntity
                        .internalServerError()
                        .body("Internal error: " + e.getMessage())));
    }

}
