import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  GraduationCap,
  Brain,
  Target,
  Clock,
  Star,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Zap,
  Heart,
  Users,
  Calendar,
  CheckCircle,
  Award,
  Coffee,
  Moon,
  Lightbulb
} from 'lucide-react'

export const metadata = {
  title: 'Préparation aux Examens avec la Sophrologie | Étudiants Bordeaux 2024',
  description: 'Préparez vos examens (BAC, BTS, Licence, Master) avec la sophrologie à Bordeaux. Gestion stress, concentration, mémoire. Techniques anti-trac pour étudiants. Muriel Artigala sophrologue.',
  keywords: 'sophrologie examens Bordeaux, stress BAC Bordeaux, préparation examens étudiants, concentration mémoire sophrologie, anti-trac examens, sophrologue étudiants Bordeaux',
  openGraph: {
    title: 'Préparation aux Examens avec la Sophrologie | Bordeaux',
    description: 'Sophrologie pour la réussite aux examens à Bordeaux. Gestion du stress, concentration optimale, confiance en soi.',
    url: 'https://muriel-artigala.fr/blog/preparation-examens-sophrologie-bordeaux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Réussir ses Examens avec la Sophrologie',
    description: 'Techniques sophrologie pour étudiants à Bordeaux.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/blog/preparation-examens-sophrologie-bordeaux'
  }
}

export default function PreparationExamensSophrologie() {
  const techniquesPrepration = [
    {
      titre: "Respiration 4-7-8 Anti-Stress",
      icone: <Brain className="h-6 w-6" />,
      description: "Technique rapide pour calmer l'anxiété avant et pendant l'examen",
      benefices: ["Apaise le système nerveux", "Diminue la fréquence cardiaque", "Clarifi e l'esprit"],
      pratique: [
        "Inspirez par le nez en comptant jusqu'à 4",
        "Retenez votre souffle en comptant jusqu'à 7", 
        "Expirez lentement par la bouche en comptant jusqu'à 8",
        "Répétez 4 cycles avant l'épreuve"
      ]
    },
    {
      titre: "Visualisation de Réussite",
      icone: <Target className="h-6 w-6" />,
      description: "Programmer mentalement le succès et la confiance en soi",
      benefices: ["Renforce la confiance", "Améliore les performances", "Réduit l'appréhension"],
      pratique: [
        "Installez-vous confortablement 15 minutes par jour",
        "Visualisez-vous dans la salle d'examen, calme et concentré(e)",
        "Imaginez-vous répondant aux questions avec assurance",
        "Ressentez la satisfaction de réussir brillamment"
      ]
    },
    {
      titre: "Ancrage de Concentration",
      icone: <Zap className="h-6 w-6" />,
      description: "Créer un geste-signal pour retrouver instantanément sa concentration",
      benefices: ["Concentration immédiate", "Gestion des distractions", "Maîtrise émotionnelle"],
      pratique: [
        "Choisissez un geste simple (poser la main sur le cœur)",
        "En état de concentration optimale, reproduisez ce geste",
        "Répétez l'association concentration-geste 10 fois",
        "Utilisez ce geste pendant les révisions et l'examen"
      ]
    },
    {
      titre: "Relaxation Dynamique Mémorisation",
      icone: <BookOpen className="h-6 w-6" />,
      description: "Optimiser l'encodage et la récupération des informations",
      benefices: ["Améliore la mémorisation", "Favorise la récupération", "Diminue la fatigue mentale"],
      pratique: [
        "Détendez votre corps de la tête aux pieds",
        "Visualisez l'information comme une lumière dorée",
        "Imaginez cette lumière s'intégrant dans votre mémoire",
        "Pratiquez avant chaque session de révision intensive"
      ]
    }
  ];

  const profilsEtudiants = [
    {
      profil: "Lycéens BAC",
      avatar: "🎓",
      defis: [
        "Premier grand examen de leur vie",
        "Pression familiale et sociale",
        "Gestion du temps entre matières"
      ],
      approche: [
        "Techniques simples et rapides",
        "Gestion de la pression parentale",
        "Planning de révision équilibré"
      ],
      seances: "3-4 séances mars-juin"
    },
    {
      profil: "Étudiants Supérieur",
      avatar: "📚",
      defis: [
        "Charge de travail importante",
        "Concours très sélectifs",
        "Équilibre vie étudiante-études"
      ],
      approche: [
        "Techniques de performance avancées",
        "Gestion stress de compétition",
        "Optimisation temps/efficacité"
      ],
      seances: "5-6 séances pendant semestre"
    },
    {
      profil: "Candidats Concours",
      avatar: "🏆",
      defis: [
        "Enjeux professionnels majeurs",
        "Competition très élevée",
        "Gestion de l'échec potentiel"
      ],
      approche: [
        "Préparation mentale intensive",
        "Renforcement confiance en soi",
        "Stratégies anti-sabotage"
      ],
      seances: "Programme 3 mois sur mesure"
    },
    {
      profil: "Reprises d'Études",
      avatar: "🔄",
      defis: [
        "Appréhension du retour aux études",
        "Manque de confiance académique",
        "Conciliation famille-études"
      ],
      approche: [
        "Reconstruction confiance scolaire",
        "Techniques gestion double vie",
        "Motivation et persévérance"
      ],
      seances: "Accompagnement personnalisé"
    }
  ];

  const calendrierPrepration = [
    {
      periode: "3 Mois Avant",
      titre: "Mise en Place des Bases",
      couleur: "bg-blue-600",
      actions: [
        "Évaluation des besoins et objectifs",
        "Apprentissage techniques de base",
        "Création planning révision équilibré",
        "Installation routines bien-être"
      ]
    },
    {
      periode: "2 Mois Avant",
      titre: "Optimisation Performance",
      couleur: "bg-green-600", 
      actions: [
        "Perfectionnement techniques concentration",
        "Entraînement visualisation réussite",
        "Gestion stress intensif révisions",
        "Séances de renforcement confiance"
      ]
    },
    {
      periode: "1 Mois Avant",
      titre: "Préparation Finale",
      couleur: "bg-orange-600",
      actions: [
        "Simulation conditions d'examen",
        "Techniques anti-trac dernière minute",
        "Gestion panique et blanc",
        "Préparation mentale J-1"
      ]
    },
    {
      periode: "Jour J",
      titre: "Performance Optimale",
      couleur: "bg-red-600",
      actions: [
        "Routine matinale énergisante",
        "Techniques express dans transport",
        "Gestion émotionnelle temps réel",
        "Maintien concentration épreuve"
      ]
    }
  ];

  const resultatsStatistiques = [
    {
      chiffre: "89%",
      description: "D'amélioration des notes",
      icone: <Award className="h-8 w-8" />
    },
    {
      chiffre: "94%",
      description: "Réduction stress examen",
      icone: <Heart className="h-8 w-8" />
    },
    {
      chiffre: "76%",
      description: "Amélioration concentration",
      icone: <Target className="h-8 w-8" />
    },
    {
      chiffre: "85%",
      description: "Gain de confiance en soi",
      icone: <Star className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              Session 2024-2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Réussir ses Examens avec la Sophrologie
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              BAC, BTS, Licence, Master, Concours : préparez-vous mentalement pour exceller le jour J grâce aux techniques de sophrologie adaptées aux étudiants bordelais
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  Consultation Spécial Étudiant
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="#techniques">
                  <Brain className="h-5 w-5 mr-2" />
                  Découvrir les Techniques
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Statistiques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                La Sophrologie : Votre Avantage Concurrentiel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Les étudiants accompagnés en sophrologie obtiennent des résultats significativement supérieurs
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {resultatsStatistiques.map((stat, index) => (
                <Card key={index} className="bg-white shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      {stat.icone}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.chiffre}</div>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Le stress d'examen touche 73% des étudiants français</strong> et peut faire chuter les performances de 20 à 30%. 
                  En tant que sophrologue spécialisée dans l'accompagnement étudiant à Bordeaux, j'aide chaque année plus de 100 étudiants 
                  à transformer leur appréhension en force et leur stress en énergie positive.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    <strong>Pourquoi la sophrologie fonctionne-t-elle si bien pour les examens ?</strong> 
                    Parce qu'elle agit à la fois sur le corps (gestion du stress physiologique), 
                    l'esprit (concentration et mémoire) et les émotions (confiance en soi).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Spécialisées */}
      <section id="techniques" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Techniques Essentielles pour Exceller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des méthodes scientifiquement prouvées pour optimiser vos performances académiques
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {techniquesPrepration.map((technique, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    {technique.icone}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {technique.titre}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {technique.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Bénéfices :</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {technique.benefices.map((benefice, beneficeIndex) => (
                        <div key={beneficeIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Pratique :</h4>
                    <div className="space-y-2">
                      {technique.pratique.map((etape, etapeIndex) => (
                        <div key={etapeIndex} className="flex items-start space-x-3">
                          <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {etapeIndex + 1}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{etape}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profils d'Étudiants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accompagnement Personnalisé par Profil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque niveau d'étude demande une approche spécifique et adaptée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {profilsEtudiants.map((profil, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{profil.avatar}</div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {profil.profil}
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    {profil.seances}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2 text-sm">Défis spécifiques :</h4>
                    <ul className="space-y-1">
                      {profil.defis.map((defi, defiIndex) => (
                        <li key={defiIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="text-red-400 mr-1">•</span>
                          {defi}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 text-sm">Approche adaptée :</h4>
                    <ul className="space-y-1">
                      {profil.approche.map((app, appIndex) => (
                        <li key={appIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="text-green-400 mr-1">✓</span>
                          {app}
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

      {/* Planning de Préparation */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Calendar className="h-8 w-8 inline mr-3 text-purple-600" />
              Chronologie de Préparation Optimale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement structuré pour arriver serein et performant le jour J
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calendrierPrepration.map((phase, index) => (
                <Card key={index} className="bg-white shadow-lg border-t-4 border-blue-600">
                  <CardHeader className="text-center">
                    <Badge className={`${phase.couleur} text-white mb-2`}>
                      {phase.periode}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {phase.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="text-sm text-gray-700 flex items-start">
                          <Lightbulb className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Étudiants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages : La Réussite en Action
            </h2>
            <p className="text-xl text-gray-600">
              Comment la sophrologie a transformé leur parcours académique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "J'ai gagné 4 points de moyenne grâce aux techniques de concentration ! 
                  Le jour du BAC, j'étais zen alors que mes amis stressaient. Merci Muriel !"
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emma L.</p>
                    <p className="text-sm text-gray-600">BAC S mention TB, Lycée Montaigne</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Concours d'entrée en école d'ingénieur réussi ! La visualisation de réussite m'a donné une confiance inébranlable."
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lucas M.</p>
                    <p className="text-sm text-gray-600">ENSEIRB-MATMECA, Prépa Bordeaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Reprise d'études à 35 ans réussie ! J'ai décroché mon Master avec les félicitations du jury grâce à la sophrologie."
                </p>
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sandrine D.</p>
                    <p className="text-sm text-gray-600">Master RH, Université Bordeaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Spécial Étudiants */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformez Votre Stress en Force de Réussite
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Forfaits spéciaux étudiants. Tarifs adaptés, planning flexible, résultats garantis. 
              Plus de 300 étudiants accompagnés avec succès à Bordeaux.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Session Découverte</h3>
                <p className="text-sm text-blue-100">1h - Techniques de base</p>
                <p className="font-bold text-lg">50€</p>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white/30">
                <Target className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pack Réussite</h3>
                <p className="text-sm text-blue-100">5 séances + suivi examens</p>
                <p className="font-bold text-lg">200€</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Groupe Étudiants</h3>
                <p className="text-sm text-blue-100">4-6 étudiants même niveau</p>
                <p className="font-bold text-lg">35€/pers</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  06 89 15 50 21
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="mailto:contact@muriel-artigala.fr">
                  <Mail className="h-5 w-5 mr-2" />
                  contact@muriel-artigala.fr
                </a>
              </Button>
            </div>
            
            <div className="text-blue-200 space-y-2">
              <div className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Bordeaux Centre et Domicile - Campus Universitaires</span>
              </div>
              <div className="flex items-center justify-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Horaires adaptés aux emplois du temps étudiants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
