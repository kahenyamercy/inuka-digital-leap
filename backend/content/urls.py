from rest_framework.routers import DefaultRouter
from .views import PostViewSet, GalleryItemViewSet, SiteSettingViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'gallery', GalleryItemViewSet, basename='galleryitem')
router.register(r'settings', SiteSettingViewSet, basename='sitesetting')

urlpatterns = router.urls
