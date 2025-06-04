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
  TreePine,
  Car,
  Phone,
  Mail,
  Calendar,
  Target,
  Award,
  CheckCircle,
  Home,
  GraduationCap,
  Crown,
  Sparkles,
  Palette,
  Music
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologue au Bouscat | Muriel Artigala - Sophrologie Haut de Gamme & Créativité',
  description: 'Sophrologue diplômée au Bouscat (33110). Muriel Artigala propose sophrologie de qualité, créativité, développement personnel. Cabinet privilégié. RDV 06 89 15 50 21',
  keywords: 'sophrologue Le Bouscat, sophrologie Le Bouscat 33110, développement personnel Bouscat, créativité sophrologie, sophrologie haut de gamme, Muriel Artigala Bouscat',
  openGraph: {
    title: 'Sophrologue au Bouscat | Muriel Artigala',
    description: 'Sophrologue diplômée au Bouscat. Sophrologie haut de gamme, créativité, développement personnel.',
    url: 'https://muriel-artigala.fr/sophrologue-le-bouscat',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologue au Bouscat | Muriel Artigala',
    description: 'Sophrologie créativité et développement personnel au Bouscat.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/sophrologue-le-bouscat'
  }
}

export default function SophrologueLeBouscat() {
  const specialitesBouscat = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Sophrologie Premium",
      description: "Accompagnement personnalisé haut de gamme, techniques avancées",
      tarif: "80€"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Créativité & Art-thérapie",
      description: "Stimulation créative, déblocage artistique, expression personnelle",
      tarif: "75€"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Développement Personnel",
      description: "Confiance en soi, leadership, réalisation potentiel",
      tarif: "70€"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Sophrologie Musicale",
      description: "Techniques associées musique, relaxation harmonique",
      tarif: "75€"
    }
  ]

  const temoignagesBouscat = [
    {
      nom: "Isabelle P.",
      age: "42 ans",
      profession: "Artiste peintre",
      quartier: "Centre Bouscat",
      temoignage: "Muriel a débloqué ma créativité artistique. Son approche sophrologique m'a permis de retrouver l'inspiration et la fluidité dans mon art.",
      note: 5
    },
    {
      nom: "Philippe D.",
      age: "51 ans", 
      profession: "Dirigeant",
      quartier: "Sainte-Croix",
      temoignage: "Un accompagnement d'exception. La qualité des séances et l'expertise de Muriel correspondent parfaitement à mes attentes élevées.",
      note: 5
    },
    {
      nom: "Caroline M.",
      age: "38 ans",
      profession: "Architecte",
      quartier: "Ecus",
      temoignage: "Le cadre privilégié et l'approche sur-mesure m'ont permis un développement personnel remarquable. Je recommande sans réserve.",
      note: 5
    }
  ]

  const lieusPratiquesBouscat = [
    {
      lieu: "Cabinet Privé Premium",
      adresse: "Avenue de la Libération",
      acces: "Tram C - Arrêt Sainte-Croix",
      distance: "Cadre exceptionnel"
    },
    {
      lieu: "Centre Wellness Le Bouscat", 
      adresse: "Rue de la République",
      acces: "Parking privé sécurisé",
      distance: "Services haut de gamme"
    },
    {
      lieu: "Domicile VIP",
      adresse: "Secteurs résidentiels",
      acces: "Service à domicile premium",
      distance: "Discrétion garantie"
    }
  ]

  const profileClientsBouscat = [
    {
      profil: "Cadres Dirigeants",
      caracteristiques: ["Leadership", "Gestion stress", "Performance"],
      approche: "Coaching exécutif personnalisé"
    },
    {
      profil: "Artistes & Créatifs",
      caracteristiques: ["Inspiration", "Déblocage créatif", "Expression"],
      approche: "Stimulation créative sophrologique"
    },
    {
      profil: "Professions Libérales",
      caracteristiques: ["Excellence", "Équilibre", "Développement"],
      approche: "Accompagnement sur-mesure"
    },
    {
      profil: "Retraités Actifs",
      caracteristiques: ["Épanouissement", "Projets", "Vitalité"],
      approche: "Sophrologie du bien-vieillir"
    }
  ]

  const quartiersBouscat = [
    { nom: "Centre-ville", distance: "0 km", specialite: "Cabinet premium" },
    { nom: "Sainte-Croix", distance: "1 km", specialite: "Cadres dirigeants" },
    { nom: "Ecus", distance: "1,5 km", specialite: "Créatifs artistes" },
    { nom: "Château d'Eau", distance: "1,2 km", specialite: "Développement personnel" },
    { nom: "Libération", distance: "0,8 km", specialite: "Professionnels exigeants" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Le Bouscat */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-purple-600" />
              <span className="text-purple-700 font-medium">Le Bouscat - 33110</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sophrologue au <span className="text-purple-600">Bouscat</span>
              <br />
              <span className="text-2xl lg:text-3xl text-gray-700 font-normal">
                Excellence & Développement Personnel
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <strong>Muriel Artigala</strong>, sophrologue diplômée, vous propose au Bouscat 
              un accompagnement sophrologique haut de gamme. Spécialisée en développement 
              personnel, créativité et performance d'excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  06 89 15 50 21
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
                <Link href="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Consultation Premium
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <TreePine className="h-4 w-4" />
                <span>Cadre privilégié</span>
              </div>
              <div className="flex items-center gap-1">
                <Crown className="h-4 w-4" />
                <span>Service haut de gamme</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                <span>Sur-mesure uniquement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités Premium */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Spécialités <span className="text-purple-600">Premium</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accompagnement sophrologique d'excellence adapté aux attentes les plus exigeantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialitesBouscat.map((specialite, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-purple-100">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full text-purple-600">
                      {specialite.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{specialite.title}</CardTitle>
                    <CardDescription>{specialite.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      {specialite.tarif} / séance
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✨ <span className="text-purple-600">Excellence Sophrologique</span> 
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Chaque séance est <strong>unique et personnalisée</strong>, adaptée à vos objectifs 
                spécifiques dans un cadre d'exception au cœur du Bouscat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/contact">
                    <Crown className="h-5 w-5 mr-2" />
                    Découvrir l'excellence
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
                  <Link href="/prestations">
                    Prestations sur-mesure
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages clients premium */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Témoignages <span className="text-purple-600">Clients Premium</span>
              </h2>
              <p className="text-lg text-gray-600">
                L'expérience d'accompagnement d'exception au Bouscat
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {temoignagesBouscat.map((temoignage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{temoignage.nom}</h4>
                        <p className="text-sm text-purple-600">{temoignage.profession}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs border-purple-200">
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

      {/* Profils de clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Profils <span className="text-purple-600">Clients</span> Privilégiés
              </h2>
              <p className="text-lg text-gray-600">
                Accompagnement personnalisé selon votre profil et vos aspirations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {profileClientsBouscat.map((profil, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">{profil.profil}</CardTitle>
                    <CardDescription className="text-indigo-600 font-medium">
                      {profil.approche}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-gray-900 mb-3">Besoins spécifiques :</h4>
                    <div className="flex flex-wrap gap-2">
                      {profil.caracteristiques.map((caracteristique, i) => (
                        <Badge key={i} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {caracteristique}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lieux de pratique premium */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lieux d'<span className="text-purple-600">Excellence</span>
              </h2>
              <p className="text-lg text-gray-600">
                Cadres privilégiés pour un accompagnement d'exception
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {lieusPratiquesBouscat.map((lieu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">{lieu.lieu}</CardTitle>
                    <CardDescription>{lieu.adresse}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <span>{lieu.acces}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Crown className="h-4 w-4 text-purple-500" />
                      <span>{lieu.distance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quartiers prestigieux */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Quartiers <span className="text-purple-600">Prestigieux</span> du Bouscat
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {quartiersBouscat.map((quartier, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-2">{quartier.nom}</h4>
                    <p className="text-sm text-gray-600 mb-2">{quartier.distance}</p>
                    <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200">
                      {quartier.specialite}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Le Bouscat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi <span className="text-purple-600">Le Bouscat</span> ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <TreePine className="h-5 w-5" />
                    Cadre d'Exception
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ville verte et paisible</p>
                      <p className="text-sm text-gray-600">Environnement propice à la détente et réflexion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Accès privilégié</p>
                      <p className="text-sm text-gray-600">5 min Bordeaux centre, parkings aisés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Discrétion garantie</p>
                      <p className="text-sm text-gray-600">Confidentialité et respect de votre intimité</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <Sparkles className="h-5 w-5" />
                    Approche Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sur-mesure intégral</p>
                      <p className="text-sm text-gray-600">Chaque séance unique, adaptée à vos besoins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Crown className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Excellence sophrologique</p>
                      <p className="text-sm text-gray-600">Techniques avancées et innovation permanente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Expertise reconnue</p>
                      <p className="text-sm text-gray-600">Formation ISEBA + spécialisations continues</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 shadow-sm">
              <p className="text-lg font-medium text-gray-800 mb-4">
                👑 <strong>Excellence sophrologique</strong> dans un cadre d'exception
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Au Bouscat, bénéficiez d'un accompagnement sophrologique premium, 
                alliant techniques d'excellence et cadre privilégié pour votre développement personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Premium */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt pour l'Excellence au Bouscat ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Découvrez un accompagnement sophrologique d'exception, personnalisé selon 
              vos aspirations les plus élevées dans le cadre privilégié du Bouscat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
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
            <p className="text-purple-200 mt-6">
              <Crown className="h-4 w-4 inline mr-2" />
              Sophrologue diplômée ISEBA Bordeaux | Excellence & Innovation
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema Markup for SEO */}
      <ReviewSchema 
        businessName="Muriel Artigala - Sophrologue Le Bouscat Premium"
        businessUrl="https://muriel-artigala.fr/sophrologue-le-bouscat"
        reviews={[
          {
            author: "Isabelle M.",
            datePublished: "2024-11-10",
            reviewBody: "Approche très raffinée et innovante. Muriel a su m'accompagner dans mon développement créatif avec des techniques personnalisées. Service haut de gamme au Bouscat.",
            ratingValue: 5
          },
          {
            author: "Philippe D.",
            datePublished: "2024-10-25",
            reviewBody: "Excellent coaching exécutif. Muriel m'a aidé à développer ma leadership et ma confiance grâce à des approches sophrologies innovantes.",
            ratingValue: 5
          },
          {
            author: "Caroline V.",
            datePublished: "2024-09-30",
            reviewBody: "Séances de sophrologie d'exception. L'approche créative et personnalisée m'a permis de débloquer mon potentiel artistique.",
            ratingValue: 5
          }
        ]}
        aggregateRating={{
          ratingValue: 5,
          reviewCount: 3
        }}
      />

      <LocalBusinessSchema 
        name="Muriel Artigala - Sophrologue Le Bouscat Premium"
        description="Cabinet de sophrologie haut de gamme spécialisé dans le développement créatif, coaching exécutif et excellence personnelle au Bouscat"
        url="https://muriel-artigala.fr/sophrologue-le-bouscat"
        telephone="+33689155021"
        email="contact@muriel-artigala.fr"
        address={{
          streetAddress: "Secteur résidentiel privilégié",
          addressLocality: "Le Bouscat",
          postalCode: "33110",
          addressCountry: "France"
        }}
        geo={{
          latitude: 44.8667,
          longitude: -0.6
        }}
        openingHours={[
          {
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00"
          },
          {
            dayOfWeek: ["Saturday"],
            opens: "10:00", 
            closes: "16:00"
          }
        ]}
        priceRange="80-120€"
        serviceArea={[
          "Le Bouscat",
          "Bordeaux",
          "Eysines",
          "Bruges",
          "Blanquefort"
        ]}
        specialties={[
          "Développement créatif",
          "Coaching exécutif",
          "Excellence personnelle",
          "Sophrologie innovante",
          "Accompagnement VIP"
        ]}
      />
    </div>
  )
}
