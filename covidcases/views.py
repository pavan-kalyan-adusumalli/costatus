from django.shortcuts import render
from django.http import HttpResponse

import requests
import json

# Create your views here.
def index(request):
    # data = requests.get("https://api.covid19api.com/summary")
    # data = data.json()
    # cases_list = []
    # for eachcountry in data['Countries']:
    #     cases_list.append((eachcountry['Country'], eachcountry['TotalConfirmed']))
    # print(cases_list[:10])
    return render(request, 'covidcases/home.html')