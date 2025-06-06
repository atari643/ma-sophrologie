import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Calendar,
  Gift,
  Users,
  Heart,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Target,
  Sparkles,
  TreePine,
  Home,
  Wallet,
  Utensils,
  Music
} from 'lucide-react'

export const metadata = {
  title: 'Gérer le Stress des Fêtes de Noël avec la Sophrologie | Bordeaux 2024',
  description: 'Découvrez comment gérer le stress des fêtes de fin d\'année avec la sophrologie à Bordeaux. Techniques anti-stress pour les préparatifs, repas de famille et budget. Consultations Muriel Artigala.',
  keywords: 'stress Noël Bordeaux, sophrologie fêtes fin année, gérer stress famille Noël, préparatifs Noël zen, sophrologie Bordeaux Noël, stress budget fêtes',
  openGraph: {
    title: 'Gérer le Stress des Fêtes avec la Sophrologie | Bordeaux',
    description: 'Techniques de sophrologie pour des fêtes de Noël sereines à Bordeaux. Gestion du stress familial, préparatifs et budget.',
    url: 'https://muriel-artigala.fr/blog/gerer-stress-fetes-noel-bordeaux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gérer le Stress des Fêtes avec la Sophrologie',
    description: 'Sophrologie pour des fêtes de Noël zen à Bordeaux.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/blog/gerer-stress-fetes-noel-bordeaux'
  }
}

export default function GererStressFetesNoelBordeaux() {
  const techniquesAntiStress = [
    {
      titre: "Respiration du Sapin",
      icone: <TreePine className="h-6 w-6" />,
      description: "Technique inspirée de l'imagerie des fêtes pour apaiser l'esprit",
      etapes: [
        "Visualisez un magnifique sapin de Noël scintillant",
        "Inspirez lentement en imaginant l'odeur de pin frais (4 secondes)",
        "Retenez votre souffle en admirant les décorations (4 secondes)", 
        "Expirez doucement en ressentant la paix des fêtes (6 secondes)",
        "Répétez 8 fois avant chaque préparatif stressant"
      ]
    },
    {
      titre: "Visualisation Positive des Repas",
      icone: <Utensils className="h-6 w-6" />,
      description: "Préparer mentalement les moments familiaux avec sérénité",
      etapes: [
        "Installez-vous confortablement 10 minutes avant le repas",
        "Fermez les yeux et visualisez la table décorée avec bienveillance",
        "Imaginez des conversations harmonieuses et joyeuses",
        "Ressentez la gratitude pour ces moments partagés",
        "Ancrez cette sensation positive en posant la main sur le cœur"
      ]
    },
    {
      titre: "Décompression Express Shopping",
      icone: <Gift className="h-6 w-6" />,
      description: "Gérer l'affluence et la pression des achats de cadeaux",
      etapes: [
        "Avant d'entrer dans un magasin, 3 respirations profondes",
        "Détendez vos épaules et relâchez la mâchoire",
        "Définissez mentalement vos priorités d'achat",
        "Si vous vous sentez débordé(e), pause de 2 minutes à l'extérieur",
        "Pratiquez la gratitude : 'J'offre par amour, pas par obligation'"
      ]
    },
    {
      titre: "Gestion Budget Zen",
      icone: <Wallet className="h-6 w-6" />,
      description: "Aborder les dépenses des fêtes avec philosophie",
      etapes: [
        "Acceptez vos limites financières sans culpabilité",
        "Concentrez-vous sur l'intention derrière le cadeau",
        "Respirez profondément avant chaque achat important",
        "Rappelez-vous : la valeur émotionnelle prime sur le prix",
        "Pratiquez l'affirmation : 'Je donne selon mes moyens, avec le cœur'"
      ]
    }
  ];

  const profilsStress = [
    {
      profil: "Les Organisateurs",
      avatar: "🎯",
      problematiques: [
        "Perfectionnisme dans les préparatifs",
        "Surcharge mentale de coordination",
        "Peur de décevoir la famille"
      ],
      solutions: [
        "Délégation bienveillante des tâches",
        "Acceptation de l'imperfection festive",
        "Planning réaliste avec pauses zen"
      ]
    },
    {
      profil: "Les Invités Anxieux", 
      avatar: "😰",
      problematiques: [
        "Appréhension des tensions familiales",
        "Stress social et performance",
        "Fatigue émotionnelle anticipée"
      ],
      solutions: [
        "Préparation mentale positive",
        "Techniques de sortie de conflit",
        "Bulle de protection énergétique"
      ]
    },
    {
      profil: "Les Parents Débordés",
      avatar: "👨‍👩‍👧‍👦", 
      problematiques: [
        "Gestion des attentes des enfants",
        "Équilibre magie/réalité",
        "Épuisement des préparatifs"
      ],
      solutions: [
        "Moments de pause parent-enfant",
        "Rituels familiaux apaisants",
        "Gestion des émotions collectives"
      ]
    },
    {
      profil: "Les Personnes Seules",
      avatar: "💙",
      problematiques: [
        "Sentiment d'isolement social",
        "Mélancolie des fêtes passées",
        "Pression sociale des célébrations"
      ],
      solutions: [
        "Création de nouveaux rituels personnels",
        "Connexion à la communauté bordelaise",
        "Bienveillance envers soi-même"
      ]
    }
  ];

  const planningFestes = [
    {
      periode: "Début Décembre",
      titre: "Préparation Mentale",
      actions: [
        "Séance sophrologie 'Intention des Fêtes'",
        "Définition des priorités familiales",
        "Apprentissage techniques anti-stress express"
      ]
    },
    {
      periode: "Mi-Décembre", 
      titre: "Gestion du Rush",
      actions: [
        "Pratique quotidienne respiration du Sapin",
        "Séances de décompression shopping",
        "Consultation personnalisée si besoin"
      ]
    },
    {
      periode: "Période des Fêtes",
      titre: "Présence et Sérénité", 
      actions: [
        "Mise en pratique des visualisations positives",
        "Gestion en temps réel des tensions",
        "Ancrage des moments de joie authentique"
      ]
    },
    {
      periode: "Début Janvier",
      titre: "Récupération Post-Fêtes",
      actions: [
        "Séance de bilan et gratitude",
        "Détox émotionnelle douce",
        "Préparation nouvelle année sereine"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-gold-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-green-600 to-gold-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Fêtes Sereines 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gérer le Stress des Fêtes de Noël avec la Sophrologie
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Transformez vos fêtes de fin d'année en moments de joie authentique grâce aux techniques de sophrologie adaptées à Bordeaux
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50" asChild>
                <a href="tel:0689155021">
                  <Phone className="h-5 w-5 mr-2" />
                  Consultation Urgente Fêtes
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="#techniques">
                  <TreePine className="h-5 w-5 mr-2" />
                  Découvrir les Techniques
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
                <Gift className="h-8 w-8 inline mr-3 text-red-600" />
                Les Fêtes : Entre Magie et Stress
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les fêtes de fin d'année à Bordeaux peuvent rapidement se transformer en source de stress intense. Entre les préparatifs, 
                  les achats de cadeaux, la gestion du budget, les repas familiaux et les attentes sociales, nombreux sont ceux qui perdent 
                  de vue la magie authentique des fêtes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  En tant que sophrologue diplômée à Bordeaux, j'accompagne chaque année de nombreuses personnes pour qu'elles retrouvent 
                  sérénité et joie pendant cette période. La sophrologie offre des outils concrets et efficaces pour transformer le stress 
                  des fêtes en moments de bonheur partagé.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <p className="text-red-800 font-medium">
                    <strong>Saviez-vous que 68% des Français ressentent du stress pendant les fêtes de fin d'année ?</strong> 
                    La sophrologie peut vous aider à faire partie des 32% qui vivent cette période avec sérénité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Anti-Stress */}
      <section id="techniques" className="py-16 bg-gradient-to-br from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Techniques Sophrologie Spécial Fêtes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des méthodes simples et efficaces à pratiquer avant, pendant et après les moments festifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {techniquesAntiStress.map((technique, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-r from-red-600 to-green-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    {technique.icone}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {technique.titre}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {technique.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {technique.etapes.map((etape, etapeIndex) => (
                      <div key={etapeIndex} className="flex items-start space-x-3">
                        <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {etapeIndex + 1}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{etape}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profils de Stress */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions Personnalisées par Profil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque personne vit les fêtes différemment. Identifiez votre profil pour des solutions adaptées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {profilsStress.map((profil, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{profil.avatar}</div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {profil.profil}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2 text-sm">Problématiques :</h4>
                    <ul className="space-y-1">
                      {profil.problematiques.map((prob, probIndex) => (
                        <li key={probIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="text-red-400 mr-1">•</span>
                          {prob}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 text-sm">Solutions :</h4>
                    <ul className="space-y-1">
                      {profil.solutions.map((sol, solIndex) => (
                        <li key={solIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="text-green-400 mr-1">✓</span>
                          {sol}
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

      {/* Planning des Fêtes */}
      <section className="py-16 bg-gradient-to-br from-gold-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Calendar className="h-8 w-8 inline mr-3 text-gold-600" />
              Planning Sophrologie des Fêtes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement structuré de décembre à janvier pour des fêtes sereines
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {planningFestes.map((phase, index) => (
                <Card key={index} className="bg-white shadow-lg border-t-4 border-red-600">
                  <CardHeader className="text-center">
                    <Badge className="bg-red-100 text-red-800 mb-2">
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
                          <Star className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Témoignages Fêtes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages : Des Fêtes Transformées
            </h2>
            <p className="text-xl text-gray-600">
              Comment la sophrologie a changé leur expérience des fêtes de fin d'année
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
                  "Grâce aux techniques de Muriel, j'ai réussi à organiser Noël pour 15 personnes sans stress ! 
                  La respiration du Sapin est devenue mon rituel quotidien en décembre."
                </p>
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-full p-2 mr-3">
                    <Users className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marie-Claire L.</p>
                    <p className="text-sm text-gray-600">Organisatrice famille, Bordeaux Centre</p>
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
                  "Les fêtes étaient devenues un cauchemar depuis mon divorce. Cette année, j'ai créé mes propres rituels et j'ai passé un Noël apaisé."
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <Heart className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Thomas R.</p>
                    <p className="text-sm text-gray-600">Parent solo, Talence</p>
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
                  "La gestion budget zen m'a libérée de la culpabilité financière. J'ai offert avec le cœur, pas avec le portefeuille !"
                </p>
                <div className="flex items-center">
                  <div className="bg-gold-100 rounded-full p-2 mr-3">
                    <Wallet className="h-4 w-4 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sophie M.</p>
                    <p className="text-sm text-gray-600">Étudiante, Pessac</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Consultation Spéciale Fêtes */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-green-600 to-gold-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <TreePine className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Offrez-vous des Fêtes Sereines cette Année
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Consultation spéciale "Préparation Fêtes" disponible en décembre. Techniques personnalisées et accompagnement adapté à votre situation familiale.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Consultation Express</h3>
                <p className="text-sm text-red-100">45 min - Techniques d'urgence</p>
                <p className="font-bold text-lg">40€</p>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white/30">
                <Gift className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pack Fêtes Complètes</h3>
                <p className="text-sm text-red-100">3 séances + suivi SMS</p>
                <p className="font-bold text-lg">200€</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Atelier Famille</h3>
                <p className="text-sm text-red-100">Groupe 4-6 personnes</p>
                <p className="font-bold text-lg">30€/pers</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
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
            
            <div className="mt-6 flex items-center justify-center text-red-200">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Bordeaux et toute la Métropole - Consultations à domicile possibles</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
