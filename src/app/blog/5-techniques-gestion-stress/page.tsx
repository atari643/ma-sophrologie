import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Heart,
  Brain,
  Zap,
  Shield,
  Target,
  CheckCircle,
  Share2,
  BookOpen,
  Play,
  Download
} from 'lucide-react'
import Link from 'next/link'

export default function CinqTechniquesGestionStress() {
  const techniques = [
    {
      number: 1,
      title: "La respiration sophronique",
      subtitle: "Retrouver le calme en quelques minutes",
      description: "Technique fondamentale qui permet de réguler le système nerveux et d'apaiser instantanément les tensions.",
      steps: [
        "Installez-vous confortablement, debout ou assis",
        "Fermez les yeux et concentrez-vous sur votre respiration naturelle",
        "Inspirez lentement par le nez en gonflant le ventre (4 temps)",
        "Retenez votre souffle quelques secondes (2 temps)",
        "Expirez lentement par la bouche en rentrant le ventre (6 temps)",
        "Répétez ce cycle 5 à 10 fois"
      ],
      benefits: ["Diminution immédiate du stress", "Régulation du rythme cardiaque", "Amélioration de la concentration"],
      icon: Heart,
      color: "blue"
    },
    {
      number: 2,
      title: "La relaxation musculaire progressive",
      subtitle: "Libérer les tensions corporelles",
      description: "Cette technique permet de prendre conscience des zones de tension et de les relâcher consciemment.",
      steps: [
        "Allongez-vous dans un endroit calme",
        "Commencez par contracter fortement les muscles des pieds (5 secondes)",
        "Relâchez brutalement et observez la sensation de détente",
        "Remontez progressivement : mollets, cuisses, fessiers, ventre...",
        "Terminez par le visage et le cuir chevelu",
        "Savourez quelques instants la détente globale"
      ],
      benefits: ["Libération des tensions physiques", "Amélioration du sommeil", "Conscience corporelle renforcée"],
      icon: Shield,
      color: "green"
    },
    {
      number: 3,
      title: "La visualisation positive",
      subtitle: "Créer un refuge mental apaisant",
      description: "Technique qui utilise l'imagination pour créer un état de bien-être et de sérénité profonde.",
      steps: [
        "Fermez les yeux et respirez calmement",
        "Imaginez un lieu qui vous procure une sensation de paix",
        "Visualisez tous les détails : couleurs, sons, odeurs, sensations",
        "Ancrez cette image en associant un geste simple (main sur le cœur)",
        "Restez dans cette visualisation 5 à 10 minutes",
        "Réutilisez cet ancrage en situation de stress"
      ],
      benefits: ["Création d'un refuge mental", "Diminution de l'anxiété", "Renforcement de la confiance"],
      icon: Brain,
      color: "purple"
    },
    {
      number: 4,
      title: "L'ancrage au présent",
      subtitle: "Se reconnecter à l'instant présent",
      description: "Technique de pleine conscience qui permet de sortir du mental et des ruminations stressantes.",
      steps: [
        "Où que vous soyez, arrêtez-vous quelques instants",
        "Identifiez 5 choses que vous voyez autour de vous",
        "Identifiez 4 choses que vous pouvez toucher",
        "Identifiez 3 sons que vous entendez",
        "Identifiez 2 odeurs que vous sentez",
        "Identifiez 1 goût dans votre bouche"
      ],
      benefits: ["Retour au calme immédiat", "Sortie des ruminations", "Présence renforcée"],
      icon: Target,
      color: "orange"
    },
    {
      number: 5,
      title: "La sophronisation express",
      subtitle: "Récupération rapide en 3 minutes",
      description: "Technique courte mais efficace pour évacuer rapidement le stress accumulé.",
      steps: [
        "Debout, pieds écartés largeur du bassin",
        "Inspirez en levant les bras vers le ciel",
        "Retenez votre souffle et contractez tout le corps (3 secondes)",
        "Expirez fort par la bouche en relâchant bras et tensions",
        "Secouez vigoureusement tout le corps quelques secondes",
        "Répétez 3 fois puis restez immobile et observez"
      ],
      benefits: ["Évacuation rapide des tensions", "Regain d'énergie", "Clarté mentale"],
      icon: Zap,
      color: "red"
    }
  ]

  const tips = [
    {
      title: "Régularité",
      description: "Pratiquez ces techniques quotidiennement, même 5 minutes par jour"
    },
    {
      title: "Anticipation",
      description: "Utilisez-les en prévention, pas seulement en situation de crise"
    },
    {
      title: "Personnalisation",
      description: "Adaptez chaque technique à votre rythme et vos préférences"
    },
    {
      title: "Patience",
      description: "Les effets se renforcent avec la pratique, soyez bienveillant(e)"
    }
  ]

  const relatedArticles = [
    {
      title: "Améliorer son sommeil avec la sophrologie",
      excerpt: "Découvrez les techniques pour retrouver un sommeil réparateur",
      href: "/blog/ameliorer-sommeil-sophrologie",
      category: "Bien-être"
    },
    {
      title: "Préparer ses examens avec la sophrologie",
      excerpt: "Optimisez vos performances et gérez le stress des épreuves",
      href: "/blog/preparer-examen-sophrologie", 
      category: "Performance"
    },
    {
      title: "La sophrologie pendant la grossesse",
      excerpt: "Un accompagnement naturel pour vivre sereinement cette période",
      href: "/blog/sophrologie-grossesse",
      category: "Périnatal"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Navigation */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            <Brain className="w-4 h-4 mr-2" />
            Gestion du stress
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            5 Techniques Simples pour Gérer le <span className="text-blue-600">Stress</span> au Quotidien
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Le stress fait partie de notre quotidien, mais il ne doit pas nous submerger. 
            Découvrez 5 techniques de sophrologie simples et efficaces que vous pouvez 
            utiliser n'importe où, n'importe quand, pour retrouver rapidement votre sérénité.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Publié le 15 mai 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Dubois, Sophrologue</span>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/reservation">
                <Calendar className="w-4 h-4 mr-2" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dans notre société moderne, le stress est devenu un compagnon quasi-permanent. 
              Entre les exigences professionnelles, les préoccupations familiales et les 
              sollicitations constantes, nous pouvons rapidement nous sentir dépassés.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La bonne nouvelle ? Il existe des outils simples et efficaces pour reprendre 
              le contrôle. La sophrologie offre des techniques concrètes que vous pouvez 
              utiliser immédiatement, sans matériel particulier, pour retrouver votre équilibre.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Le saviez-vous ?
                  </h3>
                  <p className="text-blue-800">
                    3 minutes de pratique sophrologique peuvent réduire le niveau de stress 
                    de 40% et avoir des effets durables sur votre bien-être général.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Les 5 Techniques <span className="text-blue-600">Essentielles</span>
          </h2>

          <div className="space-y-12">
            {techniques.map((technique, index) => (
              <Card key={index} className="border-l-4 border-blue-500 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <technique.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-3 bg-blue-100 text-blue-800">
                        Technique #{technique.number}
                      </Badge>
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {technique.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 mb-4">
                        {technique.subtitle}
                      </CardDescription>
                      <p className="text-gray-700">
                        {technique.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Steps */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Play className="w-5 h-5 text-blue-600" />
                      Étapes à suivre
                    </h4>
                    <ol className="space-y-3">
                      {technique.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700 pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Bénéfices
                    </h4>
                    <ul className="grid md:grid-cols-3 gap-3">
                      {technique.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Conseils pour une pratique <span className="text-blue-600">efficace</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
              Vous souhaitez aller plus loin ?
            </h3>
            <p className="text-blue-800 text-center mb-6">
              Ces techniques constituent une excellente base, mais un accompagnement personnalisé 
              peut vous aider à les approfondir et à les adapter à votre situation spécifique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/reservation">
                  <Calendar className="w-4 h-4 mr-2" />
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Poser une question
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Articles <span className="text-blue-600">connexes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <Link href={article.href}>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{article.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-blue-600 group-hover:gap-3 transition-all">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-medium">Lire l'article</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt(e) à maîtriser votre stress ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Apprenez ces techniques et bien d'autres lors d'une séance personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/reservation">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver une séance
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/prestations/individuel">
                <User className="w-5 h-5 mr-2" />
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}