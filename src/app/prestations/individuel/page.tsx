import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  User, 
  Clock, 
  Euro, 
  CheckCircle, 
  Heart, 
  Brain, 
  Target,
  Calendar,
  Star,
  Award,
  Zap,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function SeancesIndividuelles() {
  const benefits = [
    {
      icon: Brain,
      title: "Gestion du stress et de l'anxiété",
      description: "Apprenez à gérer vos émotions et à retrouver un état de calme profond"
    },
    {
      icon: Heart,
      title: "Amélioration du sommeil",
      description: "Retrouvez un sommeil réparateur grâce aux techniques de relaxation"
    },
    {
      icon: Target,
      title: "Confiance en soi",
      description: "Développez votre estime personnelle et votre assurance"
    },
    {
      icon: Zap,
      title: "Préparation aux examens",
      description: "Optimisez vos capacités de concentration et de mémorisation"
    },
    {
      icon: User,
      title: "Accompagnement périnatal",
      description: "Vivez sereinement votre grossesse et votre accouchement"
    },
    {
      icon: Shield,
      title: "Gestion de la douleur",
      description: "Apprenez à mieux gérer et accepter les sensations douloureuses"
    }
  ]

  const process = [
    {
      step: 1,
      title: "Bilan initial gratuit",
      description: "Nous échangeons sur vos besoins, attentes et objectifs (15min offertes)",
      duration: "15 minutes"
    },
    {
      step: 2,
      title: "Première séance",
      description: "Découverte de la sophrologie et première pratique adaptée",
      duration: "60 minutes"
    },
    {
      step: 3,
      title: "Suivi personnalisé",
      description: "Séances sur mesure avec évolution progressive vers vos objectifs",
      duration: "60 minutes/séance"
    },
    {
      step: 4,
      title: "Autonomie",
      description: "Vous maîtrisez les techniques et continuez en autonomie",
      duration: "En continu"
    }
  ]

  const packages = [
    {
      name: "Séance découverte",
      price: "70€",
      originalPrice: null,
      duration: "1 séance de 60min",
      description: "Parfait pour découvrir la sophrologie et ses bienfaits",
      features: [
        "Bilan initial gratuit (15min)",
        "Première séance personnalisée",
        "Plan d'accompagnement proposé",
        "Exercices à pratiquer chez vous",
        "Support audio offert"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Forfait Essentiel",
      price: "320€",
      originalPrice: "350€",
      duration: "5 séances",
      description: "L'accompagnement idéal pour des résultats durables",
      features: [
        "Tout de l'offre Découverte",
        "4 séances de suivi personnalisées",
        "Supports audio sur mesure",
        "Suivi par email entre séances",
        "Économie de 30€",
        "Flexibilité dans la programmation"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Forfait Transformation",
      price: "600€",
      originalPrice: "700€",
      duration: "10 séances",
      description: "Pour un changement profond et durable",
      features: [
        "Tout des forfaits précédents",
        "Accompagnement complet sur 3 mois",
        "Séances de renforcement incluses",
        "Bilan intermédiaire et final",
        "Économie de 100€",
        "Accès privilégié aux ateliers"
      ],
      popular: false,
      color: "green"
    }
  ]

  const testimonials = [
    {
      name: "Marie L.",
      location: "Paris",
      rating: 5,
      comment: "Grâce aux séances individuelles, j'ai retrouvé confiance en moi. L'approche personnalisée de Sarah a fait toute la différence.",
      issue: "Confiance en soi"
    },
    {
      name: "Thomas R.",
      location: "Lyon",
      rating: 5,
      comment: "Mes problèmes de sommeil ont disparu après seulement 4 séances. Les techniques apprises sont devenues des automatismes.",
      issue: "Troubles du sommeil"
    },
    {
      name: "Julie M.",
      location: "Marseille",
      rating: 5,
      comment: "L'accompagnement pendant ma grossesse a été extraordinaire. J'ai vécu un accouchement serein grâce à la sophrologie.",
      issue: "Accompagnement périnatal"
    }
  ]

  const faqs = [
    {
      question: "Combien de séances sont nécessaires ?",
      answer: "Cela dépend de vos objectifs. En général, 5 à 8 séances suffisent pour acquérir l'autonomie et observer des changements durables. Le bilan initial nous permettra d'établir un plan personnalisé."
    },
    {
      question: "À quelle fréquence faire les séances ?",
      answer: "Je recommande une séance par semaine au début, puis nous pouvons espacer selon vos progrès. La régularité est importante pour ancrer les nouvelles habitudes."
    },
    {
      question: "Que se passe-t-il si je dois annuler ?",
      answer: "Les annulations sont possibles jusqu'à 24h avant le rendez-vous. Au-delà, la séance est due. En cas de force majeure, nous trouvons toujours une solution adaptée."
    },
    {
      question: "Les séances sont-elles remboursées ?",
      answer: "Certaines mutuelles remboursent les séances de sophrologie. Je vous fournis une facture détaillée pour faciliter vos démarches de remboursement."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <User className="w-4 h-4 mr-2" />
            Accompagnement personnalisé
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Séances <span className="text-purple-600">Individuelles</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Un accompagnement sophrologique sur mesure, adapté à vos besoins spécifiques 
            et à votre rythme pour atteindre vos objectifs de bien-être.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-purple-600">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">60 minutes</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-purple-600">
              <Euro className="w-5 h-5" />
              <span className="font-semibold">À partir de 70€</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-purple-600">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Bilan initial gratuit</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/reservation">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver une séance
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Bilan gratuit
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
              Pour quels <span className="text-purple-600">objectifs</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La sophrologie individuelle s'adapte à tous vos besoins et vous accompagne 
              vers un mieux-être durable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
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

      {/* Process Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça <span className="text-purple-600">fonctionne</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un accompagnement progressif et structuré pour vous mener vers l'autonomie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <Badge variant="outline" className="text-purple-600 border-purple-200">
                  {step.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre <span className="text-purple-600">formule</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des tarifs adaptés à vos besoins avec des économies sur les forfaits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 ${pkg.popular ? 'border-purple-500 shadow-lg scale-105' : 'border-gray-200'} transition-all hover:shadow-lg`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Le plus populaire
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                  <div className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{pkg.duration}</p>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
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
                    className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'}`}
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
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de <span className="text-purple-600">réussite</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment la sophrologie a transformé la vie de mes consultants.
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
                  <Badge variant="outline" className="w-fit text-purple-600 border-purple-200">
                    {testimonial.issue}
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
                    <Award className="w-8 h-8 text-purple-600" />
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
              Questions <span className="text-purple-600">fréquentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Toutes les réponses à vos questions sur les séances individuelles.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt(e) à commencer votre transformation ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Commencez par un bilan gratuit de 15 minutes pour définir ensemble vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">
                <User className="w-5 h-5 mr-2" />
                Bilan gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
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
