<?php

require ("code.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="mystyle.css">
</head>

<body>

<h2>File Upload & Image Preview</h2>
<p class="lead">No Plugins <b>Just Javascript</b></p>

<!-- Upload  -->
<form  action="code.php" method="post" enctype="multipart/form-data"   class="uploader">
  <input id="file-upload" type="file" name="files[]" multiple>
   
  <label for="file-upload" id="file-drag">
    <img id="file-image" src="#" alt="Preview" class="hidden">
    <div id="start">
      <i class="fa fa-download" aria-hidden="true"></i>
      <div>Select files or drag here</div>
      <div id="notimage" class="hidden">Please select valid images</div>
      <span id="file-upload-btn" class="btn btn-primary">Select files</span>
      <input type="submit" />
    </div>
    <div id="response" class="hidden">
      <div id="messages"></div>
      <progress class="progress" id="file-progress" value="0">
        <span>0</span>%
      </progress>
    </div>
  </label>
  <div class="alert alert-primary" role="alert">
 
</div>
</form>
</body>


</html>
