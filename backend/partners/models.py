import uuid
from django.db import models


class Partner(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    focus_areas = models.CharField(
        max_length=500,
        blank=True,
        help_text="Comma-separated list, e.g. Programme Funding, Industry Equipment, Youth Empowerment"
    )
    logo = models.ImageField(upload_to='partners/')
    website_url = models.URLField(blank=True)
    is_required_acknowledgement = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order']

    def __str__(self):
        return self.name

    @property
    def focus_areas_list(self):
        return [f.strip() for f in self.focus_areas.split(',') if f.strip()]
