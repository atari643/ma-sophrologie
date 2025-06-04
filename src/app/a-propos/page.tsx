import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Award, 
  BookOpen, 
  Calendar, 
  Heart, 
  Star, 
  Users,
  CheckCircle,
  GraduationCap,
  Medal
} from 'lucide-react'
import Link from 'next/link'

export default function APropos() {
  const certifications = [
    {
      title: "Diplôme de Sophrologue",
      institution: "École de Sophrologie ISEBA de Bordeaux",
      year: "Formation de 2 ans",
      icon: GraduationCap
    },
    {
      title: "Spécialisation en techniques de respiration",
      institution: "Institut des Métiers de la Santé du CHU de Bordeaux",
      year: "Formation spécialisée",
      icon: Medal
    },
    {
      title: "Sophrologue Certifiée",
      institution: "Praticienne en activité depuis plusieurs années",
      year: "SIRET: 94823934800014",
      icon: Award
    }
  ]

  const timeline = [
    {
      year: "Formation",
      title: "École de Sophrologie ISEBA",
      description: "Formation diplômante de 2 ans à l'école de Sophrologie ISEBA de Bordeaux."
    },
    {
      year: "Spécialisation",
      title: "Techniques de respiration",
      description: "Spécialisation en techniques de respiration à l'Institut des Métiers de la Santé du CHU de Bordeaux."
    },
    {
      year: "Installation",
      title: "Cabinet à Martignas-sur-Jalle",
      description: "Ouverture du cabinet au 120 avenue de Saint-Emilion, 33127 Martignas-sur-Jalle."
    },
    {
      year: "Aujourd'hui",
      title: "Accompagnement personnalisé",
      description: "Accompagnement bienveillant des adultes, enfants, adolescents et entreprises avec 34 mutuelles partenaires."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Section Héro */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                À propos de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Muriel Artigala
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sophrologue diplômée de l'école ISEBA de Bordeaux, je vous accompagne avec bienveillance 
                et professionnalisme dans votre quête de bien-être et d'harmonie intérieure.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">500+</span> clients accompagnés
                </p>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/reservation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/api/placeholder/500/600" 
                  alt="Muriel Artigala - Sophrologue"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Ma philosophie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ma philosophie
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              La sophrologie est bien plus qu'une technique de relaxation. C'est un art de vivre 
              qui permet de développer la conscience de soi et de ses capacités. Mon approche 
              personnalisée vous accompagne vers un mieux-être durable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bienveillance</h3>
                <p className="text-gray-600">
                  Un accompagnement dans le respect et l'écoute de vos besoins individuels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personnalisation</h3>
                <p className="text-gray-600">
                  Chaque séance est adaptée à votre rythme et à vos objectifs personnels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Une formation continue pour vous offrir les meilleures techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Mon parcours
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une expérience riche et diversifiée au service de votre bien-être
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Formations & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Des qualifications reconnues pour un accompagnement de qualité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{cert.institution}</p>
                    <p className="text-purple-600 font-semibold">{cert.year}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt(e) à commencer votre parcours ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Découvrez les bienfaits de la sophrologie lors d'une première séance découverte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/reservation">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver ma séance découverte
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link href="/contact">
                Me poser une question
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
