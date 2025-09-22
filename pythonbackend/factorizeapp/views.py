from django.http import JsonResponse
from .services.factor_service import factor

# Create your views here.
def factors_of(request):

    number = request.GET.get("n")
    dMax = request.GET.get("dMax", 100)

    try:
        n = int(number)
    except (TypeError, ValueError):
        return JsonResponse({"error": "Invalid number"}, status=400)

    try:
        d_MAX = int(dMax) if dMax else 100  # default 100
    except ValueError:
        d_MAX = 100

    
    factors = factor(n, d_MAX) 

    return JsonResponse({"factors": list(factors)})