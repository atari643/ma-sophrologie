import Link from 'next/link'
import { Calendar, Clock, User, Heart, Baby, Flower, Shield, ArrowRight, ArrowLeft, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function SophrologieGrossesse() {
  const bienfaitsGrossesse = [
    {
      periode: "1er Trimestre (0-3 mois)",
      defis: ["Nausées matinales", "Fatigue intense", "Anxiété des premiers mois"],
      techniques: [
        "Respiration abdominale douce",
        "Relaxation progressive adaptée",
        "Visualisation positive du bébé"
      ],
      benefices: ["Réduit les nausées", "Améliore le sommeil", "Calme l'anxiété"],
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      couleur: "bg-pink-100 text-pink-700"
    },
    {
      periode: "2ème Trimestre (4-6 mois)",
      defis: ["Changements corporels", "Préparation mentale", "Gestion des émotions"],
      techniques: [
        "Acceptation des transformations",
        "Connexion avec le bébé",
        "Renforcement de la confiance"
      ],
      benefices: ["Acceptation du corps", "Lien mère-enfant", "Confiance en soi"],
      icon: <Baby className="h-8 w-8 text-pink-600" />,
      couleur: "bg-rose-100 text-rose-700"
    },
    {
      periode: "3ème Trimestre (7-9 mois)",
      defis: ["Préparation à l'accouchement", "Douleurs physiques", "Appréhensions"],
      techniques: [
        "Gestion de la douleur",
        "Préparation mentale à l'accouchement",
        "Relaxation profonde"
      ],
      benefices: ["Accouchement serein", "Moins de douleurs", "Récupération rapide"],
      icon: <Flower className="h-8 w-8 text-pink-600" />,
      couleur: "bg-purple-100 text-purple-700"
    }
  ]

  const exercicesDetailles = [
    {
      titre: "Respiration du Bébé",
      description: "Une technique douce qui harmonise votre respiration avec celle de votre bébé.",
      etapes: [
        "Placez une main sur votre cœur, l'autre sur votre ventre",
        "Respirez lentement et profondément",
        "Imaginez votre souffle caresser doucement votre bébé",
        "Sentez votre ventre se soulever et s'abaisser paisiblement",
        "Visualisez votre bébé bercé par ce rythme apaisant"
      ],
      duree: "10-15 minutes",
      moment: "Matin et soir",
      benefices: ["Calme le bébé", "Réduit le stress", "Crée une connexion"],
      trimestre: "Tout au long de la grossesse"
    },
    {
      titre: "Visualisation de l'Accouchement Serein",
      description: "Préparez mentalement un accouchement positif et confiant.",
      etapes: [
        "Installez-vous confortablement",
        "Visualisez le jour de l'accouchement",
        "Imaginez-vous calme et confiante",
        "Voyez votre corps s'ouvrir naturellement",
        "Ressentez la joie de rencontrer votre bébé"
      ],
      duree: "15-20 minutes",
      moment: "3ème trimestre, quotidiennement",
      benefices: ["Réduit l'anxiété", "Améliore la confiance", "Facilite l'accouchement"],
      trimestre: "À partir du 7ème mois"
    },
    {
      titre: "Relaxation Progressive Maternelle",
      description: "Une détente complète adaptée aux contraintes de la grossesse.",
      etapes: [
        "Allongez-vous sur le côté gauche",
        "Respirez calmement en vous concentrant sur votre ventre",
        "Détendez progressivement chaque partie de votre corps",
        "Envoyez des pensées d'amour à votre bébé",
        "Terminez en visualisant votre famille heureuse"
      ],
      duree: "20-25 minutes",
      moment: "Avant le coucher",
      benefices: ["Améliore le sommeil", "Réduit les tensions", "Favorise la récupération"],
      trimestre: "Tout au long de la grossesse"
    },
    {
      titre: "Ancrage de Ressources pour l'Accouchement",
      description: "Créez un réflexe de calme et de force pour le jour J.",
      etapes: [
        "Rappelez-vous un moment où vous vous êtes sentie forte",
        "Revivez cette sensation de confiance et de puissance",
        "Ancrez cette sensation en pressant votre pouce et index",
        "Répétez ce geste en respirant profondément",
        "Programmez-vous à utiliser cet ancrage pendant l'accouchement"
      ],
      duree: "10 minutes",
      moment: "Plusieurs fois par jour",
      benefices: ["Accès rapide aux ressources", "Gestion de la douleur", "Confiance"],
      trimestre: "À partir du 8ème mois"
    }
  ]

  const conseilsPratiques = [
    {
      titre: "Adaptez votre Position",
      description: "Privilégiez les positions latérales ou assises, évitez de rester allongée sur le dos après le 4ème mois.",
      icon: "🧘‍♀️"
    },
    {
      titre: "Écoutez votre Corps",
      description: "Chaque grossesse est unique. Adaptez les exercices selon vos sensations et votre énergie.",
      icon: "❤️"
    },
    {
      titre: "Pratiquez Régulièrement",
      description: "15 minutes par jour sont plus bénéfiques qu'une longue séance hebdomadaire.",
      icon: "⏰"
    },
    {
      titre: "Impliquez votre Partenaire",
      description: "Partagez certains exercices avec votre partenaire pour renforcer votre lien.",
      icon: "👫"
    },
    {
      titre: "Consultez votre Médecin",
      description: "Demandez l'accord de votre médecin ou sage-femme avant de commencer.",
      icon: "🩺"
    },
    {
      titre: "Créez votre Rituel",
      description: "Instaurez un moment de sophrologie quotidien pour vous et votre bébé.",
      icon: "🌸"
    }
  ]

  const temoignagesMamans = [
    {
      nom: "Camille L.",
      situation: "Maman de Hugo, 6 mois",
      commentaire: "La sophrologie m'a accompagnée tout au long de ma grossesse. L'accouchement s'est très bien passé, j'étais sereine et confiante. Je recommande vivement !",
      etoiles: 5,
      benefice: "Accouchement naturel sans péridurale"
    },
    {
      nom: "Sophie M.",
      situation: "Maman de jumeaux, 1 an",
      commentaire: "Avec ma grossesse gémellaire, j'étais très angoissée. Les techniques de visualisation m'ont énormément aidée à rester positive et confiante.",
      etoiles: 5,
      benefice: "Grossesse sereine malgré les risques"
    },
    {
      nom: "Élise D.",
      situation: "Maman de Léa, 3 mois",
      commentaire: "Les exercices de respiration ont été mes meilleurs alliés pendant le travail. J'ai pu gérer la douleur de façon naturelle.",
      etoiles: 5,
      benefice: "Gestion naturelle de la douleur"
    }
  ]

  const programmeSuivi = [
    {
      mois: "Mois 1-3",
      seances: "2 séances",
      objectifs: ["Acceptation de la grossesse", "Gestion des premiers symptômes", "Création du lien"],
      prix: "120€"
    },
    {
      mois: "Mois 4-6", 
      seances: "3 séances",
      objectifs: ["Connexion avec bébé", "Acceptation des changements", "Confiance en soi"],
      prix: "180€"
    },
    {
      mois: "Mois 7-9",
      seances: "4 séances",
      objectifs: ["Préparation à l'accouchement", "Gestion de la douleur", "Visualisation positive"],
      prix: "240€"
    },
    {
      mois: "Post-partum",
      seances: "2 séances",
      objectifs: ["Récupération physique", "Adaptation au nouveau rôle", "Prévention baby-blues"],
      prix: "120€"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header de l'article */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-pink-600 hover:text-pink-800 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
              Maternité & Bien-être
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Sophrologie et grossesse : votre guide pour 9 mois de sérénité
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Découvrez comment la sophrologie peut transformer votre expérience de la grossesse, 
              de la conception à l'accouchement, pour vivre pleinement cette période unique.
            </p>
            
            {/* Métadonnées de l'article */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>8 décembre 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min de lecture</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Marie Dubois, Sophrologue Périnatale</span>
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
              La grossesse est une période de transformations profondes, physiques et émotionnelles. 
              C'est un voyage extraordinaire qui peut parfois susciter des inquiétudes et des peurs. 
              La sophrologie offre des outils précieux pour vivre cette expérience avec sérénité et confiance.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Spécialisée dans l'accompagnement périnatal, j'ai eu le privilège d'accompagner plus de 
              500 futures mamans vers un accouchement serein et une maternité épanouie. La sophrologie 
              n'est pas seulement une préparation à l'accouchement, c'est un art de vivre sa grossesse.
            </p>
          </div>

          {/* Bienfaits par trimestre */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Un Accompagnement Adapté à Chaque Trimestre
            </h2>
            
            <div className="space-y-8">
              {bienfaitsGrossesse.map((trimestre, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full">
                          {trimestre.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {trimestre.periode}
                          </h3>
                          <Badge className={trimestre.couleur}>
                            {trimestre.periode.split(' ')[0]} Trimestre
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Défis courants :</h4>
                            <ul className="space-y-2">
                              {trimestre.defis.map((defi, defiIndex) => (
                                <li key={defiIndex} className="text-sm text-gray-600">
                                  • {defi}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Techniques adaptées :</h4>
                            <ul className="space-y-2">
                              {trimestre.techniques.map((technique, techIndex) => (
                                <li key={techIndex} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="h-3 w-3 text-pink-600 mr-2" />
                                  {technique}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Bénéfices :</h4>
                            <ul className="space-y-2">
                              {trimestre.benefices.map((benefice, beneficeIndex) => (
                                <li key={beneficeIndex} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
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

          {/* Exercices détaillés */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              4 Exercices Essentiels pour votre Grossesse
            </h2>
            
            <div className="grid gap-8">
              {exercicesDetailles.map((exercice, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {exercice.titre}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {exercice.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <span className="font-semibold text-gray-900">Durée :</span>
                            <span className="text-gray-600 ml-2">{exercice.duree}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Moment idéal :</span>
                            <span className="text-gray-600 ml-2">{exercice.moment}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Période :</span>
                            <span className="text-pink-600 ml-2 font-medium">{exercice.trimestre}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Étapes à suivre :</h4>
                        <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6">
                          {exercice.etapes.map((etape, etapeIndex) => (
                            <li key={etapeIndex} className="leading-relaxed">{etape}</li>
                          ))}
                        </ol>
                        
                        <h4 className="font-semibold text-gray-900 mb-3">Bénéfices :</h4>
                        <ul className="space-y-2">
                          {exercice.benefices.map((benefice, beneficeIndex) => (
                            <li key={beneficeIndex} className="flex items-center text-gray-600">
                              <Heart className="h-4 w-4 text-pink-600 mr-3" />
                              {benefice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Conseils pratiques */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Conseils Pratiques pour une Pratique Sécurisée
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {conseilsPratiques.map((conseil, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{conseil.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {conseil.titre}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {conseil.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Témoignages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Témoignages de Mamans Épanouies
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {temoignagesMamans.map((temoignage, index) => (
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
                      <div className="text-sm text-gray-500 mb-2">{temoignage.situation}</div>
                      <Badge className="bg-pink-100 text-pink-700 text-xs">
                        {temoignage.benefice}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Programme de suivi */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Programme de Suivi Personnalisé
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {programmeSuivi.map((periode, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-pink-600">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{periode.mois}</h3>
                      <p className="text-sm text-gray-600 mb-4">{periode.seances}</p>
                      <ul className="text-xs text-gray-500 space-y-1 mb-4">
                        {periode.objectifs.map((objectif, objIndex) => (
                          <li key={objIndex}>• {objectif}</li>
                        ))}
                      </ul>
                      <div className="text-lg font-bold text-pink-600">{periode.prix}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8 pt-8 border-t">
                  <Badge className="bg-pink-600 text-white text-lg px-6 py-2">
                    Programme complet : 660€ (au lieu de 760€)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA principal */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
              <CardContent className="p-8 text-center">
                <Shield className="h-16 w-16 mx-auto mb-4 text-pink-100" />
                <h2 className="text-3xl font-bold mb-4">
                  Accompagnement "Maman Sereine"
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Un suivi personnalisé de la grossesse au post-partum
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">9</div>
                    <div className="text-pink-100">mois d'accompagnement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">11</div>
                    <div className="text-pink-100">séances individuelles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-pink-100">exercices audio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-pink-100">support WhatsApp</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="text-pink-600">
                  Découvrir l'Accompagnement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Votre Grossesse, Votre Chemin vers la Sérénité
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chaque grossesse est unique, et votre expérience le sera aussi. La sophrologie vous 
                offre les clés pour vivre pleinement cette période extraordinaire, en harmonie avec 
                votre corps, vos émotions et votre bébé.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                N'attendez pas pour commencer : dès les premiers mois, la sophrologie peut vous 
                accompagner vers une maternité épanouie et un accouchement serein. Votre bébé 
                bénéficiera également de votre bien-être et de votre sérénité.
              </p>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
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
                  <Badge className="mb-3 bg-blue-100 text-blue-700">Sommeil & Bien-être</Badge>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/blog/ameliorer-sommeil-sophrologie" className="hover:text-pink-600">
                      Comment améliorer son sommeil avec la sophrologie ?
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Retrouvez un sommeil réparateur grâce aux techniques sophrologiques.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-700">Gestion du Stress</Badge>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/blog/5-techniques-gestion-stress" className="hover:text-pink-600">
                      5 techniques de sophrologie pour gérer le stress au quotidien
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Découvrez des outils pratiques pour apaiser votre mental et retrouver votre sérénité.
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