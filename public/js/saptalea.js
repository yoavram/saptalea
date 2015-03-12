// order buttons
$('.btn-order').click(function() {
    $('#orderFormModal').modal('show');
    $('#orderFormModal #product').val(this.getAttribute('product'));
    $('#orderFormModal #name').focus();
});

//callback handler for form submit
$("form").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) 
        {
            $('#formSuccessModal').modal('toggle');
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            $('#formFailureModal').modal('toggle');
        }
    });
    e.preventDefault(); //STOP default action
    //e.unbind(); //unbind. to stop multiple form submit.
});
