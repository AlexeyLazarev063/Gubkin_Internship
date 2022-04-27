<?php

namespace App\Entity;

use App\Dto\AchievmentsStatusDto;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="achievments_status")
 */
class AchievmentsStatusEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(name="id", type="integer")
     */
    private int $AchievmentsStatusId;

    /**
     * @ORM\Column(name="achievments_status", type="string")
     */
    private string $AchievmentsStatus;

    /**
     * @return int
     */
    public function getAchievmentsStatusId(): int
    {
        return $this->AchievmentsStatusId;
    }

    /**
     * @return string
     */
    public function getAchievmentsStatus(): string
    {
        return $this->AchievmentsStatus;
    }

    /**
     * @param string $AchievmentsStatus
     * @return AchievmentsStatusEntity
     */
    public function setAchievmentsStatus(string $AchievmentsStatus): AchievmentsStatusEntity
    {
        $this->AchievmentsStatus = $AchievmentsStatus;
        return $this;
    }

    /**
     * @return AchievmentsStatusDto
     */
    public function toDto(): AchievmentsStatusDto
    {
        $dto = new AchievmentsStatusDto();
        $dto->AchievmentsStatusId = $this->getAchievmentsStatusId();
        $dto->AchievmentsStatus = $this->getAchievmentsStatus();
        return $dto;
    }
}