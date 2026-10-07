import { ContactCTA } from "@/components/contact-cta";
import { AboutPreview } from "@/components/home/about-preview";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Process />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
