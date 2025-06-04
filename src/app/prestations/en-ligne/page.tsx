import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Video, 
  Clock, 
  Euro, 
  CheckCircle, 
  Wifi, 
  Shield, 
  Home,
  Calendar,
  Star,
  Smartphone,
  Headphones,
  Globe,
  Lock,
  Download,
  Settings
} from 'lucide-react'
import Link from 'next/link'

export default function ConsultationsEnLigne() {
  const advantages = [
    {
      icon: Home,
      title: "Confort de votre domicile",
      description: "Pratiquez dans votre environnement familier, sans contrainte de déplacement"
    },
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Créneaux adaptés à votre emploi du temps, y compris le soir et le week-end"
    },
    {
      icon: Globe,
      title: "Accessibilité géographique", 
      description: "Suivez vos séances où que vous soyez dans le monde"
    },
    {
      icon: Euro,
      title: "Tarif avantageux",
      description: "Prix réduit par rapport aux consultations en présentiel"
    },
    {
      icon: Shield,
      title: "Même qualité qu'en présentiel",
      description: "Accompagnement personnalisé avec la même attention et efficacité"
    },
    {
      icon: Download,
      title: "Enregistrements disponibles",
      description: "Possibilité d'enregistrer vos séances pour les réécouter"
    }
  ]

  const technicalRequirements = [
    {
      icon: Wifi,
      title: "Connexion internet stable",
      description: "Débit minimum de 2 Mbps pour une qualité optimale"
    },
    {
      icon: Video,
      title: "Caméra et microphone",
      description: "Webcam intégrée ou externe, micro-casque recommandé"
    },
    {
      icon: Smartphone,
      title: "Appareil compatible",
      description: "Ordinateur, tablette ou smartphone récent"
    },
    {
      icon: Headphones,
      title: "Environnement calme",
      description: "Espace tranquille pour vous concentrer pleinement"
    }
  ]

  const platforms = [
    {
      name: "Zoom",
      description: "Plateforme principale, sécurisée et simple d'utilisation",
      features: ["Salle d'attente virtuelle", "Enregistrement possible", "Chat intégré"],
      recommended: true
    },
    {
      name: "Google Meet",
      description: "Alternative disponible, intégration avec Google Calendar",
      features: ["Accès direct par navigateur", "Partage d'écran", "Sous-titres automatiques"],
      recommended: false
    },
    {
      name: "WhatsApp Video",
      description: "Pour les consultations express ou urgentes",
      features: ["Appel instantané", "Cryptage de bout en bout", "Application mobile"],
      recommended: false
    }
  ]

  const pricing = [
    {
      name: "Séance découverte",
      price: "60€",
      originalPrice: "70€",
      duration: "45 minutes",
      description: "Première séance pour découvrir la sophrologie en ligne",
      features: [
        "Test technique préalable",
        "Bilan complet de vos besoins",
        "Première pratique guidée",
        "Conseils personnalisés",
        "Enregistrement audio offert"
      ],
      popular: false
    },
    {
      name: "Forfait Régulier",
      price: "280€",
      originalPrice: "350€",
      duration: "5 séances de 45min",
      description: "Accompagnement idéal pour des résultats durables",
      features: [
        "Tout de l'offre Découverte",
        "4 séances de suivi personnalisées",
        "Supports audio sur mesure",
        "Suivi par email illimité",
        "Économie de 70€",
        "Flexibilité maximale"
      ],
      popular: true
    },
    {
      name: "Accompagnement Intensif",
      price: "520€",
      originalPrice: "700€",
      duration: "10 séances de 45min",
      description: "Programme complet pour une transformation profonde",
      features: [
        "Tout des forfaits précédents",
        "Accompagnement sur 3 mois",
        "Séances de renforcement",
        "Bilan intermédiaire et final",
        "Économie de 180€",
        "Support technique prioritaire"
      ],
      popular: false
    }
  ]

  const sessionFlow = [
    {
      step: 1,
      title: "Préparation",
      description: "Installez-vous confortablement dans un endroit calme",
      icon: Settings
    },
    {
      step: 2,
      title: "Connexion",
      description: "Rejoignez la salle d'attente virtuelle 5 minutes avant",
      icon: Video
    },
    {
      step: 3,
      title: "Accueil",
      description: "Temps d'échange sur votre état du moment",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Pratique",
      description: "Séance de sophrologie guidée et personnalisée",
      icon: Headphones
    },
    {
      step: 5,
      title: "Bilan",
      description: "Retour sur la séance et conseils pour la suite",
      icon: Star
    }
  ]

  const testimonials = [
    {
      name: "Anne-Marie P.",
      location: "Canada",
      rating: 5,
      comment: "Vivant à l'étranger, les consultations en ligne m'ont permis de continuer mon suivi. La qualité est identique au présentiel !",
      context: "Expatriée"
    },
    {
      name: "Jean-Luc R.",
      location: "Lyon",
      rating: 5,
      comment: "Avec mes horaires de travail décalés, les créneaux en ligne sont parfaits. Je peux faire mes séances même tard le soir.",
      context: "Travailleur de nuit"
    },
    {
      name: "Martine D.",
      location: "Bordeaux",
      rating: 5,
      comment: "Plus de stress pour trouver une place de parking ! Je pratique tranquillement chez moi, c'est un vrai plus.",
      context: "Stress urbain"
    }
  ]

  const faqs = [
    {
      question: "La sophrologie en ligne est-elle aussi efficace ?",
      answer: "Absolument ! Les études montrent que l'efficacité est équivalente au présentiel. L'important est votre engagement et la qualité de l'accompagnement, qui reste identique."
    },
    {
      question: "Que faire si j'ai des problèmes techniques ?",
      answer: "Un support technique est disponible avant et pendant la séance. Nous testons systématiquement la connexion avant la première consultation et avons toujours une solution de secours."
    },
    {
      question: "Puis-je enregistrer les séances ?",
      answer: "Oui, avec votre accord, nous pouvons enregistrer la partie pratique de la séance pour que vous puissiez la réécouter. Cet enregistrement vous appartient exclusivement."
    },
    {
      question: "Comment garantissez-vous la confidentialité ?",
      answer: "Nous utilisons des plateformes sécurisées avec cryptage de bout en bout. Toutes les communications respectent le secret professionnel au même titre qu'en présentiel."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Video className="w-4 h-4 mr-2" />
            Consultation à distance
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Consultations <span className="text-green-600">en Ligne</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bénéficiez d'un accompagnement sophrologique professionnel depuis chez vous. 
            Même qualité, plus de flexibilité, tarifs avantageux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-green-600">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">45 minutes</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-green-600">
              <Euro className="w-5 h-5" />
              <span className="font-semibold">À partir de 60€</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-green-600">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Partout dans le monde</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/reservation">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver en ligne
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Video className="w-5 h-5 mr-2" />
                Test technique gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les <span className="text-green-600">avantages</span> du digital
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La sophrologie en ligne vous offre une nouvelle liberté tout en gardant la même efficacité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prérequis <span className="text-green-600">techniques</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple et accessible, vous avez probablement déjà tout ce qu'il faut !
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalRequirements.map((requirement, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <requirement.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{requirement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Settings className="w-5 h-5 mr-2" />
                Test technique gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plateformes <span className="text-green-600">sécurisées</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les meilleures technologies pour garantir qualité et confidentialité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className={`border-2 ${platform.recommended ? 'border-green-500 bg-green-50' : 'border-gray-200'} transition-colors`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    {platform.recommended && (
                      <Badge className="bg-green-600 text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Recommandé
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session Flow */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Déroulement d'une <span className="text-green-600">séance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un protocole rodé pour une expérience fluide et efficace.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {sessionFlow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-6 h-6 text-green-600" />
                  </div>
                  {index < sessionFlow.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tarifs <span className="text-green-600">avantageux</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des prix réduits pour la même qualité d'accompagnement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-green-500 shadow-lg scale-105' : 'border-gray-200'} transition-all hover:shadow-lg`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Le plus populaire
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{plan.duration}</p>
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
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'}`}
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
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Retours d'<span className="text-green-600">expérience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ce que disent ceux qui ont franchi le pas du digital.
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
                  <Badge variant="outline" className="w-fit text-green-600 border-green-200">
                    {testimonial.context}
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
                    <Video className="w-8 h-8 text-green-600" />
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
              Questions <span className="text-green-600">fréquentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Toutes les réponses sur les consultations en ligne.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    {faq.question}
                  </CardTitle>
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt(e) pour votre première séance en ligne ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Testez gratuitement la technologie avant votre première consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">
                <Settings className="w-5 h-5 mr-2" />
                Test technique gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/reservation">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver maintenant
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
