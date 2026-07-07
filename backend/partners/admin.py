from django.contrib import admin
from .models import Partner


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'is_required_acknowledgement', 'sort_order']
    list_filter = ['is_required_acknowledgement']
    search_fields = ['name', 'role']
    fields = ['name', 'role', 'description', 'focus_areas', 'logo', 'website_url', 'is_required_acknowledgement', 'sort_order']
