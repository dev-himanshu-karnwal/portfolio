import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import skills from "../data/skills";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import GradientBG from "../components/GradientBG";

function Technologies() {
  return (
    <section className="relative py-16">
      <GradientBG position="top-1/4 left-1/4" />
      <GradientBG position="bottom-1/4 right-1/4" />

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="overflow-auto select-none"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <div>
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  slidesPerView="auto"
                  loop={true}
                  freeMode={{
                    enabled: true,
                  }}
                  speed={3000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: i % 2 == 0,
                  }}
                  grabCursor={true}
                  className="!w-full"
                >
                  {[
                    ...skill.items,
                    ...skill.items,
                    ...skill.items,
                    ...skill.items,
                    ...skill.items,
                  ].map((tech, index) => (
                    <SwiperSlide
                      key={`${tech}-${index}`}
                      className="!w-auto !mr-8"
                    >
                      <div className="group relative flex items-center justify-center w-24 h-24 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Icon */}
                        <div className="transition-transform group-hover:scale-110 duration-300">
                          <img
                            src={`/${tech.img}.png`}
                            alt={tech.name}
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 mb-2 bg-slate-800 dark:bg-slate-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
                          {tech.name}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
