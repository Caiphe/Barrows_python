from django.urls import path, include
from . import views
from .views import (
    ClientsListView,
    ClientsUpdateView,
    ClientDeleteView,
    LogProject,
    ProjectDeleteView,
    ProjectUpdateView,
    GetLoggedProjects,
)

urlpatterns = [
    path('', views.home, name="home-page"),
    path('clients/new/', views.new_client, name="new-client"),
    path('clients/<int:pk>/update',
         ClientsUpdateView.as_view(), name="client-update"),
    path('clients/<int:pk>/delete',
         ClientDeleteView.as_view(), name="client-delete"),
    path('clients/project/<int:pk>/update',
         ProjectUpdateView.as_view(), name="project-update"),
    path('clients/project/<int:pk>/delete',
         ProjectDeleteView.as_view(), name="project-delete"),
    path('clients/', views.OurClients, name="clients"),
    path('logged-projects/', views.GetLoggedProjects, name="projects-list"),
    path('clients/projects/', LogProject.as_view(), name="log-project"),
]
