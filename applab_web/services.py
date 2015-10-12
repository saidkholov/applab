from django.http import HttpResponse
from django.core.mail import mail_admins, send_mail
from .models import Quote, User
from django.contrib.auth.models import User as Admin

def index(request):
	if request.method == 'POST':
		# Save User
		user = User(
			name = request.POST['name'],
			email = request.POST['email'],
			phone = request.POST['phone'],
		)
		user.save()
		# Save Quote
		quote = Quote(
			file = request.FILES['file'], 
			user_id = user.id, 
			project_type = request.POST['type'],
			project_link = request.POST['appLink'],
			summary = request.POST['summary'],
		)
		quote.save()

		admins = Admin.objects.values_list('email', flat=True)
		message = "A new request for " + quote.project_type + " project has been received. Please go to http://applab.co.nz/admin for more information."
		send_mail('New Applab Quote', message, 'skholov2@gmail.com', admins, fail_silently=False)
		
	return HttpResponse();
