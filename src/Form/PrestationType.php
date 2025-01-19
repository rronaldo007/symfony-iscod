<?php

namespace App\Form;

use App\Entity\Prestation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Range;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PrestationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('extrait')
            ->add('description')
            ->add('remuneration', NumberType::class, [
                'label' => 'Rémunération',
                'constraints' => [
                    new NotBlank([
                        'message' => 'la valeur doit être comprise entre 5 et 500',
                    ]),
                    new Range([
                        'min' => 5,
                        'max' => 500,
                        'notInRangeMessage' => 'la valeur doit être comprise entre 5 et 500',
                    ]),
                ],
            ])
            ->add('telephone', TextType::class, [
                'label' => 'Téléphone',
                'attr' => [
                    'class' => 'form-control',
                ],
                'mapped' => true, // Make sure it's mapped
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Prestation::class,
        ]);
    }
}
