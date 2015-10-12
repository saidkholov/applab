from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):

    def handle(self, *args, **options):
        if not User.objects.filter(username="applab_user").exists():
            User.objects.create_superuser("applab_user", "skholov2@gmail.com", "22445577")