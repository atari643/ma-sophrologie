import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import StructuredData from '@/components/structured-data'
import FAQ from '@/components/faq'
import GoogleBusinessIntegration from '@/components/google-business-integration'
import { GoogleReviewsDisplay } from '@/components/google-reviews-display'
import LocalBusinessSchema from '@/components/local-business-schema'
import { 
  Heart, 
  Users, 
  Video, 
  Calendar, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Award
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Section Héro */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Retrouvez votre 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    {" "}sérénité
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sophrologue diplômée ISEBA Bordeaux, spécialisée en techniques de respiration. 
                  Séances individuelles, ateliers de groupe et consultations à Martignas-sur-Jalle 
                  pour retrouver équilibre et bien-être.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/reservation">
                    <Calendar className="mr-2 h-5 w-5" />
                    Réserver une séance
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/a-propos">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Google Business Integration */}
              <GoogleBusinessIntegration 
                googleBusinessUrl="https://g.co/kgs/sXFf524"
                className="pt-4"
              />
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Votre première séance
                    </h3>
                    <p className="text-gray-600">
                      Découvrez les bienfaits de la sophrologie
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Bilan personnalisé gratuit</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Techniques adaptées à vos besoins</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Exercices à pratiquer chez vous</span>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/reservation">
                      Prendre rendez-vous
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos prestations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement sur mesure pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Séances individuelles</CardTitle>
                <CardDescription>
                  Un accompagnement personnalisé pour atteindre vos objectifs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Bilan complet initial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Programme sur mesure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Suivi personnalisé</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/prestations/individuel">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Ateliers de groupe</CardTitle>
                <CardDescription>
                  Partagez l'expérience sophrologique en petit groupe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Maximum 8 personnes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Thématiques variées</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tarifs préférentiels</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/prestations/groupe">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Consultations en ligne</CardTitle>
                <CardDescription>
                  L'accompagnement sophrologique où que vous soyez
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Plateforme sécurisée</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Horaires flexibles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Enregistrements fournis</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/prestations/en-ligne">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Ma Sophrologie ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche professionnelle et bienveillante pour votre bien-être
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Praticienne certifiée
              </h3>
              <p className="text-gray-600">
                Diplôme de l'École Française de Sophrologie et formation continue 
                pour vous offrir le meilleur accompagnement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Résultats rapides
              </h3>
              <p className="text-gray-600">
                Des techniques efficaces et éprouvées pour des changements 
                positifs dès les premières séances.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Confidentialité garantie
              </h3>
              <p className="text-gray-600">
                Un cadre sécurisé et bienveillant respectant votre intimité 
                et votre rythme personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages et Avis Google */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits et leurs avis Google
            </p>
          </div>

          {/* Avis Google */}
          <div className="mb-16">
            <GoogleReviewsDisplay />
          </div>

          {/* Témoignages complémentaires */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Autres témoignages
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Grâce à la sophrologie, j'ai retrouvé un sommeil réparateur 
                  et appris à gérer mon stress au quotidien. Merci !"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">M</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Marie D.</p>
                    <p className="text-sm text-gray-500">Cadre supérieure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "L'approche bienveillante et les exercices pratiques m'ont 
                  aidé à retrouver confiance en moi. Je recommande vivement !"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">P</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Pierre L.</p>
                    <p className="text-sm text-gray-500">Entrepreneur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Les séances en ligne sont parfaites pour mon emploi du temps. 
                  Flexibilité et efficacité au rendez-vous !"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">S</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Sophie M.</p>
                    <p className="text-sm text-gray-500">Maman de 3 enfants</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="Questions Fréquentes sur la Sophrologie"
        description="Trouvez toutes les réponses sur mes services de sophrologie à Martignas-sur-Jalle pour Bordeaux Métropole"
        includeSchema={true}
      />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt(e) à commencer votre parcours vers le bien-être ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Réservez votre première séance découverte et faites le premier pas 
            vers une vie plus sereine et épanouie.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/reservation">
              <Calendar className="mr-2 h-5 w-5" />
              Réserver maintenant
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <StructuredData />
      <LocalBusinessSchema
        name="Muriel Artigala - Sophrologue"
        description="Cabinet de sophrologie à Martignas-sur-Jalle. Muriel Artigala, sophrologue diplômée ISEBA Bordeaux, propose des séances individuelles et collectives pour la gestion du stress, l'amélioration du sommeil et la confiance en soi."
        url="https://muriel-artigala.fr"
        telephone="+33689155021"
        email="contact@muriel-artigala.fr"
        address={{
          streetAddress: "120 avenue de Saint-Emilion",
          addressLocality: "Martignas-sur-Jalle",
          postalCode: "33127",
          addressCountry: "FR"
        }}
        geo={{
          latitude: 44.8437,
          longitude: -0.7737
        }}
        openingHours={[
          {
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "12:00"
          },
          {
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
            opens: "14:00",
            closes: "19:30"
          },
          {
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "12:00"
          }
        ]}
        priceRange="€€"
        serviceArea={[
          "Martignas-sur-Jalle",
          "Bordeaux",
          "Pessac", 
          "Mérignac",
          "Talence",
          "Gradignan",
          "Villenave-d'Ornon",
          "Gironde"
        ]}
        specialties={[
          "Gestion du stress",
          "Troubles du sommeil",
          "Confiance en soi",
          "Préparation mentale",
          "Accompagnement périnatal",
          "Sophrologie entreprise"
        ]}
        googleBusinessUrl="https://g.co/kgs/sXFf524"
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 38
        }}
        sameAs={[
          "https://www.linkedin.com/in/muriel-artigala"
        ]}
      />
    </div>
  )
}
