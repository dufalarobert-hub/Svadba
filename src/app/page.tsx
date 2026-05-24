import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Ceremony from "@/components/Ceremony";
import Reception from "@/components/Reception";
import Schedule from "@/components/Schedule";
import Accommodation from "@/components/Accommodation";
import Tips from "@/components/Tips";
import Dresscode from "@/components/Dresscode";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <Ceremony />
        <Reception />
        <Schedule />
        <Accommodation />
        <Dresscode />
        <RSVP />
        <Tips />
      </main>
      <Footer />
    </>
  );
}
