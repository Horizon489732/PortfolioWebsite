package portfolio.javabackend.service;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.http.MediaType;

import reactor.core.publisher.Mono;

@Service
public class LegendreService {

    private final WebClient webClient;

    public LegendreService(WebClient.Builder webClientBuilder,
            @Value("${factorize.service.url}") String baseUrl) {

        // Configure a WebClient specifically for factorize service
        this.webClient = webClientBuilder
                .baseUrl(baseUrl)
                .build();
    }

    private static int getGCD(int a, int b) {
        if (b == 0) {
            return a;
        }
        return getGCD(b, a % b);
    }

    private static int getLCD(int a, int b) {
        return Math.abs(a * b) / getGCD(a, b);
    }

    private static int[] getFraction(double num) {

        int[] fraction = new int[2];

        if (num - (int) num == 0) { // the denominator is 1 if it is an integer
            fraction[0] = (int) num;
            fraction[1] = 1;
            return fraction;
        }

        String num_str = num + "";
        num_str = num_str.substring(num_str.indexOf('.') + 1);// only take the number after the decimal

        int numerator = (int) (num * Math.pow(10, num_str.length()));
        int denominator = (int) Math.pow(10, num_str.length());
        int gcd = getGCD(numerator, denominator);

        fraction[0] = numerator / gcd;
        fraction[1] = denominator / gcd;
        return fraction;
    }

    private static boolean isSquareModular(int num, int value) {

        // this method is to check if num is a square modular value

        // always reduce num modulo value to 0..value-1
        num = ((num % value) + value) % value;

        // small modulus → brute force
        if (value <= 100000) {
            for (int i = 0; i < value; i++) {
                if ((i * i) % value == num) {
                    return true;
                }
            }
            return false;
        }

        // for larger modulus, if prime → use Euler's criterion
        if (isProbablePrime(value, 10)) {
            return modPow(num, (value - 1) / 2, value) == 1;
        }

        // for larger composite modulus → fallback to brute force
        for (int i = 0; i < value; i++) {
            if ((i * i) % value == num) {
                return true;
            }
        }
        return false;

    }

    private static int modPow(int base, int exp, int mod) {
        long result = 1; // Initialize result
        long b = base % mod; // Update base if it is more than or equal to mod

        while (exp > 0) {

            // If exp is odd, multiply base with result
            if ((exp & 1) == 1) {
                result = (result * b) % mod;
            }

            // exp must be even now
            exp >>= 1;
            b = (b * b) % mod;
        }
        return (int) result;
    }

    // This function is called for all k trials.
    // It returns false if n is composite and
    // returns false if n is probably prime.
    // d is an odd number such that d*2<sup>r</sup>
    // = n-1 for some r >= 1
    private static boolean miillerTest(int d, int n) {

        // Pick a random number in [2..n-2]
        // Corner cases make sure that n > 4
        int a = 2 + (int) (Math.random() * (n - 4));

        // Compute a^d % n
        int x = modPow(a, d, n);

        if (x == 1 || x == n - 1)
            return true;

        // Keep squaring x while one of the
        // following doesn't happen
        // (i) d does not reach n-1
        // (ii) (x^2) % n is not 1
        // (iii) (x^2) % n is not n-1
        while (d != n - 1) {
            x = (x * x) % n;
            d *= 2;

            if (x == 1)
                return false;
            if (x == n - 1)
                return true;
        }

        // Return composite
        return false;
    }

    // It returns false if n is composite
    // and returns true if n is probably
    // prime. k is an input parameter that
    // determines accuracy level. Higher
    // value of k indicates more accuracy.
    private static boolean isProbablePrime(int n, int k) {

        // Corner cases
        if (n <= 1 || n == 4)
            return false;
        if (n <= 3)
            return true;

        // Find r such that n = 2^d * r + 1
        // for some r >= 1
        int d = n - 1;

        while (d % 2 == 0)
            d /= 2;

        // Iterate given number of 'k' times
        for (int i = 0; i < k; i++)
            if (!miillerTest(d, n))
                return false;

        return true;
    }

    private static boolean hasQsolution(int a, int b) {

        // this method is to check if the ratio -b/a is a perfect square

        if (a * b > 0)
            return false;
        if (a == 0)
            return true;
        double numerator = (double) -b / getGCD(-b, a);
        double denominator = (double) a / getGCD(-b, a);
        int sqrtNumerator = (int) Math.sqrt(numerator);
        int sqrtDenominator = (int) Math.sqrt(denominator);
        return (sqrtNumerator * sqrtNumerator == numerator) && (sqrtDenominator * sqrtDenominator == denominator);
    }

    private Mono<Set<Integer>> factorsOf(int num) {

        // Use fallback immediately for small numbers
        // if (Math.abs(num) < 1000) {
        // return Mono.just(fallbackFactors(num));
        // }

        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path("/factorize/")
                        .queryParam("n", num)
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<Map<String, List<Integer>>>() {
                })
                .map(map -> {
                    System.out.println("Received factors response: " + map);
                    List<Integer> list = map.get("factors");
                    System.out.println("List factors response: " + list.toString());
                    Set<Integer> set = new HashSet<>(list); // assign to interface type
                    set.remove(Integer.valueOf(-1));
                    System.out.println("Set factors response: " + set.toString());
                    return set; // now Mono<Set<Integer>>
                })
                .onErrorResume(e -> {
                    e.printStackTrace();
                    return Mono.defer(() -> Mono.just(fallbackFactors(num)));
                });

    }

    private Set<Integer> fallbackFactors(int num) {

        System.out.println("It goes herer");

        Set<Integer> factors = new HashSet<>();

        // Factor 2
        while (num % 2 == 0) {
            factors.add(2);
            num /= 2;
        }

        int i = 3;
        while (i <= Math.sqrt(num)) {
            while (num % i == 0) {
                factors.add(i);
                num /= i;
            }
            i += 2;
        }

        if (num > 2)
            factors.add(num); // prime itself

        return factors;
    }

    private Mono<Integer> getRidOfSquare(int num) {

        System.out.println("Checking getRidOfSquare for " + num);

        return factorsOf(num).map(factors -> {
            int result = num;
            for (Integer p : factors) {
                while (result % (p * p) == 0) {
                    result /= (p * p);
                }
            }
            return result;
        });
    }

    private Mono<Set<Integer>> primesSquareDividingABC(int a, int b, int c) {

        // this method is to get all the prime square

        int product = a * b * c;

        return factorsOf(product).map(factors -> {
            Set<Integer> primesWithSquare = new HashSet<>();

            for (Integer p : factors) {
                if (product % (p * p) == 0) {
                    primesWithSquare.add(p);
                }
            }
            return primesWithSquare;
        });
    }

    public Mono<Boolean> hasQSolution(double A, double B, double C) {
        // clear denominators
        int[] fA = getFraction(A);
        int[] fB = getFraction(B);
        int[] fC = getFraction(-C); // because you used -c in main

        int lcd = getLCD(fA[1], getLCD(fB[1], fC[1]));
        int a = fA[0] * (lcd / fA[1]);
        int b = fB[0] * (lcd / fB[1]);
        int c = fC[0] * (lcd / fC[1]);

        // Check for non-zero a,b,c
        if (a == 0)
            return Mono.just(hasQsolution(b, c));
        if (b == 0)
            return Mono.just(hasQsolution(a, c));
        if (c == 0)
            return Mono.just(hasQsolution(a, b));

        // Reduce GCD
        int gcd = getGCD(a, getGCD(b, c));
        a /= gcd;
        b /= gcd;
        c /= gcd;

        // Remove squares reactively
        return Mono.zip(getRidOfSquare(a), getRidOfSquare(b), getRidOfSquare(c))
                .flatMap(triple -> {
                    int[] vals = { triple.getT1(), triple.getT2(), triple.getT3() };

                    return primesSquareDividingABC(vals[0], vals[1], vals[2])
                            .map(primes -> {
                                for (Integer p : primes) {
                                    if (vals[0] % p == 0 && vals[1] % p == 0) {
                                        vals[0] /= p;
                                        vals[1] /= p;
                                        vals[2] *= p;
                                    } else if (vals[1] % p == 0 && vals[2] % p == 0) {
                                        vals[1] /= p;
                                        vals[2] /= p;
                                        vals[0] *= p;
                                    } else if (vals[0] % p == 0 && vals[2] % p == 0) {
                                        vals[0] /= p;
                                        vals[2] /= p;
                                        vals[1] *= p;
                                    }
                                }

                                if (vals[0] * vals[1] > 0 && vals[1] * vals[2] > 0)
                                    return false;

                                return isSquareModular(-vals[1] * vals[2], Math.abs(vals[0])) &&
                                        isSquareModular(-vals[0] * vals[2], Math.abs(vals[1])) &&
                                        isSquareModular(-vals[0] * vals[1], Math.abs(vals[2]));
                            });
                });
    }

}
