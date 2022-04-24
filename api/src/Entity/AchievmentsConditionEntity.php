<?php

namespace App\Entity;

use App\Dto\AchievmentsConditionDto;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="achievments_condition")
 */
class AchievmentsConditionEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(name="id", type="integer")
     */
    private int $AchievmentsConditionId;

    /**
     * @ORM\Column(name="achievments_condition", type="string")
     */
    private string $AchievmentsCondition;

    /**
     * @return int
     */
    public function getAchievmentsConditionId(): int
    {
        return $this->AchievmentsConditionId;
    }

    /**
     * @return string
     */
    public function getAchievmentsCondition(): string
    {
        return $this->AchievmentsCondition;
    }

    /**
     * @param string $AchievmentsCondition
     * @return AchievmentsConditionEntity
     */
    public function setAchievmentsCondition(string $AchievmentsCondition): AchievmentsConditionEntity
    {
        $this->AchievmentsCondition = $AchievmentsCondition;
        return $this;
    }

    /**
     * @return AchievmentsConditionDto
     */
    public function toDto(): AchievmentsConditionDto
    {
        $dto = new AchievmentsConditionDto();
        $dto->AchievmentsConditionId = $this->getAchievmentsConditionId();
        $dto->AchievmentsCondition = $this->getAchievmentsCondition();
        return $dto;
    }
}