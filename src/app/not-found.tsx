import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Home, Search, ArrowLeft, Heart } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-bold text-purple-200 mb-4">404</div>
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-purple-400" />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page non trouvée
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Peut-être qu'une de ces options vous aidera à trouver ce que vous cherchez.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 hover:border-purple-200 transition-colors cursor-pointer">
              <Link href="/">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Home className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Accueil</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Retournez à la page d'accueil
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors cursor-pointer">
              <Link href="/prestations">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Prestations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Découvrez nos services
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors cursor-pointer">
              <Link href="/blog">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Articles et conseils
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors cursor-pointer">
              <Link href="/contact">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Prenez rendez-vous
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </div>

          {/* Main Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Heart className="w-5 h-5 mr-2" />
                Contactez-nous
              </Link>
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Besoin d'aide ?
            </h3>
            <p className="text-gray-600 mb-4">
              Si vous pensez qu'il s'agit d'une erreur ou si vous ne trouvez pas ce que vous cherchez, 
              n'hésitez pas à nous contacter. Nous serons ravis de vous aider.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}