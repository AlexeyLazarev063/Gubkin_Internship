<?php

namespace App\Entity;

use App\Dto\AchievmentsNameDto;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="achievments_name")
 */
class AchievmentsNameEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name = "id", type="integer")
     */
    private int $AchievmentsNameId;

    /**
     * @ORM\Column(name="achievments_name", type="string")
     */
    private string $AchievmentsName;

    /**
     * @return int
     */
    public function getAchievmentsNameId(): int
    {
        return $this->AchievmentsNameId;
    }

    /**
     * @return string
     */
    public function getAchievmentsName(): string
    {
        return $this->AchievmentsName;
    }

    /**
     * @param string $AchievmentsName
     * @return AchievmentsNameEntity
     */
    public function setAchievmentsName(string $AchievmentsName): AchievmentsNameEntity
    {
        $this->AchievmentsName = $AchievmentsName;
        return $this;
    }

    /**
     * @return AchievmentsNameDto
     */
    public function toDto(): AchievmentsNameDto
    {
        $dto = new AchievmentsNameDto();
        $dto->AchievmentsNameId = $this->getAchievmentsNameId();
        $dto->AchievmentsName = $this->getAchievmentsName();
        return $dto;
    }

}