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
        // $('#id_contact_number').css('border', 'solid 1px green');
        return true;
    }
}
/// Get Number only


//myParaxify = paraxify('.banner-container');

// Ajax Section
$(document).ready(function () {
    $('.my_forms').submit(function (evnt) {
        evnt.preventDefault();

        var serialisedData = $(this).serialise();

        $.ajax({
            //url: '{% url "new-client" %}',
            url: window.location.pathname,
            type: 'POST',
            data: serialisedData,
            success: function (response) {
                /// reset the form and get the response
                $('.my_forms')[0].reset();
                console.log('response')
            },
            error: function (response) {
                console.log(response)
            }
        });
    });

    console.log(window.location.pathname)

    /// Delete Ajax 
    $(".delete_forms").submit(function (envt) {
        envt.preventDefault();
        var id = $(this).attr('id');
        $.ajax({
            //url: '{% url "" %}',
            url: window.location.pathname,
            type: 'POST',
            data: { 'id': id },
            success: function (response) {
                console.log('Record Deleted')
            }
        })
    })

});
