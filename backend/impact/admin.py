from django.contrib import admin
from .models import Metric


@admin.register(Metric)
class MetricAdmin(admin.ModelAdmin):
    list_display = ['label', 'value', 'unit', 'sort_order', 'updated_at']
    search_fields = ['label', 'key']
