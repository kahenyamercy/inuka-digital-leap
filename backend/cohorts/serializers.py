from rest_framework import serializers
from .models import Cohort, Fellow, Certification


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'


class FellowSerializer(serializers.ModelSerializer):
    certifications = CertificationSerializer(many=True, read_only=True)

    class Meta:
        model = Fellow
        fields = '__all__'


class FellowListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fellow
        fields = [
            'id', 'full_name', 'county', 'specialization',
            'technical_interest', 'placement_status',
            'photo', 'is_featured', 'quote'
        ]


class CohortSerializer(serializers.ModelSerializer):
    fellows = FellowListSerializer(many=True, read_only=True)

    class Meta:
        model = Cohort
        fields = '__all__'


class CohortListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cohort
        fields = [
            'id', 'name', 'focus_area',
            'status', 'start_date', 'end_date', 'trainee_count'
        ]
