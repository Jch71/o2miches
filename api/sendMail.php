<?php

// Email address verification
function isEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the message
    $emailTo = 'bonnard.jc@hotmail.fr';

    $name = addslashes(trim($_POST['name']));
    $clientEmail = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $array = array('nameMessage' => '', 'emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '');

    if($name == '') {
        $array['nameMessage'] = 'Le nom est vide !';
    }
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Email invalide !';
    }
    if($subject == '') {
        $array['subjectMessage'] = 'Le sujet est vide !';
    }
    if($message == '') {
        $array['messageMessage'] = 'Le message est vide !';
    }
    if($name != '' && isEmail($clientEmail) && $subject != '' && $message != '') {      
        // Send email
        $message = "Message de: " . $name . "(" .  $clientEmail . ")" . "\r\n" . $message;
        $headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
        $headers .= "Content-Type: text/html; charset=UTF-8\n";
        mail($emailTo, $subject . " (contact via le site)", $message, $headers);
    }

    echo json_encode($array);

}

?>