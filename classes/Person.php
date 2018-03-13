<?php

abstract class Person {
    use Namer;

    private $firstName = "";
    private $lastName = "";

    public function setName( $firstName, $lastName ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function getName() {
        return "$this->firstName $this->lastName";
    }

    abstract public function showWelcomeMessage();
}
