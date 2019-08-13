$(document).ready(function () {
    /// Data Tabke Js
    $('#clientsTable').DataTable(
        {
            dom: 'B<"clear">lfrtip',
            buttons:
            {
                name: 'primary',
                buttons: ['copy', 'excel', 'pdf']
            }
        }
    );
})

AOS.init({
    once: true,
});

// Alert Mesage Animation
setTimeout(function () {
    $('#my_custom_alert').removeClass('slideInDown')
    $('#my_custom_alert').addClass('slideOutUp')
}, 4000);


//// Validating the Contact Number
$('#id_contact_number').keyup(function () {
    var $contact_number = this.value;
    phonenumber($contact_number);
})
function phonenumber(inputtxt) {
    var phoneno = /^[0-9a-f]*$/i;
    if (!phoneno.test(inputtxt)) {
        $('#id_contact_number').css('border', 'solid 1px red');
        return false;
    }
    else {
        $('#id_contact_number').css('border', 'solid 1px green');
        return true;
    }
}
/// Get Number only


//myParaxify = paraxify('.banner-container');

// Ajax Section
$('.my_forms').submit(function (evnt) {
    evnt.preventDefault();

    var serialisedData = $(this).serialise();

    $.ajax({
        url: '',
        type: 'POST',
        data: serialisedData,
        success: function (response) {
            ///
            $('.my_forms')[0].reset();
        },
        error: function (response) {
            console.log(response)
        }

    });
});
