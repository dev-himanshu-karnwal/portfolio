import Hero from "../sections/Hero";
import Technologies from "../sections/Technologies";
import FeaturedProjects from "../sections/FeaturedProjects";
import Cta from "../sections/Cta";

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero />
      <Technologies />
      <FeaturedProjects />
      <Cta />
    </div>
  );
}

export default Home;
