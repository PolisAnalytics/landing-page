import styles from "./page.module.scss";
import AboutUsSection from "@/components/Molecules/AboutSection"
import Footer from "@/components/Organisms/Footer"
export default function AboutUsPage() {
    return <div className={styles.page}>
        <AboutUsSection />
        <Footer />        
    </div>
}