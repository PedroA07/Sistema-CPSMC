$(document).ready(function() {
    $('input:radio[name="custom_field[account][1]"]').on("change", function() {
        if (this.checked && this.value == '0') {
            $("#input-custom-field1, #input-custom-field2").show();
            $("#input-custom-field3, #input-custom-field4, #input-custom-field5, #input-custom-field6").hide();
        } if (this.checked && this.value == '1') {
            $("#input-custom-field3, #input-custom-field4").show();
            $("#input-custom-field1, #input-custom-field2, #input-custom-field5, #input-custom-field6").hide();
        } else {
            $("#input-custom-field5, #input-custom-field6").show();
            $("#input-custom-field1, #input-custom-field2, #input-custom-field3, #input-custom-field4").hide();
        }
    });
});