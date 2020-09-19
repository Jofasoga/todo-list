from django.urls import path, include
from django.contrib.auth.models import User
from .models import Api
from rest_framework import routers, serializers, viewsets
from . import views
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Api
        fields = ['email', ]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'list', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
