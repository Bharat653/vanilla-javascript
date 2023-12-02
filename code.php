<?php
require("function.php");

if ($_SERVER['REQUEST_METHOD']=='POST' && isset($_FILES['files']["name"])) {
    // $file_array = $_FILES['files'];

    $obj = new uploadtask($_FILES['files']);
    $obj->upload();
    return header("location:index.php");


} else{
    //  echo   "first slect file";
}
    

