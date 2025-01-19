<?php

namespace App\Controller;

use App\Entity\Prestation;
use App\Entity\User;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $lastUser = $entityManager->getRepository(User::class)
            ->createQueryBuilder('u')
            ->orderBy('u.createdAt', 'DESC')  // or 'u.registeredAt' depending on your field name
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        $prestations = $entityManager->getRepository(Prestation::class)->findAll();


        return $this->render('home/index.html.twig', [
            'lastUser' => $lastUser,
            'prestations'=> $prestations
        ]);
    }
}
