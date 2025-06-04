import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Users, 
  Video, 
  Building, 
  Calendar, 
  CheckCircle, 
  Clock,
  Euro,
  Heart,
  Zap,
  Target,
  Shield,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function Prestations() {
  const services = [
    {
      icon: Users,
      title: "Séances individuelles",
      description: "Un accompagnement personnalisé pour atteindre vos objectifs",
      duration: "1h",
      price: "40€",
      features: [
        "Bilan complet initial gratuit",
        "Programme sur mesure",
        "Suivi personnalisé",
        "Exercices à emporter",
        "Support audio inclus"
      ],
      benefits: [
        "Gestion du stress et de l'anxiété",
        "Amélioration du sommeil",
        "Confiance en soi",
        "Préparation aux examens",
        "Accompagnement périnatal"
      ],
      color: "purple",
      href: "/prestations/individuel"
    },
    {
      icon: Users,
      title: "Ateliers de groupe",
      description: "Partagez l'expérience sophrologique en petit groupe",
      duration: "1h30",
      price: "30€",
      features: [
        "Maximum 8 personnes",
        "Thématiques variées",
        "Tarifs préférentiels",
        "Ambiance conviviale",
        "Supports inclus"
      ],
      benefits: [
        "Relaxation profonde",
        "Gestion des émotions",
        "Dynamique de groupe",
        "Découverte ludique",
        "Partage d'expériences"
      ],
      color: "blue",
      href: "/prestations/groupe"
    },
    {
      icon: Video,
      title: "Consultations en ligne",
      description: "L'accompagnement sophrologique où que vous soyez",
      duration: "45min",
      price: "40€",
      features: [
        "Plateforme sécurisée",
        "Horaires flexibles",
        "Même qualité qu'en présentiel",
        "Enregistrement sur demande",
        "Support technique inclus"
      ],
      benefits: [
        "Confort de votre domicile",
        "Gain de temps",
        "Suivi régulier facilité",
        "Accessibilité géographique",
        "Tarif avantageux"
      ],
      color: "green",
      href: "/prestations/en-ligne"
    },
    {
      icon: Building,
      title: "Sophrologie en entreprise",
      description: "Améliorez le bien-être et la performance de vos équipes",
      duration: "Sur mesure",
      price: "Sur devis",
      features: [
        "Analyse des besoins",
        "Programme personnalisé",
        "Ateliers collectifs",
        "Séances individuelles",
        "Suivi et évaluation"
      ],
      benefits: [
        "Réduction du stress au travail",
        "Amélioration de la cohésion",
        "Prévention du burn-out",
        "Augmentation de la productivité",
        "Bien-être des salariés"
      ],
      color: "orange",
      href: "/prestations/entreprise"
    }
  ]

  const packages = [
    {
      name: "Découverte",
      price: "40€",
      duration: "1 séance",
      description: "Parfait pour découvrir la sophrologie",
      features: [
        "Bilan initial complet",
        "Première séance personnalisée",
        "Plan d'accompagnement",
        "Exercices à pratiquer"
      ],
      popular: false
    },
    {
      name: "Essentiel",
      price: "180€",
      duration: "5 séances",
      description: "L'accompagnement idéal pour des résultats durables",
      features: [
        "Tout de l'offre Découverte",
        "4 séances de suivi",
        "Supports audio personnalisés",
        "Suivi par email",
        "Économie de 20€"
      ],
      popular: true
    },
    {
      name: "Transformation",
      price: "360€",
      duration: "10 séances",
      description: "Pour un changement profond et durable",
      features: [
        "Tout de l'offre Essentiel",
        "5 séances supplémentaires",
        "Bilan intermédiaire",
        "Accès espace client",
        "Économie de 40€"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Section Héro */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                prestations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Un accompagnement sur mesure pour répondre à tous vos besoins. 
              Découvrez nos différentes formules et trouvez celle qui vous correspond.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/reservation">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver une séance
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Services détaillés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isReverse = index % 2 === 1
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReverse ? 'lg:order-2' : ''}>
                    <div className="mb-6">
                      <Icon className={`h-12 w-12 text-${service.color}-600 mb-4`} />
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Ce qui est inclus
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="h-5 w-5 text-blue-500 mr-2" />
                          Bénéfices
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Euro className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{service.price}</span>
                      </div>
                    </div>

                    <Button className={`bg-${service.color}-600 hover:bg-${service.color}-700`} asChild>
                      <Link href={service.href}>
                        En savoir plus
                      </Link>
                    </Button>
                  </div>

                  <div className={isReverse ? 'lg:order-1' : ''}>
                    <Card className="p-6 shadow-lg">
                      <CardContent className="pt-6">
                        <div className="text-center mb-6">
                          <Icon className={`h-16 w-16 text-${service.color}-600 mx-auto mb-4`} />
                          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Durée</span>
                            <span className="font-semibold">{service.duration}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Tarif</span>
                            <span className="font-semibold text-lg">{service.price}</span>
                          </div>
                        </div>

                        <Button className="w-full mt-6" variant="outline" asChild>
                          <Link href="/reservation">
                            Réserver maintenant
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Forfaits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos forfaits avantageux
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Économisez en choisissant un forfait adapté à vos besoins et bénéficiez 
              d'un suivi personnalisé sur la durée.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-purple-500 border-2 shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/reservation">
                      Choisir ce forfait
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mutuelles partenaires */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Remboursement par les mutuelles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Muriel Artigala est partenaire de 34 mutuelles. Vos séances peuvent être 
              partiellement ou totalement remboursées selon votre contrat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Euro className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">34 mutuelles partenaires</h3>
                <p className="text-sm text-gray-600">
                  Remboursement possible selon votre contrat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Factures fournies</h3>
                <p className="text-sm text-gray-600">
                  Factures détaillées pour vos remboursements
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Sophrologie reconnue</h3>
                <p className="text-sm text-gray-600">
                  Pratique de plus en plus prise en charge
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Vérifiez auprès de votre mutuelle les conditions de remboursement pour la sophrologie.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Demander des informations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Garanties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos engagements qualité
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Satisfaction garantie</h3>
              <p className="text-sm text-gray-600">Remboursement si non satisfait</p>
            </div>
            
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Praticienne certifiée</h3>
              <p className="text-sm text-gray-600">Diplômes reconnus</p>
            </div>
            
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Résultats rapides</h3>
              <p className="text-sm text-gray-600">Premiers bénéfices dès la 1ère séance</p>
            </div>
            
            <div className="text-center">
              <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Accompagnement humain</h3>
              <p className="text-sm text-gray-600">Écoute et bienveillance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt(e) à commencer ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Choisissez la prestation qui vous correspond et réservez votre première séance.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/reservation">
              <Calendar className="mr-2 h-5 w-5" />
              Réserver ma séance
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
