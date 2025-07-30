'use client'
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./styles.module.scss";
import VideoBanner from "@/components/Atoms/Banner";
import { fadeUp, variant } from "@/utils/animations";

export default function HomeSection() {
  return (
      <motion.main className={styles.main}>
        <VideoBanner />
        <motion.section variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-100px" }} className={styles.services} >
          <motion.p variants={fadeUp}>
            En América Latina, los altos niveles de violencia y crimen organizado, junto con la debilidad institucional en zonas rurales y periféricas, exigen nuevas respuestas por parte de los Estados. Las Tecnologías de la Información ofrecen herramientas clave para modernizar la gestión de la seguridad pública, facilitando la toma de decisiones mediante el análisis de datos, la automatización de procesos y la mejora de la conectividad.
          </motion.p>
          <motion.h2 variants={fadeUp} className={styles.title}>Nuestro Enfoque de Trabajo: Entendemos el Fenómeno <br/> para Transformar Territorios</motion.h2>

          <motion.div variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-150px" }} className={styles.display}>
            <motion.article variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-150px" }}>
              <motion.figure variants={fadeUp}>
                <Image src={'/images/1.png'} alt={'logo1'} fill />
              </motion.figure>
              <motion.p variants={fadeUp}>Examinamos la evolución del delito en el tiempo para detectar patrones, tendencias y ciclos de criminalidad. Este enfoque permite anticipar escenarios de riesgo, diseñar patrullajes preventivos y ajustar las respuestas institucionales según el comportamiento dinámico del delito.</motion.p>
            </motion.article>
            <motion.article variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-150px" }}>
              <motion.figure variants={fadeUp}>
                <Image src={'/images/3.png'} alt={'logo1'} fill />
              </motion.figure>
              <motion.p variants={fadeUp}>Estudiamos el comportamiento delictivo en el territorio, identificando patrones geográficos, puntos calientes y zonas de riesgo. A través de mapas interactivos y herramientas geoespaciales, facilitando el diseño de estrategias focalizadas, optimizando el despliegue de recursos y la toma de decisiones basadas en evidencia territorial.</motion.p>
            </motion.article>
            <motion.article variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-150px" }}>
              <motion.figure variants={fadeUp}>
                <Image src={'/images/4.png'} alt={'logo1'} fill />
              </motion.figure>
              <motion.p variants={fadeUp}>Identificamos redes, actores y rutas delictivas mediante el cruce de datos, el análisis de vínculos y la construcción de tipologías. Esta trazabilidad permite entender la lógica operativa del crimen organizado y diseñar respuestas más eficaces, articuladas y estratégicas.</motion.p>
            </motion.article>
            <motion.article variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-150px" }}>
              <motion.figure variants={fadeUp}>
                <Image src={'/images/2.png'} alt={'logo1'} fill />
              </motion.figure>
              <motion.p variants={fadeUp}>Fortalecemos las capacidades locales promoviendo entornos más seguros, informados y cohesionados. A través de soluciones tecnológicas accesibles, acompañamos a comunidades en su proceso de participación, prevención y vigilancia colaborativa, fomentando sociedades más resilientes frente a la violencia.</motion.p>
            </motion.article>
          </motion.div>
        </motion.section>
      </motion.main>
  );
}
