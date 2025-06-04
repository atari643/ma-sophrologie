import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ScrollText, Mail, Phone, MapPin, User } from 'lucide-react'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ScrollText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-600">
              Informations légales obligatoires concernant ce site web
            </p>
          </div>

          <div className="space-y-8">
            {/* Éditeur du site */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Éditeur du site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Raison sociale</h4>
                  <p className="text-gray-600">Muriel Artigala - Sophrologue</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Statut</h4>
                  <p className="text-gray-600">Micro-entreprise</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">SIRET</h4>
                  <p className="text-gray-600">94823934800014</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Code APE</h4>
                  <p className="text-gray-600">8690F - Activités de santé humaine non classées ailleurs</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">120 avenue de Saint-Emilion, 33127 Martignas-sur-Jalle</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">06 89 15 50 21</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">muriel.artigala@gmail.com</span>
                </div>
              </CardContent>
            </Card>

            {/* Directeur de publication */}
            <Card>
              <CardHeader>
                <CardTitle>Directeur de publication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Muriel Artigala</p>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card>
              <CardHeader>
                <CardTitle>Hébergement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hébergeur</h4>
                  <p className="text-gray-600">Vercel Inc.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                  <p className="text-gray-600">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card>
              <CardHeader>
                <CardTitle>Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-600">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de publication.
                </p>
              </CardContent>
            </Card>

            {/* Protection des données */}
            <Card>
              <CardHeader>
                <CardTitle>Protection des données personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Les informations recueillies sur ce site sont nécessaires pour le traitement de vos demandes. 
                  Elles sont destinées à Sarah Dubois et ne sont jamais communiquées à des tiers.
                </p>
                <p className="text-gray-600">
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                  Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                  de suppression et d'opposition au traitement de vos données personnelles.
                </p>
                <p className="text-gray-600">
                  Pour exercer ces droits, contactez-nous à l'adresse : contact@ma-sophrologie.fr
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne 
                  collectent aucune information personnelle et ne peuvent pas être désactivés.
                </p>
                <p className="text-gray-600">
                  Nous utilisons également des cookies d'analyse (Google Analytics) pour améliorer l'expérience 
                  utilisateur. Vous pouvez vous opposer à leur utilisation en paramétrant votre navigateur.
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
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                  à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-gray-600">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                  vouloir le signaler par email à l'adresse contact@ma-sophrologie.fr, en décrivant le problème 
                  de la manière la plus précise possible.
                </p>
                <p className="text-gray-600">
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule 
                  responsabilité. En conséquence, ne saurions être tenus responsables d'un quelconque dommage 
                  subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au 
                  téléchargement.
                </p>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card>
              <CardHeader>
                <CardTitle>Droit applicable et attribution de juridiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tout litige en relation avec l'utilisation du site ma-sophrologie.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Lyon.
                </p>
              </CardContent>
            </Card>

            {/* Dernière mise à jour */}
            <Card>
              <CardHeader>
                <CardTitle>Dernière mise à jour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ces mentions légales ont été mises à jour le 4 juin 2025.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}