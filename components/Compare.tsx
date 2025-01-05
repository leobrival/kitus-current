"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProductFeature {
  characteristic: string;
  value: string;
}

interface Product {
  name: string;
  description: string;
  image: string;
  features: ProductFeature[];
}

const products: Product[] = [
  {
    name: "Version A",
    description: "Lighter, quieter and great for urban environments.",
    image: "/photo-aerienne-bord-de-mer.jpg",
    features: [
      { characteristic: "Poids", value: "1.2 kg" },
      { characteristic: "Autonomie", value: "4 heures" },
      { characteristic: "Vitesse maximale", value: "12 km/h" },
      { characteristic: "Temps de charge", value: "2 heures" },
      { characteristic: "Taille maximale", value: "45" },
    ],
  },
  {
    name: "Version B",
    description: "Built rugged to handle cracks/uneven terrain.",
    image: "/photo-aerienne-bord-de-mer.jpg",
    features: [
      { characteristic: "Poids", value: "0.9 kg" },
      { characteristic: "Autonomie", value: "6 heures" },
      { characteristic: "Vitesse maximale", value: "15 km/h" },
      { characteristic: "Temps de charge", value: "1.5 heures" },
      { characteristic: "Taille maximale", value: "47" },
    ],
  },
];

export default function Compare() {
  return (
    <section className="py-16 w-full">
      <div className="mx-auto divide-y">
        <div className="border-b">
          <h2 className="text-4xl font-light mb-12">Compare Kitus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
          {products.map((product, index) => (
            <div key={index} className="space-y-6">
              <div className="py-8 px-12">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="object-cover aspect-video"
                />
                <h3 className="text-2xl font-light">{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div className="space-y divide-y">
                {product.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-between py-8 px-12"
                  >
                    <Badge
                      variant="secondary"
                      className="bg-white uppercase text-xs font-light p-3 rounded-md"
                    >
                      {feature.characteristic}
                    </Badge>
                    <p>{feature.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
