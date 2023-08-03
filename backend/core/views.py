from django.http import JsonResponse
from django.shortcuts import render

def home(request):
    # Your view logic goes here
    return render(request, 'index.html')

def make_api_call(request):
    # Simulate the response data
    response_data = [
        {
            "accountId": 141230203,
            "name": "Dongmin shin is coming",
            "id": "realTimeTest1",
            "email": "ggson@gmail.com"
        },
        {
            "accountId": 987654321,
            "name": "John Doe",
            "id": "realTimeTest2",
            "email": "johndoe@example.com"
        },
        # Add more objects as needed
    ]

    return JsonResponse(response_data, safe=False)
