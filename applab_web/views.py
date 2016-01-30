from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.

def index(request):
	return render(request, 'applab_web/index.html')

def startYourProject(request):
	context = {'type': request.GET['type'], 'what': request.GET['what']}
	return render(request, 'applab_web/startYourProject.html', context)

def howItWorks(request):
	return render(request, 'applab_web/howItWorks.html')
