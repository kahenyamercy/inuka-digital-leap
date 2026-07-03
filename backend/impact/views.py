from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Metric
from .serializers import MetricSerializer


class MetricViewSet(viewsets.ModelViewSet):
    queryset = Metric.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
