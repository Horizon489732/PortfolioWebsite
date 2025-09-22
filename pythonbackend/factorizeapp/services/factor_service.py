import random
import math
import gmpy2


# ---------------------------
# Helper functions
# ---------------------------

def isPerfectPower(n):
    exponent = 2

    while True:
        if(2**exponent > n):

            '''
            this is the upper bound
            If 2**exponent > n
            for any a^b with a >= 2 and b >= exponent we have a^b > n
            '''

            return (False, 0, 0)

        #Now we do a binary search for base

        low = 2
        high = low

        while(high**exponent <= n): #Raising high to the upper bound
            high *= 2

        while(high > low + 1):
            mid = (high + low) // 2

            if(mid ** exponent <= n):
                low = mid
            else:
                high = mid

        if(low ** exponent == n):
            return (True, low, exponent)

        exponent += 1 #Linear search for exponent

def isComposite(n):
    return (gmpy2.powmod(2, n-1, n)) != 1

def hasInverse(P, Q, n):
    x1, y1 = P
    x2, y2 = Q

    diff = x2 - x1 if P != Q else y1
    gcd = gmpy2.gcd(n, diff)

    if 1 < gcd:
        return gcd
    elif gcd == 1:
        return 'Continue'
    elif gcd == n:
        return 'Pick a new curve'

def double(P, b, n):

    x, y = P

    inverse = gmpy2.powmod(2*y, -1, n)

    ld = (3*(x**2) + b)*inverse % n
    x3 = (ld**2 - 2*x) % n
    y3 = (-ld*x3 - y + ld*x) % n

    return (x3, y3)

def plus(P, Q, b, n):

    if(P == Q):
        return double(P, b, n)

    x1, y1 = P
    x2, y2 = Q

    inverse = gmpy2.powmod(x2-x1, -1, n)

    ld = (y2 - y1) * inverse % n
    x3 = (ld**2 - x1 - x2) % n
    y3 = (-ld*x3 - (y1 - ld*x1)) % n

    return (x3, y3)

def multiplyP(k, P, b, n):

    Q = (None, None)

    bit_str = bin(k)[2:][::-1]

    for i in range(len(bit_str)):

        if bit_str[i] == '1': #current bit is 1

            if Q == (None, None):
                Q = P

            else:
                inverse_result = hasInverse(Q, P, n)

                if inverse_result == "Pick a new curve" or isinstance(inverse_result, gmpy2.mpz):
                    return inverse_result
                Q = plus(Q, P, b, n)

        if i == len(bit_str) - 1:
            return Q

        inverse_result = hasInverse(P, P, n)
        if inverse_result == "Pick a new curve" or isinstance(inverse_result, gmpy2.mpz) :
            return inverse_result
        P = double(P, b, n)

def SieveOfEratosthenes(d_MAX):
    num_list = [True for _ in range(d_MAX + 1)]

    num_list[0] = num_list[1] = False

    prime_list = []

    for prime in range(2, d_MAX + 1):
        if num_list[prime]:
            prime_list.append(gmpy2.mpz(prime))

            for i in range(prime*prime, d_MAX + 1, prime):

                num_list[i] = False

    return prime_list

# ---------------------------
# Main factorization logic
# ---------------------------


def factor(n, d_MAX):
    
    factors = set()
    primes = SieveOfEratosthenes(d_MAX)

    if n < 0:
        factors.add(-1)
        n = abs(n)

    isPerfectP, low, exponent = isPerfectPower(n)
    while isPerfectP:
        n = low
        isPerfectP, low, exponent = isPerfectPower(n)

    if n % 2 == 0:
        factors.add(2)
    if n % 3 == 0:
        factors.add(3)
    while n % 2 == 0:
        n //= 2
    while n % 3 == 0:
        n //= 3     

    if not isComposite(n):
        if n != 1:
            factors.add(int(n))
        return factors
    
    if n == 1:

        return factors

    is_continue = True
    while is_continue:
        x = gmpy2.mpz(random.randint(1, 10) % n)
        y = gmpy2.mpz(random.randint(1, 10) % n)
        P = (x, y)
        b = gmpy2.mpz(random.randint(1, 100) % n)

        k = gmpy2.mpz(1)
        for prime in primes:
            k *= prime
            result = multiplyP(k, P, b, n)
            if result == "Pick a new curve":
                break
            elif isinstance(result, gmpy2.mpz):
                while n % result == 0:
                    n //= result
                    factors.add(int(result))
                    factors.update(factor(n, d_MAX))
                is_continue = False
                break
    
    return factors