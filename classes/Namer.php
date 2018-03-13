<?php

trait Namer
{

    private $name;

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     *
     * @return Namer
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

}
