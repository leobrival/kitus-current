import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="bg-[#E1FF4A] p-6 py-12 text-center md:text-start md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-medium">
          Join our newsletter
        </h2>
        <p className="text-gray-700">
          Subscribe to our newsletter for latest development and offers.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-black text-xl h-16 text-white hover:bg-black/90 rounded-full px-8"
        asChild
      >
        <Link href="/">Sign up</Link>
      </Button>
    </section>
  );
}
