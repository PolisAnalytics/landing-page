import styles from "./page.module.scss";
import ServicesSection from "@/components/Molecules/ServicesSection";
import Footer from "@/components/Organisms/Footer";
export default function ServicesPage() {
    return <div className={styles.page}><ServicesSection /> <Footer /></div>
}