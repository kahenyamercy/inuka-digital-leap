from rest_framework import serializers
from .models import Partner


class PartnerSerializer(serializers.ModelSerializer):
    focus_areas_list = serializers.ReadOnlyField()

    class Meta:
        model = Partner
        fields = '__all__'
