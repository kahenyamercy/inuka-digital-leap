from django.contrib import admin
from .models import Activity


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ['title', 'cohort', 'activity_type', 'activity_date', 'tag']
    list_filter = ['activity_type', 'cohort']
    search_fields = ['title', 'description', 'tag']
    date_hierarchy = 'activity_date'
