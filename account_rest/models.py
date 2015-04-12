from django.db import models
from django.contrib.auth.models import User


class UserInfo(models.Model):
    ROLE_TYPES = (
        ('ENT', 'Enterpriser'),
        ('INV', 'Investor'),
    )
    
    real_name = models.CharField(max_length=40)
    tele = models.CharField(max_length=40)
    role = models.CharField(max_length=3,
        choices=ROLE_TYPES)
    user = models.OneToOneField('auth.User', related_name='info')

