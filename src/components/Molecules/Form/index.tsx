/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { motion } from "motion/react";
import { variant } from "@/utils/animations";
import { ChangeEvent, useState } from "react";
import { useActionState } from "react"
import styles from "./form.module.scss";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import { sendFooterEmail } from "@/app/actions/email"
export default function Form(){
const [formBody, setFormBody] = useState({});

const initialState = {
  success: false,
  message: "",
  error: "",
}
const [state, formAction, isPending] = useActionState(sendFooterEmail, initialState)

const getInput = (e: ChangeEvent<HTMLInputElement> ) => {
    setFormBody({...formBody, [e.target.name]: e.target.value})
}
    return <motion.form variants={variant} initial='initial' whileInView={'animate'} viewport={{once: true, margin:'-250px'}} className={styles.form} action={formAction}>
        <Input title="Nombre" name="name" onChange={getInput} />
        <Input title="Organización" name="organization" onChange={getInput} />
        <Input title="Correo electrónico" name="email" onChange={getInput} />
        <Input title="Numero de télefono" name="phone" onChange={getInput} />
        <Input title="Pais de residencia" name="country" onChange={getInput} />
        <Input title="Comentarios" name="messagge" onChange={getInput} />
        <Button />
    </motion.form>
}