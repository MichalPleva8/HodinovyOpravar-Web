<?php
/**
 * Contact Form Handler - Hodinový opravár
 *
 * Handles POST requests from the contact form
 * Validates input and sends email notifications
 */

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Povolená je len POST metóda'
    ]);
    exit();
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate JSON parsing
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Neplatný formát dát'
    ]);
    exit();
}

// Required fields
$requiredFields = ['name', 'email', 'phone', 'message'];
$errors = [];

// Validate required fields
foreach ($requiredFields as $field) {
    if (!isset($data[$field]) || empty(trim($data[$field]))) {
        $errors[] = "Pole '$field' je povinné";
    }
}

// Validate email format
if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Neplatný formát emailu';
}

// Validate phone number (basic check)
if (isset($data['phone']) && !preg_match('/^[\d\s\+\-\(\)]+$/', $data['phone'])) {
    $errors[] = 'Neplatný formát telefónneho čísla';
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Chyba validácie',
        'errors' => $errors
    ]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone']));
$message = htmlspecialchars(trim($data['message']));

// Email configuration
$toEmail = 'synakroman1@gmail.com';
$subject = 'Nová správa z kontaktného formulára - Hodinový opravár';

// Email body
$emailBody = "
Nová správa z kontaktného formulára

Meno: $name
Email: $email
Telefón: $phone

Správa:
$message

---
Odoslané: " . date('d.m.Y H:i:s') . "
IP adresa: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = [
    'From: noreply@hodinovyopravar.sk',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// Attempt to send email
$mailSent = mail($toEmail, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Správa bola úspešne odoslaná'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Chyba pri odosielaní správy. Skúste to prosím znova neskôr.'
    ]);
}
