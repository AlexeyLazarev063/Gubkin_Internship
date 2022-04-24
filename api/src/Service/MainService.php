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

    public function create_AchievmentsName($name)
    {

        if(array_key_exists('id', $name)){

            $achievments_name = $this->entityManager->getRepository(AchievmentsNameEntity::class)->find($name['id']);

            $achievments_name->setAchievmentsName($name['newName']);
            $this->entityManager->flush();

        } else {

            $achievments_name = new AchievmentsNameEntity();
            $achievments_name->setAchievmentsName($name['newName']);

            $this->entityManager->persist($achievments_name);
            $this->entityManager->flush();
        }

        return $achievments_name;
    }

    public function create_AchievmentsStatus($status)
    {
        if(array_key_exists('id', $status)){

            $achievments_status = $this->entityManager->getRepository(AchievmentsStatusEntity::class)->find($status['id']);

            $achievments_status->setAchievmentsStatus($status['newStatus']);
            $this->entityManager->flush();

        } else {

            $achievments_status = new AchievmentsStatusEntity();
            $achievments_status->setAchievmentsStatus($status['newStatus']);

            $this->entityManager->persist($achievments_status);
            $this->entityManager->flush();

        }



        return $achievments_status;
    }

    public function create_AchievmentsCondition($condition)
    {
        if(array_key_exists('id', $condition)){

            $achievments_condition = $this->entityManager->getRepository(AchievmentsConditionEntity::class)->find($condition['id']);

            $achievments_condition->setAchievmentsCondition($condition['newCondition']);
            $this->entityManager->flush();

        } else {

            $achievments_condition = new AchievmentsConditionEntity();
            $achievments_condition->setAchievmentsCondition($condition['newCondition']);

            $this->entityManager->persist($achievments_condition);
            $this->entityManager->flush();
        }

        return $achievments_condition;
    }

    public function create_Achievments($achievments_full)
    {
        if(array_key_exists('id', $achievments_full)){

            $achievments = $this->entityManager->getRepository(AchievmentsEntity::class)->find($achievments_full['id']);

            $achievments->setAchievmentsNameMain($achievments_full['newAchievmentsName']);
            $achievments->setAchievmentsStatusMain($achievments_full['newAchievmentsStatus']);
            $achievments->setAchievmentsConditionMain($achievments_full['newAchievmentsCondition']);
            $achievments->setAchievmentsDescriptionMain($achievments_full['newAchievmentsDescription']);

            $this->entityManager->flush();

        } else {

            $achievments = new AchievmentsEntity();
            $achievments->setAchievmentsNameMain($achievments_full['newAchievmentsName']);
            $achievments->setAchievmentsStatusMain($achievments_full['newAchievmentsStatus']);
            $achievments->setAchievmentsConditionMain($achievments_full['newAchievmentsCondition']);
            $achievments->setAchievmentsDescriptionMain($achievments_full['newAchievmentsDescription']);

            $this->entityManager->persist($achievments);
            $this->entityManager->flush();
        }

        return $achievments;
    }

    public function delete_AchievmentsName(int $id)
    {
        $d_AchievmentsName = $this->entityManager->getRepository(AchievmentsNameEntity::class)->find($id);

        $this->entityManager->remove($d_AchievmentsName);
        $this->entityManager->flush();

        return null;
    }

    public function delete_AchievmentsStatus(int $id)
    {
        $d_AchievmentsStatus = $this->entityManager->getRepository(AchievmentsStatusEntity::class)->find($id);

        $this->entityManager->remove($d_AchievmentsStatus);
        $this->entityManager->flush();

        return null;
    }

    public function delete_AchievmentsCondition(int $id)
    {
        $d_AchievmentsCondition = $this->entityManager->getRepository(AchievmentsConditionEntity::class)->find($id);

        $this->entityManager->remove($d_AchievmentsCondition);
        $this->entityManager->flush();

        return null;
    }

    public function delete_Achievments(int $id)
    {
        $d_Achievments = $this->entityManager->getRepository(AchievmentsEntity::class)->find($id);

        $this->entityManager->remove($d_Achievments);
        $this->entityManager->flush();

        return null;
    }
}