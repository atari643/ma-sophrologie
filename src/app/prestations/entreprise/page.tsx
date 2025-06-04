import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Building, 
  Users, 
  Euro, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Heart,
  Calendar,
  Star,
  Target,
  Briefcase,
  Clock,
  Award,
  Phone,
  FileText,
  Zap,
  Brain
} from 'lucide-react'
import Link from 'next/link'

export default function SophrologieEntreprise() {
  const benefits = [
    {
      icon: Shield,
      title: "Réduction du stress au travail",
      description: "Techniques concrètes pour gérer la pression et les tensions quotidiennes",
      impact: "Diminution de 40% du stress perçu"
    },
    {
      icon: Users,
      title: "Amélioration de la cohésion",
      description: "Renforcement des liens et de la communication entre collaborateurs",
      impact: "Équipes plus soudées et efficaces"
    },
    {
      icon: Heart,
      title: "Prévention du burn-out",
      description: "Détection précoce et accompagnement des situations à risque",
      impact: "Réduction de 60% de l'absentéisme"
    },
    {
      icon: TrendingUp,
      title: "Augmentation de la productivité",
      description: "Collaborateurs plus sereins, concentrés et créatifs",
      impact: "Performance globale améliorée"
    },
    {
      icon: Brain,
      title: "Développement des soft skills",
      description: "Confiance en soi, gestion émotionnelle, communication",
      impact: "Leadership renforcé"
    },
    {
      icon: Zap,
      title: "Qualité de vie au travail",
      description: "Environnement de travail plus agréable et stimulant",
      impact: "Attractivité employeur accrue"
    }
  ]

  const services = [
    {
      title: "Ateliers collectifs",
      description: "Séances de groupe pour tous les collaborateurs",
      duration: "1h à 2h",
      participants: "8 à 15 personnes",
      features: [
        "Techniques de relaxation express",
        "Gestion du stress en équipe",
        "Cohésion de groupe",
        "Adaptable aux horaires"
      ],
      price: "À partir de 150€/h"
    },
    {
      title: "Séances individuelles",
      description: "Accompagnement personnalisé pour les managers et collaborateurs",
      duration: "45 min",
      participants: "1 personne",
      features: [
        "Confidentialité garantie",
        "Problématiques spécifiques",
        "Suivi personnalisé",
        "Flexibilité horaire"
      ],
      price: "À partir de 80€/séance"
    },
    {
      title: "Formations management",
      description: "Former les managers aux techniques de bien-être",
      duration: "Demi-journée à 2 jours",
      participants: "5 à 12 managers",
      features: [
        "Outils concrets",
        "Cas pratiques",
        "Supports inclus",
        "Suivi post-formation"
      ],
      price: "Sur devis"
    },
    {
      title: "Diagnostic bien-être",
      description: "Audit complet du climat social et préconisations",
      duration: "1 à 3 semaines",
      participants: "Toute l'entreprise",
      features: [
        "Questionnaires anonymes",
        "Entretiens individuels",
        "Rapport détaillé",
        "Plan d'action personnalisé"
      ],
      price: "À partir de 2000€"
    }
  ]

  const process = [
    {
      step: 1,
      title: "Analyse des besoins",
      description: "Entretien pour comprendre votre contexte et vos objectifs",
      duration: "1h gratuite",
      icon: Target
    },
    {
      step: 2,
      title: "Proposition sur mesure",
      description: "Programme personnalisé adapté à votre organisation",
      duration: "Sous 48h",
      icon: FileText
    },
    {
      step: 3,
      title: "Mise en œuvre",
      description: "Déploiement du programme selon le planning convenu",
      duration: "Variable",
      icon: Briefcase
    },
    {
      step: 4,
      title: "Suivi et évaluation",
      description: "Mesure des résultats et ajustements si nécessaire",
      duration: "Continu",
      icon: TrendingUp
    }
  ]

  const sectors = [
    {
      name: "Santé & Social",
      description: "Hôpitaux, EHPAD, centres de soins",
      specificities: ["Gestion de l'émotion", "Prévention burn-out", "Relation patient"],
      icon: Heart
    },
    {
      name: "Éducation",
      description: "Écoles, universités, centres de formation",
      specificities: ["Stress pédagogique", "Relation élèves", "Charge mentale"],
      icon: Award
    },
    {
      name: "Banque & Assurance",
      description: "Institutions financières, mutuelles",
      specificities: ["Pression commerciale", "Gestion clientèle", "Objectifs"],
      icon: Shield
    },
    {
      name: "Industrie & BTP",
      description: "Usines, chantiers, sites industriels",
      specificities: ["Sécurité", "Travail physique", "Conditions difficiles"],
      icon: Building
    },
    {
      name: "Services & Consulting",
      description: "Cabinets, agences, sociétés de services",
      specificities: ["Rythme soutenu", "Créativité", "Relation client"],
      icon: Briefcase
    },
    {
      name: "Administration",
      description: "Collectivités, ministères, services publics",
      specificities: ["Changements", "Relation usager", "Digitalisation"],
      icon: Users
    }
  ]

  const testimonials = [
    {
      company: "Groupe hospitalier Lyon-Est",
      sector: "Santé",
      employees: "1200 personnes",
      rating: 5,
      comment: "Les ateliers sophrologie ont considérablement amélioré l'ambiance de travail. Nos équipes sont plus sereines face aux situations difficiles.",
      results: "Réduction de 35% de l'absentéisme",
      contact: "Dr. Marie Dubois, DRH"
    },
    {
      company: "TechnoSoft Solutions",
      sector: "IT",
      employees: "85 personnes",
      rating: 5,
      comment: "Investissement très rentable ! La productivité a augmenté et l'ambiance s'est nettement améliorée depuis le programme sophrologie.",
      results: "Satisfaction employés +45%",
      contact: "Jean Moreau, CEO"
    },
    {
      company: "Collège Jean Moulin",
      sector: "Éducation",
      employees: "60 personnes",
      rating: 5,
      comment: "Les enseignants gèrent mieux le stress des classes difficiles. Un vrai plus pour notre établissement !",
      results: "Diminution des arrêts maladie",
      contact: "Claire Martin, Principale"
    }
  ]

  const packages = [
    {
      name: "Pack Découverte",
      price: "1 500€",
      duration: "1 mois",
      description: "Initiation à la sophrologie en entreprise",
      features: [
        "2 ateliers collectifs (1h30)",
        "1 conférence sensibilisation",
        "Supports pédagogiques",
        "Bilan et recommandations",
        "Jusqu'à 30 participants"
      ],
      target: "PME - TPE",
      popular: false
    },
    {
      name: "Programme Équilibre",
      price: "4 500€",
      duration: "3 mois",
      description: "Accompagnement complet pour l'équilibre au travail",
      features: [
        "6 ateliers collectifs thématiques",
        "4 séances individuelles managers",
        "Formation équipe dirigeante",
        "Diagnostic bien-être initial",
        "Suivi et ajustements inclus",
        "Jusqu'à 50 participants"
      ],
      target: "Moyennes entreprises",
      popular: true
    },
    {
      name: "Solution Bien-être Global",
      price: "Sur devis",
      duration: "6 à 12 mois",
      description: "Transformation culturelle complète",
      features: [
        "Programme sur mesure",
        "Ateliers illimités",
        "Accompagnement individuel",
        "Formation interne",
        "Suivi performance",
        "Certification bien-être"
      ],
      target: "Grandes entreprises",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "Comment convaincre la direction des bénéfices ?",
      answer: "Je fournis un dossier complet avec ROI calculé, témoignages d'entreprises similaires et proposition d'évaluation gratuite. Les résultats parlent d'eux-mêmes : réduction absentéisme, amélioration productivité."
    },
    {
      question: "Les collaborateurs adhèrent-ils facilement ?",
      answer: "L'approche est progressive et non contraignante. Je commence par sensibiliser sur les bénéfices avant de proposer des ateliers découverte. Le bouche-à-oreille positif fait le reste."
    },
    {
      question: "Peut-on mesurer l'impact sur l'entreprise ?",
      answer: "Absolument ! Questionnaires avant/après, indicateurs RH (absentéisme, turnover), retours managers. Je fournis un rapport d'évaluation complet avec recommandations."
    },
    {
      question: "Comment s'adapter à notre secteur d'activité ?",
      answer: "Chaque programme est personnalisé selon votre secteur. J'ai l'expérience des spécificités santé, éducation, industrie, services... L'audit initial permet d'adapter parfaitement."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
            <Building className="w-4 h-4 mr-2" />
            Solution entreprise
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sophrologie en <span className="text-orange-600">Entreprise</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Investissez dans le bien-être de vos collaborateurs. Réduisez le stress, améliorez 
            la performance et créez un environnement de travail épanouissant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-orange-600">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Programmes sur mesure</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-orange-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">ROI mesurable</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-orange-600">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Expertise sectorielle</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Audit gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#programmes">
                <FileText className="w-5 h-5 mr-2" />
                Voir les programmes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi investir dans le <span className="text-orange-600">bien-être</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les bénéfices concrets de la sophrologie en entreprise, mesurables et durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {benefit.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="programmes" className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-600">solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des interventions adaptées à vos besoins et à votre organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">
                      {service.price}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.participants}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-orange-600">méthode</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un accompagnement structuré pour maximiser l'impact sur votre organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{step.description}</p>
                <Badge variant="outline" className="text-orange-600 border-orange-200 text-xs">
                  {step.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expertise <span className="text-orange-600">sectorielle</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des programmes adaptés aux spécificités de votre secteur d'activité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <sector.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{sector.name}</CardTitle>
                  <CardDescription>{sector.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">Enjeux spécifiques :</p>
                    <ul className="space-y-1">
                      {sector.specificities.map((spec, specIndex) => (
                        <li key={specIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-600">formules</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des programmes clé en main adaptés à la taille de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 ${pkg.popular ? 'border-orange-500 shadow-lg scale-105' : 'border-gray-200'} transition-all hover:shadow-lg`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Le plus demandé
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-bold text-orange-600">{pkg.price}</span>
                    <p className="text-gray-600 mt-2">{pkg.duration}</p>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <Badge variant="outline" className="text-orange-600 border-orange-200 w-fit mx-auto">
                    {pkg.target}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Demander un devis
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages <span className="text-orange-600">clients</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ils ont fait confiance à notre expertise pour transformer leur entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-orange-600 border-orange-200 text-xs">
                        {testimonial.sector}
                      </Badge>
                      <Badge variant="outline" className="text-gray-600 border-gray-200 text-xs">
                        {testimonial.employees}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-700">{testimonial.results}</span>
                    </div>
                    <p className="text-sm text-gray-600">— {testimonial.contact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions <span className="text-orange-600">fréquentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Toutes les réponses pour convaincre et rassurer votre direction.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Commençons par un audit gratuit pour identifier les enjeux et opportunités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Audit gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Link href="/contact">
                <FileText className="w-5 h-5 mr-2" />
                Demander une brochure
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
