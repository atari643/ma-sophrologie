import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Star, Users, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sophrologie Bordeaux : Gestion du Stress au Travail | Muriel Artigala',
  description: 'Découvrez comment la sophrologie peut vous aider à gérer le stress professionnel à Bordeaux. Muriel Artigala, sophrologue ISEBA, vous accompagne vers le bien-être au travail.',
  keywords: 'stress travail Bordeaux, sophrologie entreprise Bordeaux, burn-out Bordeaux, bien-être professionnel, gestion stress bureau',
}

export default function GestionStressBordeaux() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        
        <article className="pt-16 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            {/* En-tête article */}
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Gestion du stress au travail à Bordeaux : 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}la sophrologie comme solution
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Mis à jour le 4 juin 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Lecture : 8 min</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Par Muriel Artigala, Sophrologue</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Le stress professionnel touche de nombreux travailleurs de Bordeaux Métropole. 
                En tant que sophrologue diplômée ISEBA Bordeaux, je vous explique comment la sophrologie 
                peut vous aider à retrouver sérénité et efficacité au travail.
              </p>
            </header>

            {/* Contenu principal */}
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Le stress professionnel à Bordeaux : un enjeu majeur
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Bordeaux, métropole dynamique de Nouvelle-Aquitaine, connaît un développement économique 
                important qui s'accompagne parfois d'une intensification du rythme de travail. Que vous 
                travailliez dans le secteur viticole, l'aéronautique, le numérique ou les services, 
                <strong> le stress professionnel peut impacter votre bien-être et vos performances</strong>.
              </p>

              <Card className="my-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">📊 Chiffres clés du stress au travail</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-800">
                    <li>• 68% des salariés français déclarent être stressés au travail</li>
                    <li>• 45% des arrêts maladie sont liés au stress professionnel</li>
                    <li>• Bordeaux Métropole : +15% de consultations liées au stress en 2024</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Comment la sophrologie agit sur le stress professionnel
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La sophrologie, développée par Alfonso Caycedo, combine <strong>techniques de respiration, 
                relaxation musculaire et visualisation positive</strong>. Mon approche, enrichie par ma 
                formation ISEBA Bordeaux et ma spécialisation au CHU de Bordeaux, s'adapte parfaitement 
                aux besoins des professionnels bordelais.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Les 5 techniques anti-stress que j'enseigne :
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">1. Respiration abdominale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Technique fondamentale pour calmer instantanément le système nerveux, 
                      praticable même au bureau.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">2. Relaxation dynamique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Mouvements doux associés à la respiration pour évacuer les tensions 
                      accumulées pendant la journée.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">3. Visualisation positive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Projection mentale de situations professionnelles réussies pour 
                      renforcer la confiance et réduire l'anxiété.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">4. Ancrage positif</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Création de "ressources internes" mobilisables dans les moments 
                      de stress intense au travail.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Sophrologie en entreprise à Bordeaux : mes interventions
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                J'interviens régulièrement dans les entreprises de Bordeaux Métropole pour proposer 
                des ateliers de gestion du stress. Ces sessions collectives permettent de créer 
                une dynamique positive au sein des équipes tout en offrant des outils concrets 
                à chaque participant.
              </p>

              <Card className="my-8 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">💼 Mes prestations entreprise à Bordeaux</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Atelier gestion du stress (2h)</span>
                    <span className="font-semibold text-green-900">Sur devis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Formation managers (demi-journée)</span>
                    <span className="font-semibold text-green-900">Sur devis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Accompagnement individuel en entreprise</span>
                    <span className="font-semibold text-green-900">60€/séance</span>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Témoignages de professionnels bordelais
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="bg-gray-50">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">Antoine R. - Manager, Bordeaux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">
                      "Les techniques de Muriel m'ont permis de mieux gérer la pression 
                      au quotidien. Je recommande vivement ses séances à tous les managers."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">Céline M. - RH, Pessac</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">
                      "L'intervention de Muriel dans notre entreprise a eu un impact 
                      très positif sur l'ambiance et la productivité de nos équipes."
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Prendre rendez-vous : cabinet accessible depuis toute la métropole
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Mon cabinet de sophrologie situé au <strong>120 avenue de Saint-Emilion à Martignas-sur-Jalle</strong> 
                est facilement accessible depuis Bordeaux, Pessac, Mérignac, Talence et toutes les communes 
                de la métropole. Parking gratuit et accès PMR disponibles.
              </p>

              <Card className="my-8 bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900">🕒 Horaires d'ouverture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-purple-800">Lundi - Vendredi</span>
                    <span className="font-semibold text-purple-900">10h-12h / 14h-19h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-800">Samedi</span>
                    <span className="font-semibold text-purple-900">9h-12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-800">Dimanche</span>
                    <span className="text-gray-600">Fermé</span>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Libérez-vous du stress professionnel
                </h3>
                <p className="text-purple-100 mb-6">
                  Prenez rendez-vous dès aujourd'hui pour retrouver sérénité et efficacité au travail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/reservation">
                      <Calendar className="mr-2 h-5 w-5" />
                      Réserver une séance
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600" asChild>
                    <Link href="/contact">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Demander un devis entreprise
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>
      <Footer />
    </>
  )
}
