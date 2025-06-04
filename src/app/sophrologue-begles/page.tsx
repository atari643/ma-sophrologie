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
  Leaf,
  Car,
  Phone,
  Mail,
  Calendar,
  Target,
  Award,
  CheckCircle,
  Home,
  Baby,
  GraduationCap,
  Briefcase
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologue à Bègles | Muriel Artigala - Relaxation et Bien-être Familial',
  description: 'Sophrologue diplômée à Bègles (33130). Muriel Artigala propose séances sophrologie pour familles, enfants, femmes enceintes. Cabinet et domicile. RDV 06 89 15 50 21',
  keywords: 'sophrologue Bègles, sophrologie Bègles 33130, relaxation famille Bègles, sophrologie enfants Bègles, femme enceinte Bègles, Muriel Artigala Bègles',
  openGraph: {
    title: 'Sophrologue à Bègles | Muriel Artigala',
    description: 'Sophrologue diplômée à Bègles. Spécialiste familles, enfants, femmes enceintes. Cabinet et domicile.',
    url: 'https://muriel-artigala.fr/sophrologue-begles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologue à Bègles | Muriel Artigala',
    description: 'Sophrologie pour familles à Bègles. Enfants, femmes enceintes, bien-être familial.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/sophrologue-begles'
  }
}

export default function SophrologueBegles() {
  const reviewsData = [
    {
      author: "Sophie M.",
      reviewBody: "Muriel m'a accompagnée pendant ma grossesse. Ses techniques m'ont aidée à vivre un accouchement serein. Je recommande vivement !",
      ratingValue: 5,
      datePublished: "2024-11-15",
      location: "Centre-ville Bègles"
    },
    {
      author: "Famille Dubois",
      reviewBody: "Les séances familiales ont transformé notre quotidien. Plus de sérénité, moins de conflits. Merci Muriel !",
      ratingValue: 5,
      datePublished: "2024-10-22",
      location: "Terre-Neuve"
    },
    {
      author: "Marie-Claire L.",
      reviewBody: "À la retraite, je cherchais des outils pour rester active et positive. La sophrologie m'apporte cette énergie au quotidien.",
      ratingValue: 5,
      datePublished: "2024-12-08",
      location: "Mussonville"
    }
  ]

  const specialitesBegles = [
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Sophrologie Périnatale",
      description: "Accompagnement grossesse, préparation accouchement, post-partum",
      tarif: "60€"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sophrologie Familiale",
      description: "Séances en famille, gestion conflits, communication bienveillante",
      tarif: "80€"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Enfants & Adolescents",
      description: "Confiance en soi, gestion émotions, troubles du sommeil",
      tarif: "50€"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Bien-être Seniors",
      description: "Vitalité, mémoire, adaptation aux changements de vie",
      tarif: "55€"
    }
  ]

  const temoignagesBegles = [
    {
      nom: "Sophie M.",
      age: "32 ans",
      quartier: "Centre-ville Bègles",
      temoignage: "Muriel m'a accompagnée pendant ma grossesse. Ses techniques m'ont aidée à vivre un accouchement serein. Je recommande vivement !",
      note: 5
    },
    {
      nom: "Famille Dubois",
      age: "Parents + 2 enfants",
      quartier: "Terre-Neuve",
      temoignage: "Les séances familiales ont transformé notre quotidien. Plus de sérénité, moins de conflits. Merci Muriel !",
      note: 5
    },
    {
      nom: "Marie-Claire L.",
      age: "67 ans", 
      quartier: "Mussonville",
      temoignage: "À la retraite, je cherchais des outils pour rester active et positive. La sophrologie m'apporte cette énergie au quotidien.",
      note: 5
    }
  ]

  const lieusPratiquesBegles = [
    {
      lieu: "Cabinet Médical Bègles Centre",
      adresse: "Avenue du Maréchal Leclerc",
      acces: "Tram A - Arrêt Bègles Centre",
      distance: "10 min à pied gare"
    },
    {
      lieu: "Maison de Santé Terre-Neuve", 
      adresse: "Rue François Mauriac",
      acces: "Bus 35 - Arrêt Terre-Neuve",
      distance: "5 min à pied"
    },
    {
      lieu: "À votre domicile",
      adresse: "Toute la ville de Bègles",
      acces: "Déplacement gratuit",
      distance: "Sans frais de transport"
    }
  ]

  const quartiersBegles = [
    { nom: "Centre-ville", distance: "0 km", specialite: "Consultation cabinet" },
    { nom: "Terre-Neuve", distance: "1,5 km", specialite: "Domicile familles" },
    { nom: "Mussonville", distance: "2 km", specialite: "Seniors actifs" },
    { nom: "Prés-Salés", distance: "1,8 km", specialite: "Futures mamans" },
    { nom: "Francs", distance: "2,2 km", specialite: "Ados & parents" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Schémas structurés */}
      <ReviewSchema
        businessName="Muriel Artigala - Sophrologue Bègles"
        businessUrl="https://muriel-artigala.fr/sophrologue-begles"
        reviews={reviewsData}
        aggregateRating={{
          ratingValue: 5,
          reviewCount: 3
        }}
      />
      
      <LocalBusinessSchema
        name="Muriel Artigala - Sophrologue Bègles"
        description="Sophrologue diplômée spécialisée en sophrologie périnatale et bien-être familial à Bègles"
        url="https://muriel-artigala.fr/sophrologue-begles"
        telephone="0689155021"
        email="contact@muriel-artigala.fr"
        address={{
          streetAddress: "Cabinet médical Bègles",
          addressLocality: "Bègles",
          postalCode: "33130",
          addressCountry: "FR"
        }}
        geo={{
          latitude: 44.8096,
          longitude: -0.5500
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
        serviceArea={["Bègles", "Bordeaux", "Villenave-d'Ornon", "Floirac"]}
        specialties={["Sophrologie périnatale", "Sophrologie familiale", "Enfants et adolescents", "Bien-être seniors"]}
      />
      
      {/* Hero Section Bègles */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-green-600" />
              <span className="text-green-700 font-medium">Bègles - 33130</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sophrologue à <span className="text-green-600">Bègles</span>
              <br />
              <span className="text-2xl lg:text-3xl text-gray-700 font-normal">
                Spécialiste Bien-être Familial
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <strong>Muriel Artigala</strong>, sophrologue diplômée, vous accompagne à Bègles 
              dans votre épanouissement familial. Spécialisée en sophrologie périnatale, 
              enfants et harmonie familiale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  06 89 15 50 21
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
                <Link href="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Prendre RDV
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                <span>5 min depuis Bordeaux</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Consultations 7j/7</span>
              </div>
              <div className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                <span>Cabinet & domicile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités Bègles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Spécialités <span className="text-green-600">Bien-être Familial</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accompagnement sophrologique adapté à chaque étape de la vie familiale à Bègles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialitesBegles.map((specialite, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full text-green-600">
                      {specialite.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{specialite.title}</CardTitle>
                    <CardDescription>{specialite.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {specialite.tarif} / séance
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages familles Bègles */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Témoignages <span className="text-green-600">Familles Bègloises</span>
              </h2>
              <p className="text-lg text-gray-600">
                L'expérience de nos clients à Bègles et ses quartiers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {temoignagesBegles.map((temoignage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{temoignage.nom}</h4>
                        <p className="text-sm text-gray-600">{temoignage.age}</p>
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

      {/* Lieux de pratique */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lieux de <span className="text-green-600">Consultation</span> à Bègles
              </h2>
              <p className="text-lg text-gray-600">
                Cabinet médical, maisons de santé ou à votre domicile
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {lieusPratiquesBegles.map((lieu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">{lieu.lieu}</CardTitle>
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
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Quartiers de <span className="text-green-600">Bègles</span> Couverts
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {quartiersBegles.map((quartier, index) => (
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Infos <span className="text-blue-600">Pratiques</span> Bègles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Car className="h-5 w-5" />
                    Accès & Stationnement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Depuis Bordeaux</p>
                      <p className="text-sm text-gray-600">5 min en voiture via Pont François Mitterrand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Transports en commun</p>
                      <p className="text-sm text-gray-600">Tram A (Bègles Centre) + Bus 35 et 36</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Stationnement</p>
                      <p className="text-sm text-gray-600">Places gratuites centre-ville et parkings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Heart className="h-5 w-5" />
                    Spécificités Bègles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ville familiale</p>
                      <p className="text-sm text-gray-600">Approche adaptée aux besoins des familles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Cadre naturel</p>
                      <p className="text-sm text-gray-600">Exercices en lien avec les espaces verts locaux</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Expertise périnatale</p>
                      <p className="text-sm text-gray-600">Formation spécialisée maternité CHU Bordeaux</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center bg-white rounded-xl p-6 shadow-sm">
              <p className="text-lg font-medium text-gray-800 mb-4">
                🌟 <strong>Séances adaptées</strong> aux spécificités familiales de Bègles
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Que vous habitiez le centre historique, Terre-Neuve ou Mussonville, 
                je me déplace ou vous accueille dans un cabinet proche de chez vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prête à Accompagner votre Famille à Bègles ?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi pour échanger sur vos besoins familiaux et découvrir 
              comment la sophrologie peut apporter sérénité et harmonie dans votre quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100" asChild>
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
            <p className="text-green-200 mt-6">
              <Award className="h-4 w-4 inline mr-2" />
              Sophrologue diplômée ISEBA Bordeaux | Spécialisation Périnatale CHU Bordeaux
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
