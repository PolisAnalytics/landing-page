'use client'
import { motion } from "motion/react";
import { variant, fadeUp } from "@/utils/animations";
import styles from "./footer.module.scss";
import Form from "@/components/Molecules/Form";
import { MdOutlineWhatsapp, MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return <motion.footer variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true, margin:'-150px'}} id="footer" className={styles.footer}>
        <motion.section variants={variant}>
            <motion.h5 variants={fadeUp}>Contáctanos</motion.h5>
            <motion.p variants={fadeUp}>Si tienes alguna duda de nuestras propuestas, puedes escribirnos</motion.p>
            <motion.div className={styles.info}>
                <motion.div className={styles.form}>
                    <Form />
                </motion.div>
                <motion.div variants={variant} className={styles.socials}>
                    <motion.ul  variants={variant}>
                        <motion.li variants={fadeUp}><MdOutlineWhatsapp className={styles.icon} />
                            <a target="_blank" href="https://wa.me/+5491169961434?text=Hola Polis">+54 9 11 6996-1434</a>
                        </motion.li>
                        <motion.li variants={fadeUp}><MdEmail className={styles.icon} />
                            <a target="_blank" href="mailto:info@polisanalytics.com">info@polisanalytics.com</a>
                        </motion.li>
                        <motion.li variants={fadeUp}><FaLinkedin className={styles.icon} />
                            <a target="_blank" href="https://www.linkedin.com/company/polis-analytics/">Polis Analytics</a>
                        </motion.li>
                        <motion.li variants={fadeUp}><MdLocationOn className={styles.icon} />
                            <a target="_blank" href="https://maps.app.goo.gl/btgZhYcKZ2gjbJyQ9">Buenos Aires, Argentina</a>
                        </motion.li>

                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.section>
    </motion.footer>
}