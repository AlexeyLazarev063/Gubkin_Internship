<?php

namespace App\Controller;

use App\Entity\AchievmentsEntity;
use App\Service\MainService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AchievmentsController extends AbstractController
{
    private MainService $mainService;

    public function __construct(MainService $mainService)
    {
        $this->mainService = $mainService;
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
    public function create_AchievmentsName():Response
    {
        $achievments_name = $this->mainService->create_AchievmentsName($_POST);
        return new JsonResponse($achievments_name);
    }

    /**
     * @Route("List/createStatus")
     */
    public function create_AchievmentsStatus():Response
    {
        $achievments_status = $this->mainService->create_AchievmentsStatus($_POST);
        return new JsonResponse($achievments_status);
    }

    /**
     * @Route("List/createCondition")
     */
    public function create_AchievmentsCondition():Response
    {
        $achievments_condition = $this->mainService->create_AchievmentsCondition($_POST);
        return new JsonResponse($achievments_condition);
    }

    /**
     * @Route("List/createAchievments")
     */
    public function create_Achievments():Response
    {
        $achievments_all = $this->mainService->create_Achievments($_POST);
        return new JsonResponse($achievments_all);
    }

    /**
     * @Route("List/deleteName")
     */
    public function delete_AchievmentsName(): Response
    {
        $d_AchievmentsName = $this->mainService->delete_AchievmentsName($_POST['id']);

        return new Response();
    }

    /**
     * @Route("List/deleteStatus")
     */
    public function delete_AchievmentsStatus(): Response
    {
        $d_AchievmentsStatus = $this->mainService->delete_AchievmentsStatus($_POST['id']);

        return new Response();
    }

    /**
     * @Route("List/deleteCondition")
     */
    public function delete_AchievmentsCondition(): Response
    {
        $d_AchievmentsCondition = $this->mainService->delete_AchievmentsCondition($_POST['id']);

        return new Response();
    }

    /**
     * @Route("List/deleteAchievments")
     */
    public function delete_Achievments(): Response
    {
        $d_Achievments = $this->mainService->delete_Achievments($_POST['id']);

        return new Response();
    }

}