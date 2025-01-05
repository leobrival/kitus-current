import Compare from "@/components/Compare";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Slider from "@/components/Slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// https://shiftrobotics.io/products/moonwalkers-aero

export default function HomePage() {
  return (
    <main className="bg-[#efefef]">
      <header></header>
      <Slider />
      <section className="grid grid-cols-3 divide-x">
        <FeatureCard
          tag="Customization"
          title="More personalized"
          description="In Moonwalkers Aero, we redesigned everything. Every visible part is user-replaceable for unique customizations and fits shoe sizes Women 6 to Men 12."
        />
        <FeatureCard
          tag="Design"
          title="Aerodynamic & ergonomic"
          description="An organically shaped, swappable spacer that comes in two sizes, is used to snuggly secure the foot. Ensuring the perfect position for all users."
        />
        <FeatureCard
          tag="Materials"
          title="Flexible materials"
          description="The vulcanized thermoplastics strap base, provides a much more flexible and snug fit around the contour of your shoes, creating a perfect fit at any size."
        />
      </section>
      {/* <3d><3d> */}
      <section className="grid grid-cols-3 divide-x">
        <FeatureCard
          tag="Customization"
          title="More personalized"
          description="In Moonwalkers Aero, we redesigned everything. Every visible part is user-replaceable for unique customizations and fits shoe sizes Women 6 to Men 12."
        />
        <FeatureCard
          tag="Design"
          title="Aerodynamic & ergonomic"
          description="An organically shaped, swappable spacer that comes in two sizes, is used to snuggly secure the foot. Ensuring the perfect position for all users."
        />
        <FeatureCard
          tag="Materials"
          title="Flexible materials"
          description="The vulcanized thermoplastics strap base, provides a much more flexible and snug fit around the contour of your shoes, creating a perfect fit at any size."
        />
      </section>
      <Slider />
      <section></section>
      {/* <Image class=""></Image> */}
      <Compare />
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <Image
            src="/photo-aerienne-bord-de-mer.jpg"
            fill
            className="object-cover aspect-video w-full h-full"
            alt=""
          />
        </div>
        <div>
          <h2>All new app powered by ShiftAI</h2>
          <Badge
            variant={"secondary"}
            className="bg-white uppercase text-xs font-light p-3 rounded-md"
          ></Badge>
          <h3>Brand new user experience</h3>
          <div>
            <p>
              Moonwalkers are powered by our intelligent ShiftAI software that
              controls the way your Moonwalkers adapt to your preferences.
            </p>
            <p>
              AI-driven interactive tutorial to allow users to master
              Moonwalkers from hours to minutes.
            </p>
            <p>
              Choose between three preset modes to accommodate different cases:
              Indoor, City and Sport.
            </p>
            <p>
              Customize to dynamically adjust your acceleration profile and
              toggle powerful gait control AI features.
            </p>
            <p>
              Real-time mode monitoring, battery status indicators, and OTA
              software notifications keep you moving with ease.
            </p>
          </div>
          <Button>Get the app</Button>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
