from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Activity
from .serializers import ActivitySerializer, ActivityListSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.select_related('cohort').all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'tag']
    ordering_fields = ['activity_date']

    def get_serializer_class(self):
        if self.action == 'list':
            return ActivityListSerializer
        return ActivitySerializer

    def get_queryset(self):
        queryset = Activity.objects.select_related('cohort').all()
        activity_type = self.request.query_params.get('type')
        cohort_id = self.request.query_params.get('cohort')
        if activity_type:
            queryset = queryset.filter(activity_type=activity_type)
        if cohort_id:
            queryset = queryset.filter(cohort__id=cohort_id)
        return queryset
