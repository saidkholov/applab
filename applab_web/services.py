from django.http import HttpResponse
# Create your views here.

def index(request):
	print request.body
	return HttpResponse();
