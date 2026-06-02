import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Ceremony from "@/components/Ceremony";
import Reception from "@/components/Reception";
import Schedule from "@/components/Schedule";
import Transport from "@/components/Transport";
import Accommodation from "@/components/Accommodation";
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
        <Transport />
        <Accommodation />
        <Dresscode />
        <RSVP />
      </main>
      <Footer />
    </>
  );
}
