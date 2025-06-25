'use client'
import styles from "./Swiper.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const list = [
    {
        image: '1-services.png',
        video: false,
        title: 'Analisis y diagnostico y toma de desiciones',
        text: 'Nuestros tableros permiten visualizar y analizar datos delictivos de forma clara y dinámica, facilitando diagnósticos precisos en materia de seguridad. Integran indicadores clave, mapas interactivos y comparativos temporales que ayudan a autoridades y equipos técnicos a tomar decisiones basadas en evidencia, optimizando recursos y focalizando estrategias en los territorios más vulnerables.'
    },
    {
        image: 'video.mp4',
        video:true,
        title: 'Modelos predictivos y patrullaje inteligente mediante IA.',
        text: 'Aplicamos inteligencia artificial para anticipar dinámicas delictivas, identificar puntos calientes y diseñar estrategias de patrullaje preventivo. Nuestros modelos predictivos permiten optimizar la gestión operativa, reducir la incidencia delictiva y asignar recursos de forma eficiente, especialmente en contextos con alta conflictividad o escasez de información.'
    },
    {
        image: '3-services.png',
        video:false,
        title: 'CIMS - para la gestión integral de la seguridad.',
        text: 'Polis Analytics desarrolla sistemas modulares tipo CIMS (Comprehensive Incident Management System) para la gestión integral de la seguridad pública y privada, especialmente diseñados para gobiernos locales y agencias que operan en zonas rurales o de difícil acceso. Nuestra solución combina la eficiencia operativa con análisis avanzado, adaptándose a entornos de baja conectividad gracias a su arquitectura en la nube y capacidades offline-first.'
    },
    {
        image: '4-services.png',
        video:false,
        title: 'Consultorías integrales con base técnica y jurídica en políticas públicas de seguridad.',
        text: 'Brindamos asesoría especializada en políticas de seguridad, combinando análisis jurídico, técnico y territorial. Acompañamos a gobiernos e instituciones en el diseño, evaluación e implementación de estrategias de seguridad basadas en evidencia, respetando marcos legales, derechos humanos y las condiciones específicas de cada contexto.'
    },
]
export default function CustomSwiper() {
    return <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={true}
    >
        {
            list.map((slide,idx) => <SwiperSlide key={idx}>
            <article className={styles.slide}>
                <figure>
                    {
                        slide.video ? <video src={`/images/${slide.image}`} muted autoPlay loop /> : <Image src={`/images/${slide.image}`} alt="image-slide" fill />
                    }
                    
                </figure>
                <div className={styles.text}>
                <h3>{slide.title}</h3>
                <p>
                    {slide.text}</p>
                    </div>
            </article>
        </SwiperSlide>)
        }
    </Swiper>

}