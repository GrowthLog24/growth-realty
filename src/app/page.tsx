import { Navigation, Footer } from "@/components/layout";
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
    <>
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
    </>
  );
}
