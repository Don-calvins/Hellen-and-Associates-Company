<!DOCTYPE html>
<html lang="en">
<head> 
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us | Hellen Global Consultants</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    /* Form status styles */
    .form-status {
      margin-top: 20px;
      padding: 15px;
      border-radius: 8px;
      display: none;
      text-align: center;
      font-weight: 500;
    }
    
    .form-status.success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      display: block;
    }
    
    .form-status.error {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      display: block;
    }
    
    .form-status.loading {
      background: #fff3cd;
      color: #856404;
      border: 1px solid #ffeeba;
      display: block;
    }
    
    .btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  </style>
</head>
<body>

<?php
// Process the form when submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get and clean form data
    $firstName = strip_tags(trim($_POST['firstName']));
    $lastName = strip_tags(trim($_POST['lastName']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $service = strip_tags(trim($_POST['service']));
    $message = strip_tags(trim($_POST['message']));
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $formStatus = "error";
        $formMessage = "Please enter a valid email address.";
    } 
    // Check required fields
    elseif (empty($firstName) || empty($lastName) || empty($service) || empty($message)) {
        $formStatus = "error";
        $formMessage = "Please fill in all required fields.";
    } 
    else {
        // Email details
        $to = "info@hellenglobalconsultants.co.ke";
        $subject = "New Contact Form: $service";
        
        // Email content
        $emailContent = "You have received a new message from your website contact form.\n\n";
        $emailContent .= "Name: $firstName $lastName\n";
        $emailContent .= "Email: $email\n";
        $emailContent .= "Service Interested In: $service\n\n";
        $emailContent .= "Message:\n$message\n";
        
        // Email headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Send email
        if (mail($to, $subject, $emailContent, $headers)) {
            $formStatus = "success";
            $formMessage = "✓ Thank you! Your message has been sent successfully.";
        } else {
            $formStatus = "error";
            $formMessage = "Oops! Something went wrong. Please try again or email us directly at info@hellenglobalconsultants.co.ke";
        }
    }
}
?>

  <header class="navbar">
    <div class="container nav-wrap">
      <a href="index.html" class="brand"> Hellen <span> Global Consultants </span></a>

      <nav class="nav-links" id="navLinks">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="contact.php" class="active">Contact</a>
      </nav>

      <div class="menu-btn" onclick="toggleMenu()">☰</div>
    </div>
  </header>

  <!-- Page Header -->
  <section class="page-header" style="background: linear-gradient(135deg, var(--navy) 0%, #1d4ed8 100%); color: white; padding: 60px 0; text-align: center;">
    <div class="container">
      <h1 style="font-size: 48px; margin-bottom: 16px;">Get In Touch</h1>
      <p style="font-size: 18px; max-width: 700px; margin: 0 auto; opacity: 0.9;">We're here to help with all your financial and compliance needs</p>
    </div>
  </section>

  <!-- Contact Info & Form -->
  <section class="section">
    <div class="container">
      
      <!-- Quick Contact Cards -->
      <div class="grid-3" style="margin-bottom: 40px;">
        <div class="card" style="text-align: center;">
          <div style="font-size: 32px; margin-bottom: 16px;">📍</div>
          <h3>Visit Us</h3>
          <p style="color: var(--muted);">Nairobi, Kenya</p>
          <p style="color: var(--muted);">Working Days: Mon-Fri</p>
        </div>

        <div class="card" style="text-align: center;">
          <div style="font-size: 32px; margin-bottom: 16px;">📧</div>
          <h3>Email Us</h3>
          <p style="color: var(--muted);">info@hellenglobalconsultants.co.ke</p>
          <p style="color: var(--muted);">24/7 Support</p>
        </div>

        <div class="card" style="text-align: center;">
          <div style="font-size: 32px; margin-bottom: 16px;">📞</div>
          <h3>Call Us</h3>
          <p style="color: var(--muted);">+254 702 401 751</p>
          <p style="color: var(--muted);">Mon-Fri, 8am-6pm</p>
        </div>
      </div>

      <!-- Main Contact Area -->
      <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 30px;">
        <!-- Additional Info Card -->
        <div class="card" style="background: var(--soft);">
          <h3 style="color: var(--navy); margin-bottom: 20px;">Why Contact Us?</h3>
          
          <div style="margin-bottom: 25px;">
            <h4 style="color: var(--navy); margin-bottom: 8px;">✓ Quick Response</h4>
            <p style="color: var(--muted);">We reply within 24 hours on business days</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h4 style="color: var(--navy); margin-bottom: 8px;">✓ Expert Advice</h4>
            <p style="color: var(--muted);">Get professional guidance from certified accountants</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h4 style="color: var(--navy); margin-bottom: 8px;">✓ Free Initial Consultation</h4>
            <p style="color: var(--muted);">First consultation on us - no obligation</p>
          </div>

          <hr style="border: 1px solid var(--border); margin: 25px 0;" />

          <h3 style="color: var(--navy); margin-bottom: 15px;">Connect With Us</h3>
          <div style="display: flex; gap: 15px;">
            <a href="https://wa.me/254702401751" target="_blank" style="background: #25D366; color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
              <span>📱</span> WhatsApp
            </a>
            <a href="mailto:info@hellenglobalconsultants.co.ke" style="background: var(--navy); color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
              <span>✉️</span> Email
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card">
          <h3 style="color: var(--navy); margin-bottom: 25px;">Send us a Message</h3>
          
          <?php if (isset($formStatus)): ?>
            <div class="form-status <?php echo $formStatus; ?>">
              <?php echo $formMessage; ?>
            </div>
          <?php endif; ?>
          
          <form id="contactForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <input type="text" placeholder="First Name" id="firstName" name="firstName" value="<?php echo isset($_POST['firstName']) ? htmlspecialchars($_POST['firstName']) : ''; ?>" required />
              <input type="text" placeholder="Last Name" id="lastName" name="lastName" value="<?php echo isset($_POST['lastName']) ? htmlspecialchars($_POST['lastName']) : ''; ?>" required />
            </div>
            
            <input type="email" placeholder="Email Address" id="email" name="email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>" required />
            
            <select id="service" name="service" required>
              <option value="">Select Service Interested In</option>
              <option value="Corporate Tax Filing" <?php echo (isset($_POST['service']) && $_POST['service'] == 'Corporate Tax Filing') ? 'selected' : ''; ?>>Corporate Tax Filing</option>
              <option value="Payroll Support" <?php echo (isset($_POST['service']) && $_POST['service'] == 'Payroll Support') ? 'selected' : ''; ?>>Payroll Support</option>
              <option value="Accounting Support" <?php echo (isset($_POST['service']) && $_POST['service'] == 'Accounting Support') ? 'selected' : ''; ?>>Accounting Support</option>
              <option value="eTIMS Support" <?php echo (isset($_POST['service']) && $_POST['service'] == 'eTIMS Support') ? 'selected' : ''; ?>>eTIMS Support</option>
              <option value="Business Registration" <?php echo (isset($_POST['service']) && $_POST['service'] == 'Business Registration') ? 'selected' : ''; ?>>Business Registration</option>
              <option value="Money Market Advisory" <?php echo (isset($_POST['service']) && $_POST['service'] == 'Money Market Advisory') ? 'selected' : ''; ?>>Money Market Advisory</option>
              <option value="Other" <?php echo (isset($_POST['service']) && $_POST['service'] == 'Other') ? 'selected' : ''; ?>>Other</option>
            </select>
            
            <textarea placeholder="Your Message" id="message" name="message" rows="5" required><?php echo isset($_POST['message']) ? htmlspecialchars($_POST['message']) : ''; ?></textarea>
            
            <div style="display: flex; gap: 12px; align-items: center;">
              <button class="btn primary" type="submit" id="submitBtn" style="background: var(--gold); color: var(--navy);">Send Message</button>
              <button class="btn outline" type="reset">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section" style="background: var(--soft);">
    <div class="container">
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers to common questions</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div class="card">
          <h4 style="color: var(--navy); margin-bottom: 10px;">How quickly do you respond?</h4>
          <p style="color: var(--muted);">We typically respond within 24 hours during business days.</p>
        </div>

        <div class="card">
          <h4 style="color: var(--navy); margin-bottom: 10px;">Do you offer remote consultations?</h4>
          <p style="color: var(--muted);">Yes, we offer consultations via phone, video call, or email.</p>
        </div>

        <div class="card">
          <h4 style="color: var(--navy); margin-bottom: 10px;">What are your office hours?</h4>
          <p style="color: var(--muted);">Monday to Friday, 8:00 AM - 6:00 PM (East Africa Time).</p>
        </div>

        <div class="card">
          <h4 style="color: var(--navy); margin-bottom: 10px;">Is the first consultation free?</h4>
          <p style="color: var(--muted);">Yes, we offer a free initial consultation to understand your needs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section cta">
    <div class="container cta-wrap">
      <div>
        <h2>Prefer to talk now?</h2>
        <p>Send a WhatsApp message for immediate assistance.</p>
      </div>
      <div class="btn-row">
        <a href="https://wa.me/254702401751" target="_blank" class="btn outline" style="border-color: var(--gold); color: var(--navy); background: white;">WhatsApp Us</a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h3>Hellen Global Consultants</h3>
        <p>
          Reliable financial services for tax compliance, payroll support, accounting, business registration,
          and investment advisory.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <p><a href="index.html">Home</a></p>
        <p><a href="about.html">About</a></p>
        <p><a href="services.html">Services</a></p>
        <p><a href="contact.php">Contact</a></p>
      </div>

      <div>
        <h3>Contact</h3>
        <p>Nairobi, Kenya</p>
        <p>Email: info@hellenglobalconsultants.co.ke</p>
        <p>Phone: +254 702 401 751</p>
      </div>
    </div>

    <div class="container copy">
      © <span id="year"></span> Hellen Global Consultants(H.G.C). All rights reserved.
    </div>
  </footer>

  <script src="script.js"></script>
  
  <script>
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

</body>
</html>
