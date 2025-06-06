import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Users, 
  Clock, 
  Euro, 
  CheckCircle, 
  Heart, 
  Brain, 
  Smile,
  Calendar,
  Star,
  MapPin,
  UserPlus,
  Coffee,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function AteliersGroupe() {
  const benefits = [
    {
      icon: Heart,
      title: "Relaxation profonde",
      description: "Techniques de détente collective pour un lâcher-prise optimal"
    },
    {
      icon: Brain,
      title: "Gestion des émotions",
      description: "Apprendre à accueillir et réguler ses émotions en groupe"
    },
    {
      icon: Users,
      title: "Dynamique de groupe",
      description: "Bénéficier de l'énergie collective et du soutien mutuel"
    },
    {
      icon: Smile,
      title: "Découverte ludique",
      description: "Approche conviviale et interactive de la sophrologie"
    },
    {
      icon: Coffee,
      title: "Partage d'expériences",
      description: "Échanger avec d'autres participants dans un cadre bienveillant"
    },
    {
      icon: Sparkles,
      title: "Moment pour soi",
      description: "S'accorder une pause bien-être dans un environnement apaisant"
    }
  ]

  const workshops = [
    {
      title: "Gestion du stress",
      description: "Techniques pour évacuer les tensions et retrouver le calme",
      duration: "1h30",
      participants: "6-8 personnes",
      frequency: "Hebdomadaire",
      color: "blue",
      icon: Brain
    },
    {
      title: "Sommeil réparateur",
      description: "Retrouver un sommeil de qualité grâce à la relaxation",
      duration: "1h30",
      participants: "6-8 personnes", 
      frequency: "Bi-mensuel",
      color: "purple",
      icon: Heart
    },
    {
      title: "Confiance en soi",
      description: "Développer l'estime de soi et l'affirmation personnelle",
      duration: "1h30",
      participants: "6-8 personnes",
      frequency: "Mensuel",
      color: "green",
      icon: Sparkles
    },
    {
      title: "Préparation aux examens",
      description: "Optimiser ses capacités de concentration et gérer le stress des épreuves",
      duration: "1h30",
      participants: "6-8 personnes",
      frequency: "Selon calendrier",
      color: "orange",
      icon: Brain
    }
  ]

  const schedules = [
    {
      day: "Lundi",
      time: "18h30 - 20h00",
      theme: "Gestion du stress",
      level: "Tous niveaux",
      available: true
    },
    {
      day: "Mercredi", 
      time: "12h30 - 14h00",
      theme: "Pause déjeuner zen",
      level: "Débutant",
      available: true
    },
    {
      day: "Samedi",
      time: "10h00 - 11h30",
      theme: "Confiance en soi",
      level: "Intermédiaire",
      available: false
    },
    {
      day: "Samedi",
      time: "14h00 - 15h30",
      theme: "Sommeil réparateur",
      level: "Tous niveaux",
      available: true
    }
  ]

  const pricing = [
    {
      name: "Séance découverte",
      price: "30€",
      description: "Parfait pour découvrir l'expérience de groupe",
      features: [
        "Une séance d'1h30",
        "Maximum 8 participants",
        "Thématique au choix",
        "Support écrit inclus",
        "Ambiance conviviale"
      ],
      popular: false
    },
    {
      name: "Carte 5 séances",
      price: "140€",
      originalPrice: "150€",
      description: "Formule économique pour un suivi régulier",
      features: [
        "5 séances d'1h30",
        "Valable 3 mois",
        "Choix des thématiques", 
        "Supports audio offerts",
        "Économie de 10€",
        "Flexibilité totale"
      ],
      popular: true
    },
    {
      name: "Abonnement mensuel",
      price: "100€/mois",
      description: "Accès illimité à tous les ateliers",
      features: [
        "Ateliers illimités",
        "Accès à tous les créneaux",
        "Priorité de réservation",
        "Ateliers spéciaux inclus",
        "Communauté exclusive",
        "Sans engagement"
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Claire D.",
      location: "Lyon",
      rating: 5,
      comment: "L'ambiance des ateliers est formidable ! Le partage avec les autres participants apporte une dimension supplémentaire à la pratique.",
      workshop: "Gestion du stress"
    },
    {
      name: "Pierre M.",
      location: "Paris",
      rating: 5,
      comment: "J'étais réticent au début à pratiquer en groupe, mais l'énergie collective est vraiment bénéfique. Je recommande vivement !",
      workshop: "Confiance en soi"
    },
    {
      name: "Sophie L.",
      location: "Marseille", 
      rating: 5,
      comment: "Les ateliers sommeil m'ont aidé à retrouver un rythme de vie équilibré. L'approche de Sarah est douce et bienveillante.",
      workshop: "Sommeil réparateur"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Users className="w-4 h-4 mr-2" />
            Expérience collective
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ateliers de <span className="text-blue-600">Groupe</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez la puissance de la sophrologie en groupe dans une ambiance conviviale 
            et bienveillante. Partagez cette expérience transformatrice avec d'autres participants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">1h30</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-blue-600">
              <Users className="w-5 h-5" />
              <span className="font-semibold">6-8 participants max</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-blue-600">
              <Euro className="w-5 h-5" />
              <span className="font-semibold">30€/séance</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/reservation">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver un atelier
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Voir les horaires
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
              Pourquoi choisir les <span className="text-blue-600">ateliers</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'expérience de groupe apporte une dimension unique à la pratique sophrologique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-blue-600">thématiques</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chaque atelier est conçu autour d'une thématique spécifique pour répondre à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-${workshop.color}-100 rounded-lg flex items-center justify-center`}>
                      <workshop.icon className={`w-6 h-6 text-${workshop.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{workshop.title}</CardTitle>
                      <Badge variant="outline" className={`text-${workshop.color}-600 border-${workshop.color}-200`}>
                        {workshop.frequency}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {workshop.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {workshop.participants}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planning des <span className="text-blue-600">ateliers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez tous les créneaux disponibles et réservez votre place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedules.map((schedule, index) => (
              <Card key={index} className={`border-2 ${schedule.available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{schedule.day}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{schedule.time}</p>
                    </div>
                    <Badge variant={schedule.available ? "default" : "destructive"}>
                      {schedule.available ? "Disponible" : "Complet"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">{schedule.theme}</p>
                    <p className="text-sm text-gray-600">Niveau : {schedule.level}</p>
                    {schedule.available && (
                      <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href="/reservation">
                          <UserPlus className="w-4 h-4 mr-2" />
                          Réserver cette séance
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tarifs <span className="text-blue-600">préférentiels</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des formules avantageuses pour une pratique régulière en groupe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative border-2 bg-white ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'} transition-all hover:shadow-lg`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Le plus choisi
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    <Link href="/reservation">
                      <Calendar className="w-4 h-4 mr-2" />
                      Choisir cette formule
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              L'expérience <span className="text-blue-600">partagée</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ce que disent les participants de nos ateliers de groupe.
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
                  <Badge variant="outline" className="w-fit text-blue-600 border-blue-200">
                    {testimonial.workshop}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la communauté sophrologique
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez l'énergie unique des ateliers de groupe et partagez cette expérience transformatrice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/reservation">
                <UserPlus className="w-5 h-5 mr-2" />
                Réserver un atelier
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Voir les créneaux
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
