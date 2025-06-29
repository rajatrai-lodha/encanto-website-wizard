
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

interface ImageGalleryProps {
  images?: string[];
  alt?: string;
  className?: string;
}

const ImageGallery = ({ images, alt, className }: ImageGalleryProps) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // If images prop is provided, use it for simple display
  if (images && images.length > 0) {
    return (
      <div className={className}>
        <img
          src={images[0]}
          alt={alt || "Project image"}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Default gallery images for the full gallery view
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/lovable-uploads/33071eca-b479-4777-946a-807e2e52ed64.png",
      title: "G+1 Stack Parking Installation",
      description: "Two-level stacking system installation in residential complex. Blue structural framework with efficient space utilization design.",
      category: "Stack Parking"
    },
    {
      id: 2,
      src: "/lovable-uploads/43aa289b-6da1-4e50-be48-1a08832804e6.png",
      title: "Operational Parking Platform",
      description: "Car positioned on hydraulic lifting platform. Demonstrates smooth operation and secure vehicle positioning.",
      category: "Platform System"
    },
    {
      id: 3,
      src: "/lovable-uploads/afe66f3d-b0ac-493c-a429-015287bc5098.png",
      title: "Platform Installation Site",
      description: "Ground-level parking platform during installation phase. Shows robust construction and engineering precision.",
      category: "Installation"
    },
    {
      id: 4,
      src: "/lovable-uploads/2c017785-0a73-4f9a-aa75-3749e785d9b3.png",
      title: "Multi-Level Puzzle System",
      description: "Advanced pit parking system with multiple vehicle positions and automated operation for underground spaces.",
      category: "Pit Parking"
    },
    {
      id: 5,
      src: "/lovable-uploads/f98454ef-8973-4a8a-bd1c-7c47b86b4e35.png",
      title: "Tower Parking Interior",
      description: "Interior view of automated tower parking system showing vertical storage capabilities with multiple vehicle levels.",
      category: "Tower Parking"
    },
    {
      id: 6,
      src: "/lovable-uploads/3fb4ab07-360c-4b78-9243-524b8cd231a4.png",
      title: "Tower Parking Building",
      description: "Multi-story automated parking tower providing high-capacity parking solution for urban commercial spaces.",
      category: "Tower Parking"
    },
    {
      id: 7,
      src: "/lovable-uploads/e42c0120-3dbf-43b8-b97a-ab71474d4cc7.png",
      title: "Underground Parking System",
      description: "Advanced underground automated parking system with multiple platforms and sophisticated control mechanisms.",
      category: "Underground System"
    },
    {
      id: 8,
      src: "/lovable-uploads/9c420345-736b-4612-90dd-db9e36c33e24.png",
      title: "Automated Platform Array",
      description: "Multiple automated parking platforms arranged in systematic configuration for maximum efficiency and space utilization.",
      category: "Platform Array"
    },
    {
      id: 9,
      src: "/lovable-uploads/1e5e40d0-2411-45d5-947b-ff24aecc2b92.png",
      title: "Outdoor Stack System",
      description: "Outdoor two-level parking system installation showing weather-resistant construction and operational efficiency.",
      category: "Outdoor System"
    },
    {
      id: 10,
      src: "/lovable-uploads/e3478f7c-bec3-4dec-b41c-8035d4461ff3.png",
      title: "Residential Stack Parking",
      description: "Fully operational G+1 stack parking system in residential complex with multiple vehicles parked efficiently.",
      category: "Residential Project"
    }
  ];

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="relative h-80 perspective-1000 cursor-pointer"
          onClick={() => handleCardClick(image.id)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              flippedCard === image.id ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card */}
            <Card className="absolute inset-0 w-full h-full backface-hidden overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium">
                  Click to flip
                </div>
              </div>
            </Card>

            {/* Back of card */}
            <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col justify-center shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{image.title}</h3>
                <div className="w-12 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">{image.description}</p>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm inline-block font-medium">
                  {image.category}
                </div>
                <div className="mt-4 text-xs text-gray-500 font-medium">
                  Click to flip back
                </div>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
