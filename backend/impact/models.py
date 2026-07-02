import uuid
from django.db import models


class Metric(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    key = models.CharField(max_length=100, unique=True)
    label = models.CharField(max_length=255)
    value = models.CharField(max_length=100)
    unit = models.CharField(max_length=50, blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return self.label
