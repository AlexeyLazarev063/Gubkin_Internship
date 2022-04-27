<?php

namespace App\Service;

use App\Entity\AchievmentsConditionEntity;
use App\Entity\AchievmentsNameEntity;
use App\Entity\AchievmentsStatusEntity;
use App\Entity\AchievmentsEntity;
use Doctrine\ORM\EntityManagerInterface;

class MainService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getAchievmentsName(): array
    {
        $achievmentsName = $this->entityManager->getRepository(AchievmentsNameEntity::class)->findAll();

        $AchievmentsNameDot = [];
        /** @var AchievmentsNameEntity $AchievmentsNameVar */
        foreach ($achievmentsName as $AchievmentsNameVar) {
            $AchievmentsNameDot[] = $AchievmentsNameVar->toDto();
        }
        return $AchievmentsNameDot;
    }
    public function getAchievmentsStatus(): array
    {
        $achievmentsStatus = $this->entityManager->getRepository(AchievmentsStatusEntity::class)->findAll();

        $AchievmentsStatusDot=[];
        /** @var AchievmentsStatusEntity $AchievmentsStatusVar */
        foreach ($achievmentsStatus as $AchievmentsStatusVar)
        {
            $AchievmentsStatusDot[]=$AchievmentsStatusVar->toDto();
        }
        return $AchievmentsStatusDot;
    }

    public function getAchievmentsCondition(): array
    {
        $achievmentsCondition = $this->entityManager->getRepository(AchievmentsConditionEntity::class)->findAll();

        $AchievmentsConditionDot=[];
        /** @var AchievmentsConditionEntity $AchievmentsConditionVar */
        foreach ($achievmentsCondition as $AchievmentsConditionVar)
        {
            $AchievmentsConditionDot[] = $AchievmentsConditionVar->toDto();
        }
        return $AchievmentsConditionDot;
    }

    public function getAchievmentsMain(): array
    {
        $achievmentsMain = $this->entityManager->getRepository(AchievmentsEntity::class)->findAll();

        $AchievmentsMainDot=[];
        /** @var AchievmentsEntity $AchievmentsMainVar */
        foreach ($achievmentsMain as $AchievmentsMainVar)
        {
            $AchievmentsMainDot[] = $AchievmentsMainVar->toDto();
        }
        return $AchievmentsMainDot;
    }

    public function createAchievmentsName($name)
    {

        if(!empty($name->AchievmentsNameId)){
            $achievmentsName = $this->entityManager->getRepository(AchievmentsNameEntity::class)->find($name->AchievmentsNameId);
        } else {
            $achievmentsName = new AchievmentsNameEntity();
        }

        foreach ($name as $key => $value) {
            if ($key === 'AchievmentsNameId')continue;
            $achievmentsName->{'set' . $key}($name->{$key});
        }

        $this->entityManager->persist($achievmentsName);
        $this->entityManager->flush();

        return $achievmentsName;
    }

    public function createAchievmentsStatus($status)
    {
        if(!empty($status->AchievmentsStatusId)){
            $achievmentsStatus = $this->entityManager->getRepository(AchievmentsStatusEntity::class)->find($status->AchievmentsStatusId);
        } else {
            $achievmentsStatus = new AchievmentsStatusEntity();
        }

        foreach ($status as $key => $value) {
            if ($key === 'AchievmentsStatusId')continue;
            $achievmentsStatus->{'set' . $key}($status->{$key});
        }

        $this->entityManager->persist($achievmentsStatus);
        $this->entityManager->flush();

        return $achievmentsStatus;
    }

    public function createAchievmentsCondition($condition)
    {
        if(!empty($condition->AchievmentsConditionId)){
            $achievmentsCondition = $this->entityManager->getRepository(AchievmentsConditionEntity::class)->find($condition->AchievmentsConditionId);
        } else {
            $achievmentsCondition = new AchievmentsConditionEntity();
        }

        foreach ($condition as $key => $value) {
            if ($key === 'AchievmentsConditionId')continue;
            $achievmentsCondition->{'set' . $key}($condition->{$key});
        }

        $this->entityManager->persist($achievmentsCondition);
        $this->entityManager->flush();

        return $achievmentsCondition;
    }

    public function createAchievments($achievments_full)
    {
        if(!empty($achievments_full->AchievmentsId)){
            $achievmentsAll = $this->entityManager->getRepository(AchievmentsEntity::class)->find($achievments_full->AchievmentsId);
        } else {
            $achievmentsAll = new AchievmentsEntity();
        }
        foreach ($achievments_full as $key => $value) {
            if ($key === 'AchievmentsId')continue;
            $achievmentsAll->{'set' . $key}($achievments_full->{$key});
        }

        $this->entityManager->persist($achievmentsAll);
        $this->entityManager->flush();

        return $achievmentsAll;
    }

    public function deleteAchievmentsName(int $id)
    {
        $delAchievmentsName = $this->entityManager->getRepository(AchievmentsNameEntity::class)->find($id);

        $this->entityManager->remove($delAchievmentsName);
        $this->entityManager->flush();

        return null;
    }

    public function deleteAchievmentsStatus(int $id)
    {
        $delAchievmentsStatus = $this->entityManager->getRepository(AchievmentsStatusEntity::class)->find($id);

        $this->entityManager->remove($delAchievmentsStatus);
        $this->entityManager->flush();

        return null;
    }

    public function deleteAchievmentsCondition(int $id)
    {
        $delAchievmentsCondition = $this->entityManager->getRepository(AchievmentsConditionEntity::class)->find($id);

        $this->entityManager->remove($delAchievmentsCondition);
        $this->entityManager->flush();

        return null;
    }

    public function deleteAchievments(int $id)
    {
        $delAchievments = $this->entityManager->getRepository(AchievmentsEntity::class)->find($id);

        $this->entityManager->remove($delAchievments);
        $this->entityManager->flush();

        return null;
    }

}