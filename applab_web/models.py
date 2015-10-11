from django.db import models
	
class User(models.Model):
	name = models.CharField(max_length=200)
	phone = models.CharField(max_length=200)
	email = models.CharField(max_length=200)
	date_created = models.DateTimeField(auto_now_add=True, blank=True)

class Quote(models.Model):

	types = (
	    ('android', 'Android'),
	    ('ios', 'IOS'),
	    ('web', 'Web'),
	)

	user = models.ForeignKey('User')
	project_type = models.CharField(max_length=50, choices=types, default='web')
	project_link = models.URLField(max_length=200,blank=True)
	file = models.FileField(upload_to='uploads/', null=True)
	summary = models.TextField(blank=True)
	date_created = models.DateTimeField(auto_now_add=True, blank=True, null=True)
