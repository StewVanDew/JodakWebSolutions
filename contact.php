<?php
/**
 * Created by IntelliJ IDEA.
 * User: Dakota
 * Date: 5/1/2015
 * Time: 9:28 PM
 */

$name = $_POST['FirstName'];
$email = $_POST['Email'];
$subject = $_POST['Subject'];
$message = $_POST['Message'];

$headers = 'From:' . $Email . "\r\n";
$headers .= 'Content-Type: text/html; charset=ISO-8859-1\r\n';

$formContent = '<html><body>';
$formContent .= "<p>From: " . $name . "<br />Email: " . $email . "</p><hr /><p>" . $message . "</p>";
$formContent .= '</body></html>';

mail('Josh@Jodakwebsolutions.com', $subject, $formContent, $headers) or die('Error! Email Failed to Send!');

//Recipient Email
$recipientHeaders = 'From:no-reply@JodakWebSolutions.com' . "\r\n";
mail($email, 'Contact Message Relieved', "Thank you for contacting us!\r\nWe'll try respond back to your message within 72hrs.", $recipientHeaders);

header("Location: http://jodakwebsolutions.com/site/");