import React from 'react'
import Link from 'next/link'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Muriel Artigala</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Sophrologue diplômée ISEBA Bordeaux. Accompagnement personnalisé pour 
              retrouver bien-être, sérénité et équilibre dans votre quotidien.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/prestations" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Prestations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Blog & Ressources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/prestations/individuel" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Séances individuelles
                </Link>
              </li>
              <li>
                <Link href="/prestations/groupe" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Ateliers de groupe
                </Link>
              </li>
              <li>
                <Link href="/prestations/en-ligne" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Consultations en ligne
                </Link>
              </li>
              <li>
                <Link href="/prestations/entreprise" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Sophrologie en entreprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300 text-sm">06 89 15 50 21</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300 text-sm">muriel.artigala@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  120 avenue de Saint-Emilion<br />
                  33127 Martignas-sur-Jalle
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muriel Artigala - Sophrologue. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
