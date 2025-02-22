import Hero from "../sections/Hero";
import Technologies from "../sections/Technologies";
import FeaturedProjects from "../sections/FeaturedProjects";
import Cta from "../sections/Cta";
import Quote from "../sections/Quote";

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero />
      <Technologies />
      <Quote />
      <FeaturedProjects />
      <Cta />
    </div>
  );
}

export default Home;
