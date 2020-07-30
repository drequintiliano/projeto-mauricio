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

$(document).ready(() => {
    $('#btn-enviar').on('click', (e) => {
        e.preventDefault();

        var dados = $('#formulario').serialize();
        var email = $('#email').val();
        var mensagem = $('#mensagem').val();

        if (email.length <= 5 && mensagem.length <= 5) {

            $('#toast-place').append(`
            <div class="toast-validar bg-danger arredondada opacidade" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
                <div class="toast-header">                                     
                    <button type="button" class="ml-2 mb-1 close py-2 mr-2" data-dismiss="toast" aria-label="Fechar">
                        &times;
                    </button>               
                </div>
                <div class="toast-body">
                    <p class="py-2 ml-2"><strong>Insira um e-mail e uma mensagem ao menos!</strong></p>
                </div>
            </div>
            `)

            $('.toast-validar').toast('show');
            $('.toast-validar').on('hidden.bs.toast', function(event) {
                $(event.currentTarget).remove();
            });
            return false;
        };

        $.ajax({
            url: "enviar-email.php",
            method: "POST",
            dataType: "HTML",
            data: dados
        }).done((retorno) => {

            $('#toast-place').append(`
            <div class="toast-email bg-success arredondada opacidade" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
                <div class="toast-header">                                     
                    <button type="button" class="ml-2 mb-1 close py-2 mr-2" data-dismiss="toast" aria-label="Fechar">
                        &times;
                    </button>              
                </div>
                <div class="toast-body">
                    <p class="py-2 ml-2"><strong>E-mail enviado com sucesso!</strong></p>
                </div>
            </div>
            `)

            $(".toast-email").toast('show');
            $('.toast-validar').on('hidden.bs.toast', function(event) {
                $(event.currentTarget).remove();
            });
            $("#formulario").trigger("reset");
        }).fail((retorno) => {
            $("#formulario").html(alert(retorno));
        });
    });
});