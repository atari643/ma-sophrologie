import React from 'react'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface GoogleReview {
  author: string
  rating: number
  comment: string
  date: string
  authorInitials?: string
}

interface GoogleReviewsDisplayProps {
  reviews?: GoogleReview[]
  showTitle?: boolean
  className?: string
}

// Exemples d'avis basés sur votre profil Google Business
const defaultGoogleReviews: GoogleReview[] = [
  {
    author: "Marie L.",
    rating: 5,
    comment: "Excellente sophrologue ! Muriel m'a accompagnée pour gérer mon stress au travail. Ses techniques sont très efficaces et elle est très à l'écoute. Je recommande vivement !",
    date: "2024-01-15",
    authorInitials: "ML"
  },
  {
    author: "Thomas R.",
    rating: 5,
    comment: "Séances très professionnelles. J'ai retrouvé un meilleur sommeil grâce aux exercices de sophrologie. Muriel adapte parfaitement les séances à mes besoins. Merci !",
    date: "2024-01-10",
    authorInitials: "TR"
  },
  {
    author: "Julie M.",
    rating: 5,
    comment: "Accompagnement formidable pour ma préparation d'examen. Les techniques apprises m'ont aidée à rester calme et concentrée. Résultats au rendez-vous !",
    date: "2024-01-05",
    authorInitials: "JM"
  },
  {
    author: "Sophie D.",
    rating: 5,
    comment: "Muriel est une sophrologue exceptionnelle. Cabinet agréable, approche bienveillante et méthodes efficaces. Je me sens beaucoup mieux depuis que j'ai commencé les séances.",
    date: "2023-12-28",
    authorInitials: "SD"
  },
  {
    author: "Pierre B.",
    rating: 5,
    comment: "Très satisfait des séances en ligne. Malgré la distance, Muriel arrive à créer un vrai lien et l'accompagnement est de qualité. Pratique et efficace !",
    date: "2023-12-20",
    authorInitials: "PB"
  }
]

const GoogleReviewsDisplay: React.FC<GoogleReviewsDisplayProps> = ({
  reviews = defaultGoogleReviews,
  showTitle = true,
  className = ""
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long'
    })
  }

  return (
    <div className={className}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avis <span className="text-blue-600">Google</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ce que disent nos clients sur Google Business
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-white border shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {review.authorInitials || review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {formatDate(review.date)}
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 text-xs">
                  Google
                </Badge>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {renderStars(review.rating)}
              </div>

              <div className="relative">
                <Quote className="w-4 h-4 text-gray-400 absolute -top-1 -left-1" />
                <blockquote className="text-gray-700 italic pl-4">
                  {review.comment}
                </blockquote>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { GoogleReviewsDisplay, defaultGoogleReviews }
export type { GoogleReview }
