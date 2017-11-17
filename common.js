$(document).ready(function () {

    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");
            $("#form").trigger("reset");
        });
        return false;
    });

});