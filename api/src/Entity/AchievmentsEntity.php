<?php

namespace App\Entity;

use App\Dto\AchievmentsDto;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="achievments")
 */
class AchievmentsEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(name="id", type="integer")
     */
    private int $AchievmentsId;

    /**
     * @ORM\Column(name="achievments_name", type="string")
     */
    private string $AchievmentsNameMain;

    /**
     * @ORM\Column(name="achievments_status", type="string")
     */
    private string $AchievmentsStatusMain;

    /**
     * @ORM\Column(name="achievments_condition", type="string")
     */
    private string $AchievmentsConditionMain;

    /**
     * @ORM\Column(name="achievments_description", type="string")
     */
    private string $AchievmentsDescriptionMain;

    /**
     * @return int
     */
    public function getAchievmentsId(): int
    {
        return $this->AchievmentsId;
    }

    /**
     * @return string
     */
    public function getAchievmentsNameMain(): string
    {
        return $this->AchievmentsNameMain;
    }

    /**
     * @return string
     */
    public function getAchievmentsStatusMain(): string
    {
        return $this->AchievmentsStatusMain;
    }

    /**
     * @return string
     */
    public function getAchievmentsConditionMain(): string
    {
        return $this->AchievmentsConditionMain;
    }

    /**
     * @return string
     */
    public function getAchievmentsDescriptionMain(): string
    {
        return $this->AchievmentsDescriptionMain;
    }

    /**
     * @param string $AchievmentsNameMain
     * @return AchievmentsEntity
     */
    public function setAchievmentsNameMain(string $AchievmentsNameMain): AchievmentsEntity
    {
        $this->AchievmentsNameMain = $AchievmentsNameMain;
        return $this;
    }

    /**
     * @param string $AchievmentsStatusMain
     * @return AchievmentsEntity
     */
    public function setAchievmentsStatusMain(string $AchievmentsStatusMain): AchievmentsEntity
    {
        $this->AchievmentsStatusMain = $AchievmentsStatusMain;
        return $this;
    }

    /**
     * @param string $AchievmentsConditionMain
     * @return AchievmentsEntity
     */
    public function setAchievmentsConditionMain(string $AchievmentsConditionMain): AchievmentsEntity
    {
        $this->AchievmentsConditionMain = $AchievmentsConditionMain;
        return $this;
    }

    /**
     * @param string $AchievmentsDescriptionMain
     * @return AchievmentsEntity
     */
    public function setAchievmentsDescriptionMain(string $AchievmentsDescriptionMain): AchievmentsEntity
    {
        $this->AchievmentsDescriptionMain = $AchievmentsDescriptionMain;
        return $this;
    }

    /**
     * @return AchievmentsDto
     */
    public function toDto(): AchievmentsDto
    {
        $dto = new AchievmentsDto();
        $dto->AchievmentsId = $this->getAchievmentsId();
        $dto->AchievmentsNameMain = $this->getAchievmentsNameMain();
        $dto->AchievmentsStatusMain = $this->getAchievmentsStatusMain();
        $dto->AchievmentsConditionMain = $this->getAchievmentsConditionMain();
        $dto->AchievmentsDescriptionMain = $this->getAchievmentsDescriptionMain();
        return $dto;
    }
}