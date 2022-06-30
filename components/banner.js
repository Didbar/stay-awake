import styles from './banner.module.css'
const Banner = ({ buttonText, handleOnclick }) => {
    return (
        <div>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover your local shops!</p>
            <button className={styles.button} onClick={handleOnclick}>
                {buttonText}
            </button>
        </div>
    )
}

export default Banner