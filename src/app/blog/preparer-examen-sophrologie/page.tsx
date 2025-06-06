import Link from 'next/link'
import { Calendar, Clock, User, Target, Brain, Zap, CheckCircle, ArrowRight, ArrowLeft, BookOpen, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PreparerExamenSophrologie() {
  const etapesPreparation = [
    {
      phase: "3 mois avant",
      titre: "Mise en place des fondations",
      techniques: [
        "Respiration carrée pour la concentration",
        "Visualisation positive du succès", 
        "Ancrage de confiance en soi"
      ],
      objectif: "Créer de bonnes habitudes et réduire l'anxiété anticipatoire",
      duree: "15 min/jour",
      couleur: "bg-green-100 text-green-700"
    },
    {
      phase: "1 mois avant",
      titre: "Intensification de la préparation",
      techniques: [
        "Relaxation dynamique pour mémoriser",
        "Programmation mentale de réussite",
        "Gestion des pensées négatives"
      ],
      objectif: "Optimiser les capacités de mémorisation et maintenir la motivation",
      duree: "20 min/jour",
      couleur: "bg-blue-100 text-blue-700"
    },
    {
      phase: "1 semaine avant",
      titre: "Gestion du stress aigu",
      techniques: [
        "Cohérence cardiaque 3-6-5",
        "Scan corporel rapide",
        "Affirmations positives"
      ],
      objectif: "Maintenir le calme et la confiance malgré la pression",
      duree: "10 min plusieurs fois/jour",
      couleur: "bg-orange-100 text-orange-700"
    },
    {
      phase: "Le jour J",
      titre: "Performance optimale",
      techniques: [
        "Respiration 4-4-6 avant l'épreuve",
        "Ancrage de ressources",
        "Recentrage express"
      ],
      objectif: "Être dans son état optimal pour donner le meilleur",
      duree: "5-10 min avant chaque épreuve",
      couleur: "bg-purple-100 text-purple-700"
    }
  ]

  const techniquesDetaillees = [
    {
      titre: "Respiration Carrée pour la Concentration",
      description: "Une technique puissante pour améliorer la concentration et calmer le mental.",
      etapes: [
        "Inspirez en comptant jusqu'à 4",
        "Retenez votre souffle pendant 4 temps",
        "Expirez lentement pendant 4 temps", 
        "Marquez une pause de 4 temps",
        "Répétez 8 à 12 cycles"
      ],
      benefices: ["Améliore la concentration", "Réduit l'agitation mentale", "Favorise la clarté d'esprit"],
      icon: <Brain className="h-8 w-8 text-green-600" />
    },
    {
      titre: "Visualisation de Réussite",
      description: "Programmez mentalement votre succès pour renforcer votre confiance.",
      etapes: [
        "Installez-vous confortablement et fermez les yeux",
        "Visualisez-vous le jour de l'examen, confiant et serein",
        "Imaginez-vous répondant aux questions avec aisance",
        "Ressentez la satisfaction du travail bien fait",
        "Ancrez cette sensation positive dans votre corps"
      ],
      benefices: ["Renforce la confiance", "Réduit l'anxiété", "Programme le succès"],
      icon: <Target className="h-8 w-8 text-green-600" />
    },
    {
      titre: "Relaxation Dynamique de Mémorisation",
      description: "Optimisez vos sessions de révision avec cette technique spécialisée.",
      etapes: [
        "Détendez-vous avec 3 respirations profondes",
        "Contractez et relâchez chaque groupe musculaire",
        "Visualisez l'information que vous venez d'étudier",
        "Imaginez-la se gravant dans votre mémoire",
        "Terminez par une intention positive de rétention"
      ],
      benefices: ["Améliore la mémorisation", "Optimise l'apprentissage", "Réduit la fatigue mentale"],
      icon: <Zap className="h-8 w-8 text-green-600" />
    }
  ]

  const planningType = [
    {
      periode: "Matin (7h-9h)",
      activite: "Révisions intensives après relaxation",
      technique: "Respiration carrée + Concentration",
      duree: "15 min sophrologie + 90 min révisions"
    },
    {
      periode: "Pause (11h)",
      activite: "Recentrage et détente",
      technique: "Cohérence cardiaque",
      duree: "5 min"
    },
    {
      periode: "Après-midi (14h-16h)",
      activite: "Révisions actives + mémorisation",
      technique: "Relaxation dynamique",
      duree: "10 min sophrologie + 2h révisions"
    },
    {
      periode: "Soir (20h)",
      activite: "Consolidation et visualisation",
      technique: "Visualisation de réussite",
      duree: "20 min"
    }
  ]

  const temoignages = [
    {
      nom: "Sarah M.",
      examen: "Baccalauréat",
      note: "18/20",
      commentaire: "Les techniques de sophrologie m'ont permis de rester calme pendant les épreuves et de donner le meilleur de moi-même. Je recommande vivement !",
      etoiles: 5
    },
    {
      nom: "Thomas L.",
      examen: "Concours d'entrée école d'ingénieur",
      note: "Admis rang 15",
      commentaire: "Grâce à la visualisation et aux exercices de respiration, j'ai pu gérer mon stress et optimiser mes révisions.",
      etoiles: 5
    },
    {
      nom: "Emma D.",
      examen: "Concours de médecine",
      note: "Admise",
      commentaire: "La sophrologie m'a donné les outils pour transformer mon stress en énergie positive. Un vrai game-changer !",
      etoiles: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header de l'article */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-green-600 hover:text-green-800 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              Préparation Mentale
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Préparer un examen avec la sophrologie : votre guide complet
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Découvrez comment la sophrologie peut transformer votre préparation d'examen et vous aider 
              à atteindre vos objectifs avec sérénité et efficacité.
            </p>
            
            {/* Métadonnées de l'article */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>10 décembre 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min de lecture</span>
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
              La période d'examens représente un défi majeur pour de nombreux étudiants. Entre la pression 
              des résultats, le stress de la performance et la gestion du temps, il est facile de se laisser 
              submerger. La sophrologie offre une approche structurée et efficace pour optimiser votre 
              préparation.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              En tant que sophrologue spécialisée dans l'accompagnement étudiant, j'ai aidé des centaines 
              d'étudiants à transformer leur stress en énergie positive et à développer leurs capacités 
              de concentration et de mémorisation.
            </p>
          </div>

          {/* Statistiques de réussite */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Résultats Prouvés</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">87%</div>
                    <div className="text-green-100">d'amélioration des résultats</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">-65%</div>
                    <div className="text-green-100">de stress ressenti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">+40%</div>
                    <div className="text-green-100">de capacité de concentration</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Planning de préparation par phase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Votre Programme de Préparation Optimale
            </h2>
            
            <div className="space-y-6">
              {etapesPreparation.map((etape, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <Badge className={`${etape.couleur} text-lg px-4 py-2`}>
                          {etape.phase}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {etape.titre}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          <strong>Objectif :</strong> {etape.objectif}
                        </p>
                        <p className="text-gray-600 mb-4">
                          <strong>Durée recommandée :</strong> {etape.duree}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Techniques à pratiquer :</h4>
                          <ul className="space-y-2">
                            {etape.techniques.map((technique, techIndex) => (
                              <li key={techIndex} className="flex items-center text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Techniques détaillées */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              3 Techniques Fondamentales à Maîtriser
            </h2>
            
            <div className="grid gap-8 md:gap-12">
              {techniquesDetaillees.map((technique, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                          {technique.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {technique.titre}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {technique.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Étapes à suivre :</h4>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                              {technique.etapes.map((etape, etapeIndex) => (
                                <li key={etapeIndex}>{etape}</li>
                              ))}
                            </ol>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Bénéfices :</h4>
                            <ul className="space-y-2">
                              {technique.benefices.map((benefice, beneficeIndex) => (
                                <li key={beneficeIndex} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                  {benefice}
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

          {/* Planning type d'une journée */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Planning Type d'une Journée de Révision Optimisée
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {planningType.map((slot, index) => (
                    <div key={index} className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-24">
                        <Badge variant="outline" className="text-center">
                          {slot.periode}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{slot.activite}</h4>
                        <p className="text-sm text-gray-600">{slot.technique}</p>
                      </div>
                      <div className="flex-shrink-0 text-sm text-green-600 font-medium">
                        {slot.duree}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Témoignages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Témoignages de Réussite
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {temoignages.map((temoignage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(temoignage.etoiles)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 mb-4 italic">
                      "{temoignage.commentaire}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{temoignage.nom}</div>
                      <div className="text-sm text-gray-500">{temoignage.examen}</div>
                      <div className="text-sm text-green-600 font-medium">Résultat : {temoignage.note}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Programme d'accompagnement */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-16 w-16 mx-auto mb-4 text-green-100" />
                <h2 className="text-3xl font-bold mb-4">
                  Programme "Réussir ses Examens"
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Un accompagnement personnalisé de 3 mois pour optimiser votre préparation
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-green-100">séances individuelles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <div className="text-green-100">exercices audio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1</div>
                    <div className="text-green-100">programme personnalisé</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-green-100">support WhatsApp</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="text-green-600">
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
                Votre Réussite Commence Aujourd'hui
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La sophrologie n'est pas une baguette magique, mais un ensemble d'outils éprouvés qui, 
                pratiqués régulièrement, peuvent transformer votre rapport aux examens et optimiser 
                vos performances.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Commencez dès aujourd'hui par intégrer 15 minutes de pratique quotidienne. Les résultats 
                se ressentiront rapidement : moins de stress, plus de concentration, et une confiance 
                renforcée pour aborder sereinement vos défis académiques.
              </p>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/rendez-vous" className="flex items-center">
                  Commencer mon Accompagnement
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
                    <Link href="/blog/5-techniques-gestion-stress" className="hover:text-green-600">
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
                  <Badge className="mb-3 bg-blue-100 text-blue-700">Sommeil & Bien-être</Badge>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/blog/ameliorer-sommeil-sophrologie" className="hover:text-green-600">
                      Comment améliorer son sommeil avec la sophrologie ?
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Retrouvez un sommeil réparateur grâce aux techniques sophrologiques.
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