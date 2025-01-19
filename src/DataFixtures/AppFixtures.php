<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Prestation;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $userPasswordHasher = null;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->userPasswordHasher = $passwordHasher;
    }
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $user = new User();
        $randomDate = new \DateTime(sprintf('-%d days', rand(1, 30)));
        $randomDate2 = new \DateTime(sprintf('-%d days', rand(1, 30)));


        $user->setFirstName($faker->name);
        $user->setLastName($faker->lastName);
        $user->setEmail("ronaldo@example.com");
        $user->setUserName("ronaldotukundo");
        $user->setPassword($this->userPasswordHasher->hashPassword($user, "ronaldo"));
        $user->setRoles(["ROLE_USER"]);
        $user->setCreatedAt($randomDate);

        $user2 = new User();
        $user2->setFirstName($faker->name);
        $user2->setLastName($faker->lastName);
        $user2->setEmail("ronaldogamez@example.com");
        $user2->setUserName("ronaldogamez");
        $user2->setPassword($this->userPasswordHasher->hashPassword($user2, "ronaldo"));
        $user2->setRoles(["ROLE_USER"]);
        $user2->setCreatedAt($randomDate2);

        $manager->persist($user);
        $manager->persist($user2);

        $prestationTypes = ['Massage', 'Coiffure'];
        
        foreach ($prestationTypes as $type) {
            for ($i = 0; $i < 2; $i++) {
                $prestation = new Prestation();
                
                $prestation->setNom($type . ' ' . $faker->words(2, true));
                $prestation->setDescription($faker->paragraph(5));
                $prestation->setRemuneration($faker->numberBetween(5, 500));
                $prestation->setExtrait($faker->paragraph(2));
                $prestation->setTelephone($faker->numerify('###############'));
                $prestation->setCreatedAt(new \DateTime());

                $prestation->setUser($faker->randomElement([$user, $user2]));
                $manager->persist($prestation);
            }
        }

        $manager->flush();
    }
}
