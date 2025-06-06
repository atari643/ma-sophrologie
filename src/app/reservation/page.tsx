"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle,
  CreditCard,
  Shield,
  Heart
} from 'lucide-react'

export default function Reservation() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [step, setStep] = useState(1)

  const services = [
    {
      id: 'individuel',
      name: 'Séance individuelle',
      duration: '1h',
      price: '40€',
      description: 'Accompagnement personnalisé'
    },
    {
      id: 'groupe',
      name: 'Atelier de groupe',
      duration: '1h30',
      price: '30€',
      description: 'Séance collective (max 8 personnes)'
    },
    {
      id: 'en-ligne',
      name: 'Consultation en ligne',
      duration: '45min',
      price: '40€',
      description: 'Séance par visioconférence'
    },
    {
      id: 'decouverte',
      name: 'Séance découverte',
      duration: '1h',
      price: '40€',
      description: 'Première séance avec bilan'
    }
  ]

  const timeSlots = [
    '09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      setStep(3)
    }
  }

  const selectedServiceData = services.find(s => s.id === selectedService)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Section Héro */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Réservez votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                séance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choisissez votre prestation et réservez en quelques clics. 
              Paiement sécurisé et confirmation immédiate.
            </p>
          </div>
        </div>
      </section>

      {/* Indicateur d'étapes */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${step >= 1 ? 'bg-purple-600' : 'bg-gray-300'}`}>
                  1
                </div>
                <span className="hidden sm:inline">Service</span>
              </div>
              
              <div className="w-8 h-0.5 bg-gray-300"></div>
              
              <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${step >= 2 ? 'bg-purple-600' : 'bg-gray-300'}`}>
                  2
                </div>
                <span className="hidden sm:inline">Date & Heure</span>
              </div>
              
              <div className="w-8 h-0.5 bg-gray-300"></div>
              
              <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${step >= 3 ? 'bg-purple-600' : 'bg-gray-300'}`}>
                  3
                </div>
                <span className="hidden sm:inline">Informations</span>
              </div>
              
              <div className="w-8 h-0.5 bg-gray-300"></div>
              
              <div className={`flex items-center space-x-2 ${step >= 4 ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${step >= 4 ? 'bg-purple-600' : 'bg-gray-300'}`}>
                  4
                </div>
                <span className="hidden sm:inline">Paiement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Étape 1: Choix du service */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Choisissez votre prestation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Card 
                      key={service.id} 
                      className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-200"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{service.name}</span>
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                          Choisir cette prestation
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 2: Choix de la date et l'heure */}
            {step === 2 && selectedServiceData && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Choisissez votre créneau
                  </h2>
                  <p className="text-gray-600">
                    {selectedServiceData.name} - {selectedServiceData.duration} - {selectedServiceData.price}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5" />
                        <span>Choisir une date</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Lun</div>
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Mar</div>
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Mer</div>
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Jeu</div>
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Ven</div>
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Sam</div>
                        <div className="text-center text-sm font-semibold text-gray-600 py-2">Dim</div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {/* Simulation d'un calendrier */}
                        {Array.from({ length: 35 }, (_, i) => {
                          const day = i - 5 + 1
                          const isValid = day > 0 && day <= 31 && day >= new Date().getDate()
                          const dateStr = `2024-12-${day.toString().padStart(2, '0')}`
                          
                          if (day <= 0 || day > 31) return <div key={i}></div>
                          
                          return (
                            <button
                              key={i}
                              className={`p-2 text-sm rounded-lg ${
                                selectedDate === dateStr
                                  ? 'bg-purple-600 text-white'
                                  : isValid
                                  ? 'hover:bg-purple-100 text-gray-700'
                                  : 'text-gray-300 cursor-not-allowed'
                              }`}
                              onClick={() => isValid && setSelectedDate(dateStr)}
                              disabled={!isValid}
                            >
                              {day}
                            </button>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="h-5 w-5" />
                        <span>Choisir un horaire</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            className={`w-full p-3 text-left rounded-lg border ${
                              selectedTime === time
                                ? 'border-purple-600 bg-purple-50 text-purple-600'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Retour
                  </Button>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={handleDateTimeSelect}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continuer
                  </Button>
                </div>
              </div>
            )}

            {/* Étape 3: Informations personnelles */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Vos informations
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informations personnelles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input id="prenom" placeholder="Votre prénom" />
                        </div>
                        <div>
                          <Label htmlFor="nom">Nom *</Label>
                          <Input id="nom" placeholder="Votre nom" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" />
                      </div>
                      
                      <div>
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input id="telephone" type="tel" placeholder="06 12 34 56 78" />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message (optionnel)</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Décrivez brièvement vos attentes ou questions..."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Récapitulatif de votre réservation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Prestation</span>
                          <span className="font-semibold">{selectedServiceData?.name}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date</span>
                          <span className="font-semibold">
                            {selectedDate && new Date(selectedDate).toLocaleDateString('fr-FR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Horaire</span>
                          <span className="font-semibold">{selectedTime}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Durée</span>
                          <span className="font-semibold">{selectedServiceData?.duration}</span>
                        </div>
                        
                        <div className="border-t pt-4">
                          <div className="flex justify-between text-lg">
                            <span className="font-semibold">Total</span>
                            <span className="font-bold text-purple-600">{selectedServiceData?.price}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Retour
                  </Button>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => setStep(4)}
                  >
                    Procéder au paiement
                  </Button>
                </div>
              </div>
            )}

            {/* Étape 4: Paiement */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Paiement sécurisé
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5" />
                        <span>Informations de paiement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="carte">Numéro de carte *</Label>
                        <Input id="carte" placeholder="1234 5678 9012 3456" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Date d'expiration *</Label>
                          <Input id="expiry" placeholder="MM/AA" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="nom-carte">Nom sur la carte *</Label>
                        <Input id="nom-carte" placeholder="Nom Prénom" />
                      </div>

                      <div className="flex items-center space-x-2 pt-4">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-gray-600">
                          Paiement sécurisé SSL 256 bits
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Confirmation de commande</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">
                            {selectedServiceData?.name}
                          </h4>
                          <p className="text-purple-700 text-sm">
                            {selectedDate && new Date(selectedDate).toLocaleDateString('fr-FR')} à {selectedTime}
                          </p>
                          <p className="text-purple-700 text-sm">
                            Durée: {selectedServiceData?.duration}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Sous-total</span>
                            <span>{selectedServiceData?.price}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>{selectedServiceData?.price}</span>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex items-start space-x-2">
                            <input type="checkbox" id="conditions" className="mt-1" />
                            <label htmlFor="conditions" className="text-sm text-gray-600">
                              J'accepte les{' '}
                              <Link href="/conditions" className="text-purple-600 hover:underline">
                                conditions générales de vente
                              </Link>{' '}
                              et la{' '}
                              <Link href="/confidentialite" className="text-purple-600 hover:underline">
                                politique de confidentialité
                              </Link>
                            </label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Retour
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => alert('Paiement simulé - Réservation confirmée!')}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Confirmer et payer {selectedServiceData?.price}
                  </Button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Section Garanties */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Paiement sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Confirmation immédiate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-500" />
              <span className="text-sm text-gray-600">Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
