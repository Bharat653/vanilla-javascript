<?php

class UploadTask
{

    private $files;
    private $allowedTypes = ["image/jpeg", "image/png", "image/pdf"];
    private $allowedSize =  "50000";

    public function __construct($files)
    {
        $this->files = $files;
    }

    public function upload()
    {
        $this->checkType();
        $this->checkSize();
        for ($i = 0; $i < count($this->files['name']); $i++) {
            $file_name = $this->files['name'][$i];
            $file_tmp = $this->files['tmp_name'][$i];

            move_uploaded_file($file_tmp, "upload-images/" . $file_name);
        }
    }

    public function checkType()
    {
        for ($i = 0; $i < count($this->files['type']); $i++) {
            $file_type = $this->files['type'][$i];
            if (!in_array($file_type, $this->allowedTypes)) {
                echo "File type not allowed";
                exit();
            }
        }
    }

    public function checkSize()
    {
        for ($i = 0; $i < count($this->files['type']); $i++) {
            $file_size = $this->files['size'][$i];
            if ($file_size > $this->allowedSize) {
                echo "File Size greater than Allowed Size";
                exit();
            }
        }
    }
}


?>

<!-- // $file_size = $file_array['size'][$i]; -->