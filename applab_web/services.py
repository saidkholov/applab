from django.http import HttpResponse
from django.core.mail import mail_admins
from .models import Quote, User

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

		message = "A new request for " + quote.project_type + " project has been received. Please go to http://applab.co.nz/admin for more information."
		mail_admins("New Applab Quote", message, "web_client@theapplab.co.nz")
		
	return HttpResponse();
