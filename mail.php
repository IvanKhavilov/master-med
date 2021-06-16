<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['tel'];

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mastermedcomua@gmail.com';         // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '';                    // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mastermedcomua@gmail.com');            // от кого будет уходить письмо?
$mail->addAddress('mastermedcomua@gmail.com');         // Кому будет уходить письмо 
$mail->isHTML(true);                                   // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = $name . ' оставил заявку, его телефон ' .$phone;

if(!$mail->send()) {
    echo false;
} else {
    echo true;
}

?>
