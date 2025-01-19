<?php

namespace App\Controller;

use App\Entity\Prestation;
use App\Entity\User;
use App\Form\PrestationType;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PrestationController extends AbstractController
{
    #[Route('/prestation/{id}<\d+>', name: 'app_prestation_show')]
    public function index(Prestation $prestation): Response
    {
        return $this->render('prestation/index.html.twig', [
            'prestation' => $prestation,
        ]);
    }

    #[Route('/edit/{id}<\d+>', name:'app_prestation_edit')]
    public function edit(Request $request, EntityManagerInterface $entityManager, Prestation $prestation): Response
    {
        try {
            // Check if user owns this prestation
            if ($this->getUser() !== $prestation->getUser()) {
                $this->addFlash('danger', 'Vous ne pouvez pas modifier cette prestation car elle ne vous appartient pas.');
                return $this->redirectToRoute('app_home');  // or wherever you want to redirect
            }

            $form = $this->createForm(PrestationType::class, $prestation);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManager->flush();

                $this->addFlash('success', 'La prestation a été modifiée avec succès');
                return $this->redirectToRoute('app_prestation_show', ['id' => $prestation->getId()]);
            }

            return $this->render('prestation/edit.html.twig', [
                'form' => $form,
                'prestation' => $prestation
            ]);
            
        } catch (\Exception $e) {
            $this->addFlash('error', 'Une erreur est survenue lors de la modification de la prestation.');
            return $this->redirectToRoute('app_prestation_index');
        }
    }
    #[Route('/delete/{id}<\d+>', name:'app_prestation_delete')]
    public function delete(Request $request, EntityManagerInterface $entityManager, Prestation $prestation): Response
    {
        try {
            // Check if user owns this prestation
            if ($this->getUser() !== $prestation->getUser()) {
                $this->addFlash('danger', 'Vous ne pouvez pas supprimer cette prestation car elle ne vous appartient pas.');
                return $this->redirectToRoute('app_home');
            }

            // Optional: Add CSRF token verification
            if (!$this->isCsrfTokenValid('delete'.$prestation->getId(), $request->request->get('_token'))) {
                $this->addFlash('danger', 'Token CSRF invalide.');
                return $this->redirectToRoute('app_home');
            }

            $entityManager->remove($prestation);
            $entityManager->flush();

            $this->addFlash('success', 'La prestation a été supprimée avec succès');
            return $this->redirectToRoute('app_home');

        } catch (\Exception $e) {
            $this->addFlash('error', 'Une erreur est survenue lors de la suppression de la prestation.');
            return $this->redirectToRoute('app_home');
        }
    }
    #[Route('/add', name:'app_prestation_add')]
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $prestation = new Prestation();
        $form = $this->createForm(PrestationType::class, $prestation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $prestation->setCreatedAt(new \DateTime());
            $prestation->setUser($this->getUser());
            $entityManager->persist($prestation);
            $entityManager->flush();
            $this->addFlash('success', 'La prestation a été ajoutée avec succès');
            return $this->redirectToRoute('app_home');
        }
        return $this->render('prestation/add.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('my-prestations', name:'app__my_prestation_index')]
    public function my_prestations(EntityManagerInterface $entityManager): Response
    {
        $prestations = $entityManager->getRepository(Prestation::class)
        ->findBy(['user' => $this->getUser()]);
        
        return $this->render('prestation/my_prestations.html.twig', [
            'prestations' => $prestations,
        ]);
    }
}
