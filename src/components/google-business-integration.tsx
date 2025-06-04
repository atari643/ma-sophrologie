import React from 'react'
import { Star, MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface GoogleBusinessProps {
  businessName?: string
  googleBusinessUrl?: string
  averageRating?: number
  totalReviews?: number
  showReviewsLink?: boolean
  className?: string
}

const GoogleBusinessIntegration: React.FC<GoogleBusinessProps> = ({
  businessName = "Muriel Artigala - Sophrologue",
  googleBusinessUrl = "https://g.co/kgs/sXFf524",
  averageRating = 4.9,
  totalReviews = 38,
  showReviewsLink = true,
  className = ""
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-gray-300 absolute" />
          <div className="overflow-hidden w-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute" />
          </div>
        </div>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      )
    }

    return stars
  }

  return (
    <div className={className}>
      {/* Widget Google Business compact */}
      <Card className="bg-white border shadow-md">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {businessName}
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  {renderStars(averageRating)}
                  <span className="text-sm text-gray-600 ml-2">
                    {averageRating} ({totalReviews} avis)
                  </span>
                </div>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 text-xs">
              Google
            </Badge>
          </div>
          
          {showReviewsLink && (
            <div className="mt-3 pt-3 border-t">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <a 
                  href={googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir tous les avis Google
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default GoogleBusinessIntegration
