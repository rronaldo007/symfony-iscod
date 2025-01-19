<?php

namespace App\Entity;

use App\Repository\PrestationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PrestationRepository::class)]
class Prestation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $extrait = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[Assert\Range(
        min: 5,
        max: 500,
        notInRangeMessage: 'La remunération doit être entre 5€ et 500€'
    )]
    #[ORM\Column(type: 'float', nullable: true)]
    private ?float $remuneration = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $telephone = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\ManyToOne(inversedBy: 'prestations')]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getExtrait(): ?string
    {
        return $this->extrait;
    }

    public function setExtrait(string $extrait): static
    {
        $this->extrait = $extrait;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getRemuneration(): ?float
    {
        return $this->remuneration;
    }

    public function setRemuneration(float $remuneration): static
    {
        $this->remuneration = $remuneration;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
