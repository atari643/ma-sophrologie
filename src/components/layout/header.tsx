"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Calendar, Phone, Heart } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { 
      href: '/prestations', 
      label: 'Prestations',
      submenu: [
        { href: '/prestations/individuel', label: 'Séances individuelles' },
        { href: '/prestations/groupe', label: 'Ateliers de groupe' },
        { href: '/prestations/en-ligne', label: 'Consultations en ligne' },
        { href: '/prestations/entreprise', label: 'Sophrologie en entreprise' },
      ]
    },
    { href: '/blog', label: 'Blog & Ressources' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">
              Muriel Artigala
            </span>
          </Link>

          {/* Navigation desktop */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.label}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/reservation">
                <Calendar className="mr-2 h-4 w-4" />
                Réserver
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact
                    </Link>
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/reservation">
                      <Calendar className="mr-2 h-4 w-4" />
                      Réserver
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header