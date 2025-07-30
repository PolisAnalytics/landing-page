/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { motion } from "motion/react";
import { variant } from "@/utils/animations";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import styles from "./form.module.scss";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";

interface FormBody {
    name: string | null,
    phone: string | null,
    country: string | null,
    organization: string | null,
    email: string | null,
    message: string | null,
}
export default function Form() {
    const [formBody, setFormBody] = useState<FormBody>({
        name: '',
        phone: '',
        country: '',
        organization: '',
        email: '',
        message: '',
    });
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/send-email', {
                name: formBody.name,
                phone: formBody.phone,
                country: formBody.country,
                organization: formBody.organization,
                email: formBody.email,
                message: formBody.message,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
        } catch (e) {
            console.log('Error:', e)
        }
    };
    const getInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormBody({ ...formBody, [e.target.name]: e.target.value })
    }
    return <motion.form variants={variant} initial='initial' whileInView={'animate'} viewport={{ once: true, margin: '-150px' }} className={styles.form} onSubmit={handleSubmit}>
        <Input title="Nombre" name="name" onChange={getInput} />
        <Input title="Organización" name="organization" onChange={getInput} />
        <Input title="Correo electrónico" name="email" onChange={getInput} />
        <Input title="Numero de télefono" name="phone" onChange={getInput} />
        <Input title="Pais de residencia" name="country" onChange={getInput} />
        <Input title="Comentarios" name="message" onChange={getInput} />
        <Button />
    </motion.form>
}