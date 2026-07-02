import uuid
from django.db import models
from cohorts.models import Cohort


class Activity(models.Model):
    ACTIVITY_TYPES = [
        ('lab', 'Lab Session'),
        ('masterclass', 'Masterclass'),
        ('field_demo', 'Field Demo'),
        ('attachment', 'Attachment'),
        ('workshop', 'Workshop'),
        ('graduation', 'Graduation'),
        ('other', 'Other'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cohort = models.ForeignKey(Cohort, on_delete=models.CASCADE, related_name='activities')
    title = models.CharField(max_length=255)
    description = models.TextField()
    activity_type = models.CharField(max_length=20, choices=ACTIVITY_TYPES, default='lab')
    activity_date = models.DateField()
    photo = models.ImageField(upload_to='activities/', blank=True, null=True)
    tag = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-activity_date']
        verbose_name_plural = 'Activities'

    def __str__(self):
        return self.title
