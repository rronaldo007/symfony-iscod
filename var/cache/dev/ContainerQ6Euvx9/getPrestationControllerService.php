<?php

namespace ContainerQ6Euvx9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getPrestationControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\PrestationController' shared autowired service.
     *
     * @return \App\Controller\PrestationController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/PrestationController.php';

        $container->services['App\\Controller\\PrestationController'] = $instance = new \App\Controller\PrestationController();

        $instance->setContainer(($container->privates['.service_locator.ZyP9f7K'] ?? $container->load('get_ServiceLocator_ZyP9f7KService'))->withContext('App\\Controller\\PrestationController', $container));

        return $instance;
    }
}
