import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.capWidth}`}>
        <p className={utilStyles.hello}>Hello.</p>
        <h2 className={utilStyles.heading2Xl} style={{ marginTop: 0 }}>I'm Daniel.</h2>
        <p>
          After working at an agency, I started Bloom Interactive as an umbrella back in 2015. My first client, <a href="https://privateprep.com">@privateprep</a>, liked my work so much they hired me full time. Eventually I became their <a href="https://github.com/danielrose7">CTO</a>.
        </p>
        <p>
          We did over $10MM in revenue a year, launched a best-in-class online test platform, and ran a rad apprenticeship program.
        </p>
        <p>
          By day I'm a Founding Senior Fullstack Engineer at <a href="https://tryplantiful.com">@tryplantiful</a>. We're doing the startup thing—growing the best app for the <span className={homeStyles.tooltip}>horticultural industry<span className={homeStyles.tooltipText}>No, not weed</span></span> and living out on the bleeding edge.
        </p>
        <p>
          I like projects and would love to chat about what you have going on.
        </p>
        <ul className={homeStyles.socialLinks}>
          <li className={homeStyles.socialLinks__item}>
            <a href="https://github.com/danielrose7">
              <Image
                src="/images/icons/github.svg"
                alt="GitHub"
                width={60}
                height={60}
              />
            </a>
          </li>
          <li className={homeStyles.socialLinks__item} style={{ padding: 10 }}>
            <a href="https://www.linkedin.com/in/daniel-rose-11a91b70/">
              <Image
                src="/images/icons/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={homeStyles.socialLinks__item}>
            <a href="mailto:dan@gobloom.io?subject=Hello from gobloom.io">
              <Image
                src="/images/icons/mail.svg"
                alt="Email"
                width={60}
                height={60}
              />
            </a>
          </li>
        </ul>
        <p>
          <Link href="/portfolio">Portfolio →</Link>
          {" · "}
          <Link href="/playground">Playground →</Link>
        </p>
      </section>
    </Layout>
  );
}
