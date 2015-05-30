from django.contrib import admin
from . import models

admin.site.register(models.Project)
admin.site.register(models.Member)
admin.site.register(models.Relation)
admin.site.register(models.Post)
