from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt  # Add this import

def home(request):
    return render(request, 'index.html')

@csrf_exempt
def make_api_call(request):
    # Simulate the response data
    response_data = {
        "accountId": 141230203,
        "name": "Dongmin",
        "id": "realTimeTest",
        "email": "ggson@gmail.com"
    }

    return JsonResponse(response_data)


# from django.shortcuts import render
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import requests

# def home(request):
#     return render(request, 'index.html')

# @csrf_exempt
# def make_api_call(request):
#     url = 'http://127.0.0.1:8000/api/make-api-call'  # Remove one forward slash

#     # Optional: If you need to pass headers or authentication tokens, set them here
#     headers = {
#         'Content-Type': 'application/json',
#         'Authorization': 'Bearer YOUR_AUTH_TOKEN'
#     }

#     # Optional: If you need to pass data to the API, you can construct the payload
#     payload = {
#         'param1': 'value1',
#         'param2': 'value2'
#     }

#     try:
#         response = requests.get(url, headers=headers, params=payload)  # Replace with the appropriate HTTP method

#         # Optional: If you expect JSON response, you can access the response content as a dictionary
#         response_data = response.json()

#         # Process the response data or perform any other actions based on the API call result
#         if response.status_code == 200:  # Assuming 200 indicates a successful API call
#             # Process the successful response
#             return JsonResponse({'data': response_data})  # Return the response data as JSON
#         else:
#             # Handle any errors or unexpected responses
#             return JsonResponse({'error': 'API call failed'})

#     except requests.exceptions.RequestException as e:
#         # Handle any exceptions or connection errors
#         return JsonResponse({'error': str(e)})
