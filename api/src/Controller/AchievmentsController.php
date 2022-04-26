<?php

namespace App\Controller;

use App\Dto\AchievmentsConditionDto;
use App\Dto\AchievmentsDto;
use App\Dto\AchievmentsNameDto;
use App\Dto\AchievmentsStatusDto;
use App\Entity\AchievmentsEntity;
use App\Service\MainService;
use App\Service\ValidateService;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AchievmentsController extends AbstractController
{
    private MainService $mainService;

    private ValidateService $validateService;

    public function __construct(MainService $mainService, ValidateService $validateService)
    {
        $this->mainService = $mainService;
        $this->validateService = $validateService;
    }

    /**
     * @Route("List/getAchievmentsName")
     */
    public function getAchievmentsName():Response
    {
        $AchievmentsName = $this->mainService->getAchievmentsName();
        return new JsonResponse($AchievmentsName);
    }

    /**
     * @Route("List/getAchievmentsStatus")
     */
    public function getAchievmentsStatus():Response
    {
        $AchievmentsStatus = $this->mainService->getAchievmentsStatus();
        return new JsonResponse($AchievmentsStatus);
    }

    /**
     * @Route("List/getAchievmentsCondition")
     */
    public function getAchievmentsCondition(): Response
    {
        $AchievmentsCondition = $this->mainService->getAchievmentsCondition();
        return new JsonResponse($AchievmentsCondition);
    }

    /**
     * @Route("List/getAchievmentsMain")
     */
    public function getAchievmentsMain():Response
    {
        $AchievmentsMain = $this->mainService->getAchievmentsMain();
        return new JsonResponse($AchievmentsMain);
    }

    /**
     * @Route("List/createName")
     */
    public function createAchievmentsName():Response
    {
        try{
            $this->validateService->validate($_POST, AchievmentsNameDto::class, ['AchievmentsNameId']);
        }catch(Exception $exception){
            die($exception->getMessage());
        }
        $dtoAchievmentsName = $this->toDto($_POST, AchievmentsNameDto::class);
        $achievmentsName = $this->mainService->createAchievmentsName($dtoAchievmentsName);
        return new JsonResponse($achievmentsName);
    }

    /**
     * @Route("List/createStatus")
     */
    public function createAchievmentsStatus():Response
    {
        try{
            $this->validateService->validate($_POST, AchievmentsStatusDto::class, ['AchievmentsStatusId']);
        }catch(Exception $exception){
            die($exception->getMessage());
        }
        $dtoAchievmentsStatus = $this->toDto($_POST, AchievmentsStatusDto::class);
        $achievmentsStatus = $this->mainService->createAchievmentsStatus($dtoAchievmentsStatus);
        return new JsonResponse($achievmentsStatus);
    }

    /**
     * @Route("List/createCondition")
     */
    public function createAchievmentsCondition():Response
    {
        try{
            $this->validateService->validate($_POST, AchievmentsConditionDto::class, ['AchievmentsConditionId']);
        }catch(Exception $exception){
            die($exception->getMessage());
        }
        $dtoAchievmentsCondition = $this->toDto($_POST, AchievmentsConditionDto::class);
        $achievmentsCondition = $this->mainService->createAchievmentsCondition($dtoAchievmentsCondition);
        return new JsonResponse($achievmentsCondition);
    }

    /**
     * @Route("List/createAchievments")
     */
    public function createAchievments():Response
    {
        try{
            $this->validateService->validate($_POST, AchievmentsDto::class, ['AchievmentsId']);
        }catch(Exception $exception){
            die($exception->getMessage());
        }
        $dtoAchievments = $this->toDto($_POST, AchievmentsDto::class);
        $achievmentsAll = $this->mainService->createAchievments($dtoAchievments);
        return new JsonResponse($achievmentsAll);
    }

    /**
     * @Route("List/deleteName")
     */
    public function deleteAchievmentsName(): Response
    {
        $delAchievmentsName = $this->mainService->deleteAchievmentsName($_POST['AchievmentsNameId']);

        return new Response();
    }

    /**
     * @Route("List/deleteStatus")
     */
    public function deleteAchievmentsStatus(): Response
    {
        $delAchievmentsStatus = $this->mainService->deleteAchievmentsStatus($_POST['AchievmentsStatusId']);

        return new Response();
    }

    /**
     * @Route("List/deleteCondition")
     */
    public function deleteAchievmentsCondition(): Response
    {
        $delAchievmentsCondition = $this->mainService->deleteAchievmentsCondition($_POST['AchievmentsConditionId']);

        return new Response();
    }

    /**
     * @Route("List/deleteAchievments")
     */
    public function deleteAchievments(): Response
    {
        $delAchievments = $this->mainService->deleteAchievments($_POST['AchievmentsId']);

        return new Response();
    }

    private function toDto($data, $dtoAlias)
    {
        $dto = new $dtoAlias();
        foreach ($data as $propertyAlias => $value){
            $dto->{$propertyAlias} = $value;
        }
        return $dto;
    }

}