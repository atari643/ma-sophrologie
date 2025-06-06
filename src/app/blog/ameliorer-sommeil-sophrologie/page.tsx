import Link from 'next/link'
import { Calendar, Clock, User, Moon, Brain, Heart, Eye, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AmeliorerSommeilSophrologie() {
  const techniques = [
    {
      title: "Respiration 4-7-8 pour l'endormissement",
      description: "Une technique de respiration spécialement conçue pour favoriser un endormissement rapide et naturel.",
      steps: [
        "Installez-vous confortablement dans votre lit",
        "Inspirez par le nez pendant 4 secondes",
        "Retenez votre souffle pendant 7 secondes",
        "Expirez lentement par la bouche pendant 8 secondes",
        "Répétez ce cycle 4 à 8 fois"
      ],
      benefits: ["Réduit l'anxiété", "Ralentit le rythme cardiaque", "Favorise la détente musculaire"],
      icon: <Brain className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Relaxation progressive de Jacobson",
      description: "Une méthode de détente musculaire progressive qui prépare le corps au sommeil réparateur.",
      steps: [
        "Allongez-vous confortablement sur le dos",
        "Contractez les muscles des pieds pendant 5 secondes",
        "Relâchez et ressentez la détente pendant 10 secondes",
        "Remontez progressivement vers les mollets, cuisses, etc.",
        "Terminez par les muscles du visage et du crâne"
      ],
      benefits: ["Élimine les tensions", "Améliore la conscience corporelle", "Favorise l'endormissement"],
      icon: <Heart className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Visualisation du lieu de paix",
      description: "Créez mentalement un environnement apaisant pour faciliter la transition vers le sommeil.",
      steps: [
        "Fermez les yeux et respirez calmement",
        "Visualisez un lieu qui vous apaise (plage, forêt, montagne)",
        "Imaginez les détails : sons, odeurs, sensations",
        "Ressentez la sérénité de ce lieu",
        "Laissez-vous porter par cette sensation de paix"
      ],
      benefits: ["Calme le mental", "Réduit les pensées parasites", "Crée un état de sérénité"],
      icon: <Eye className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Balayage corporel sophronique",
      description: "Une technique de scan corporel pour relâcher toutes les tensions accumulées dans la journée.",
      steps: [
        "Allongez-vous et fermez les yeux",
        "Portez votre attention sur le sommet de votre tête",
        "Descendez mentalement le long de votre corps",
        "Relâchez chaque partie en y portant attention",
        "Terminez par les orteils en état de détente complète"
      ],
      benefits: ["Détente profonde", "Améliore la qualité du sommeil", "Réduit les réveils nocturnes"],
      icon: <Moon className="h-8 w-8 text-blue-600" />
    }
  ]

  const conseils = [
    {
      title: "Créez un rituel du coucher",
      description: "Établissez une routine relaxante 30 minutes avant le coucher pour signaler à votre corps qu'il est temps de dormir."
    },
    {
      title: "Optimisez votre environnement",
      description: "Maintenez une température fraîche (18-20°C), réduisez la lumière et les bruits parasites."
    },
    {
      title: "Pratiquez régulièrement",
      description: "La sophrologie est plus efficace avec une pratique quotidienne, même de 10 minutes par jour."
    },
    {
      title: "Évitez les écrans",
      description: "Coupez tous les écrans au moins 1 heure avant le coucher pour préserver la production de mélatonine."
    }
  ]

  const troublesSommeil = [
    {
      probleme: "Difficultés d'endormissement",
      solution: "Respiration 4-7-8 + Visualisation du lieu de paix",
      duree: "15-20 minutes"
    },
    {
      probleme: "Réveils nocturnes fréquents", 
      solution: "Balayage corporel + Respiration abdominale",
      duree: "10-15 minutes"
    },
    {
      probleme: "Sommeil agité et non réparateur",
      solution: "Relaxation progressive + Programmation positive",
      duree: "20-25 minutes"
    },
    {
      probleme: "Anxiété au coucher",
      solution: "Respiration calmante + Ancrage positif",
      duree: "15-20 minutes"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header de l'article */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Sommeil & Bien-être
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comment améliorer son sommeil avec la sophrologie ?
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Découvrez comment la sophrologie peut transformer vos nuits et vous aider à retrouver 
              un sommeil réparateur grâce à des techniques simples et efficaces.
            </p>
            
            {/* Métadonnées de l'article */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15 décembre 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lecture</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Muriel Artigala, Sophrologue</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le sommeil représente environ un tiers de notre vie, pourtant de nombreuses personnes 
              souffrent de troubles du sommeil qui impactent leur qualité de vie. La sophrologie 
              offre des solutions naturelles et efficaces pour retrouver des nuits sereines.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              En tant que sophrologue, j'accompagne régulièrement des personnes vers un meilleur sommeil. 
              Les techniques que je vous présente ont fait leurs preuves et peuvent transformer 
              votre relation au sommeil en quelques semaines de pratique.
            </p>
          </div>

          {/* Les 4 techniques principales */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              4 Techniques Sophrologique pour Mieux Dormir
            </h2>
            
            <div className="grid gap-8 md:gap-12">
              {techniques.map((technique, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                          {technique.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {technique.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {technique.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Étapes à suivre :</h4>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                              {technique.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ol>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Bénéfices :</h4>
                            <ul className="space-y-2">
                              {technique.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tableau des troubles et solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Solutions Ciblées selon vos Troubles du Sommeil
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Problème</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Solution Recommandée</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      {troublesSommeil.map((trouble, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 text-gray-900 font-medium">{trouble.probleme}</td>
                          <td className="py-4 px-4 text-gray-600">{trouble.solution}</td>
                          <td className="py-4 px-4 text-blue-600 font-medium">{trouble.duree}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conseils pratiques */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Conseils pour Optimiser votre Pratique
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {conseils.map((conseil, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {conseil.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {conseil.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Programme d'accompagnement */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Programme "Sommeil Réparateur" - 21 jours
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Un accompagnement personnalisé pour retrouver un sommeil de qualité
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">21</div>
                    <div className="text-blue-100">jours d'accompagnement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">7</div>
                    <div className="text-blue-100">séances personnalisées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">support audio</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="text-blue-600">
                  Découvrir le Programme
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion et CTA */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Le Sommeil, Pilier de votre Bien-être
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Un sommeil de qualité n'est pas un luxe, c'est une nécessité pour votre santé physique 
                et mentale. La sophrologie vous offre des outils concrets pour retrouver des nuits 
                paisibles et un réveil en forme.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Commencez dès ce soir par l'une des techniques présentées. Avec de la régularité 
                et de la patience, vous constaterez des améliorations significatives dans les 
                premières semaines.
              </p>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/rendez-vous" className="flex items-center">
                  Prendre Rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Articles liés */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles liés</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-700">Gestion du Stress</Badge>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/blog/5-techniques-gestion-stress" className="hover:text-blue-600">
                      5 techniques de sophrologie pour gérer le stress au quotidien
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Découvrez des outils pratiques pour apaiser votre mental et retrouver votre sérénité.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-100 text-green-700">Préparation Mentale</Badge>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/blog/preparer-examen-sophrologie" className="hover:text-blue-600">
                      Préparer un examen avec la sophrologie
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Techniques pour optimiser vos révisions et aborder sereinement vos examens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}