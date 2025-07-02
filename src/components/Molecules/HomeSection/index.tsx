'use client'
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./styles.module.scss";
import VideoBanner from "@/components/Atoms/Banner";
import { fadeUp, variant } from "@/utils/animations";

export default function HomeSection() {
  return (
    <div className={styles.page}>
      <motion.main className={styles.main}>
        <VideoBanner />
        <motion.section variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-200px" }} className={styles.services} >
          <motion.p variants={fadeUp}>
            América Latina concentra la tasa de homicidios más alta del mundo desde hace dos décadas. Con solo el 8% de la población global, la región registra más del 33% de los homicidios, alcanzando tasas superiores a 20 por cada 100 mil habitantes. Esta realidad la convierte en una de las zonas más violentas del planeta.<br /><br />
            En este contexto, la expansión del Crimen Organizado Transnacional y la fragmentación institucional han planteado retos profundos para los Estados, especialmente en territorios rurales y periféricos. La adaptación de las instituciones a nuevas dinámicas sociales, territoriales y tecnológicas se vuelve indispensable para enfrentar los desafíos actuales de la seguridad pública.<br /><br />
            Las Tecnologías de la Información (TI) ofrecen una oportunidad estratégica para fortalecer las capacidades institucionales, mejorar la gestión de recursos y diseñar políticas basadas en evidencia. El análisis de datos, los sistemas inteligentes de prevención, la automatización de procesos, y sobre todo, la conectividad, permiten tomar decisiones más informadas, aumentar la eficiencia y responder con mayor precisión a la complejidad del fenómeno criminal.<br /><br />
          </motion.p>
          <motion.h2 variants={fadeUp} className={styles.title}>Nuestro Enfoque de Trabajo:<br/> Entendemos el Fenómeno para Transformar Territorios</motion.h2>

          <motion.div variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: "-250px" }} className={styles.display}>
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
    </div>
  );
}
