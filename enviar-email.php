<?php

if(isset($_POST['email']) && !empty($_POST['email']))

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

$to = "contato@mauricioarchiza.com.br";
$subject = $assunto;
$body = "Nome: ".$nome. "\r\n".
        "Telefone: ".$telefone. "\r\n".
        $mensagem; 
$header = "From: contato@mauricioarchiza.com.br"."\r\n".
        "Reply-To:"$email."\r\n".
        "X=Mailer:PHP".phpversion();

$status = mail($to, mb_encode_mimeheader($subjet, "utf-8"), $body, $header);

if($status):
    ?>
        <script>
            Materialize.toast('E-mail enviado com sucesso!', 4000);
            history.go(-1);
        </script>
    <?php    
else:
    ?>
        <script>
            Materialize.toast('E-mail não pode ser enviado.', 4000);
            history.go(-1);
        </script>
    <?php  
endif;    
        
?>