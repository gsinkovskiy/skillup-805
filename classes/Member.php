<?php

class Member extends Person {

    public function showWelcomeMessage() {
        echo "Hi " . $this->getName() . ", welcome to the forums!<br>";
    }

    public function newTopic( $subject ) {
        echo "Creating new topic: $subject<br>";
    }
}
