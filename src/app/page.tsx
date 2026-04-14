import { Navigation, Footer } from "@/components/layout";
import { GsapInitializer } from "@/components/providers/GsapInitializer";
import {
  Hero,
  Philosophy,
  Expertise,
  Services,
  TrackRecord,
  Process,
  Network,
  Founder,
  Community,
  Numbers,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <GsapInitializer>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Expertise />
        <Services />
        <TrackRecord />
        <Process />
        <Network />
        <Founder />
        <Community />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </GsapInitializer>
  );
}
