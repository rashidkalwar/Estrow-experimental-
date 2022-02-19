from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import UserManager


class User(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    photo = models.ImageField(upload_to='avatars/', null=True, blank=True)
    last_updated = models.DateTimeField(null=True, blank=True)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)


    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.username
    
    def save(self, *args, **kwargs):
        self.last_updated = timezone.now()
        super(User, self).save(*args, **kwargs)
