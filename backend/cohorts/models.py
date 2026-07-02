import uuid
from django.db import models


class Cohort(models.Model):
    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('active', 'Active'),
        ('completed', 'Completed'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    focus_area = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    trainee_count = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return self.name


class Fellow(models.Model):
    PLACEMENT_CHOICES = [
        ('in_training', 'In Training'),
        ('attachment', 'On Attachment'),
        ('employed', 'Employed'),
        ('self_employed', 'Self Employed'),
        ('seeking', 'Seeking Placement'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cohort = models.ForeignKey(Cohort, on_delete=models.CASCADE, related_name='fellows')
    full_name = models.CharField(max_length=255)
    county = models.CharField(max_length=100)
    education_background = models.CharField(max_length=255)
    technical_interest = models.CharField(max_length=255)
    specialization = models.CharField(max_length=255)
    bio = models.TextField()
    quote = models.CharField(max_length=500, blank=True)
    placement_status = models.CharField(max_length=20, choices=PLACEMENT_CHOICES, default='in_training')
    portfolio_url = models.URLField(blank=True)
    photo = models.ImageField(upload_to='fellows/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['full_name']

    def __str__(self):
        return self.full_name


class Certification(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fellow = models.ForeignKey(Fellow, on_delete=models.CASCADE, related_name='certifications')
    name = models.CharField(max_length=255)
    issuing_body = models.CharField(max_length=255)
    awarded_date = models.DateField(blank=True, null=True)
    badge = models.ImageField(upload_to='certifications/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.fellow.full_name}"
