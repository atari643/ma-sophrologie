import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BlogStructuredData from '@/components/blog-structured-data'
import { 
  Calendar,
  ArrowLeft,
  GraduationCap,
  Users,
  Clock,
  Target,
  BookOpen,
  Heart,
  Briefcase,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Lightbulb,
  TreePine,
  Sun
} from 'lucide-react'

export const metadata = {
  title: 'Gérer le Stress de la Rentrée avec la Sophrologie | Bordeaux | Muriel Artigala',
  description: 'Techniques sophrologie pour gérer stress rentrée scolaire et professionnelle à Bordeaux. Muriel Artigala vous aide à aborder septembre sereinement. Conseils pratiques.',
  keywords: 'stress rentrée Bordeaux, sophrologie rentrée scolaire, gestion anxiété septembre, stress reprise travail, Muriel Artigala rentrée, techniques anti-stress rentrée',
  openGraph: {
    title: 'Gérer le Stress de la Rentrée avec la Sophrologie | Bordeaux',
    description: 'Techniques sophrologie pour une rentrée sereine à Bordeaux. Stress scolaire et professionnel.',
    url: 'https://muriel-artigala.fr/blog/gerer-stress-rentree-sophrologie-bordeaux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gérer le Stress de la Rentrée avec la Sophrologie',
    description: 'Techniques sophrologie pour une rentrée sereine à Bordeaux.',
  },
  alternates: {
    canonical: 'https://muriel-artigala.fr/blog/gerer-stress-rentree-sophrologie-bordeaux'
  }
}

export default function GererStressRentreeSophrologie() {
  const techniquesSophrologieRentree = [
    {
      icon: <TreePine className="h-6 w-6" />,
      technique: "Respiration de l'Arbre",
      description: "Technique d'ancrage pour retrouver stabilité et confiance",
      application: "Idéale avant une réunion importante ou un examen",
      duree: "5 minutes"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      technique: "Visualisation Positive",
      description: "Imaginer sa journée se déroulant avec sérénité et succès",
      application: "Chaque matin avant de commencer la journée",
      duree: "10 minutes"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      technique: "Relaxation Progressive",
      description: "Détente musculaire pour évacuer les tensions accumulées",
      application: "Le soir pour décompresser et bien dormir",
      duree: "15 minutes"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      technique: "Activation Mentale Positive",
      description: "Renforcer la confiance et l'optimisme pour les défis",
      application: "Avant les moments stressants (présentation, contrôle)",
      duree: "8 minutes"
    }
  ]

  const problemesRentree = [
    {
      categorie: "Étudiants",
      problemes: ["Stress examens", "Nouveau rythme", "Pression performance"],
      solutions: ["Gestion temps", "Techniques concentration", "Confiance en soi"]
    },
    {
      categorie: "Parents",
      problemes: ["Organisation familiale", "Conciliation vie pro/perso", "Fatigue"],
      solutions: ["Planification sereine", "Délégation", "Moments ressource"]
    },
    {
      categorie: "Professionnels",
      problemes: ["Reprise intense", "Nouveaux objectifs", "Charge mentale"],
      solutions: ["Priorisation", "Gestion stress", "Équilibre travail"]
    },
    {
      categorie: "Seniors",
      problemes: ["Nouvelle routine", "Activités sociales", "Changements"],
      solutions: ["Adaptation douce", "Maintien lien social", "Acceptation"]
    }
  ]

  const planningRentreeSophrologie = [
    {
      periode: "Fin Août",
      objectif: "Préparation mentale",
      actions: ["Bilan été", "Fixation objectifs", "Première séance"],
      seances: "2 séances"
    },
    {
      periode: "Septembre",
      objectif: "Adaptation au rythme",
      actions: ["Techniques quotidiennes", "Gestion organisation", "Suivi régulier"],
      seances: "4 séances"
    },
    {
      periode: "Octobre",
      objectif: "Ancrage des habitudes",
      actions: ["Autonomie techniques", "Ajustements", "Consolidation"],
      seances: "2 séances"
    }
  ]

  const conseilsPratiquesRentree = [
    {
      moment: "Au réveil",
      conseil: "5 minutes de respiration consciente",
      benefice: "Démarrer la journée en douceur"
    },
    {
      moment: "Pause déjeuner",
      conseil: "Marche consciente de 10 minutes",
      benefice: "Couper avec le matin, recharger l'énergie"
    },
    {
      moment: "Fin d'après-midi",
      conseil: "Exercice de détente express",
      benefice: "Transition travail/maison"
    },
    {
      moment: "Avant le coucher",
      conseil: "Visualisation positive du lendemain",
      benefice: "Sommeil réparateur et confiance"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <BlogStructuredData
        headline="Gérer le Stress de la Rentrée avec la Sophrologie à Bordeaux"
        description="Découvrez comment la sophrologie peut vous aider à aborder la rentrée scolaire et professionnelle avec sérénité à Bordeaux."
        author="Muriel Artigala"
        datePublished="2024-08-25"
        dateModified="2024-08-25"
        url="https://muriel-artigala.fr/blog/gerer-stress-rentree-sophrologie-bordeaux"
        image="https://muriel-artigala.fr/images/blog/stress-rentree-sophrologie.jpg"
        keywords={["stress rentrée", "sophrologie Bordeaux", "rentrée scolaire", "gestion anxiété", "techniques relaxation"]}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Gérer le Stress de la Rentrée</span>
          </div>
        </div>
      </nav>

      {/* En-tête article */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Calendar className="h-3 w-3 mr-1" />
                Septembre 2024
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <Clock className="h-3 w-3 mr-1" />
                8 min de lecture
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Gérer le <span className="text-blue-600">Stress de la Rentrée</span> 
              <br />avec la Sophrologie
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              La rentrée de septembre rime souvent avec stress, anxiété et bouleversements. 
              Découvrez comment la sophrologie peut transformer cette période en moment 
              d'épanouissement et de nouveaux départs sereins à Bordeaux.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Par Muriel Artigala</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Sophrologue diplômée Bordeaux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                🍂 <strong>Septembre arrive</strong> et avec lui son lot de changements : nouvelle année scolaire, 
                reprise du travail après les vacances, nouveaux objectifs, rythmes modifiés... 
                Cette période de transition, bien que riche en possibilités, peut générer stress et anxiété.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En tant que sophrologue à Bordeaux, j'accompagne chaque année de nombreuses personnes 
                dans cette période cruciale. La sophrologie offre des outils concrets et efficaces 
                pour transformer l'appréhension en confiance et faire de la rentrée un nouveau départ 
                épanouissant.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🎯 <span className="text-blue-600">Pourquoi</span> la Rentrée Génère-t-elle du Stress ?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Rupture de rythme :</strong> Passage de la détente estivale à un rythme soutenu
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Pression performance :</strong> Nouveaux objectifs, attentes élevées
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Organisation complexe :</strong> Jongler entre vie familiale et professionnelle
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Incertitudes :</strong> Nouveaux environnements, nouvelles personnes
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques sophrologie rentrée */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4 <span className="text-green-600">Techniques Sophrologie</span> pour la Rentrée
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des outils pratiques et immédiatement applicables pour transformer votre rentrée
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {techniquesSophrologieRentree.map((technique, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg text-green-600">
                        {technique.icon}
                      </div>
                      <CardTitle className="text-xl text-green-600">{technique.technique}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{technique.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Application</span>
                      <span className="font-medium text-gray-900 text-sm">{technique.application}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Durée</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {technique.duree}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes par catégorie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Solutions <span className="text-blue-600">par Profil</span>
              </h2>
              <p className="text-lg text-gray-600">
                Approche personnalisée selon votre situation à Bordeaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {problemesRentree.map((profil, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center gap-2">
                      {profil.categorie === "Étudiants" && <GraduationCap className="h-5 w-5" />}
                      {profil.categorie === "Parents" && <Users className="h-5 w-5" />}
                      {profil.categorie === "Professionnels" && <Briefcase className="h-5 w-5" />}
                      {profil.categorie === "Seniors" && <Heart className="h-5 w-5" />}
                      {profil.categorie}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Défis identifiés :</h4>
                      <div className="flex flex-wrap gap-2">
                        {profil.problemes.map((probleme, i) => (
                          <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            {probleme}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Solutions sophrologie :</h4>
                      <div className="flex flex-wrap gap-2">
                        {profil.solutions.map((solution, i) => (
                          <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {solution}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planning accompagnement */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Planning <span className="text-blue-600">Accompagnement</span> Rentrée
              </h2>
              <p className="text-lg text-gray-600">
                Protocole d'accompagnement étalé sur 3 mois pour une transition réussie
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {planningRentreeSophrologie.map((phase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{phase.periode}</CardTitle>
                    <CardDescription className="text-lg font-medium">{phase.objectif}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Actions :</h4>
                      <ul className="space-y-2">
                        {phase.actions.map((action, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {phase.seances}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium text-gray-800 mb-6">
                📅 <strong>Accompagnement personnalisé</strong> selon votre rythme et vos besoins
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:0689155021">
                    <Phone className="h-5 w-5 mr-2" />
                    06 89 15 50 21
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/contact">
                    Préparer ma rentrée
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils pratiques quotidiens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conseils <span className="text-green-600">Quotidiens</span>
              </h2>
              <p className="text-lg text-gray-600">
                Intégrez la sophrologie dans votre routine quotidienne
              </p>
            </div>

            <div className="space-y-6">
              {conseilsPratiquesRentree.map((conseil, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {conseil.moment}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{conseil.conseil}</h3>
                        <p className="text-gray-600">{conseil.benefice}</p>
                      </div>
                      <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌟 <strong>Votre Rentrée</strong> <span className="text-green-600">Sereine</span> commence maintenant
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                N'attendez pas que le stress s'installe. Anticipez et préparez votre rentrée 
                avec les outils de la sophrologie pour vivre cette transition en toute sérénité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    Réserver ma séance rentrée
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
                  <Link href="/prestations">
                    Découvrir mes prestations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Transformez votre Rentrée avec la Sophrologie
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès maintenant pour préparer sereinement votre rentrée à Bordeaux. 
              Ensemble, faisons de septembre un mois d'épanouissement plutôt que de stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
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
            <p className="text-blue-200 mt-6">
              <Award className="h-4 w-4 inline mr-2" />
              Sophrologue diplômée ISEBA Bordeaux | Spécialiste Transitions de Vie
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
