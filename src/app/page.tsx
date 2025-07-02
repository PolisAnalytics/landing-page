import styles from "./page.module.scss";
import HomeSection from "@/components/Molecules/HomeSection";
import Footer from "@/components/Organisms/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeSection />
      <Footer />
    </div>
  );
}
