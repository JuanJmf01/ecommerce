from django.urls import path, include
from rest_framework import routers
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView

router = routers.DefaultRouter()
# Agrega tus rutas con router.register()
from rest_framework.routers import DefaultRouter
from .views import StoreView

router = DefaultRouter()
router.register(r'stores', StoreView)

urlpatterns = [
    path('api/', include(router.urls)),
]


urlpatterns = [
    path('api/', include(router.urls)),  # Incluye las URL generadas por el router
    path('api/register/', RegisterView.as_view(), name='rest_register'),
    path('api/login/', LoginView.as_view(), name='rest_login'),
    path('api/logout/', LogoutView.as_view(), name='rest_logout'),
    path('api/user/', UserDetailsView.as_view(), name='rest_user_details'),
]
