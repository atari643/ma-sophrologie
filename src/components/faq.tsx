import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, MapPin, Clock, CreditCard, Stethoscope, Users, CheckCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

interface FAQProps {
  title?: string
  description?: string
  includeSchema?: boolean
  cityFocus?: string
}

const FAQ: React.FC<FAQProps> = ({ 
  title = "Questions Fréquentes", 
  description = "Trouvez rapidement les réponses à vos questions sur la sophrologie",
  includeSchema = true,
  cityFocus = ""
}) => {
  const faqData: FAQItem[] = [
    {
      question: "Qu'est-ce que la sophrologie et comment ça fonctionne ?",
      answer: "La sophrologie est une méthode de relaxation dynamique qui combine respiration, détente musculaire et visualisation positive. Elle permet de développer la conscience de soi et d'harmoniser le corps et l'esprit. Les séances durent environ 1h et alternent exercices debout, assis et allongé.",
      category: "general"
    },
    {
      question: `Où se trouve le cabinet de sophrologie ${cityFocus ? `pour les habitants de ${cityFocus}` : 'de Muriel Artigala'} ?`,
      answer: `Le cabinet est situé au 120 avenue de Saint-Emilion, 33127 Martignas-sur-Jalle${cityFocus ? `, facilement accessible depuis ${cityFocus}` : ''}. Parking gratuit disponible sur place. ${cityFocus === 'Pessac' ? 'À seulement 15 minutes de Pessac via la D1010.' : cityFocus === 'Mérignac' ? 'À 20 minutes de Mérignac via l\'A630.' : cityFocus === 'Bordeaux' ? 'À 25 minutes du centre de Bordeaux.' : 'Accès facile depuis toute la Bordeaux Métropole.'}`,
      category: "practical"
    },
    {
      question: "Quels sont les tarifs des séances de sophrologie ?",
      answer: "Les séances individuelles sont à 40€. Les séances de groupe sont à 30€ par personne. Les téléconsultations sont également proposées à 40€. 34 mutuelles sont partenaires et peuvent rembourser tout ou partie des séances selon votre contrat.",
      category: "pricing"
    },
    {
      question: "Combien de séances sont nécessaires pour voir des résultats ?",
      answer: "Les premiers bénéfices se ressentent souvent dès la première séance. Pour un accompagnement complet, comptez généralement entre 8 et 12 séances selon vos objectifs. Nous évaluons ensemble votre progression et adaptons le nombre de séances à vos besoins spécifiques.",
      category: "treatment"
    },
    {
      question: "La sophrologie peut-elle aider pour le stress au travail ?",
      answer: "Absolument ! La sophrologie est particulièrement efficace pour gérer le stress professionnel, le burn-out, l'anxiété liée au travail et améliorer la concentration. Les techniques apprises peuvent être facilement intégrées dans votre quotidien professionnel pour une gestion autonome du stress.",
      category: "treatment"
    },
    {
      question: "Quels sont les horaires du cabinet de sophrologie ?",
      answer: "Le cabinet est ouvert du lundi au vendredi de 10h à 12h et de 14h à 19h30, ainsi que le samedi de 9h à 12h. Les créneaux sont flexibles et peuvent s'adapter aux contraintes professionnelles, notamment pour les travailleurs en horaires décalés.",
      category: "practical"
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous par téléphone au 06 89 15 50 21 ou par email à contact@muriel-artigala.fr. Je vous rappelle rapidement pour convenir ensemble du créneau qui vous convient le mieux.",
      category: "practical"
    },
    {
      question: "Les séances de sophrologie sont-elles remboursées ?",
      answer: "34 mutuelles sont partenaires et proposent des remboursements de 20€ à 60€ par séance selon votre contrat. Contactez votre mutuelle pour connaître votre niveau de prise en charge. Je peux vous fournir une facture détaillée pour vos remboursements.",
      category: "pricing"
    },
    {
      question: "Quelle est la formation de Muriel Artigala ?",
      answer: "Je suis diplômée de l'Institut Supérieur Européen de Bioénergie et d'Acupuncture (ISEBA) de Bordeaux avec une spécialisation acquise au CHU de Bordeaux. Cette formation reconnue garantit un accompagnement professionnel et adapté à vos besoins.",
      category: "professional"
    },
    {
      question: "La sophrologie convient-elle aux enfants et adolescents ?",
      answer: "Oui, la sophrologie est très bénéfique pour les jeunes. Elle les aide à gérer le stress scolaire, améliorer la concentration, développer la confiance en soi et préparer les examens. Les techniques sont adaptées à l'âge et aux besoins spécifiques de chaque enfant ou adolescent.",
      category: "treatment"
    },
    {
      question: `Pourquoi choisir un sophrologue ${cityFocus ? `près de ${cityFocus}` : 'à Martignas-sur-Jalle'} ?`,
      answer: `Le cabinet de Martignas-sur-Jalle offre un environnement calme et apaisant, loin de l'agitation urbaine${cityFocus ? `, tout en restant facilement accessible depuis ${cityFocus}` : ''}. Cette localisation permet une véritable coupure avec le quotidien, favorisant la détente et l'efficacité des séances de sophrologie.`,
      category: "general"
    },
    {
      question: "Proposez-vous des séances de groupe ?",
      answer: "Oui, je propose des séances de groupe de 3 à 6 personnes maximum pour préserver la qualité de l'accompagnement. Ces séances sont particulièrement appréciées en entreprise ou pour des thématiques spécifiques comme la gestion du stress ou la préparation aux examens. Tarif : 30€ par personne.",
      category: "group"
    }
  ]

  // Schema markup pour les FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const categoryIcons = {
    general: <HelpCircle className="h-5 w-5" />,
    practical: <MapPin className="h-5 w-5" />,
    pricing: <CreditCard className="h-5 w-5" />,
    treatment: <Stethoscope className="h-5 w-5" />,
    professional: <CheckCircle className="h-5 w-5" />,
    group: <Users className="h-5 w-5" />
  }

  const categoryColors = {
    general: "text-blue-600 bg-blue-50",
    practical: "text-emerald-600 bg-emerald-50", 
    pricing: "text-purple-600 bg-purple-50",
    treatment: "text-rose-600 bg-rose-50",
    professional: "text-amber-600 bg-amber-50",
    group: "text-teal-600 bg-teal-50"
  }

  const categoryLabels = {
    general: "Général",
    practical: "Pratique",
    pricing: "Tarifs",
    treatment: "Soins",
    professional: "Formation",
    group: "Groupe"
  }

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
            </div>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <HelpCircle className="h-6 w-6" />
                  Foire Aux Questions
                </CardTitle>
                <CardDescription className="text-emerald-100 text-center">
                  Tout ce que vous devez savoir sur la sophrologie et mes services
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg px-4 hover:shadow-sm transition-shadow"
                    >
                      <AccordionTrigger className="text-left py-4 hover:no-underline group">
                        <div className="flex items-start gap-3 text-left">
                          <div className={`p-2 rounded-full ${categoryColors[faq.category as keyof typeof categoryColors]} group-hover:scale-110 transition-transform flex-shrink-0 mt-1`}>
                            {categoryIcons[faq.category as keyof typeof categoryIcons]}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                              {faq.question}
                            </div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                              {categoryLabels[faq.category as keyof typeof categoryLabels]}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 pl-14">
                        <div className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Vous avez d'autres questions ?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    N'hésitez pas à me contacter pour un échange personnalisé
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:0689155021" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                      06 89 15 50 21
                    </a>
                    <a 
                      href="mailto:contact@muriel-artigala.fr" 
                      className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      <HelpCircle className="h-4 w-4" />
                      contact@muriel-artigala.fr
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
