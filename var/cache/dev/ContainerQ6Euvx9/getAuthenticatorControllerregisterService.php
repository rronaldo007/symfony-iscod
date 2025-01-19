<?php

namespace ContainerQ6Euvx9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getAuthenticatorControllerregisterService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.ST9fez2.App\Controller\AuthenticatorController::register()' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.ST9fez2.App\\Controller\\AuthenticatorController::register()'] = (new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'passwordHasher' => ['privates', 'security.user_password_hasher', 'getSecurity_UserPasswordHasherService', true],
            'em' => ['services', 'doctrine.orm.default_entity_manager', 'getDoctrine_Orm_DefaultEntityManagerService', false],
            'userRepository' => ['privates', 'App\\Repository\\UserRepository', 'getUserRepositoryService', true],
        ], [
            'passwordHasher' => '?',
            'em' => '?',
            'userRepository' => 'App\\Repository\\UserRepository',
        ]))->withContext('App\\Controller\\AuthenticatorController::register()', $container);
    }
}
