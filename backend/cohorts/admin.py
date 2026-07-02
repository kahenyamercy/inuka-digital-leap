from django.contrib import admin
from .models import Cohort, Fellow, Certification


class FellowInline(admin.TabularInline):
    model = Fellow
    extra = 0
    fields = ['full_name', 'county', 'specialization', 'placement_status', 'is_featured']


class CertificationInline(admin.TabularInline):
    model = Certification
    extra = 0


@admin.register(Cohort)
class CohortAdmin(admin.ModelAdmin):
    list_display = ['name', 'focus_area', 'status', 'start_date', 'end_date', 'trainee_count']
    list_filter = ['status']
    search_fields = ['name', 'focus_area']
    inlines = [FellowInline]


@admin.register(Fellow)
class FellowAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'cohort', 'county', 'specialization', 'placement_status', 'is_featured']
    list_filter = ['placement_status', 'is_featured', 'cohort']
    search_fields = ['full_name', 'county', 'specialization']
    inlines = [CertificationInline]


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'fellow', 'issuing_body', 'awarded_date']
    search_fields = ['name', 'fellow__full_name']
