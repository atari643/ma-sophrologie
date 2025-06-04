import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Shield, Eye, Lock, Mail, Phone, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function PolitiqueConfidentialite() {
  const dataTypes = [
    {
      type: "Données d'identification",
      description: "Nom, prénom, adresse email, numéro de téléphone",
      purpose: "Gestion des rendez-vous et communication",
      retention: "3 ans après la dernière consultation",
      icon: <Eye className="w-6 h-6 text-blue-600" />
    },
    {
      type: "Données de santé",
      description: "Informations relatives à votre suivi sophrologique",
      purpose: "Suivi médical et personnalisation des séances",
      retention: "20 ans conformément à la réglementation",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      type: "Données de navigation",
      description: "Cookies, adresse IP, données de connexion",
      purpose: "Amélioration de l'expérience utilisateur",
      retention: "13 mois maximum",
      icon: <Lock className="w-6 h-6 text-purple-600" />
    },
    {
      type: "Données financières",
      description: "Informations de paiement (cryptées)",
      purpose: "Traitement des paiements",
      retention: "Durée légale comptable",
      icon: <FileText className="w-6 h-6 text-orange-600" />
    }
  ]

  const rights = [
    {
      right: "Droit d'accès",
      description: "Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.",
      action: "Demande par email ou courrier"
    },
    {
      right: "Droit de rectification",
      description: "Vous pouvez demander la correction de données inexactes ou incomplètes.",
      action: "Modification possible lors des consultations"
    },
    {
      right: "Droit à l'effacement",
      description: "Vous pouvez demander la suppression de vos données sous certaines conditions.",
      action: "Demande motivée par email"
    },
    {
      right: "Droit à la portabilité",
      description: "Vous pouvez récupérer vos données dans un format structuré et lisible.",
      action: "Export des données sur demande"
    },
    {
      right: "Droit d'opposition",
      description: "Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.",
      action: "Notification par email"
    },
    {
      right: "Droit à la limitation",
      description: "Vous pouvez demander la limitation du traitement de vos données.",
      action: "Demande écrite avec justification"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à protéger votre vie privée et vos données personnelles 
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Dernière mise à jour : 4 juin 2025
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                Responsable du traitement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Muriel Artigala - Sophrologue</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p><strong>Adresse :</strong> 120 avenue de Saint-Emilion, 33127 Martignas-sur-Jalle</p>
                    <p><strong>Téléphone :</strong> 06 89 15 50 21</p>
                  </div>
                  <div>
                    <p><strong>Email :</strong> contact@muriel-artigala.fr</p>
                    <p><strong>SIRET :</strong> 94823934800014</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
              En tant que responsable du traitement, nous déterminons les finalités et les moyens 
                du traitement de vos données personnelles dans le cadre de notre activité de sophrologie.
              </p>
            </CardContent>
          </Card>

          {/* Types de données collectées */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-600" />
                Données collectées et finalités
              </CardTitle>
              <CardDescription>
                Voici les différents types de données que nous collectons et les raisons de cette collecte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {dataTypes.map((data, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {data.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{data.type}</h3>
                        <p className="text-gray-600 mb-3">{data.description}</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Finalité :</span>
                            <p className="text-gray-600">{data.purpose}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Conservation :</span>
                            <p className="text-gray-600">{data.retention}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Base légale */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                Base légale du traitement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Exécution d'un contrat</h3>
                  <p className="text-gray-600">
                    Le traitement de vos données est nécessaire à l'exécution du contrat de soins 
                    sophrologique que nous concluons ensemble.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Obligation légale</h3>
                  <p className="text-gray-600">
                    Certaines données sont traitées pour respecter nos obligations légales 
                    (facturation, déclaration fiscale, etc.).
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Intérêt légitime</h3>
                  <p className="text-gray-600">
                    L&apos;amélioration de nos services et la communication peuvent être basées 
                    sur notre intérêt légitime.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Consentement</h3>
                  <p className="text-gray-600">
                    Pour certains traitements optionnels (newsletter, cookies), 
                    nous recueillons votre consentement explicite.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vos droits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                Vos droits sur vos données
              </CardTitle>
              <CardDescription>
                Conformément au RGPD, vous disposez de plusieurs droits sur vos données personnelles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{right.right}</h3>
                      <p className="text-gray-600 mb-2">{right.description}</p>
                      <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {right.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Comment exercer vos droits ?</h3>
                <p className="text-gray-600 mb-4">
                  Pour exercer vos droits, contactez-nous par email ou courrier postal. 
                  Nous vous répondrons dans un délai maximum d'un mois.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline">
                    <Link href="mailto:contact@muriel-artigala.fr">
                      <Mail className="w-4 h-4 mr-2" />
                      contact@muriel-artigala.fr
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="tel:0689155021">
                      <Phone className="w-4 h-4 mr-2" />
                      06 89 15 50 21
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sécurité et transferts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-red-600" />
                Sécurité et transferts de données
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Mesures de sécurité</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>• Stockage sécurisé des données sur serveurs français</li>
                  <li>• Accès restreint et authentification forte</li>
                  <li>• Sauvegardes régulières et plan de continuité</li>
                  <li>• Formation continue sur la protection des données</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Partage des données</h3>
                <p className="text-gray-600 mb-3">
                  Vos données peuvent être partagées uniquement dans les cas suivants :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prestataires techniques (hébergement, paiement) sous contrat strict</li>
                  <li>• Professionnels de santé en cas de nécessité médicale</li>
                  <li>• Autorités légales sur réquisition judiciaire</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-orange-600" />
                Cookies et technologies similaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez gérer vos préférences à tout moment.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies essentiels</h4>
                    <p className="text-sm text-gray-600">Nécessaires au fonctionnement du site</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies analytiques</h4>
                    <p className="text-sm text-gray-600">Amélioration de l'expérience utilisateur</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies marketing</h4>
                    <p className="text-sm text-gray-600">Personnalisation du contenu</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact et réclamations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600" />
                Contact et réclamations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Délégué à la Protection des Données</h3>
                  <p className="text-gray-600 mb-3">
                    Pour toute question relative à la protection de vos données :
                  </p>
                  <p className="text-gray-700">
                    <strong>Email :</strong> dpo@muriel-artigala.fr<br />
                    <strong>Adresse :</strong> DPO - 120 avenue de Saint-Emilion, 33127 Martignas-sur-Jalle
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Droit de réclamation</h3>
                  <p className="text-gray-600 mb-3">
                    Vous avez le droit de porter réclamation auprès de la CNIL :
                  </p>
                  <p className="text-gray-700">
                    <strong>Site :</strong> www.cnil.fr<br />
                    <strong>Téléphone :</strong> 01 53 73 22 22
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Nous contacter
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/mentions-legales">
                  <FileText className="w-5 h-5 mr-2" />
                  Mentions légales
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Cette politique de confidentialité peut être mise à jour. 
              Nous vous informerons de tout changement significatif par email ou via notre site.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}