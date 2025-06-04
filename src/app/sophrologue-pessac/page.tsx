import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import StructuredData from '@/components/structured-data'
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
  Train
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologue à Pessac | Muriel Artigala - Sophrologie Bordeaux Métropole',
  description: 'Muriel Artigala, sophrologue diplômée ISEBA, reçoit à Martignas-sur-Jalle pour les habitants de Pessac. Gestion du stress, accompagnement personnalisé. 15min de Pessac.',
  keywords: 'sophrologue Pessac, sophrologie Pessac, gestion stress Pessac, relaxation Pessac, bien-être Pessac, Muriel Artigala, Bordeaux Métropole',
  openGraph: {
    title: 'Sophrologue à Pessac | Muriel Artigala - Sophrologie Bordeaux Métropole',
    description: 'Muriel Artigala, sophrologue diplômée ISEBA, reçoit à Martignas-sur-Jalle pour les habitants de Pessac. Gestion du stress, accompagnement personnalisé.',
    url: 'https://muriel-artigala.fr/sophrologue-pessac',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologue à Pessac | Muriel Artigala',
    description: 'Sophrologue diplômée ISEBA pour les habitants de Pessac. Gestion du stress et bien-être.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/sophrologue-pessac'
  }
}

export default function SophrologuePessac() {
  const testimonialsPessac = [
    {
      name: "Sarah M.",
      location: "Pessac Centre",
      rating: 5,
      text: "Je me rends chez Muriel depuis Pessac, le trajet est très court et les séances m'aident énormément à gérer mon stress professionnel. Une véritable transformation !"
    },
    {
      name: "Jean-Claude R.",
      location: "Pessac Alouette",
      rating: 5,
      text: "Excellent suivi. Muriel m'a accompagné dans ma préparation à la retraite. Le cabinet est facilement accessible depuis Pessac."
    },
    {
      name: "Emma L.",
      location: "Pessac Université",
      rating: 5,
      text: "Étudiante à l'Université de Bordeaux, je consulte Muriel pour gérer l'anxiété des examens. Très accessible depuis le campus de Pessac."
    }
  ]

  const servicesSpecifiquesPessac = [
    {
      title: "Gestion du Stress Étudiant",
      description: "Accompagnement spécialisé pour les étudiants de l'Université de Bordeaux campus Pessac",
      icon: <Users className="h-6 w-6" />,
      price: "40€"
    },
    {
      title: "Préparation aux Examens",
      description: "Techniques de sophrologie pour optimiser les performances lors des concours et examens",
      icon: <Award className="h-6 w-6" />,
      price: "40€"
    },
    {
      title: "Stress Professionnel",
      description: "Solutions adaptées aux travailleurs de la zone d'activité de Pessac",
      icon: <Building className="h-6 w-6" />,
      price: "40€"
    }
  ]

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <Header />
        
        {/* Hero Section Pessac */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-emerald-200 text-emerald-700">
                <MapPin className="h-4 w-4 mr-2" />
                Dessert Pessac et environs
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Votre <span className="text-emerald-600">Sophrologue</span> pour 
                <br />les habitants de <span className="text-teal-600">Pessac</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Muriel Artigala</strong>, sophrologue diplômée ISEBA Bordeaux, vous reçoit à Martignas-sur-Jalle, 
                <strong> à seulement 15 minutes de Pessac</strong>. Spécialisée dans la gestion du stress et l'accompagnement 
                personnalisé pour les étudiants et professionnels de Pessac.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    Prendre RDV depuis Pessac
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
                  <Link href="/prestations">
                    Découvrir mes services
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>06 89 15 50 21</span>
                </div>
                <div className="flex items-center gap-2">
                  <Route className="h-4 w-4 text-emerald-600" />
                  <span>15min de Pessac</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibilité depuis Pessac */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Facilement Accessible depuis <span className="text-emerald-600">Pessac</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Mon cabinet de sophrologie à Martignas-sur-Jalle est stratégiquement situé pour 
                  desservir facilement les habitants de Pessac et des communes environnantes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-600">
                      <Car className="h-6 w-6" />
                      Accès en Voiture depuis Pessac
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="font-medium">Distance</span>
                        <span className="text-emerald-600 font-bold">12 km</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="font-medium">Temps de trajet</span>
                        <span className="text-emerald-600 font-bold">15 minutes</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="font-medium">Itinéraire</span>
                        <span className="text-emerald-600 font-bold">D1010 direct</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Parking gratuit disponible devant le cabinet. Accès facile depuis le centre de Pessac 
                      via la D1010 (route de Toulouse).
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-600">
                      <Train className="h-6 w-6" />
                      Accès en Transports depuis Pessac
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                        <span className="font-medium">Tram B</span>
                        <span className="text-teal-600 font-bold">Pessac → Bordeaux</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                        <span className="font-medium">Bus 601</span>
                        <span className="text-teal-600 font-bold">Vers Martignas</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                        <span className="font-medium">Temps total</span>
                        <span className="text-teal-600 font-bold">30-35 min</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Connexion possible via les transports en commun TBM. Consultations possibles 
                      en téléconsultation pour plus de flexibilité.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services spécifiques Pessac */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Services Adaptés aux Habitants de <span className="text-emerald-600">Pessac</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  En tant que sophrologue expérimentée, je propose des accompagnements spécifiquement 
                  adaptés aux besoins des habitants de Pessac, notamment les étudiants et professionnels.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {servicesSpecifiquesPessac.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-emerald-100 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-4">{service.price}</div>
                      <p className="text-sm text-gray-600">par séance individuelle</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  💳 <strong>34 mutuelles partenaires</strong> - Remboursement possible
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/contact">
                    Consulter depuis Pessac
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Pessac */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Témoignages d'Habitants de <span className="text-emerald-600">Pessac</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Découvrez les retours de mes patients qui viennent de Pessac et des environs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonialsPessac.map((testimonial, index) => (
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
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Muriel depuis Pessac */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Pourquoi les Habitants de Pessac Choisissent 
                  <span className="text-emerald-600"> Muriel Artigala</span> ?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Proximité de Pessac</h3>
                      <p className="text-gray-600">
                        À seulement 15 minutes de Pessac, le cabinet est facilement accessible 
                        en voiture avec parking gratuit disponible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Expertise Universitaire</h3>
                      <p className="text-gray-600">
                        Spécialisée dans l'accompagnement des étudiants de l'Université de Bordeaux 
                        campus Pessac pour la gestion du stress et des examens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Formation ISEBA Bordeaux</h3>
                      <p className="text-gray-600">
                        Diplômée de l'Institut Supérieur Européen de Bioénergie et d'Acupuncture de Bordeaux, 
                        avec spécialisation CHU Bordeaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Flexibilité Horaires</h3>
                      <p className="text-gray-600">
                        Horaires adaptés aux contraintes des étudiants et professionnels de Pessac, 
                        avec possibilité de téléconsultation.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-white border-l-4 border-l-emerald-600">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-emerald-600">Contact Direct</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">06 89 15 50 21</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <Mail className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">contact@muriel-artigala.fr</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">15 min de Pessac</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">Lun-Ven 10h-19h30</span>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mt-6" asChild>
                      <Link href="/contact">
                        Prendre RDV depuis Pessac
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
