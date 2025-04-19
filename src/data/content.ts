import { NavItem, Service, TeamMember, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'À Propos', href: '#a-propos' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Consultation Stratégique',
    description: 'Analyse approfondie de votre entreprise pour identifier les opportunités et les défis afin de créer une stratégie sur mesure.',
    icon: 'lightbulb',
  },
  {
    id: 2,
    title: 'Transformation Digitale',
    description: 'Accompagnement dans la numérisation de vos processus d\'affaires pour améliorer l\'efficacité et la compétitivité.',
    icon: 'rocket',
  },
  {
    id: 3,
    title: 'Optimisation des Opérations',
    description: 'Rationalisation de vos processus opérationnels pour réduire les coûts et augmenter la productivité.',
    icon: 'settings',
  },
  {
    id: 4,
    title: 'Développement Durable',
    description: 'Intégration des pratiques durables dans votre modèle d\'affaires pour réduire l\'impact environnemental.',
    icon: 'leaf',
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'Directrice Générale',
    bio: 'Plus de 15 ans d\'expérience dans le conseil stratégique auprès des entreprises du CAC 40.',
    imageUrl: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'Responsable Innovation',
    bio: 'Expert en transformation digitale avec une forte expérience dans les secteurs bancaire et industriel.',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Élise Moreau',
    role: 'Consultante Senior',
    bio: 'Spécialiste en optimisation des processus d\'affaires et en gestion du changement.',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Julien Martin',
    role: 'Expert Financier',
    bio: 'Analyse financière et stratégique pour les PME et grandes entreprises en croissance.',
    imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: 'Zarafa Consulting nous a permis de transformer notre stratégie digitale et d\'augmenter notre efficacité opérationnelle de 35% en seulement six mois.',
    author: 'Marie Leclerc',
    position: 'Directrice des Opérations',
    company: 'TechnoFrance',
  },
  {
    id: 2,
    content: 'L\'équipe a démontré une compréhension exceptionnelle de nos défis et a fourni des solutions sur mesure qui ont dépassé nos attentes.',
    author: 'Jean-Philippe Blanc',
    position: 'PDG',
    company: 'Groupe Innovex',
  },
  {
    id: 3,
    content: 'Leur approche de la transformation durable a non seulement amélioré notre image de marque, mais aussi réduit nos coûts opérationnels de manière significative.',
    author: 'Claire Dumont',
    position: 'Directrice Développement Durable',
    company: 'EcoSolutions',
  },
];