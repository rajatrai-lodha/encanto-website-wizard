
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const ImageGallery = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/lovable-uploads/314201f5-dc0d-4e1b-802f-1b0d33172a9d.png",
      title: "G+1 Stack Parking Installation",
      description: "Two-level stacking system installation in residential complex. Blue structural framework with efficient space utilization design.",
      category: "Stack Parking"
    },
    {
      id: 2,
      src: "/lovable-uploads/6ad21624-105c-4fa1-8edd-c5106324e532.png",
      title: "Operational Parking Platform",
      description: "Car positioned on hydraulic lifting platform. Demonstrates smooth operation and secure vehicle positioning.",
      category: "Platform System"
    },
    {
      id: 3,
      src: "/lovable-uploads/a3c2398e-4f7b-4188-93bd-26c27339ef8a.png",
      title: "Platform Installation Site",
      description: "Ground-level parking platform during installation phase. Shows robust construction and engineering precision.",
      category: "Installation"
    },
    {
      id: 4,
      src: "/lovable-uploads/0e8eefac-ba45-43fa-b8c2-2949682c4bdc.png",
      title: "Multi-Level Puzzle System",
      description: "Advanced horizontal sliding puzzle parking system with multiple vehicle positions and automated operation.",
      category: "Puzzle Parking"
    },
    {
      id: 5,
      src: "/lovable-uploads/27199c54-0441-4bc1-9c8b-3d840177db2a.png",
      title: "Two-Level Parking Platform",
      description: "Empty two-level stacking platform showing the lifting mechanism and structural design for maximum space efficiency.",
      category: "Stack Parking"
    },
    {
      id: 6,
      src: "/lovable-uploads/388dc65b-9dca-4bf6-b927-2e6dc6288219.png",
      title: "Tower Parking Building",
      description: "Multi-story automated parking tower providing high-capacity parking solution for urban commercial spaces.",
      category: "Tower Parking"
    },
    {
      id: 7,
      src: "/lovable-uploads/39b5c100-1f9e-4367-9443-f494841a2f95.png",
      title: "Vertical Car Storage",
      description: "Interior view of tower parking system showing vertical storage capabilities with multiple vehicle levels.",
      category: "Tower Parking"
    },
    {
      id: 8,
      src: "/lovable-uploads/9ed9c597-4a4a-427a-aa7a-d97011664e59.png",
      title: "Residential Stack Parking",
      description: "Fully operational G+1 stack parking system in residential complex with multiple vehicles parked efficiently.",
      category: "Residential Project"
    },
    {
      id: 9,
      src: "/lovable-uploads/568b7e01-363f-4f6e-821d-55e4ff27c251.png",
      title: "Multi-Level Car Parking",
      description: "Three-level parking system showing multiple cars stacked vertically with hydraulic platform operation.",
      category: "G+2 Stack Parking"
    },
    {
      id: 10,
      src: "/lovable-uploads/3969b05d-9ed6-4d5b-9cfc-f26f542367f1.png",
      title: "Puzzle Parking in Operation",
      description: "Horizontal sliding puzzle parking system with cars parked at ground level in residential complex.",
      category: "Puzzle Parking"
    }
  ];

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
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
            <Card className="absolute inset-0 w-full h-full backface-hidden overflow-hidden">
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
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  Click to flip
                </div>
              </div>
            </Card>

            {/* Back of card */}
            <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-blue-50 p-6 flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{image.title}</h3>
                <div className="w-12 h-1 bg-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-700 leading-relaxed mb-4">{image.description}</p>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block">
                  {image.category}
                </div>
                <div className="mt-4 text-xs text-gray-500">
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
