import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from "next/head"
import Link from 'next/link'

export const siteTitle = 'Bloom Interactive';
const name = 'Bloom Interactive'
const description = "Building better buttons. Software consulting and development."

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/images/bloom-logo.png" />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta name="og:title" content={siteTitle} />
          <meta name="og:description" content={description} />
          <meta property="og:image" content="/images/bloom-logo.png" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <div className={styles.headerBrand}>
              <img
                src="/images/bloom-logo.png"
                className={styles.headerHomeImage}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </div>
          ) : (
            <>
              <Link href="/">
                <img
                  src="/images/bloom-logo.png"
                  className={styles.headerImage}
                  alt={name}
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
              </h2>
              <Link href="/">← Back to home</Link>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
    <footer className={styles.footer}>
      <span className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Bloom Interactive</span>
      <a
        href="https://gobloom.io"
        className={styles.mountainLink}
      >
        <span className={styles.mountainLabel}>Made in Silverton, CO</span>
      </a>
      <nav className={styles.footerNav}>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/playground">Playground</Link>
      </nav>
    </footer>
    </>
  )
}
