<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerBGMLLhV\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerBGMLLhV/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerBGMLLhV.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerBGMLLhV\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerBGMLLhV\App_KernelDevDebugContainer([
    'container.build_hash' => 'BGMLLhV',
    'container.build_id' => '641f8367',
    'container.build_time' => 1737310143,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerBGMLLhV');
