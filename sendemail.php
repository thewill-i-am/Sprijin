<?php  
  
  //Email information
  $admin_email = "wil-19-60@live.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['message'];
  echo $admin_email;


  
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  
  ?>