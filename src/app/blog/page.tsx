import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  Tag,
  Download,
  PlayCircle,
  HeadphonesIcon,
  FileText,
  Star,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const articles = [
    {
      id: 1,
      slug: "5-techniques-gestion-stress",
      title: "5 exercices de sophrologie pour gérer le stress au quotidien",
      excerpt: "Découvrez des techniques simples et efficaces pour retrouver votre calme en quelques minutes, où que vous soyez.",
      author: "Marie Dubois",
      date: "2024-03-15",
      readTime: "7 min",
      category: "Pratique",
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["stress", "exercices", "quotidien"]
    },
    {
      id: 2,
      slug: "ameliorer-sommeil-sophrologie",
      title: "Sophrologie et sommeil : retrouvez des nuits paisibles",
      excerpt: "Comment la sophrologie peut transformer votre relation au sommeil et vous aider à mieux dormir naturellement.",
      author: "Marie Dubois",
      date: "2024-03-10",
      readTime: "5 min",
      category: "Bien-être",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["sommeil", "relaxation", "bien-être"]
    },
    {
      id: 3,
      slug: "preparer-examen-sophrologie",
      title: "Préparer un examen avec la sophrologie",
      excerpt: "Techniques spécifiques pour gérer l'anxiété des examens et optimiser ses capacités de concentration et de mémorisation.",
      author: "Marie Dubois",
      date: "2024-03-05",
      readTime: "6 min",
      category: "Éducation",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["examens", "concentration", "étudiants"]
    },
    {
      id: 4,
      slug: "sophrologie-grossesse",
      title: "Sophrologie périnatalité : accompagner la grossesse",
      excerpt: "Un accompagnement doux et naturel pour vivre sereinement votre grossesse et préparer l'arrivée de bébé.",
      author: "Marie Dubois",
      date: "2024-02-28",
      readTime: "8 min",
      category: "Périnatalité",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["grossesse", "naissance", "périnatalité"]
    }
  ]

  const resources = [
    {
      type: "audio",
      title: "Relaxation guidée - Détente profonde",
      description: "Une séance de 15 minutes pour vous relaxer complètement",
      duration: "15 min",
      icon: HeadphonesIcon,
      format: "MP3",
      size: "12 MB"
    },
    {
      type: "pdf",
      title: "Guide complet de la respiration",
      description: "Techniques de respiration illustrées étape par étape",
      pages: "24 pages",
      icon: FileText,
      format: "PDF",
      size: "2.3 MB"
    },
    {
      type: "video",
      title: "Exercices anti-stress en 5 minutes",
      description: "Routine matinale pour bien commencer la journée",
      duration: "5 min",
      icon: PlayCircle,
      format: "MP4",
      size: "45 MB"
    },
    {
      type: "audio",
      title: "Méditation pour s'endormir",
      description: "Accompagnement vocal pour un sommeil réparateur",
      duration: "20 min",
      icon: HeadphonesIcon,
      format: "MP3",
      size: "18 MB"
    }
  ]

  const categories = [
    { name: "Pratique", count: 12 },
    { name: "Bien-être", count: 8 },
    { name: "Technique", count: 6 },
    { name: "Éducation", count: 4 },
    { name: "Périnatalité", count: 3 },
    { name: "Entreprise", count: 5 }
  ]

  const featuredArticle = articles.find(article => article.featured)
  const otherArticles = articles.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Section Héro */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Blog &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Ressources
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez conseils pratiques, exercices guidés et ressources gratuites 
              pour intégrer la sophrologie dans votre quotidien.
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Rechercher un article..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article en vedette */}
      {featuredArticle && (
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-purple-600 font-semibold">Article en vedette</span>
              </div>
            </div>
            
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-purple-600 hover:bg-purple-700 self-start" asChild>
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles et ressources */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Articles principales */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Derniers articles
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {otherArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="line-clamp-2 text-lg">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Lire l'article
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Précédent</Button>
                  <Button size="sm" className="bg-purple-600">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Suivant</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    <span>Newsletter</span>
                  </CardTitle>
                  <CardDescription>
                    Recevez nos conseils bien-être directement dans votre boîte mail
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input placeholder="Votre email" type="email" />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      S'abonner
                    </Button>
                    <p className="text-xs text-gray-500">
                      Pas de spam, désinscription en un clic
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Catégories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Tag className="h-5 w-5" />
                    <span>Catégories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <span className="text-gray-700">{category.name}</span>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ressources gratuites */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Ressources gratuites</span>
                  </CardTitle>
                  <CardDescription>
                    Guides et exercices à télécharger
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => {
                      const Icon = resource.icon
                      return (
                        <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <Icon className="h-6 w-6 text-purple-600 mt-1" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm text-gray-900 line-clamp-1">
                                {resource.title}
                              </h4>
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                                {resource.description}
                              </p>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{resource.duration || resource.pages}</span>
                                <span>{resource.format} • {resource.size}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/ressources">
                      Voir toutes les ressources
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* CTA Consultation */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Besoin d'un accompagnement personnalisé ?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Réservez votre première séance découverte
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/reservation">
                      Prendre rendez-vous
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
  )
}
