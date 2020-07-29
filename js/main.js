/*função para scroll suave*/
(function($) {
    var $doc = $('html,body');
    $('.scroll-page').click(function() {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})(jQuery);

$(document).ready(function() {
    var btn_enviar = $(".btn-enviar");

    btn_enviar.on("click", function(e) {
        e.preventDefault();

        var dados = $("#formulario").serialize();

        $.ajax({
            url: "enviar-email.php",
            method: "POST",
            dataType: "HTML",
            data: dados
        }).done(function(retorno) {
            $("msg_retorno").html(alert(retorno));
            $("#formulario").trigger("reset");
        }).fail(function(retorno) {
            $("msg_retorno").html(alert(retorno));
        });
    });
});