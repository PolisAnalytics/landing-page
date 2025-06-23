'use client'
import { motion } from "motion/react";
import { variant, fadeUp } from "@/utils/animations";
import styles from "./page.module.scss";
import CustomSwiper from "@/components/Molecules/AboutSwiper";
export default function AboutUsPage() {
    return (<motion.main variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true}} className={styles.page}>
        <motion.h2 variants={fadeUp}>¿Qué nos motiva</motion.h2>
        <motion.p variants={fadeUp}>
            La inseguridad y la violencia representan uno de los principales desafíos para el desarrollo de América Latina, afectando de forma directa la vida cotidiana, el tejido social y la confianza ciudadana. Sin embargo, muchos gobiernos locales y actores territoriales aún enfrentan enormes limitaciones institucionales para acceder a herramientas modernas que permitan comprender y responder de forma oportuna a estas amenazas. 
            <br /><br />
            En Polis Analytics, nos mueve la convicción de que es posible revertir esta realidad. Apostamos a la conectividad como vía estratégica para cerrar brechas, articular actores y generar información útil que permita entender las dinámicas delictivas en su complejidad. Creemos que, con tecnología accesible y un enfoque integral, es posible acompañar a los territorios en la construcción de soluciones sostenibles y centradas en las personas.
        </motion.p>
        <motion.section variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true, margin: '-200px'}} className={styles.mission}>
            <motion.p variants={variant}>
                <motion.strong variants={fadeUp}>Misión:</motion.strong> Impulsar la Inteligencia territorial para la seguridad en América Latina a través del uso de tecnología y análisis de
                datos en la gestión de la seguridad y gestión pública, sector privado, y Organizaciones de la Sociedad Civil, proporcionando herramientas accesibles
                y eficientes para gobiernos locales y territorios rurales, fortaleciendo  las capacidades institucionales, mejorar la toma de decisiones y promover la
                transparencia, generando información confiable que permita prevenir y reducir la violencia y el crimen organizado en América Latina.
            </motion.p>
            <motion.p variants={variant}>
                <motion.strong variants={fadeUp}>Visión:</motion.strong> Consolidar una plataforma a nivel regional en soluciones tecnológicas para la seguridad pública y construir un ecosistema
                interconectado donde gobiernos, instituciones y ciudadanos trabajen juntos para crear territorios más seguros y resilientes. 
            </motion.p>
        </motion.section>

        <motion.section variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true, margin:'-50px'}} className={styles.team}>
            <motion.h3 variants={fadeUp}>Nuestro equipo</motion.h3>
            <CustomSwiper />
        </motion.section>
        
    </motion.main>)
}