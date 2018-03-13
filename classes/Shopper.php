<?php

class Shopper extends Person {

    public function showWelcomeMessage() {
        echo "Hi " . $this->getName() . ", welcome to our online store!<br>";
    }

    public function addToCart( $item ) {
        echo "Adding $item to cart<br>";
    }
}
