"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
  Video,
  Building
} from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const faq = [
    {
      question: "Qu'est-ce que la sophrologie ?",
      answer: "La sophrologie est une méthode de développement personnel qui combine relaxation, respiration, mouvements corporels et visualisation positive. Elle aide à gérer le stress, améliorer le sommeil, développer la confiance en soi et atteindre un mieux-être global."
    },
    {
      question: "Combien de séances sont nécessaires ?",
      answer: "Le nombre de séances varie selon vos objectifs et votre situation. En général, 5 à 10 séances suffisent pour ressentir des bénéfices durables. Lors de la première séance, nous établirons ensemble un programme personnalisé."
    },
    {
      question: "La sophrologie convient-elle à tout le monde ?",
      answer: "Oui, la sophrologie s'adapte à tous les âges et toutes les situations. Elle est particulièrement efficace pour la gestion du stress, les troubles du sommeil, la préparation aux examens, l'accompagnement périnatal et l'amélioration des performances sportives."
    },
    {
      question: "Comment se déroule une séance ?",
      answer: "Une séance dure environ 1 heure et comprend un temps d'échange, des exercices de relaxation dynamique debout ou assis, une relaxation profonde allongée, et un temps de partage sur votre vécu. Chaque séance est adaptée à vos besoins."
    },
    {
      question: "Puis-je annuler ou reporter un rendez-vous ?",
      answer: "Oui, vous pouvez annuler ou reporter votre rendez-vous jusqu'à 24h avant la séance sans frais. Au-delà, la séance sera due sauf cas de force majeure."
    },
    {
      question: "Proposez-vous des séances en ligne ?",
      answer: "Oui, je propose des consultations en ligne via une plateforme sécurisée. La qualité de l'accompagnement reste la même qu'en présentiel, avec l'avantage de la flexibilité géographique et horaire."
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '06 89 15 50 21',
      description: 'Lun-Ven: 10h-12h et 14h-19h30',
      action: 'Appeler',
      href: 'tel:+33689155021'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'muriel.artigala@gmail.com',
      description: 'Réponse sous 24h',
      action: 'Écrire',
      href: 'mailto:muriel.artigala@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '06 89 15 50 21',
      description: 'Messages et appels',
      action: 'Contacter',
      href: 'https://wa.me/33689155021'
    },
    {
      icon: Calendar,
      title: 'Réservation',
      value: 'En ligne 24h/7j',
      description: 'Réservation immédiate',
      action: 'Réserver',
      href: '/reservation'
    }
  ]

  const horaires = [
    { jour: 'Lundi', heures: '10h00 - 12h00 / 14h00 - 19h30' },
    { jour: 'Mardi', heures: '10h00 - 12h00 / 14h00 - 19h30' },
    { jour: 'Mercredi', heures: '10h00 - 12h00 / 14h00 - 19h30' },
    { jour: 'Jeudi', heures: '10h00 - 12h00 / 14h00 - 19h30' },
    { jour: 'Vendredi', heures: '10h00 - 12h00 / 14h00 - 19h30' },
    { jour: 'Samedi', heures: '9h00 - 12h00' },
    { jour: 'Dimanche', heures: 'Fermé' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Section Héro */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contactez{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Marie
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Une question ? Un doute ? N'hésitez pas à me contacter. 
              Je vous réponds rapidement et avec plaisir.
            </p>
          </div>
        </div>
      </section>

      {/* Méthodes de contact */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-4">{method.value}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={method.href}>
                        {method.action}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Formulaire et informations */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Envoyez-moi un message</span>
                  </CardTitle>
                  <CardDescription>
                    Je vous réponds personnellement sous 24h
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-gray-600">
                        Merci pour votre message. Je vous réponds très rapidement.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input 
                            id="prenom" 
                            value={formData.prenom}
                            onChange={(e) => handleChange('prenom', e.target.value)}
                            placeholder="Votre prénom" 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="nom">Nom *</Label>
                          <Input 
                            id="nom" 
                            value={formData.nom}
                            onChange={(e) => handleChange('nom', e.target.value)}
                            placeholder="Votre nom" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="votre@email.com" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="telephone">Téléphone</Label>
                        <Input 
                          id="telephone" 
                          type="tel" 
                          value={formData.telephone}
                          onChange={(e) => handleChange('telephone', e.target.value)}
                          placeholder="06 12 34 56 78" 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="sujet">Sujet *</Label>
                        <Select onValueChange={(value) => handleChange('sujet', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="info">Demande d'information</SelectItem>
                            <SelectItem value="rdv">Prise de rendez-vous</SelectItem>
                            <SelectItem value="tarifs">Questions sur les tarifs</SelectItem>
                            <SelectItem value="groupe">Ateliers de groupe</SelectItem>
                            <SelectItem value="entreprise">Prestations en entreprise</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Décrivez votre demande..."
                          rows={4}
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Informations pratiques */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Cabinet de sophrologie</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                      <p className="text-gray-600">
                        120 avenue de Saint-Emilion<br />
                        33127 Martignas-sur-Jalle<br />
                        France
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Accès</h4>
                      <p className="text-gray-600">
                        Proche Bordeaux Métropole<br />
                        Parking gratuit disponible<br />
                        Accessible aux PMR
                      </p>
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://maps.google.com/maps?q=120+avenue+de+Saint-Emilion,+33127+Martignas-sur-Jalle" target="_blank">
                        <MapPin className="mr-2 h-4 w-4" />
                        Voir sur Google Maps
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Horaires */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Horaires d'ouverture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {horaires.map((horaire, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{horaire.jour}</span>
                        <span className={`font-semibold ${horaire.heures === 'Fermé' ? 'text-red-500' : 'text-gray-900'}`}>
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Urgences :</strong> En cas d'urgence, contactez-moi par téléphone ou WhatsApp.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services express */}
              <Card>
                <CardHeader>
                  <CardTitle>Réservation rapide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <Link href="/reservation">
                        <Users className="mr-2 h-4 w-4" />
                        Séance individuelle
                      </Link>
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <Link href="/reservation">
                        <Video className="mr-2 h-4 w-4" />
                        Consultation en ligne
                      </Link>
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <Link href="/prestations/groupe">
                        <Users className="mr-2 h-4 w-4" />
                        Atelier de groupe
                      </Link>
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <Link href="/prestations/entreprise">
                        <Building className="mr-2 h-4 w-4" />
                        Prestation entreprise
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes. 
              Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à me contacter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed pb-4">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous avez d'autres questions ?
            </p>
            <Button variant="outline" asChild>
              <Link href="#contact-form">
                <MessageCircle className="mr-2 h-4 w-4" />
                Posez votre question
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt(e) à commencer ?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Réservez votre première séance découverte et commencez votre parcours vers le mieux-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/reservation">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver une séance
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link href="tel:+33689155021">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
