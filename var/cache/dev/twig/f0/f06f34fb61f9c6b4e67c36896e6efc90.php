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

/* authenticator/index.html.twig */
class __TwigTemplate_9c8e0e8a92c83dff76346538e06f34c8 extends Template
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
            'stylesheets' => [$this, 'block_stylesheets'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "authenticator/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "authenticator/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "authenticator/index.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 4
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 5
        yield "    ";
        yield from $this->yieldParentBlock("stylesheets", $context, $blocks);
        yield "
    ";
        // line 6
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("login");
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 9
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

        // line 10
        yield "

    <div class=\"container\">
        <h1 class=\"text-center\">Login</h1>

        <div class=\"row\">
          <div class=\"col-md-6 offset-md-3\">
            <div class=\"card my-5\">
    
              <form class=\"card-body cardbody-color p-lg-5\" action=\"";
        // line 19
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
        yield "\" method=\"post\">
    
                <div class=\"text-center\">
                  <img src=\"https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png\" class=\"img-fluid profile-image-pic img-thumbnail rounded-circle my-3\"
                    width=\"200px\" alt=\"profile\">
                </div>
    
                <div class=\"mb-3\">
                  <input class=\"form-control\" id=\"Username\" type=\"text\" id=\"username\" name=\"_username\" value=\"";
        // line 27
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 27, $this->source); })()), "html", null, true);
        yield "\" required\">
                </div>
                <div class=\"mb-3\">
                  <input  class=\"form-control\" id=\"password\" type=\"password\" id=\"password\" name=\"_password\" required>
                </div>
                <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-color px-5 mb-5 w-100\">Login</button></div>
                <div id=\"emailHelp\" class=\"form-text text-center mb-5 text-dark\">Vous n'avez pas de compte?<a href=\"";
        // line 33
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
        yield "\" class=\"text-dark fw-bold\"> 
                    Creer un compte
                </a>
                </div>
              </form>
            </div>
    
          </div>
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
        return "authenticator/index.html.twig";
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
        return array (  139 => 33,  130 => 27,  119 => 19,  108 => 10,  95 => 9,  82 => 6,  77 => 5,  64 => 4,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{# ... #}
{% block stylesheets %}
    {{ parent() }}
    {{ encore_entry_link_tags('login') }}
{% endblock %}

{% block body %}


    <div class=\"container\">
        <h1 class=\"text-center\">Login</h1>

        <div class=\"row\">
          <div class=\"col-md-6 offset-md-3\">
            <div class=\"card my-5\">
    
              <form class=\"card-body cardbody-color p-lg-5\" action=\"{{ path('app_login') }}\" method=\"post\">
    
                <div class=\"text-center\">
                  <img src=\"https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png\" class=\"img-fluid profile-image-pic img-thumbnail rounded-circle my-3\"
                    width=\"200px\" alt=\"profile\">
                </div>
    
                <div class=\"mb-3\">
                  <input class=\"form-control\" id=\"Username\" type=\"text\" id=\"username\" name=\"_username\" value=\"{{ last_username }}\" required\">
                </div>
                <div class=\"mb-3\">
                  <input  class=\"form-control\" id=\"password\" type=\"password\" id=\"password\" name=\"_password\" required>
                </div>
                <div class=\"text-center\"><button type=\"submit\" class=\"btn btn-color px-5 mb-5 w-100\">Login</button></div>
                <div id=\"emailHelp\" class=\"form-text text-center mb-5 text-dark\">Vous n'avez pas de compte?<a href=\"{{ path('app_register') }}\" class=\"text-dark fw-bold\"> 
                    Creer un compte
                </a>
                </div>
              </form>
            </div>
    
          </div>
        </div>
      </div>
{% endblock %}", "authenticator/index.html.twig", "/home/ronaldo/symfony/exercise-symfony-2/templates/authenticator/index.html.twig");
    }
}
