<?php

class PageHeader {
    use Namer;

    public function render(Person $user)
    {
        return $user->showWelcomeMessage();
    }

}
