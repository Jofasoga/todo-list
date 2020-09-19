from django.db import models

# Create your models here.

class Api(models.Model):
        name = models.CharField("Name", max_length=240)

        def __str__(self):
                return self.name