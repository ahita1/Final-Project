from django.db import models
# In your models.py file
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


# Define choices for the role field
ROLE_CHOICES = [
    ('fixed', 'Fixed'),
    ('non_fixed', 'Non-Fixed'),
    ('storeman', 'Storeman'),
    ('mmd', 'Mmd'),
    ('otherdir', 'Otherdir'),
]

class CustomUser(AbstractUser):
    # Define additional fields
    user_id = models.CharField(max_length=100, unique=True)
    
    # Reference the choices for the role field
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username



class PersonalInfoTable(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    sex = models.IntegerField()
    date = models.DateField(default=timezone.now)  # Set default value to current date
    region = models.CharField(max_length=255)
    sub_city = models.CharField(max_length=255)
    woreda = models.CharField(max_length=255)
    home_no = models.CharField(max_length=255)
    birth_place = models.CharField(max_length=255)
    birth_date = models.DateField()
    occupation = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=255)
    warrantor = models.CharField(max_length=255)

    def __str__(self):
        return self.name