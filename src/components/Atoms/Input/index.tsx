'use client'
import { motion } from "motion/react";
import { variant, fadeUp } from "@/utils/animations";
import { ChangeEvent } from "react";
import styles from "./input.module.scss";

export default function Input({title, name, onChange}: {title: string, name: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}){
    return <motion.div variants={variant}  className={styles.input}>
        <motion.label variants={fadeUp}>{title}:</motion.label>
        <motion.input variants={fadeUp} type="text" name={name} onChange={onChange} />
    </motion.div>
}