import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/home.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const FIXED_IMAGE_WIDTH = 340;

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.capWidth}`}>
        <h2 className={utilStyles.headingLg}>Building better buttons.</h2>
        <p>
          My name is Daniel Rose. I started Bloom Interactive as a consulting LLC back in 2015 and my first client hired me on full time. Eventually I became CTO of <a href="https://privateprep.com">PrivatePrep</a>.
        </p>
        <p>
          I'm currently making the world a greener place as a Founding Senior Fullstack Engineer at <a href="https://tryplantiful.com">Plantiful</a> and would love to chat about what you have going on.
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
            <a href="https://www.linkedin.com/in/daniel-powell-11a91b70/">
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
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.centerPadding}`}
      >
        <div className={utilStyles.capWidth}>
          <h2 className={utilStyles.headingLg}>Playground</h2>
          <p>
            Here you'll find some things I've made over the years along with a
            quick link to the code.
          </p>
          <p>
            For better or worse most of my daily work is private / isn't as fun
            to look at.
          </p>
        </div>
        <ul className={homeStyles.gallery}>
          {allPostsData.map(
            ({ id, title, image, imageWidth, imageHeight }, postIndex) => {
              const correctionRatio = FIXED_IMAGE_WIDTH / imageWidth;
              const isPriority = postIndex < 6;

              return (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`} className={homeStyles.cardLink}>
                    <Image
                      src={image}
                      alt={`Preview of ${title}`}
                      width={FIXED_IMAGE_WIDTH}
                      height={Math.floor(correctionRatio * imageHeight)}
                      style={{ objectFit: "cover" }}
                      priority={isPriority}
                    />
                    <span className={homeStyles.cardLink__title}>
                      {title}
                    </span>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </Layout>
  );
}
