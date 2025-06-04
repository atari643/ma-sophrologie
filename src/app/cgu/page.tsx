import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FileText, AlertTriangle, Shield, Calendar, CreditCard, Users } from 'lucide-react'

export default function CGU() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-lg text-gray-600">
              Conditions régissant l'utilisation de nos services de sophrologie
            </p>
          </div>

          <div className="space-y-8">
            {/* Préambule */}
            <Card>
              <CardHeader>
                <CardTitle>Préambule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation des services 
                  de sophrologie proposés par Sarah Dubois, sophrologue certifiée, ainsi que l'utilisation 
                  du site web ma-sophrologie.fr.
                </p>
                <p className="text-gray-600">
                  L'acceptation des présentes CGU est obligatoire pour bénéficier de nos services. Elle se 
                  matérialise par la prise de rendez-vous ou l'utilisation de notre site web.
                </p>
              </CardContent>
            </Card>

            {/* Définitions */}
            <Card>
              <CardHeader>
                <CardTitle>Définitions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Le Praticien</h4>
                  <p className="text-gray-600">Sarah Dubois, sophrologue certifiée RNCP</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Le Client</h4>
                  <p className="text-gray-600">Toute personne physique ou morale ayant recours aux services proposés</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Les Services</h4>
                  <p className="text-gray-600">Séances de sophrologie individuelles, ateliers de groupe, consultations en ligne, interventions en entreprise</p>
                </div>
              </CardContent>
            </Card>

            {/* Services proposés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Services proposés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Les services de sophrologie proposés comprennent :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Séances individuelles en présentiel ou en ligne</li>
                  <li>Ateliers de groupe thématiques</li>
                  <li>Interventions en entreprise sur mesure</li>
                  <li>Formations et conférences</li>
                  <li>Ressources numériques (supports audio, guides)</li>
                </ul>
                <p className="text-gray-600">
                  Ces services s'adressent à un public adulte et sont complémentaires à un suivi médical 
                  traditionnel. Ils ne constituent en aucun cas un traitement médical.
                </p>
              </CardContent>
            </Card>

            {/* Réservations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Réservations et rendez-vous
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prise de rendez-vous</h4>
                  <p className="text-gray-600">
                    Les rendez-vous peuvent être pris en ligne via notre système de réservation, par 
                    téléphone ou par email. Toute réservation doit être confirmée par le praticien.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Annulation</h4>
                  <p className="text-gray-600">
                    Les annulations doivent être effectuées au minimum 24h avant le rendez-vous. 
                    Passé ce délai, la séance sera due intégralement sauf cas de force majeure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Report</h4>
                  <p className="text-gray-600">
                    Un rendez-vous peut être reporté une fois sans frais dans un délai de 48h. 
                    Au-delà, les conditions d'annulation s'appliquent.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tarifs et paiement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Tarifs et modalités de paiement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tarifs</h4>
                  <p className="text-gray-600">
                    Les tarifs en vigueur sont ceux affichés sur le site web au moment de la réservation. 
                    Ils sont exprimés en euros TTC et peuvent être modifiés à tout moment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modalités de paiement</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Espèces</li>
                    <li>Chèque</li>
                    <li>Virement bancaire</li>
                    <li>Paiement en ligne sécurisé (Stripe)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Échéance</h4>
                  <p className="text-gray-600">
                    Le paiement des séances individuelles s'effectue à l'issue de chaque séance. 
                    Pour les forfaits, le paiement s'effectue à la signature du contrat.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Obligations du client */}
            <Card>
              <CardHeader>
                <CardTitle>Obligations du client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Le client s'engage à :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Fournir des informations exactes concernant son état de santé</li>
                  <li>Signaler tout problème de santé susceptible de contre-indiquer la pratique</li>
                  <li>Respecter les horaires de rendez-vous</li>
                  <li>Suivre les consignes données par le praticien</li>
                  <li>Maintenir un environnement respectueux lors des séances de groupe</li>
                  <li>Régler les honoraires selon les modalités convenues</li>
                </ul>
              </CardContent>
            </Card>

            {/* Obligations du praticien */}
            <Card>
              <CardHeader>
                <CardTitle>Obligations du praticien</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Le praticien s'engage à :</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Respecter le code de déontologie de la sophrologie</li>
                  <li>Maintenir le secret professionnel</li>
                  <li>Adapter les techniques aux besoins du client</li>
                  <li>Respecter les horaires de rendez-vous</li>
                  <li>Fournir un accompagnement de qualité</li>
                  <li>Orienter vers un professionnel de santé si nécessaire</li>
                </ul>
              </CardContent>
            </Card>

            {/* Confidentialité */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Confidentialité et secret professionnel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Le praticien est tenu au secret professionnel conformément à l'article 226-13 du Code pénal. 
                  Toutes les informations partagées lors des séances restent strictement confidentielles.
                </p>
                <p className="text-gray-600">
                  Les données personnelles collectées sont traitées conformément à notre politique de 
                  confidentialité et au RGPD. Elles ne sont jamais transmises à des tiers sans autorisation.
                </p>
              </CardContent>
            </Card>

            {/* Contre-indications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Contre-indications et limites
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  La sophrologie est contre-indiquée en cas de :
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Troubles psychotiques aigus</li>
                  <li>Troubles dissociatifs sévères</li>
                  <li>Épilepsie non stabilisée</li>
                  <li>Troubles cardiaques graves non contrôlés</li>
                </ul>
                <p className="text-gray-600">
                  La sophrologie ne remplace pas un traitement médical. Elle constitue un accompagnement 
                  complémentaire qui ne doit pas se substituer à un suivi médical approprié.
                </p>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card>
              <CardHeader>
                <CardTitle>Limitation de responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  La responsabilité du praticien est limitée à la prestation de services de sophrologie 
                  dans le respect des règles de l'art et de déontologie.
                </p>
                <p className="text-gray-600">
                  Le praticien ne peut être tenu responsable des résultats obtenus, ceux-ci dépendant 
                  de nombreux facteurs individuels et de l'implication du client.
                </p>
                <p className="text-gray-600">
                  En cas de séance en ligne, le client est responsable de son équipement informatique 
                  et de sa connexion internet.
                </p>
              </CardContent>
            </Card>

            {/* Force majeure */}
            <Card>
              <CardHeader>
                <CardTitle>Force majeure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sont considérés comme cas de force majeure tous événements extérieurs, imprévisibles 
                  et irrésistibles au sens de l'article 1218 du Code civil, notamment : pandémie, 
                  catastrophes naturelles, grèves, interruptions de transport ou de télécommunications.
                </p>
              </CardContent>
            </Card>

            {/* Résiliation */}
            <Card>
              <CardHeader>
                <CardTitle>Résiliation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Le client peut mettre fin à l'accompagnement à tout moment. Les séances non consommées 
                  d'un forfait ne sont pas remboursables sauf accord exceptionnel du praticien.
                </p>
                <p className="text-gray-600">
                  Le praticien se réserve le droit d'interrompre l'accompagnement en cas de manquement 
                  grave du client à ses obligations ou en cas d'incompatibilité thérapeutique.
                </p>
              </CardContent>
            </Card>

            {/* Litiges */}
            <Card>
              <CardHeader>
                <CardTitle>Règlement des litiges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  En cas de litige, une solution amiable sera recherchée en priorité. Le client peut 
                  également s'adresser à un médiateur de la consommation.
                </p>
                <p className="text-gray-600">
                  À défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Lyon, 
                  conformément au droit français.
                </p>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card>
              <CardHeader>
                <CardTitle>Modifications des CGU</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Les présentes CGU peuvent être modifiées à tout moment. Les clients seront informés 
                  des modifications par email ou via le site web. Les nouvelles conditions s'appliqueront 
                  aux prestations futures.
                </p>
              </CardContent>
            </Card>

            {/* Acceptation */}
            <Card>
              <CardHeader>
                <CardTitle>Acceptation des CGU</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  L'utilisation de nos services implique l'acceptation pleine et entière des présentes 
                  conditions générales d'utilisation. Ces CGU sont datées du 4 juin 2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}