from django import forms
from .models import Clients


#  creating a form from the model
class ClientsForm(forms.ModelForm):
    class Meta:
        model = Clients
        fields = ["client_name", "contact_person", "contact_number"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["client_name"].label = ''
        self.fields["client_name"].widget.attrs["placeholder"] = "Client Name"
        self.fields["contact_person"].label = ''
        self.fields["contact_person"].widget.attrs["placeholder"] = "Contact Person"
        self.fields["contact_number"].label = ''
        self.fields["contact_number"].widget.attrs["placeholder"] = "Contact Number"
        self.fields["contact_number"].widget.attrs["type"] = "number"


# class ClientsForm(forms.Form):
#     client_name = forms.CharField(widget=forms.TextInput(
#         attrs={
#             'placeholder': 'Client Name',
#             'type': 'text',
#             'label': '',
#         }
#     ), max_length=100, required=True)

#     contact_person = forms.CharField(widget=forms.TextInput(
#         attrs={
#             'placeholder': "Contact Person",
#             'type': 'text',
#             'lable': '',
#         }
#     ), max_length=100, required=True)

#     contact_number = forms.CharField(widget=forms.TextInput(
#         attrs={
#             'placeholder': "Contact Number",
#             'type': 'tel',
#             'label': ''
#         }
#     ), max_length=100, required=True)
