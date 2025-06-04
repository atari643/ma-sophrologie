"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Calendar, 
  Clock, 
  Download, 
  FileText, 
  Headphones,
  Heart,
  MessageCircle,
  Settings,
  User,
  Video,
  CheckCircle,
  Star,
  Euro,
  Bell,
  BarChart3,
  Target,
  Award,
  Bookmark
} from 'lucide-react'
import Link from 'next/link'

export default function EspaceClient() {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Données simulées
  const userData = {
    prenom: "Sophie",
    nom: "Martin",
    email: "sophie.martin@email.com",
    telephone: "06 12 34 56 78",
    dateInscription: "2024-01-15",
    seancesTotal: 12,
    seancesRestantes: 3,
    objectifs: ["Gestion du stress", "Amélioration du sommeil", "Confiance en soi"]
  }

  const upcomingSessions = [
    {
      id: 1,
      date: "2024-12-20",
      heure: "14:00",
      type: "Séance individuelle",
      duree: "1h",
      statut: "confirmée",
      praticienne: "Marie Dubois"
    },
    {
      id: 2,
      date: "2024-12-27",
      heure: "10:30",
      type: "Consultation en ligne",
      duree: "45min",
      statut: "confirmée",
      praticienne: "Marie Dubois"
    }
  ]

  const sessionHistory = [
    {
      id: 1,
      date: "2024-12-13",
      type: "Séance individuelle",
      objectif: "Relaxation profonde",
      notes: "Excellente progression, continuer les exercices de respiration",
      rating: 5
    },
    {
      id: 2,
      date: "2024-12-06",
      type: "Séance individuelle", 
      objectif: "Gestion de l'anxiété",
      notes: "Techniques bien assimilées, à pratiquer quotidiennement",
      rating: 5
    },
    {
      id: 3,
      date: "2024-11-29",
      type: "Séance individuelle",
      objectif: "Confiance en soi",
      notes: "Bonne réceptivité, exercices de visualisation positive",
      rating: 4
    }
  ]

  const resources = [
    {
      id: 1,
      title: "Exercice de respiration - Base",
      type: "audio",
      duree: "10 min",
      telechargements: 5,
      dernierAcces: "2024-12-15"
    },
    {
      id: 2,
      title: "Guide relaxation progressive",
      type: "pdf",
      pages: 12,
      telechargements: 3,
      dernierAcces: "2024-12-10"
    },
    {
      id: 3,
      title: "Méditation du soir",
      type: "audio",
      duree: "15 min",
      telechargements: 8,
      dernierAcces: "2024-12-14"
    }
  ]

  const achievements = [
    { nom: "Première séance", description: "Félicitations pour votre première séance", obtenu: true, date: "2024-01-15" },
    { nom: "Régularité", description: "5 séances suivies", obtenu: true, date: "2024-03-20" },
    { nom: "Persévérance", description: "10 séances complétées", obtenu: true, date: "2024-06-15" },
    { nom: "Expert", description: "20 séances complétées", obtenu: false, date: null }
  ]

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
    { id: 'seances', label: 'Mes séances', icon: Calendar },
    { id: 'ressources', label: 'Ressources', icon: Download },
    { id: 'progres', label: 'Mes progrès', icon: Target },
    { id: 'profil', label: 'Mon profil', icon: User }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'audio': return Headphones
      case 'pdf': return FileText
      case 'video': return Video
      default: return Download
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Header espace client */}
      <section className="pt-16 pb-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Bonjour {userData.prenom} ! 👋
            </h1>
            <p className="text-purple-100 text-lg">
              Bienvenue dans votre espace personnel
            </p>
          </div>
        </div>
      </section>

      {/* Navigation onglets */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Statistiques */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Séances total</p>
                        <p className="text-2xl font-bold text-gray-900">{userData.seancesTotal}</p>
                      </div>
                      <Calendar className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Séances restantes</p>
                        <p className="text-2xl font-bold text-gray-900">{userData.seancesRestantes}</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Ressources</p>
                        <p className="text-2xl font-bold text-gray-900">{resources.length}</p>
                      </div>
                      <Download className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Badges</p>
                        <p className="text-2xl font-bold text-gray-900">{achievements.filter(a => a.obtenu).length}</p>
                      </div>
                      <Award className="h-8 w-8 text-yellow-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Prochaines séances */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Prochaines séances</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-purple-600 text-white p-2 rounded">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{session.type}</h4>
                            <p className="text-sm text-gray-600">
                              {new Date(session.date).toLocaleDateString('fr-FR')} à {session.heure} ({session.duree})
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-green-100 text-green-800">
                            {session.statut}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Objectifs en cours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Mes objectifs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {userData.objectifs.map((objectif, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{objectif}</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full" 
                            style={{ width: `${60 + index * 15}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{60 + index * 15}% complété</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Mes séances */}
          {activeTab === 'seances' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Mes séances</h2>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/reservation">
                    <Calendar className="mr-2 h-4 w-4" />
                    Réserver
                  </Link>
                </Button>
              </div>

              {/* Historique */}
              <Card>
                <CardHeader>
                  <CardTitle>Historique des séances</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sessionHistory.map((session) => (
                      <div key={session.id} className="border-l-4 border-purple-600 pl-4 py-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{session.objectif}</h4>
                            <p className="text-sm text-gray-600">
                              {session.type} - {new Date(session.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= session.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{session.notes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Ressources */}
          {activeTab === 'ressources' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Mes ressources</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => {
                  const Icon = getTypeIcon(resource.type)
                  return (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-purple-600" />
                          <div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <CardDescription>
                              {resource.type === 'audio' && `${resource.duree}`}
                              {resource.type === 'pdf' && `${resource.pages} pages`}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                          <span>{resource.telechargements} téléchargements</span>
                          <span>Dernier accès: {new Date(resource.dernierAcces).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <Button className="w-full" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          {/* Mes progrès */}
          {activeTab === 'progres' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Mes progrès</h2>
              
              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Mes badges</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border rounded-lg text-center ${achievement.obtenu ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}
                      >
                        <Award className={`h-8 w-8 mx-auto mb-2 ${achievement.obtenu ? 'text-yellow-500' : 'text-gray-400'}`} />
                        <h4 className={`font-semibold ${achievement.obtenu ? 'text-gray-900' : 'text-gray-500'}`}>
                          {achievement.nom}
                        </h4>
                        <p className={`text-sm ${achievement.obtenu ? 'text-gray-700' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        {achievement.obtenu && achievement.date && (
                          <p className="text-xs text-yellow-600 mt-2">
                            Obtenu le {new Date(achievement.date).toLocaleDateString('fr-FR')}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Graphique de progression */}
              <Card>
                <CardHeader>
                  <CardTitle>Évolution de mon bien-être</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Niveau de stress</span>
                        <span className="text-sm font-semibold text-green-600">-60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Qualité du sommeil</span>
                        <span className="text-sm font-semibold text-blue-600">+80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Confiance en soi</span>
                        <span className="text-sm font-semibold text-purple-600">+65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Mon profil */}
          {activeTab === 'profil' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Mon profil</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="prenom">Prénom</Label>
                        <Input id="prenom" value={userData.prenom} />
                      </div>
                      <div>
                        <Label htmlFor="nom">Nom</Label>
                        <Input id="nom" value={userData.nom} />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={userData.email} />
                    </div>
                    
                    <div>
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input id="telephone" type="tel" value={userData.telephone} />
                    </div>
                    
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Sauvegarder
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Préférences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="notifications">Notifications</Label>
                      <div className="space-y-2 mt-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Rappels de séances</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Nouveaux contenus</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">Newsletter</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="objectifs">Mes objectifs prioritaires</Label>
                      <Textarea 
                        id="objectifs" 
                        placeholder="Décrivez vos objectifs..."
                        value="Améliorer ma gestion du stress au travail et retrouver un sommeil de qualité."
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  )
}
