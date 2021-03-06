import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";
export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Shop</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
      </main>
    </div>
  );
}
