'use client'
import { useState } from "react"
import styles from "./Header.module.scss"
import { MdOutlineMenu, MdClose } from "react-icons/md";
import {motion} from "motion/react"
import { fadeUp, variant } from "@/utils/animations";
import Link from "next/link"
export default function Header(){
    const [open, setOpen] = useState<boolean>(false)
    return <>
    <button className={`${styles.mobile_button} ${open ? styles.off : styles.on}`} onClick={() => setOpen(true)}><MdOutlineMenu className={styles.icon}/></button>
     <motion.header variants={variant} initial='initial' whileInView={'animate'}  className={`wrap ${styles.header} ${open ? styles.active: ''}`}>
        <button  className={`${styles.mobile_button} ${open ? styles.on : styles.off}`} onClick={() => setOpen(false)}><MdClose className={styles.icon}/></button>
        <motion.h1 variants={fadeUp} >Polis Analytics</motion.h1>
        <motion.nav variants={fadeUp} >
            <motion.ul variants={variant} initial='initial' whileInView={'animate'} >
                <motion.li variants={fadeUp}  className={styles.link} onClick={()=> setOpen(false)}><Link href={'/'}>Home</Link></motion.li>
                <motion.li variants={fadeUp}  className={styles.link} onClick={()=> setOpen(false)}><Link href={'/services'}>nuestros Servicios</Link></motion.li>
                <motion.li variants={fadeUp}  className={styles.link} onClick={()=> setOpen(false)}><Link href={'/about-us'}>sobre nosotros</Link></motion.li>
                <motion.li variants={fadeUp}  className={styles.link} onClick={()=> setOpen(false)}><a href={'#contact'} onClick={()=> {
                    document.getElementById('footer')?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>Contáctanos</a></motion.li>
            </motion.ul>
        </motion.nav>
    </motion.header>
    </>
}