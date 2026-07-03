from rest_framework import serializers
from .models import Activity


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'


class ActivityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            'id', 'title', 'activity_type',
            'activity_date', 'tag', 'photo'
        ]
