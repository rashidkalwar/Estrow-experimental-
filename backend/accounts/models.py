from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import UserManager


class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    photo = models.ImageField(upload_to='avatars/', null=True, blank=True)
    last_updated = models.DateTimeField(null=True, blank=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        self.last_updated = timezone.now()
        super(User, self).save(*args, **kwargs)
