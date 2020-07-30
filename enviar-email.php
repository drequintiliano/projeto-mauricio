<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

$to = "contato@mauricioarchiza.com.br";
$subject = $assunto;
$body = "Nome: ".$nome."\r\n".
        "Telefone: ".$telefone. "\r\n"."\r\n".
        $mensagem;
$header = "From:contato@mauricioarchiza.com.br"."\r\n".
    "Reply-To:".$email."\r\n".
    "X=Mailer:PHP/".phpversion();

$retorno = mail($to, $subject, $body, $header);    

if($retorno){
    echo 'Email enviado com sucesso!';      
} else {          
    echo 'Falha ao enviar e-mail.';
}
?>