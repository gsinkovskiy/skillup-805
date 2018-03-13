<?php

class Member
{
    public $username = "";
    private $loggedIn = false;

    public function login() {
        $this->loggedIn = true;
    }

    public function logout() {
        $this->loggedIn = false;
    }

    public function isLoggedIn() {
        return $this->loggedIn;
    }

    public function __sleep() {
        echo "Cleaning up the object...<br>";
        return array( "username" );
    }

    public function __wakeup() {
        echo "Setting up the object...<br>";
    }

}

$member = new Member();
$member->username = "Fred";
$member->login();

$memberString = serialize( $member );
echo "Converted the Member object to a string: '$memberString'<br>";
echo "Converting the string back to an object...<br>";
$member2 = unserialize( $memberString );
echo $member2->username . " is " . ( $member2->isLoggedIn() ? "logged in" : "logged out" ) . "<br>";
