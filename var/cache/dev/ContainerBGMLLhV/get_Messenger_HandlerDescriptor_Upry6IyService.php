<?php

namespace ContainerBGMLLhV;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_Messenger_HandlerDescriptor_Upry6IyService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.messenger.handler_descriptor.Upry6Iy' shared service.
     *
     * @return \Symfony\Component\Messenger\Handler\HandlerDescriptor
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/messenger/Handler/HandlerDescriptor.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/mercure/src/Messenger/UpdateHandler.php';

        return $container->privates['.messenger.handler_descriptor.Upry6Iy'] = new \Symfony\Component\Messenger\Handler\HandlerDescriptor(new \Symfony\Component\Mercure\Messenger\UpdateHandler(($container->privates['mercure.hub.default.traceable'] ?? self::getMercure_Hub_Default_TraceableService($container))), []);
    }
}
