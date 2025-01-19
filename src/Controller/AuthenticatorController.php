<?php

namespace App\Controller;



use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Event\LogoutEvent;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;


final class AuthenticatorController extends AbstractController
{

    public function __construct( private UrlGeneratorInterface $urlGenerator) {
    }

    #[Route('/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // Redirect if already logged in
        if ($this->getUser()) {
            $this->addFlash('info', 'Vous êtes déjà connecté.');
            return $this->redirectToRoute('app_home');
        }
    
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
    
        // Handle authentication errors
        if ($error) {
            $errorMessage = match ($error->getMessageKey()) {
                'Invalid credentials.' => 'Identifiant ou mot de passe incorrect.',
                'Account is disabled.' => 'Votre compte est désactivé.',
                'Too many failed login attempts.' => 'Trop de tentatives échouées. Veuillez réessayer plus tard.',
                default => 'Une erreur est survenue lors de la connexion.'
            };
            $this->addFlash('danger', $errorMessage);
        }
    
        return $this->render('authenticator/index.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }
    
      public static function getSubscribedEvents(): array
      {
          return [LogoutEvent::class => 'onLogout'];
      }

    #[Route('/logout', name:'app_logout')]
    public function onLogout(LogoutEvent $event): void
    {
        $token = $event->getToken();


        $response = $event->getResponse();

        $response = new RedirectResponse(
            $this->urlGenerator->generate('app_home'),
        );
        $event->setResponse($response);
    }

    #[Route('/register', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        EntityManagerInterface $em,
        UserRepository $userRepository
    ): Response {
        if ($this->getUser()) {
            $this->addFlash('warning', 'Vous êtes déjà connecté.');
            return $this->redirectToRoute('app_home');
        }

        $user = new User();
        $user->setRoles(["ROLE_USER"]);
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            // Check existing email
            if ($userRepository->findOneBy(['email' => $form->get('email')->getData()])) {
                $this->addFlash('danger', 'Cette adresse email est déjà utilisée.');
                return $this->redirectToRoute('app_register');
            }

            // Check existing username
            if ($userRepository->findOneBy(['userName' => $form->get('userName')->getData()])) {
                $this->addFlash('danger', 'Ce nom d\'utilisateur est déjà pris.');
                return $this->redirectToRoute('app_register');
            }

            if ($form->isValid()) {
                try {
                    // Sanitize inputs
                    $user->setEmail(strtolower(trim($form->get('email')->getData())));
                    $user->setUserName(trim($form->get('userName')->getData()));
                    $user->setFirstName(ucfirst(strtolower(trim($form->get('firstName')->getData()))));
                    $user->setLastName(ucfirst(strtolower(trim($form->get('lastName')->getData()))));
                    
                    // Hash password
                    $user->setPassword(
                        $passwordHasher->hashPassword(
                            $user, 
                            $form->get('password')->getData()
                        )
                    );

                    $user->setCreatedAt(new \DateTime());
                    
                    $em->persist($user);
                    $em->flush();

                    $this->addFlash('success', 'Votre compte a été créé avec succès.');
                    return $this->redirectToRoute('app_login');

                } catch (\Exception $e) {
                    $this->addFlash('danger', 'Une erreur est survenue lors de la création du compte.');
                }
            }
        }

        return $this->render('authenticator/register.html.twig', [
            'form' => $form,
        ]);
    }
}
