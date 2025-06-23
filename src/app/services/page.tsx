'use client'
import { motion } from "motion/react";
import { variant, fadeUp } from "@/utils/animations";
import styles from "./page.module.scss";
import CustomSwiper from "@/components/Molecules/Swiper";
// import Link from "next/link";

export default function ServicesPage() {
    return (<motion.main variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true}} className={styles.page}>
        <motion.h2 variants={fadeUp}>Seguridad y Gestión Pública</motion.h2>
        <motion.p variants={fadeUp}>
            En Polís Analytics trabajamos para cerrar las brechas de información. Nuestras soluciones están diseñadas para que los datos lleguen a quienes toman decisiones en campo: gobiernos locales, fuerzas de seguridad, liderazgos comunitarios y actores clave del territorio.
            <br /><br />
            Desarrollamos herramientas tecnológicas que integran fuentes públicas, datos abiertos y análisis territorial para fortalecer capacidades estatales, conectar comunidades con las instituciones y promover una seguridad más humana, basada en evidencia.
        </motion.p>
        <CustomSwiper />
        <motion.section variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin:'-200px'}} className={styles.solutions_container}>
            <motion.h3 variants={fadeUp}>Soluciones destinadas<br/> al Sector privado</motion.h3>
            <motion.p variants={fadeUp}>
                En Polís Analytics acompañamos a empresas en sus procesos de transformación digital mediante soluciones
                personalizadas de Business Intelligence. Aplicamos nuestra experiencia en análisis de datos, desarrollo de software
                y modernización institucional para optimizar la gestión operativa, fortalecer la toma de decisiones estratégicas y
                adaptar sistemas de información a los desafíos del entorno empresarial.
            </motion.p>
            <motion.div variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true, margin: '-100px'}} className={styles.solutions}>
                <motion.article variants={variant}>
                    <motion.h4 variants={fadeUp}>Asesoría en Business intelligence</motion.h4>
                    <motion.p variants={fadeUp}>
                        Guiamos a empresas en el diseño e implementación de estrategias de análisis de datos para mejorar procesos,
                        visualizar información crítica y tomar decisiones basadas en evidencia, adaptando herramientas de BI a cada realidad organizacional.
                    </motion.p>
                </motion.article>
                <motion.article variants={variant}>
                    <motion.h4 variants={fadeUp}>Desarrollo de Software de Gestión y CRMs Adaptados.</motion.h4>
                    <motion.p variants={fadeUp}>
                        Creamos sistemas personalizados para la gestión operativa, seguimiento de clientes, procesos internos o control de
                        incidencias. Nuestras soluciones en la nube son escalables y se ajustan a distintos modelos de negocio.
                    </motion.p>
                </motion.article>
                <motion.article variants={variant}>
                    <motion.h4 variants={fadeUp}>Asesoría en Procesos de Modernización Organizacional.</motion.h4>
                    <motion.p variants={fadeUp}>
                        Acompañamos procesos de transformación institucional, digitalización y mejora continua. Integramos enfoques técnicos y estratégicos
                        para adaptar estructuras, sistemas y capacidades a los desafíos actuales del entorno empresarial.
                    </motion.p>
                </motion.article>
            </motion.div>
            <motion.button variants={variant}>
                <motion.span variants={fadeUp}>¿Buscas una ventaja estratégica basada en datos?</motion.span>
                <motion.span variants={fadeUp}>¡Reunámonos y descubramos cómo a través de nuestras
                      soluciones podemos transformar tu enfoque!
                </motion.span>
            </motion.button>
        </motion.section>
    </motion.main>)
}