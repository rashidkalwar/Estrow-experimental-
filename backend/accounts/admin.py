from django.contrib import admin

from .models import User
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = (
        "email",
        "first_name",
        "last_name",
        "is_superuser",
        "is_staff",
        "is_active",
        "date_joined",
        "last_login",
        "last_updated",)

    list_filter = (
        "email",
        "first_name",
        "last_name",
        "is_superuser",
        "is_staff",
        "is_active",
        "date_joined",
        "last_login",
        "last_updated",)
    search_fields = ('email',)


admin.site.register(User, UserAdmin)