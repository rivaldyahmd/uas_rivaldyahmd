import "./rvldy-style.css";
import Hero from "./Component/hero";
import RiwayatPendidikan from "./Component/RiwayatPendidikan";
import RiwayatPekerjaan from "./Component/RiwayatPekerjaan";
import FavColor from "./Component/favColor";
import ContactForm from "./Component/contactForm";

const Gallery = () => {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <FavColor />
      <ContactForm />
    </section>
  )
}

export default Gallery;