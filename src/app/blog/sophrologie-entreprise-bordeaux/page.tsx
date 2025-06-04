import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BlogStructuredData from '@/components/blog-structured-data'
import { 
  Calendar,
  ArrowLeft,
  Building,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Clock,
  CheckCircle,
  Briefcase,
  Target,
  Award,
  Phone,
  Mail
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologie en Entreprise à Bordeaux | Muriel Artigala - Bien-être au Travail',
  description: 'Interventions sophrologie en entreprise à Bordeaux Métropole. Muriel Artigala propose des ateliers bien-être, gestion stress professionnel, prévention burn-out. Devis gratuit.',
  keywords: 'sophrologie entreprise Bordeaux, bien-être travail Bordeaux, gestion stress entreprise, burn-out prévention, QVT Bordeaux, Muriel Artigala entreprise',
  openGraph: {
    title: 'Sophrologie en Entreprise à Bordeaux | Muriel Artigala',
    description: 'Interventions sophrologie en entreprise à Bordeaux. Ateliers bien-être, gestion stress, prévention burn-out. Devis gratuit.',
    url: 'https://muriel-artigala.fr/blog/sophrologie-entreprise-bordeaux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologie en Entreprise à Bordeaux | Muriel Artigala',
    description: 'Interventions sophrologie en entreprise à Bordeaux. Bien-être au travail et QVT.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/blog/sophrologie-entreprise-bordeaux'
  }
}

export default function SophrologieEntrepriseBordeaux() {
  const beneficesEntreprise = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Amélioration de la Productivité",
      description: "Employés moins stressés, plus concentrés et créatifs",
      impact: "+15% en moyenne"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Réduction de l'Absentéisme", 
      description: "Diminution des arrêts maladie liés au stress",
      impact: "-25% d'arrêts stress"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Amélioration du Climat Social",
      description: "Relations interpersonnelles apaisées et communication améliorée",
      impact: "Satisfaction +30%"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Fidélisation des Talents",
      description: "Réduction du turnover grâce au bien-être au travail",
      impact: "-20% de turnover"
    }
  ]

  const interventionFormats = [
    {
      format: "Ateliers Découverte",
      duree: "1h30",
      participants: "10-15 personnes",
      prix: "150€",
      description: "Introduction à la sophrologie avec techniques de base"
    },
    {
      format: "Cycle Gestion du Stress",
      duree: "5 séances x 1h",
      participants: "8-12 personnes",
      prix: "600€",
      description: "Programme complet d'apprentissage anti-stress"
    },
    {
      format: "Accompagnement Individuel",
      duree: "45min",
      participants: "1 personne",
      prix: "60€",
      description: "Suivi personnalisé pour dirigeants et cadres"
    },
    {
      format: "Formation Managers",
      duree: "1 journée",
      participants: "6-8 managers",
      prix: "800€",
      description: "Outils de détection et prévention du stress équipe"
    }
  ]

  const entreprisesBordeaux = [
    {
      secteur: "Industrie Aéronautique",
      zones: ["Mérignac", "Bordeaux Nord"],
      specialite: "Gestion stress environnements bruyants"
    },
    {
      secteur: "Services Financiers",
      zones: ["Bordeaux Centre", "Mériadeck"],
      specialite: "Burn-out cadres, pression objectifs"
    },
    {
      secteur: "Santé & Médical",
      zones: ["CHU Bordeaux", "Cliniques privées"],
      specialite: "Épuisement professionnel soignants"
    },
    {
      secteur: "Transport & Logistique",
      zones: ["Port de Bordeaux", "Bassens"],
      specialite: "Horaires décalés, contraintes physiques"
    },
    {
      secteur: "IT & Tech",
      zones: ["Bordeaux Technowest", "Talence"],
      specialite: "Surmenage numérique, deadline"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Navigation retour */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>
        </Button>
      </div>

      {/* Header Article */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <Building className="h-4 w-4 mr-2" />
              Sophrologie en Entreprise
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sophrologie en Entreprise à <span className="text-blue-200">Bordeaux</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Découvrez comment la sophrologie peut transformer le bien-être au travail dans votre entreprise 
              bordelaise. Interventions sur mesure pour améliorer la QVT et réduire le stress professionnel.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Publié le 15 janvier 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Lecture 8 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Dans un contexte économique de plus en plus exigeant, les entreprises de 
                <strong> Bordeaux Métropole</strong> sont confrontées à des défis majeurs : stress professionnel, 
                burn-out, absentéisme, turnover. <strong>La sophrologie en entreprise</strong> émerge comme 
                une solution efficace pour améliorer la qualité de vie au travail (QVT) et préserver 
                la santé mentale des collaborateurs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En tant que <strong>sophrologue diplômée ISEBA Bordeaux</strong> avec une spécialisation 
                acquise au CHU de Bordeaux, j'accompagne les entreprises de la métropole bordelaise 
                dans la mise en place de programmes de bien-être adaptés à leurs spécificités sectorielles.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                🎯 Pourquoi la Sophrologie en Entreprise ?
              </h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto">
                Dans un environnement professionnel en constante évolution, la sophrologie offre 
                des outils concrets et immédiatement applicables pour gérer le stress, améliorer 
                la concentration et développer la résilience des équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices mesurables */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bénéfices <span className="text-blue-600">Mesurables</span> pour votre Entreprise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des résultats concrets et quantifiables pour votre organisation bordelaise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficesEntreprise.map((benefice, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600">
                      {benefice.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{benefice.title}</CardTitle>
                    <CardDescription>{benefice.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{benefice.impact}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formats d'intervention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Formats d'<span className="text-indigo-600">Intervention</span> Adaptés
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Solutions flexibles pour tous types d'entreprises à Bordeaux et sa métropole
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {interventionFormats.map((format, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-indigo-600">{format.format}</CardTitle>
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        {format.prix}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{format.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Durée</span>
                        <span className="font-medium text-gray-900">{format.duree}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Participants</span>
                        <span className="font-medium text-gray-900">{format.participants}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Devis gratuit</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium text-gray-800 mb-6">
                💼 <strong>Interventions sur mesure</strong> selon vos besoins et contraintes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">
                    <Phone className="h-5 w-5 mr-2" />
                    Demander un devis
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/prestations/entreprise">
                    Voir toutes nos prestations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'activité Bordeaux */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Secteurs d'Activité à <span className="text-indigo-600">Bordeaux</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expertise sectorielle pour répondre aux spécificités de chaque environnement professionnel
              </p>
            </div>

            <div className="space-y-6">
              {entreprisesBordeaux.map((secteur, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-indigo-600" />
                        {secteur.secteur}
                      </h3>
                      <p className="text-gray-600 mb-3">{secteur.specialite}</p>
                      <div className="flex flex-wrap gap-2">
                        {secteur.zones.map((zone, i) => (
                          <Badge key={i} variant="outline" className="border-indigo-200 text-indigo-700">
                            {zone}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-8 w-8 text-indigo-600" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Zones d'Intervention Bordeaux Métropole
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Bordeaux Centre</h4>
                  <p className="text-sm text-gray-600">Mériadeck, Victoire, Chartrons</p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Bordeaux Métropole</h4>
                  <p className="text-sm text-gray-600">Pessac, Mérignac, Talence, Bègles</p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Zones d'Activité</h4>
                  <p className="text-sm text-gray-600">Aéroport, Port, Technowest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages entreprises */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Retours d'<span className="text-blue-600">Entreprises</span> Bordelaises
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="p-8">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 italic mb-4">
                        "Les ateliers de Muriel ont transformé l'ambiance de nos équipes. Le stress lié aux pics 
                        d'activité aéroportuaire est mieux géré, et nous avons constaté une réelle amélioration 
                        de la cohésion d'équipe."
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <strong className="text-gray-900">Marie D.</strong>
                        <span className="text-gray-600">- DRH, Société de Services Aéroportuaires, Mérignac</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 italic mb-4">
                        "L'accompagnement de nos cadres dirigeants par Muriel a été déterminant dans la prévention 
                        du burn-out. Son approche professionnelle et bienveillante fait toute la différence."
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <strong className="text-gray-900">Jean-Pierre L.</strong>
                        <span className="text-gray-600">- Directeur Général, Cabinet de Conseil, Bordeaux Centre</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Améliorer le Bien-être dans votre Entreprise ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi pour échanger sur vos besoins spécifiques et recevoir 
              un devis personnalisé pour votre entreprise bordelaise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
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
            <p className="text-blue-200 mt-6">
              <Award className="h-4 w-4 inline mr-2" />
              Sophrologue diplômée ISEBA Bordeaux | Spécialisation CHU Bordeaux
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
