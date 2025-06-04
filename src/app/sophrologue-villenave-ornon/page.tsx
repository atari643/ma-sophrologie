import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ReviewSchema from '@/components/review-schema'
import LocalBusinessSchema from '@/components/local-business-schema'
import { 
  MapPin,
  Clock,
  Star,
  Users,
  Heart,
  Zap,
  Car,
  Phone,
  Mail,
  Calendar,
  Target,
  Award,
  CheckCircle,
  Home,
  Briefcase,
  Shield,
  Activity,
  Brain
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologue à Villenave-d\'Ornon | Muriel Artigala - Gestion Stress & Performance',
  description: 'Sophrologue diplômée à Villenave-d\'Ornon (33140). Muriel Artigala spécialisée burn-out, stress professionnel, performance sportive. Cabinet et domicile. RDV 06 89 15 50 21',
  keywords: 'sophrologue Villenave d\'Ornon, sophrologie Villenave 33140, burn-out Villenave, stress professionnel, performance sportive, Muriel Artigala Villenave',
  openGraph: {
    title: 'Sophrologue à Villenave-d\'Ornon | Muriel Artigala',
    description: 'Sophrologue diplômée à Villenave-d\'Ornon. Spécialiste burn-out, stress professionnel, performance.',
    url: 'https://muriel-artigala.fr/sophrologue-villenave-ornon',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologue à Villenave-d\'Ornon | Muriel Artigala',
    description: 'Sophrologie burn-out et performance à Villenave-d\'Ornon. Stress professionnel.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/sophrologue-villenave-ornon'
  }
}

export default function SophrologueVillenaveOrnon() {
  const specialitesVillenave = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Prévention Burn-out",
      description: "Détection précoce, récupération, retour à l'emploi accompagné",
      tarif: "65€"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Stress Professionnel",
      description: "Techniques anti-stress, gestion pression, équilibre vie pro/perso",
      tarif: "60€"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Performance Sportive",
      description: "Préparation mentale, concentration, récupération optimisée",
      tarif: "60€"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Coaching Mental",
      description: "Confiance en soi, prise de décision, leadership bienveillant",
      tarif: "70€"
    }
  ]

  const temoignagesVillenave = [
    {
      nom: "Thomas R.",
      age: "38 ans",
      profession: "Manager",
      quartier: "Centre Villenave",
      temoignage: "En plein burn-out, Muriel m'a aidé à retrouver l'équilibre. Son approche professionnelle et bienveillante m'a sauvé ma carrière.",
      note: 5
    },
    {
      nom: "Clara B.",
      age: "28 ans", 
      profession: "Sportive de haut niveau",
      quartier: "Chambéry",
      temoignage: "La sophrologie avec Muriel a révolutionné ma préparation mentale. Mes performances se sont considérablement améliorées.",
      note: 5
    },
    {
      nom: "Jean-Marc D.",
      age: "45 ans",
      profession: "Chef d'entreprise",
      quartier: "Pont de la Maye",
      temoignage: "Dirigeant stressé, j'ai appris à gérer la pression et prendre du recul. Indispensable pour tout entrepreneur !",
      note: 5
    }
  ]

  const lieusPratiquesVillenave = [
    {
      lieu: "Centre Médical Villenave",
      adresse: "Avenue de Toulouse",
      acces: "Bus 16 - Arrêt Centre",
      distance: "5 min gare Villenave"
    },
    {
      lieu: "Complexe Sportif Jean Dauguet", 
      adresse: "Rue Jean Dauguet",
      acces: "Bus 35 - Arrêt Complexe Sportif",
      distance: "Parking gratuit"
    },
    {
      lieu: "Cabinet Libéral",
      adresse: "Quartier Chambéry",
      acces: "Rocade sortie 18",
      distance: "Proche centre commercial"
    },
    {
      lieu: "À votre domicile",
      adresse: "Toute la ville",
      acces: "Déplacement inclus",
      distance: "Dans un rayon de 15 km"
    }
  ]

  const entreprisesVillenave = [
    {
      secteur: "Agroalimentaire",
      zones: ["Zone d'activité", "Pont de la Maye"],
      problematiques: ["Rythmes soutenus", "Contraintes qualité", "Management d'équipe"]
    },
    {
      secteur: "Logistique & Transport",
      zones: ["Rocade A630", "Zone industrielle"],
      problematiques: ["Horaires décalés", "Pression délais", "Fatigue physique"]
    },
    {
      secteur: "Services aux Entreprises", 
      zones: ["Centre-ville", "Chambéry"],
      problematiques: ["Charge mentale", "Relationnel client", "Objectifs commerciaux"]
    },
    {
      secteur: "Collectivités",
      zones: ["Mairie", "Services techniques"],
      problematiques: ["Service public", "Réorganisations", "Usagers difficiles"]
    }
  ]

  const quartiersVillenave = [
    { nom: "Centre-ville", distance: "0 km", specialite: "Professionnels actifs" },
    { nom: "Chambéry", distance: "2 km", specialite: "Cadres dirigeants" },
    { nom: "Pont de la Maye", distance: "3 km", specialite: "Entrepreneurs" },
    { nom: "Bois de Gajac", distance: "2,5 km", specialite: "Familles sportives" },
    { nom: "Lestaing", distance: "1,8 km", specialite: "Burn-out récupération" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Villenave */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-orange-600" />
              <span className="text-orange-700 font-medium">Villenave-d'Ornon - 33140</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sophrologue à <span className="text-orange-600">Villenave-d'Ornon</span>
              <br />
              <span className="text-2xl lg:text-3xl text-gray-700 font-normal">
                Spécialiste Burn-out & Performance
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <strong>Muriel Artigala</strong>, sophrologue diplômée, vous accompagne à Villenave-d'Ornon 
              dans la gestion du stress professionnel, la prévention du burn-out et l'optimisation 
              de vos performances.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  06 89 15 50 21
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50" asChild>
                <Link href="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Consultation Urgente
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                <span>8 min depuis Bordeaux</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Urgences acceptées</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Spécialiste burn-out</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités Villenave */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Spécialités <span className="text-orange-600">Performance & Récupération</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accompagnement sophrologique spécialisé pour professionnels exigeants à Villenave-d'Ornon
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialitesVillenave.map((specialite, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full text-orange-600">
                      {specialite.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{specialite.title}</CardTitle>
                    <CardDescription>{specialite.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      {specialite.tarif} / séance
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚨 <span className="text-orange-600">Urgences Burn-out</span> 
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                <strong>Consultation d'urgence</strong> pour les situations de burn-out sévère. 
                Prise en charge rapide dans les 24-48h pour éviter l'aggravation.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  Urgence 06 89 15 50 21
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages professionnels */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Témoignages <span className="text-orange-600">Professionnels</span>
              </h2>
              <p className="text-lg text-gray-600">
                L'expérience de clients actifs à Villenave-d'Ornon
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {temoignagesVillenave.map((temoignage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{temoignage.nom}</h4>
                        <p className="text-sm text-gray-600">{temoignage.profession}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {temoignage.quartier}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{temoignage.temoignage}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entreprises et secteurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Secteurs d'Activité <span className="text-orange-600">Villenave-d'Ornon</span>
              </h2>
              <p className="text-lg text-gray-600">
                Interventions spécialisées selon les problématiques sectorielles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {entreprisesVillenave.map((entreprise, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">{entreprise.secteur}</CardTitle>
                    <CardDescription>
                      {entreprise.zones.map((zone, i) => (
                        <Badge key={i} variant="outline" className="mr-2 mb-1">
                          {zone}
                        </Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-gray-900 mb-2">Problématiques ciblées :</h4>
                    <ul className="space-y-1">
                      {entreprise.problematiques.map((problematique, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Target className="h-4 w-4 text-orange-600 flex-shrink-0" />
                          <span>{problematique}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lieux de pratique */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lieux de <span className="text-orange-600">Consultation</span>
              </h2>
              <p className="text-lg text-gray-600">
                Cabinets médicaux, centres sportifs ou directement chez vous
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {lieusPratiquesVillenave.map((lieu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">{lieu.lieu}</CardTitle>
                    <CardDescription>{lieu.adresse}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{lieu.acces}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{lieu.distance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quartiers couverts */}
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Quartiers de <span className="text-orange-600">Villenave-d'Ornon</span> Couverts
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {quartiersVillenave.map((quartier, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">{quartier.nom}</h4>
                    <p className="text-sm text-gray-600 mb-2">{quartier.distance}</p>
                    <Badge variant="outline" className="text-xs">
                      {quartier.specialite}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibilité et infos pratiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Infos <span className="text-orange-600">Pratiques</span> Villenave-d'Ornon
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Car className="h-5 w-5" />
                    Accès Privilégié
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Rocade A630</p>
                      <p className="text-sm text-gray-600">Sortie 18 (2 min) - Accès direct centre-ville</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Transports publics</p>
                      <p className="text-sm text-gray-600">Bus 16, 35, 36 - Gare Villenave (TER)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Parking aisé</p>
                      <p className="text-sm text-gray-600">Places nombreuses et gratuites</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Zap className="h-5 w-5" />
                    Approche Spécialisée
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Burn-out expertise</p>
                      <p className="text-sm text-gray-600">Formation spécialisée prévention et récupération</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Activity className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Performance mentale</p>
                      <p className="text-sm text-gray-600">Coaching mental pour sportifs et dirigeants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Urgences possibles</p>
                      <p className="text-sm text-gray-600">Consultation rapide situations critiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 shadow-sm">
              <p className="text-lg font-medium text-gray-800 mb-4">
                ⚡ <strong>Intervention rapide</strong> pour les situations d'urgence professionnelle
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Que vous soyez en burn-out, sous pression extrême ou en besoin d'optimisation de performance, 
                je m'adapte à vos contraintes et urgences à Villenave-d'Ornon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Reprendre le Contrôle à Villenave-d'Ornon ?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Ne laissez pas le stress ou le burn-out s'installer. Contactez-moi dès maintenant 
              pour une prise en charge adaptée à votre situation professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  06 89 15 50 21
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="mailto:contact@muriel-artigala.fr">
                  <Mail className="h-5 w-5 mr-2" />
                  contact@muriel-artigala.fr
                </a>
              </Button>
            </div>
            <p className="text-orange-200 mt-6">
              <Award className="h-4 w-4 inline mr-2" />
              Sophrologue diplômée ISEBA Bordeaux | Expert Burn-out & Performance
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema Markup for SEO */}
      <ReviewSchema 
        businessName="Muriel Artigala - Sophrologue Villenave-d'Ornon"
        businessUrl="https://muriel-artigala.fr/sophrologue-villenave-ornon"
        reviews={[
          {
            author: "Marc D.",
            datePublished: "2024-11-05",
            reviewBody: "Muriel m'a aidé à surmonter un burn-out professionnel grâce à des techniques concrètes et efficaces. Je recommande vivement ses consultations à domicile sur Villenave-d'Ornon.",
            ratingValue: 5
          },
          {
            author: "Sophie L.",
            datePublished: "2024-10-20",
            reviewBody: "Excellent accompagnement pour gérer le stress au travail. Muriel a une approche très professionnelle et adaptée au monde de l'entreprise.",
            ratingValue: 5
          },
          {
            author: "Thomas R.",
            datePublished: "2024-09-15",
            reviewBody: "Préparation mentale pour mes compétitions sportives très efficace. J'ai gagné en confiance et en performance grâce à la sophrologie.",
            ratingValue: 5
          }
        ]}
        aggregateRating={{
          ratingValue: 5,
          reviewCount: 3
        }}
      />

      <LocalBusinessSchema 
        name="Muriel Artigala - Sophrologue Villenave-d'Ornon"
        description="Cabinet de sophrologie spécialisé dans la gestion du burn-out, stress professionnel et performance sportive à Villenave-d'Ornon"
        url="https://muriel-artigala.fr/sophrologue-villenave-ornon"
        telephone="+33689155021"
        email="contact@muriel-artigala.fr"
        address={{
          streetAddress: "Consultations à domicile",
          addressLocality: "Villenave-d'Ornon",
          postalCode: "33140",
          addressCountry: "France"
        }}
        geo={{
          latitude: 44.7833,
          longitude: -0.5667
        }}
        openingHours={[
          {
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00"
          },
          {
            dayOfWeek: ["Saturday"],
            opens: "09:00", 
            closes: "17:00"
          }
        ]}
        priceRange="60-80€"
        serviceArea={[
          "Villenave-d'Ornon",
          "Bordeaux",
          "Talence",
          "Gradignan",
          "Bègles"
        ]}
        specialties={[
          "Gestion du burn-out",
          "Stress professionnel", 
          "Performance sportive",
          "Consultations d'urgence",
          "Accompagnement entreprise"
        ]}
      />
    </div>
  )
}
