import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { MapPin, Clock, Star, Phone, Users, Video, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sophrologue à Bordeaux | Muriel Artigala - Séances Sophrologie Bordeaux Métropole',
  description: 'Muriel Artigala, sophrologue à Bordeaux Métropole. Cabinet à Martignas-sur-Jalle, séances individuelles et collectives pour Bordeaux, Pessac, Mérignac, Talence. ISEBA formée.',
  keywords: 'sophrologue Bordeaux, sophrologie Bordeaux Métropole, gestion stress Bordeaux, relaxation Bordeaux, sophrologue Pessac, sophrologue Mérignac, sophrologue Talence',
}

export default function SophrologueBordeaux() {
  const villes = [
    { nom: 'Bordeaux Centre', distance: '15 min', transport: 'Tram A + Bus' },
    { nom: 'Pessac', distance: '10 min', transport: 'Bus direct' },
    { nom: 'Mérignac', distance: '12 min', transport: 'Bus + Tram' },
    { nom: 'Talence', distance: '18 min', transport: 'Tram B' },
    { nom: 'Gradignan', distance: '8 min', transport: 'Bus' },
    { nom: 'Villenave-d\'Ornon', distance: '20 min', transport: 'Tram A' },
    { nom: 'Bègles', distance: '22 min', transport: 'Tram A' },
    { nom: 'Floirac', distance: '25 min', transport: 'Tram A' },
  ]

  const specialites = [
    {
      titre: 'Gestion du Stress Professionnel',
      description: 'Techniques spécialisées pour les actifs de Bordeaux Métropole',
      prix: '40€'
    },
    {
      titre: 'Amélioration du Sommeil',
      description: 'Retrouvez un sommeil réparateur grâce à la sophrologie',
      prix: '40€'
    },
    {
      titre: 'Confiance en Soi',
      description: 'Développez votre potentiel avec des techniques éprouvées',
      prix: '40€'
    },
    {
      titre: 'Préparation aux Examens',
      description: 'Idéal pour les étudiants bordelais (Université, Sciences Po...)',
      prix: '40€'
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        
        {/* Hero Section */}
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sophrologue à{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Bordeaux Métropole
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Muriel Artigala</strong>, sophrologue diplômée ISEBA Bordeaux, vous accueille dans son cabinet 
                à Martignas-sur-Jalle, facilement accessible depuis toute la métropole bordelaise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/reservation">
                    <Calendar className="mr-2 h-5 w-5" />
                    Réserver une séance
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+33689155021">
                    <Phone className="mr-2 h-5 w-5" />
                    06 89 15 50 21
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Accessibilité */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Facilement accessible depuis toute la métropole
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre cabinet de sophrologie à Martignas-sur-Jalle est idéalement situé pour 
                recevoir les habitants de Bordeaux Métropole.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {villes.map((ville, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">{ville.nom}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{ville.distance}</span>
                      </div>
                      <p className="text-xs text-gray-500">{ville.transport}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="font-semibold text-gray-900 mb-2">🚗 Parking gratuit disponible</h3>
                <p className="text-gray-600">
                  Stationnement facile et gratuit devant le cabinet. Accessible PMR.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Spécialités */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Spécialités sophrologie pour Bordeaux Métropole
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des techniques adaptées aux besoins spécifiques des habitants de la métropole bordelaise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specialites.map((specialite, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{specialite.titre}</CardTitle>
                      <span className="text-2xl font-bold text-purple-600">{specialite.prix}</span>
                    </div>
                    <CardDescription>{specialite.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href="/reservation">
                        Réserver cette spécialité
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Témoignages Bordeaux */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Témoignages de clients de Bordeaux Métropole
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Sarah M. - Bordeaux Centre</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Muriel m'a aidée à gérer mon stress professionnel. Depuis Bordeaux, 
                    c'est très facile d'accès et le cadre est apaisant."
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Pierre L. - Pessac</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Excellent accompagnement pour préparer mes examens. 
                    Les techniques de respiration ont transformé ma gestion du stress."
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Marie D. - Talence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Grâce à Muriel, j'ai retrouvé un sommeil réparateur. 
                    Sa formation ISEBA Bordeaux se ressent dans sa qualité d'accompagnement."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Contact/Réservation */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prenez rendez-vous dès aujourd'hui
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Que vous veniez de Bordeaux, Pessac, Mérignac ou Talence, 
              notre cabinet vous accueille dans un cadre bienveillant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/reservation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver en ligne
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link href="tel:+33689155021">
                  <Phone className="mr-2 h-5 w-5" />
                  06 89 15 50 21
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
