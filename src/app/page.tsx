"use client";
import "./rvldy-style.css";
import Hero from "./Component/hero";
import RiwayatPendidikan from "./Component/RiwayatPendidikan";
import RiwayatPekerjaan from "./Component/RiwayatPekerjaan";
import SkillsSection from "./Component/skill";
import ContactForm from "./Component/contactForm";
import Hobby from "./Component/hobby";
import MyInfo from "./Component/info";
import ThemeSwitcher from "./Component/ThemeSwitcher";

const Gallery = () => {
  return (
    <section className="min-h-screen">
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <SkillsSection />
      <MyInfo />
      <Hobby />
      <ContactForm />
      <ThemeSwitcher />
    </section>
  )
}

export default Gallery;