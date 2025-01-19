<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* prestation/index.html.twig */
class __TwigTemplate_127f5737611f48da63f6dabfb3f0d550 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "prestation/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "prestation/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "prestation/index.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        yield "Détails de la prestation";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_body(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        yield "<div class=\"container mt-4\">
    <h1>";
        // line 7
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["prestation"]) || array_key_exists("prestation", $context) ? $context["prestation"] : (function () { throw new RuntimeError('Variable "prestation" does not exist.', 7, $this->source); })()), "nom", [], "any", false, false, false, 7), "html", null, true);
        yield "</h1>
    
    <div class=\"card mt-4\">
        <div class=\"card-body\">
            <div class=\"row\">
                <div class=\"col-md-8\">
                    <p class=\"card-text\">
                        <strong>Type:</strong> ";
        // line 14
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["prestation"]) || array_key_exists("prestation", $context) ? $context["prestation"] : (function () { throw new RuntimeError('Variable "prestation" does not exist.', 14, $this->source); })()), "extrait", [], "any", false, false, false, 14), "html", null, true);
        yield "
                    </p>
                    <p class=\"card-text\">
                        <strong>Description:</strong> ";
        // line 17
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["prestation"]) || array_key_exists("prestation", $context) ? $context["prestation"] : (function () { throw new RuntimeError('Variable "prestation" does not exist.', 17, $this->source); })()), "description", [], "any", false, false, false, 17), "html", null, true);
        yield "
                    </p>
                    <p class=\"card-text\">
                        <strong>Rémunération:</strong> ";
        // line 20
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["prestation"]) || array_key_exists("prestation", $context) ? $context["prestation"] : (function () { throw new RuntimeError('Variable "prestation" does not exist.', 20, $this->source); })()), "remuneration", [], "any", false, false, false, 20), "html", null, true);
        yield "€
                    </p>
                    <p class=\"card-text\">
                        <strong>Téléphone:</strong> ";
        // line 23
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["prestation"]) || array_key_exists("prestation", $context) ? $context["prestation"] : (function () { throw new RuntimeError('Variable "prestation" does not exist.', 23, $this->source); })()), "telephone", [], "any", false, false, false, 23), "html", null, true);
        yield "
                    </p>
                    <p class=\"card-text\">
                        <strong>Date de création:</strong> ";
        // line 26
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, (isset($context["prestation"]) || array_key_exists("prestation", $context) ? $context["prestation"] : (function () { throw new RuntimeError('Variable "prestation" does not exist.', 26, $this->source); })()), "createdAt", [], "any", false, false, false, 26), "d/m/Y H:i"), "html", null, true);
        yield "
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class=\"mt-4 d-flex\">
        <a href=\"";
        // line 34
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
        yield "\" class=\"btn btn-secondary\">Retour à la liste</a>
    </div>
</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "prestation/index.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  148 => 34,  137 => 26,  131 => 23,  125 => 20,  119 => 17,  113 => 14,  103 => 7,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Détails de la prestation{% endblock %}

{% block body %}
<div class=\"container mt-4\">
    <h1>{{ prestation.nom }}</h1>
    
    <div class=\"card mt-4\">
        <div class=\"card-body\">
            <div class=\"row\">
                <div class=\"col-md-8\">
                    <p class=\"card-text\">
                        <strong>Type:</strong> {{ prestation.extrait }}
                    </p>
                    <p class=\"card-text\">
                        <strong>Description:</strong> {{ prestation.description }}
                    </p>
                    <p class=\"card-text\">
                        <strong>Rémunération:</strong> {{ prestation.remuneration }}€
                    </p>
                    <p class=\"card-text\">
                        <strong>Téléphone:</strong> {{ prestation.telephone }}
                    </p>
                    <p class=\"card-text\">
                        <strong>Date de création:</strong> {{ prestation.createdAt|date('d/m/Y H:i') }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class=\"mt-4 d-flex\">
        <a href=\"{{ path('app_home') }}\" class=\"btn btn-secondary\">Retour à la liste</a>
    </div>
</div>
{% endblock %}", "prestation/index.html.twig", "/home/ronaldo/symfony/exercise-symfony-2/templates/prestation/index.html.twig");
    }
}
