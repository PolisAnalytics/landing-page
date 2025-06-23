'use client'
import styles from "./Swiper.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CustomSwiper() {
    return <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={true}
    >
        <SwiperSlide>
            <article className={styles.slide}>
                <figure>
                    <Image src={'/images/slide-1.jpg'} alt="image-slide" fill />
                </figure>
                <div className={styles.text}>
                <h3>Analisis y diagnostico y toma de desiciones</h3>
                <p>
                    Nuestros tableros permiten visualizar y analizar datos delictivos de forma clara y dinámica, facilitando diagnósticos precisos en materia de seguridad. Integran indicadores clave, mapas interactivos y comparativos temporales que ayudan a autoridades y equipos técnicos a tomar decisiones basadas en evidencia, optimizando recursos y focalizando estrategias en los territorios más vulnerables.</p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className={styles.slide}>
                <figure>
                    <Image src={'/images/slide-1.jpg'} alt="image-slide" fill />
                </figure>
                <div className={styles.text}>
                    <h3>Analisis y diagnostico y toma de desiciones</h3>
                    <p>
                        Nuestros tableros permiten visualizar y analizar datos delictivos de forma clara y dinámica, facilitando diagnósticos precisos en materia de seguridad. Integran indicadores clave, mapas interactivos y comparativos temporales que ayudan a autoridades y equipos técnicos a tomar decisiones basadas en evidencia, optimizando recursos y focalizando estrategias en los territorios más vulnerables.</p>
                </div>
            </article>
        </SwiperSlide>
    </Swiper>

}