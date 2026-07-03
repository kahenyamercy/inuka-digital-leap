from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Cohort, Fellow, Certification
from .serializers import (
    CohortSerializer, CohortListSerializer,
    FellowSerializer, FellowListSerializer,
    CertificationSerializer
)


class CohortViewSet(viewsets.ModelViewSet):
    queryset = Cohort.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'focus_area']
    ordering_fields = ['start_date', 'trainee_count']

    def get_serializer_class(self):
        if self.action == 'list':
            return CohortListSerializer
        return CohortSerializer


class FellowViewSet(viewsets.ModelViewSet):
    queryset = Fellow.objects.select_related('cohort').all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['full_name', 'county', 'specialization']
    ordering_fields = ['full_name', 'placement_status']

    def get_serializer_class(self):
        if self.action == 'list':
            return FellowListSerializer
        return FellowSerializer

    def get_queryset(self):
        queryset = Fellow.objects.select_related('cohort').all()
        cohort_id = self.request.query_params.get('cohort')
        is_featured = self.request.query_params.get('featured')
        if cohort_id:
            queryset = queryset.filter(cohort__id=cohort_id)
        if is_featured:
            queryset = queryset.filter(is_featured=True)
        return queryset


class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.select_related('fellow').all()
    permission_classes = [IsAuthenticatedOrReadOnly]
