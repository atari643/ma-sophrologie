import React from 'react'
import Link from 'next/link'
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
  Plane,
  Briefcase
} from 'lucide-react'

export const metadata = {
  title: 'Sophrologue à Mérignac | Muriel Artigala - Sophrologie Aéroport Bordeaux',
  description: 'Sophrologue diplômée ISEBA pour Mérignac et aéroport de Bordeaux. Muriel Artigala reçoit à 20min de Mérignac. Gestion stress professionnel, burn-out, préparation concours.',
  keywords: 'sophrologue Mérignac, sophrologie Mérignac, stress aéroport Bordeaux, burn-out Mérignac, Muriel Artigala, sophrologie entreprise Mérignac',
  openGraph: {
    title: 'Sophrologue à Mérignac | Muriel Artigala - Sophrologie Aéroport Bordeaux',
    description: 'Sophrologue diplômée ISEBA pour Mérignac et aéroport de Bordeaux. Gestion stress professionnel, burn-out, préparation concours.',
    url: 'https://muriel-artigala.fr/sophrologue-merignac',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophrologue à Mérignac | Muriel Artigala',
    description: 'Sophrologue spécialisée pour les professionnels de Mérignac et de l\'aéroport de Bordeaux.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/sophrologue-merignac'
  }
}

export default function SophrologueMerignac() {
  const testimonialsMerignac = [
    {
      name: "Michel D.",
      location: "Mérignac Aéroport",
      rating: 5,
      text: "Travaillant à l'aéroport, le stress était constant. Muriel m'a aidé à retrouver sérénité. Le trajet depuis Mérignac est très pratique."
    },
    {
      name: "Caroline P.",
      location: "Mérignac Centre",
      rating: 5,
      text: "Excellent accompagnement pour mon burn-out. Muriel comprend parfaitement les enjeux professionnels. Je recommande vivement."
    },
    {
      name: "David L.",
      location: "Mérignac Capeyron",
      rating: 5,
      text: "Préparation efficace pour mes concours d'aviation civile. Les techniques de sophrologie ont fait la différence."
    }
  ]

  const servicesMerignac = [
    {
      title: "Stress Professionnel Aéroportuaire",
      description: "Accompagnement spécialisé pour les professionnels de l'aéroport de Bordeaux-Mérignac",
      icon: <Plane className="h-6 w-6" />,
      price: "40€"
    },
    {
      title: "Burn-out et Épuisement",
      description: "Prise en charge complète du burn-out avec techniques de récupération adaptées",
      icon: <Briefcase className="h-6 w-6" />,
      price: "40€"
    },
    {
      title: "Préparation Concours Aviation",
      description: "Optimisation des performances pour les concours et formations aéronautiques",
      icon: <Award className="h-6 w-6" />,
      price: "40€"
    }
  ]

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Header />
        
        {/* Hero Section Mérignac */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
                <MapPin className="h-4 w-4 mr-2" />
                Dessert Mérignac et l'aéroport
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Votre <span className="text-blue-600">Sophrologue</span> pour 
                <br />les habitants de <span className="text-indigo-600">Mérignac</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Muriel Artigala</strong>, sophrologue diplômée ISEBA Bordeaux, vous reçoit à Martignas-sur-Jalle, 
                <strong> à seulement 20 minutes de Mérignac</strong>. Spécialisée dans l'accompagnement des professionnels 
                de l'aéroport et la gestion du stress en milieu professionnel intense.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    Prendre RDV depuis Mérignac
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/prestations">
                    Mes spécialisations
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>06 89 15 50 21</span>
                </div>
                <div className="flex items-center gap-2">
                  <Route className="h-4 w-4 text-blue-600" />
                  <span>20min de Mérignac</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibilité depuis Mérignac */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Accès Privilégié depuis <span className="text-blue-600">Mérignac</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Idéalement situé pour les habitants de Mérignac et les professionnels de l'aéroport de Bordeaux-Mérignac, 
                  mon cabinet offre un accès rapide et pratique.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-600">
                      <Car className="h-6 w-6" />
                      Depuis Mérignac Centre
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Distance</span>
                        <span className="text-blue-600 font-bold">16 km</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Temps de trajet</span>
                        <span className="text-blue-600 font-bold">20 minutes</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Itinéraire</span>
                        <span className="text-blue-600 font-bold">A630 → D1010</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-600">
                      <Plane className="h-6 w-6" />
                      Depuis l'Aéroport
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                        <span className="font-medium">Distance</span>
                        <span className="text-indigo-600 font-bold">18 km</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                        <span className="font-medium">Temps de trajet</span>
                        <span className="text-indigo-600 font-bold">22 minutes</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                        <span className="font-medium">Parkings</span>
                        <span className="text-indigo-600 font-bold">Gratuit sur place</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  🛫 Spécialement Adapté aux Professionnels de l'Aéroport
                </h3>
                <p className="text-gray-700 text-center max-w-3xl mx-auto">
                  Comprenant les contraintes horaires du milieu aéroportuaire, je propose des créneaux 
                  adaptés aux rotations et aux horaires atypiques des professionnels de l'aviation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services spécifiques Mérignac */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Expertise pour les Professionnels de <span className="text-blue-600">Mérignac</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Spécialisée dans l'accompagnement des secteurs d'activité présents à Mérignac : 
                  aéronautique, transport, logistique et services aéroportuaires.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {servicesMerignac.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                      <p className="text-sm text-gray-600">par séance individuelle</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  Secteurs d'Activité Accompagnés à Mérignac
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600 text-lg">Aéronautique & Aviation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Personnels navigants (PNC, PNT)</li>
                      <li>• Contrôleurs aériens</li>
                      <li>• Techniciens aéronautiques</li>
                      <li>• Agents de piste</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-indigo-600 text-lg">Services & Logistique</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Agents de sûreté aéroportuaire</li>
                      <li>• Personnel douanier</li>
                      <li>• Logistique et fret</li>
                      <li>• Services aéroportuaires</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Mérignac */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Retours de Professionnels de <span className="text-blue-600">Mérignac</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Découvrez les témoignages de professionnels qui ont retrouvé sérénité et performance
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonialsMerignac.map((testimonial, index) => (
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

        {/* Spécialisation burn-out secteur aéronautique */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Spécialisation <span className="text-indigo-600">Burn-out</span> Professionnel
                </h2>
                <p className="text-lg text-gray-600">
                  Expertise reconnue dans l'accompagnement du burn-out en milieu aéronautique et transport
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Compréhension du Secteur</h3>
                      <p className="text-gray-600">
                        Connaissance approfondie des contraintes spécifiques aux métiers de l'aéronautique : 
                        horaires décalés, responsabilités, pression sécuritaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Techniques Adaptées</h3>
                      <p className="text-gray-600">
                        Méthodes sophrologiques spécifiquement adaptées aux environnements 
                        bruyants et stressants comme l'aéroport.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Horaires Flexibles</h3>
                      <p className="text-gray-600">
                        Consultations adaptées aux plannings atypiques des professionnels 
                        de l'aviation et du transport.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Suivi Personnalisé</h3>
                      <p className="text-gray-600">
                        Accompagnement sur mesure avec techniques de récupération rapide 
                        adaptées aux courtes pauses professionnelles.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-l-4 border-l-blue-600">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-blue-600">Consultation Spécialisée</CardTitle>
                    <CardDescription className="text-base">
                      Premier entretien approfondi pour comprendre votre environnement professionnel
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-blue-600 text-white rounded-lg">
                      <div className="text-3xl font-bold mb-2">40€</div>
                      <p className="text-blue-100">Séance individuelle</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Analyse personnalisée de votre situation</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Techniques adaptées à votre métier</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Outils pratiques pour le quotidien</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6" asChild>
                      <Link href="/contact">
                        Consultation depuis Mérignac
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
