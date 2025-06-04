import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import StructuredData from '@/components/structured-data'
import FAQ from '@/components/faq'
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  Star,
  CheckCircle,
  Route,
  Calendar,
  Users,
  Award,
  Building,
  Car,
  GraduationCap,
  BookOpen,
  Brain
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologue à Talence | Muriel Artigala - Spécialiste Étudiants Université Bordeaux',
  description: 'Muriel Artigala, sophrologue diplômée ISEBA, spécialisée pour les étudiants de Talence et Université Bordeaux. Gestion stress examens, préparation concours. À 18min de Talence.',
  keywords: 'sophrologue Talence, sophrologie étudiants Talence, stress examens Bordeaux, préparation concours université, Muriel Artigala, campus Talence',
  openGraph: {
    title: 'Sophrologue à Talence | Muriel Artigala - Spécialiste Étudiants',
    description: 'Sophrologue spécialisée pour les étudiants de Talence et Université Bordeaux. Gestion stress examens et préparation concours.',
    url: 'https://muriel-artigala.fr/sophrologue-talence',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologue à Talence | Muriel Artigala',
    description: 'Spécialisée dans l\'accompagnement des étudiants de Talence et Université Bordeaux.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/sophrologue-talence'
  }
}

export default function SophrologueTalence() {
  const testimonialsTalence = [
    {
      name: "Léa R.",
      location: "Talence Campus",
      rating: 5,
      text: "Étudiante en médecine, les séances avec Muriel m'ont aidée à gérer l'énorme stress des concours. Accessible depuis le campus de Talence."
    },
    {
      name: "Thomas B.",
      location: "Talence Thouars",
      rating: 5,
      text: "Préparation optimale pour mes oraux d'école d'ingénieur. Muriel comprend parfaitement les enjeux étudiants. Très pro !"
    },
    {
      name: "Marine L.",
      location: "Talence Peixotto",
      rating: 5,
      text: "Gestion parfaite de mon anxiété en Master. Les techniques apprises m'ont transformée. Le trajet depuis Talence est très simple."
    }
  ]

  const servicesEtudiants = [
    {
      title: "Préparation aux Examens",
      description: "Techniques spécialisées pour optimiser vos performances lors des concours et examens universitaires",
      icon: <GraduationCap className="h-6 w-6" />,
      price: "40€",
      details: "Visualisation, gestion du trac, concentration"
    },
    {
      title: "Gestion du Stress Étudiant",
      description: "Accompagnement personnalisé pour les étudiants du campus de Talence et Université Bordeaux",
      icon: <Brain className="h-6 w-6" />,
      price: "40€",
      details: "Anxiété, surmenage, équilibre vie étudiante"
    },
    {
      title: "Préparation Concours Médicaux",
      description: "Spécialisation pour les étudiants en médecine, pharmacie et professions de santé",
      icon: <BookOpen className="h-6 w-6" />,
      price: "40€",
      details: "PACES, concours résidanat, ECN"
    }
  ]

  const universitesProches = [
    {
      nom: "Université de Bordeaux - Campus Talence",
      distance: "18 min",
      specialites: ["Sciences", "Technologies", "Santé"],
      acces: "Direct via D1010"
    },
    {
      nom: "École Nationale Supérieure de Chimie",
      distance: "19 min", 
      specialites: ["Chimie", "Matériaux"],
      acces: "Campus Talence"
    },
    {
      nom: "Institut de Maintenance Aéronautique",
      distance: "20 min",
      specialites: ["Aéronautique", "Maintenance"],
      acces: "Via A630"
    }
  ]

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <Header />
        
        {/* Hero Section Talence */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-violet-200 text-violet-700">
                <GraduationCap className="h-4 w-4 mr-2" />
                Spécialisée Étudiants Talence
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Votre <span className="text-violet-600">Sophrologue</span> pour les 
                <br />Étudiants de <span className="text-purple-600">Talence</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Muriel Artigala</strong>, sophrologue diplômée ISEBA Bordeaux, spécialisée dans 
                l'accompagnement des étudiants. <strong>À seulement 18 minutes du campus de Talence</strong>, 
                je vous aide à gérer le stress des examens, concours et vie étudiante.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700" asChild>
                  <Link href="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    RDV depuis Talence
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50" asChild>
                  <Link href="/prestations">
                    Mes spécialisations étudiantes
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-violet-600" />
                  <span>06 89 15 50 21</span>
                </div>
                <div className="flex items-center gap-2">
                  <Route className="h-4 w-4 text-violet-600" />
                  <span>18min du campus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibilité Campus Talence */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Idéalement Situé pour le <span className="text-violet-600">Campus de Talence</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Mon cabinet de sophrologie est stratégiquement positionné pour desservir facilement 
                  tous les étudiants du campus universitaire de Talence et des écoles environnantes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {universitesProches.map((universite, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-violet-600 flex items-center gap-2">
                        <Building className="h-5 w-5" />
                        {universite.nom}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Distance</span>
                        <Badge variant="secondary" className="bg-violet-100 text-violet-700">
                          {universite.distance}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Accès</span>
                        <span className="text-sm font-medium text-gray-800">{universite.acces}</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-gray-500 font-medium mb-1">Spécialités :</p>
                        <div className="flex flex-wrap gap-1">
                          {universite.specialites.map((spec, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Car className="h-6 w-6 text-violet-600" />
                      Accès en Voiture depuis Talence
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium">Campus Talence → Cabinet</span>
                        <span className="text-violet-600 font-bold">18 min</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium">Distance totale</span>
                        <span className="text-violet-600 font-bold">15 km</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium">Parking</span>
                        <span className="text-violet-600 font-bold">Gratuit</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="h-6 w-6 text-purple-600" />
                      Horaires Adaptés Étudiants
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium">Lundi - Vendredi</span>
                        <span className="text-purple-600 font-bold">10h-19h30</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium">Samedi</span>
                        <span className="text-purple-600 font-bold">9h-12h</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-medium">Créneaux soir</span>
                        <span className="text-purple-600 font-bold">Possibles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services spécialisés étudiants */}
        <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Accompagnement Spécialisé <span className="text-violet-600">Étudiants</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  En tant que sophrologue expérimentée, je propose des accompagnements spécifiquement 
                  conçus pour répondre aux défis uniques de la vie étudiante à Talence et Bordeaux.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {servicesEtudiants.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-violet-100 rounded-full text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mb-2">
                        {service.description}
                      </CardDescription>
                      <p className="text-sm text-gray-500 italic">{service.details}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold text-violet-600 mb-2">{service.price}</div>
                      <p className="text-sm text-gray-600 mb-4">par séance individuelle</p>
                      <Badge variant="outline" className="border-violet-200 text-violet-700">
                        Tarif étudiant préférentiel
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  Problématiques Étudiantes Accompagnées
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-violet-600 text-lg">🎓 Examens & Concours</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-violet-600" />
                        Gestion du trac et de l'anxiété
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-violet-600" />
                        Amélioration de la concentration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-violet-600" />
                        Techniques de mémorisation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-violet-600" />
                        Préparation mentale aux oraux
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-purple-600 text-lg">💪 Équilibre & Bien-être</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Gestion du stress quotidien
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Amélioration du sommeil
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Confiance en soi
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Équilibre vie étudiante/personnelle
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages étudiants Talence */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Témoignages d'Étudiants de <span className="text-violet-600">Talence</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Découvrez comment la sophrologie a transformé leur parcours étudiant
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonialsTalence.map((testimonial, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {Array(testimonial.rating).fill(null).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {testimonial.location}
                        </span>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      <div className="pt-2 border-t">
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          Étudiant(e) vérifié(e)
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ spécialisée Talence */}
        <FAQ 
          title="Questions Fréquentes - Étudiants Talence"
          description="Tout ce que vous devez savoir sur l'accompagnement sophrologique pour étudiants"
          cityFocus="Talence"
          includeSchema={true}
        />

        <Footer />
      </div>
    </>
  )
}
