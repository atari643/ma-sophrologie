import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ReviewSchema from '@/components/review-schema'
import LocalBusinessSchema from '@/components/local-business-schema'
import { 
  AlertTriangle,
  Heart,
  Shield,
  Zap,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  Target,
  Battery,
  Thermometer,
  Brain,
  Coffee,
  Home,
  Briefcase
} from 'lucide-react'

export const metadata = {
  title: 'Accompagnement Burn-out Sophrologie | Muriel Artigala Bordeaux',
  description: 'Spécialisée burn-out professionnel à Bordeaux. Muriel Artigala sophrologue propose récupération, prévention rechute, retour au travail. Méthode douce et efficace.',
  keywords: 'burn-out Bordeaux, sophrologie burn-out, épuisement professionnel Bordeaux, récupération burn-out, prévention burn-out, retour travail après burn-out, Muriel Artigala',
  openGraph: {
    title: 'Accompagnement Burn-out Sophrologie | Bordeaux',
    description: 'Spécialisée dans l\'accompagnement du burn-out professionnel avec la sophrologie à Bordeaux.',
    url: 'https://muriel-artigala.fr/burn-out-sophrologie',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burn-out : Accompagnement Sophrologie',
    description: 'Récupération et prévention du burn-out avec la sophrologie.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/burn-out-sophrologie'
  }
}

export default function BurnOutSophrologie() {
  const phasesBurnout = [
    {
      phase: "Phase Aiguë",
      duree: "0-3 mois",
      couleur: "bg-red-600",
      symptomes: [
        "Épuisement physique et émotionnel",
        "Troubles du sommeil sévères",
        "Anxiété, irritabilité",
        "Perte de motivation totale"
      ],
      approche: [
        "Stabilisation émotionnelle urgente",
        "Techniques de récupération immédiate",
        "Gestion des symptômes aigus",
        "Accompagnement médical coordonné"
      ]
    },
    {
      phase: "Phase Récupération",
      duree: "3-6 mois",
      couleur: "bg-orange-600",
      symptomes: [
        "Amélioration progressive",
        "Fatigue persistante",
        "Appréhension du retour",
        "Fragilité émotionnelle"
      ],
      approche: [
        "Reconstruction de l'énergie vitale",
        "Renforcement de l'estime de soi",
        "Apprentissage nouvelles habitudes",
        "Préparation mentale au retour"
      ]
    },
    {
      phase: "Phase Réinsertion",
      duree: "6-12 mois",
      couleur: "bg-yellow-600",
      symptomes: [
        "Retour progressif activité",
        "Stress anticipatoire",
        "Peur de la rechute",
        "Besoin de nouveaux repères"
      ],
      approche: [
        "Gestion du stress professionnel",
        "Techniques de protection",
        "Affirmation de soi",
        "Équilibre vie pro/perso"
      ]
    },
    {
      phase: "Phase Prévention",
      duree: "Long terme",
      couleur: "bg-green-600",
      symptomes: [
        "Retour à l'autonomie",
        "Vigilance maintenue",
        "Nouveaux défis acceptés",
        "Bien-être stable"
      ],
      approche: [
        "Maintien des acquis",
        "Prévention des rechutes",
        "Développement personnel",
        "Séances de rappel"
      ]
    }
  ];

  const techniquesBurnout = [
    {
      titre: "Respiration de Récupération",
      icone: <Heart className="h-6 w-6" />,
      description: "Technique pour restaurer le système nerveux épuisé",
      benefices: ["Calme le système nerveux", "Diminue cortisol", "Améliore récupération"],
      pratique: "15 minutes matin et soir"
    },
    {
      titre: "Visualisation Énergétique",
      icone: <Battery className="h-6 w-6" />,
      description: "Reconstituer mentalement ses réserves d'énergie",
      benefices: ["Restaure l'énergie", "Renforce motivation", "Améliore confiance"],
      pratique: "20 minutes 3x/semaine"
    },
    {
      titre: "Ancrage de Protection",
      icone: <Shield className="h-6 w-6" />,
      description: "Créer une bulle de protection contre le stress",
      benefices: ["Protège des agressions", "Maintient l'équilibre", "Prévient rechutes"],
      pratique: "5 minutes avant situations stressantes"
    },
    {
      titre: "Relaxation Progressive",
      icone: <Zap className="h-6 w-6" />,
      description: "Détendre profondément chaque partie du corps",
      benefices: ["Relâche tensions", "Améliore sommeil", "Restaure le corps"],
      pratique: "30 minutes quotidiennes"
    }
  ];

  const signauxAlarme = [
    {
      categorie: "Physiques",
      icone: <Thermometer className="h-5 w-5" />,
      signaux: [
        "Fatigue persistante malgré repos",
        "Troubles du sommeil",
        "Maux de tête fréquents",
        "Tensions musculaires",
        "Troubles digestifs"
      ]
    },
    {
      categorie: "Émotionnels",
      icone: <Heart className="h-5 w-5" />,
      signaux: [
        "Irritabilité croissante",
        "Anxiété permanente",
        "Perte de motivation",
        "Sentiment d'échec",
        "Détachement émotionnel"
      ]
    },
    {
      categorie: "Comportementaux",
      icone: <Users className="h-5 w-5" />,
      signaux: [
        "Isolement social",
        "Procrastination",
        "Absentéisme",
        "Consommation substances",
        "Négligence personnelle"
      ]
    },
    {
      categorie: "Cognitifs",
      icone: <Brain className="h-5 w-5" />,
      signaux: [
        "Difficultés concentration",
        "Oublis fréquents",
        "Indécision",
        "Pensées négatives",
        "Perte de créativité"
      ]
    }
  ];

  const programmeBurnout = [
    {
      semaine: "Semaines 1-2",
      objectif: "Stabilisation",
      actions: [
        "Évaluation complète de l'état",
        "Techniques d'urgence anti-stress",
        "Mise en place routine de base",
        "Coordination avec médecin"
      ]
    },
    {
      semaine: "Semaines 3-6",
      objectif: "Récupération",
      actions: [
        "Approfondissement techniques",
        "Travail sur l'estime de soi",
        "Gestion des émotions",
        "Reconstruction progressive"
      ]
    },
    {
      semaine: "Semaines 7-10",
      objectif: "Renforcement",
      actions: [
        "Préparation retour activité",
        "Techniques de protection",
        "Gestion des relations",
        "Plan de prévention"
      ]
    },
    {
      semaine: "Suivi long terme",
      objectif: "Prévention",
      actions: [
        "Séances de maintien",
        "Ajustements techniques",
        "Accompagnement évolutif",
        "Prévention rechutes"
      ]
    }
  ];

  const tarifsBurnout = [
    {
      formule: "Consultation Urgence",
      duree: "1h30",
      prix: "80€",
      inclus: [
        "Évaluation complète",
        "Techniques d'urgence",
        "Plan de récupération",
        "Support 48h"
      ]
    },
    {
      formule: "Programme Récupération",
      duree: "10 séances",
      prix: "600€",
      inclus: [
        "Suivi personnalisé",
        "Techniques adaptées",
        "Support inter-séances",
        "Bilan final"
      ],
      recommande: true
    },
    {
      formule: "Accompagnement Complet",
      duree: "6 mois",
      prix: "900€",
      inclus: [
        "15 séances réparties",
        "Suivi continu",
        "Préparation retour",
        "Prévention rechute"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Spécialiste Burn-out
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accompagnement Burn-out avec la Sophrologie
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Récupération douce et durable de l'épuisement professionnel. Méthode personnalisée, prévention des rechutes, retour serein à l'activité.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  Consultation Urgence
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="#signaux">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Reconnaître les Signaux
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                <Heart className="h-8 w-8 inline mr-3 text-red-600" />
                Le Burn-out : Une Réalité à Prendre au Sérieux
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Le burn-out touche aujourd'hui <strong>3,2 millions de Français</strong> et représente la 4ème cause d'arrêt maladie 
                  de longue durée. En tant que sophrologue spécialisée à Bordeaux, j'accompagne depuis 8 ans des personnes en épuisement 
                  professionnel vers une récupération complète et durable.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  La sophrologie offre une approche douce et efficace pour restaurer l'équilibre corps-esprit, 
                  reconstituer les réserves énergétiques et développer des stratégies de protection durables contre le stress chronique.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <p className="text-red-800 font-medium">
                    <strong>Important :</strong> Le burn-out nécessite un accompagnement médical. La sophrologie vient en complément 
                    pour optimiser la récupération et prévenir les rechutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signaux d'Alarme */}
      <section id="signaux" className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reconnaître les Signaux d'Alarme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus tôt le burn-out est identifié, plus la récupération est rapide et efficace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {signauxAlarme.map((categorie, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    {categorie.icone}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Signaux {categorie.categorie}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categorie.signaux.map((signal, signalIndex) => (
                      <li key={signalIndex} className="text-sm text-gray-700 flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phases du Burn-out */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les 4 Phases de Récupération
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement adapté à chaque étape de votre parcours de guérison
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {phasesBurnout.map((phase, index) => (
              <Card key={index} className="bg-white shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className={`${phase.couleur} text-white p-6 lg:w-1/4 flex flex-col justify-center`}>
                    <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-sm opacity-90">Durée : {phase.duree}</p>
                  </div>
                  <div className="p-6 lg:w-3/4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3">Symptômes caractéristiques :</h4>
                        <ul className="space-y-2">
                          {phase.symptomes.map((symptome, symptomeIndex) => (
                            <li key={symptomeIndex} className="text-sm text-gray-700 flex items-start">
                              <span className="text-red-400 mr-2">•</span>
                              {symptome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">Approche sophrologique :</h4>
                        <ul className="space-y-2">
                          {phase.approche.map((app, appIndex) => (
                            <li key={appIndex} className="text-sm text-gray-700 flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Spécialisées */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Techniques Sophrologie Spécial Burn-out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des méthodes éprouvées pour restaurer votre équilibre et votre énergie vitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {techniquesBurnout.map((technique, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {technique.icone}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {technique.titre}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {technique.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Bénéfices :</h4>
                    <ul className="space-y-1">
                      {technique.benefices.map((benefice, beneficeIndex) => (
                        <li key={beneficeIndex} className="text-sm text-gray-700 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefice}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Pratique recommandée :</strong> {technique.pratique}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programme d'Accompagnement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Calendar className="h-8 w-8 inline mr-3 text-orange-600" />
              Programme d'Accompagnement Structuré
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un suivi progressif et personnalisé pour une récupération complète
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programmeBurnout.map((etape, index) => (
                <Card key={index} className="bg-white shadow-lg border-t-4 border-orange-600">
                  <CardHeader className="text-center">
                    <Badge className="bg-orange-100 text-orange-800 mb-2">
                      {etape.semaine}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {etape.objectif}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {etape.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="text-sm text-gray-700 flex items-start">
                          <Target className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Tarifs */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formules d'Accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond à vos besoins et votre situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tarifsBurnout.map((tarif, index) => (
              <Card key={index} className={`bg-white shadow-lg ${tarif.recommande ? 'border-2 border-orange-500 scale-105' : ''}`}>
                {tarif.recommande && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ RECOMMANDÉ
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tarif.formule}
                  </CardTitle>
                  <div className="text-3xl font-bold text-orange-600 my-4">
                    {tarif.prix}
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">
                    {tarif.duree}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tarif.inclus.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700" asChild>
                    <a href="tel:0689155021">Réserver</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de Récupération
            </h2>
            <p className="text-xl text-gray-600">
              Ils ont surmonté leur burn-out avec la sophrologie
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
                  "Après 6 mois d'arrêt, j'ai pu reprendre progressivement grâce à Muriel. 
                  La sophrologie m'a aidé à retrouver confiance et à gérer mon retour au travail en douceur."
                </p>
                <div className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <Briefcase className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Laurent M.</p>
                    <p className="text-sm text-gray-600">Manager, secteur bancaire</p>
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
                  "L'accompagnement de Muriel a été vital. Elle m'a appris à me protéger du stress 
                  et aujourd'hui, 2 ans après, je n'ai pas refait de burn-out."
                </p>
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-full p-2 mr-3">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sophie L.</p>
                    <p className="text-sm text-gray-600">Infirmière, CHU Bordeaux</p>
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
                  "Je recommande vivement Muriel à toute personne en burn-out. 
                  Sa méthode douce et efficace m'a permis de me reconstruire complètement."
                </p>
                <div className="flex items-center">
                  <div className="bg-yellow-100 rounded-full p-2 mr-3">
                    <Shield className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marc D.</p>
                    <p className="text-sm text-gray-600">Enseignant, Académie Bordeaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Consultation */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre Récupération Commence Aujourd'hui
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Le burn-out n'est pas une fatalité. Avec un accompagnement adapté et les bonnes techniques, 
              vous pouvez retrouver équilibre, énergie et plaisir au travail.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50" asChild>
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
            
            <div className="text-orange-200 space-y-2">
              <div className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Bordeaux et Métropole - Consultations à domicile possibles</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Horaires adaptés - Consultations d'urgence disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ReviewSchema 
        businessName="Muriel Artigala - Spécialiste Burn-out Sophrologie"
        businessUrl="https://muriel-artigala.fr/burn-out-sophrologie"
        reviews={[
          {
            author: "Laurent M.",
            datePublished: "2024-10-15",
            reviewBody: "Après 6 mois d'arrêt, j'ai pu reprendre progressivement grâce à Muriel. La sophrologie m'a aidé à retrouver confiance et à gérer mon retour au travail en douceur.",
            ratingValue: 5
          },
          {
            author: "Sophie L.",
            datePublished: "2024-09-20",
            reviewBody: "L'accompagnement de Muriel a été vital. Elle m'a appris à me protéger du stress et aujourd'hui, 2 ans après, je n'ai pas refait de burn-out.",
            ratingValue: 5
          },
          {
            author: "Marc D.",
            datePublished: "2024-08-10",
            reviewBody: "Je recommande vivement Muriel à toute personne en burn-out. Sa méthode douce et efficace m'a permis de me reconstruire complètement.",
            ratingValue: 5
          }
        ]}
        aggregateRating={{
          ratingValue: 5,
          reviewCount: 3
        }}
      />

      <LocalBusinessSchema 
        name="Muriel Artigala - Spécialiste Burn-out Sophrologie"
        description="Accompagnement spécialisé burn-out et épuisement professionnel avec la sophrologie à Bordeaux"
        url="https://muriel-artigala.fr/burn-out-sophrologie"
        telephone="+33689155021"
        email="contact@muriel-artigala.fr"
        address={{
          streetAddress: "Cabinet et domicile",
          addressLocality: "Bordeaux",
          postalCode: "33000",
          addressCountry: "France"
        }}
        geo={{
          latitude: 44.8378,
          longitude: -0.5792
        }}
        openingHours={[
          { dayOfWeek: ["Monday"], opens: "09:00", closes: "19:00" },
          { dayOfWeek: ["Tuesday"], opens: "09:00", closes: "19:00" },
          { dayOfWeek: ["Wednesday"], opens: "09:00", closes: "19:00" },
          { dayOfWeek: ["Thursday"], opens: "09:00", closes: "19:00" },
          { dayOfWeek: ["Friday"], opens: "09:00", closes: "19:00" },
          { dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" }
        ]}
        priceRange="60-120€"
        serviceArea={[
          "Bordeaux",
          "Villenave-d'Ornon",
          "Pessac",
          "Talence",
          "Mérignac"
        ]}
      />
    </div>
    )
    }   
