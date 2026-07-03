from rest_framework.routers import DefaultRouter
from .views import CohortViewSet, FellowViewSet, CertificationViewSet

router = DefaultRouter()
router.register(r'cohorts', CohortViewSet, basename='cohort')
router.register(r'fellows', FellowViewSet, basename='fellow')
router.register(r'certifications', CertificationViewSet, basename='certification')

urlpatterns = router.urls
