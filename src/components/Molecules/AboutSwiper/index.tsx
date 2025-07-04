'use client'
import styles from "./aboutswiper.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CustomSwiper() {
    return <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={50}
        pagination={true}
        breakpoints={{
            375: {
                slidesPerView:1,
                initialSlide:1,
            },
            1024: {
                slidesPerView:3
            }
        }}
    >
        <SwiperSlide>
            <article className={styles.slide}>
                <figure>
                    <Image src={'/images/andres.png'} alt="image-slide" fill />
                </figure>
                <div className={styles.text}>
                <h3>Andrés Suárez <br />CTO / Lead Developer</h3>
                <p>
                    Fullstack Developer especializado en desarrollo Front-end, manejo y evaluación de equipo, soluciones tecnológicas, mantenimiento y optimización para los distintos productos
                </p>
                    </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className={`${styles.slide} ${styles.main}`}>
                <figure>
                    <Image src={'/images/lennin.png'} alt="image-slide" fill />
                </figure>
                <div className={styles.text}>
                    <h3>Lennin Arias <br/>Fundador / Director ejecutivo</h3>
                    <p>
                        Abogado, especialista en seguridad pública, maestrando en políticas públicas, analista de datos.
                        Con experiencia en gestión de proyectos comunitarios e inicitativas privadas
                    </p>
                </div>
            </article>
        </SwiperSlide>
        <SwiperSlide>
            <article className={styles.slide}>
                <figure>
                    <Image src={'/images/diego.png'} alt="image-slide" fill />
                </figure>
                <div className={styles.text}>
                    <h3>Diego Moncada<br/>Creative Growth Lead</h3>
                    <p>
                        Especialista en branding, UX/UI y campañas digitales. Desarrollo de identidades visuales, contenido estratégico y crecimiento orgánico basado en métricas.
                    </p>
                </div>
            </article>
        </SwiperSlide>
    </Swiper>

}