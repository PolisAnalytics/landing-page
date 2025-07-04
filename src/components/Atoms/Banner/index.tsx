'use client'
import styles from "./Banner.module.scss";
import { motion } from "motion/react";
import { fadeUp, variant } from "@/utils/animations";
// import Image from "next/image";
// import Header from "@/components/Organisms/Header";

export default function VideoBanner() {
    return <motion.section variants={variant} initial='initial' whileInView={'animate'} viewport={{once:true}} className={styles.banner_container}>
        {/* <Header/> */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.video_background}
            src="/images/video-background.mp4" 
        />
        <motion.p variants={fadeUp}  className={styles.light_green}>Datos en el territorio</motion.p>
        <motion.p variants={fadeUp}  className={styles.light_white}>Bienvenido a Polis Analytics <br />
            Inteligencia territorial para la seguridad en América Latina.
        </motion.p>
        <motion.p variants={fadeUp}  className={styles.light_green}>Tecnología al alcance de todos</motion.p>
        <motion.p variants={fadeUp} >Polis Analytics es una solución que impulsa el uso de Tecnologías de la Información (TI)
            para transformar la gestión pública y privada en América Latina. Especializados en seguridad
            ciudadana, ofrecemos herramientas inteligentes de análisis de datos, predicción del delito,
            desarrollo de software y asesoría técnica para gobiernos locales, empresas y organizaciones
            de la sociedad civil.
        </motion.p>
        
    </motion.section>
}