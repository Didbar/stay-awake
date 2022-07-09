import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
    const handleOnBannerBtnClick = () => {
        console.log('banner clicked!')
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Stay Awake</title>
                <meta name='description' content='Find The best Coffee nearby' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <Banner buttonText='View stores nearby' handleOnclick={handleOnBannerBtnClick} />
                <div className={styles.heroImage}>
                    <Image src='/static/coffee-hero-1.png' alt='Hero Image' width={300} height={300} />
                </div>
            </main>
        </div>
    )
}
