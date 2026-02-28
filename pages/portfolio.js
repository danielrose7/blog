import { useRef, useCallback } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/portfolio.module.css";

const projects = [
  {
    name: "Tote",
    tagline: "A cart that doesn't belong to a store",
    description:
      "A universal product-saving tool with a Chrome extension. Save items from any store, organize into collections, track prices, and share wishlists. Privacy-first — no tracking, no ads.",
    url: "https://tote.tools/",
    image: "/images/portfolio/tote.png",
  },
  {
    name: "Citrus Surf",
    tagline: "Browser-based data tools",
    description:
      "A toolkit for converting messy spreadsheets and JSON into SQL, transforming between data formats, and generating IDs. All processing happens client-side — your data never leaves the browser.",
    url: "https://www.citrus.surf/",
    image: "/images/portfolio/citrus.png",
  },
  {
    name: "Online test app",
    tagline: "Adaptive practice testing platform",
    description:
      "A digital practice testing platform built for ArborBridge and Private Prep — years before the SAT and ACT went digital themselves. Data-driven, adaptive lessons for thousands of students across SAT, ACT, and entrance exam prep.",
    url: "https://www.arborbridge.com/",
    image: "/images/portfolio/arborbridge.png",
    clients: ["ArborBridge", "Private Prep"],
  },
  {
    name: "Class sign-up",
    tagline: "Discovery, enrollment, and back-office",
    description:
      "End-to-end class platform for The Coding Space. Client-side filtering across hundreds of offerings, billing and payments, plus a backend for scheduling, client and student profiles, and teacher assignment.",
    url: "https://www.thecodingspace.com/classes",
    image: "/images/portfolio/tcs-classes.png",
  },
];

function ProjectItem({ name, tagline, description, url, image, clients }) {
  const previewRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (previewRef.current) {
      previewRef.current.style.left = `${e.clientX + 20}px`;
      previewRef.current.style.top = `${e.clientY - 100}px`;
    }
  }, []);

  return (
    <li className={styles.project} onMouseMove={handleMouseMove}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        <div className={styles.projectInfo}>
          <h2 className={styles.projectName}>
            {name}
            <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p className={styles.projectDescription}>{description}</p>
        </div>
        <span className={styles.projectTagline}>{tagline}</span>
      </a>
      <div className={styles.imagePreview} ref={previewRef}>
        <img src={image} alt={`${name} preview`} />
      </div>
    </li>
  );
}

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | {siteTitle}</title>
      </Head>
      <section className={styles.portfolio}>
        <div className={styles.intro}>
          <h2 className={utilStyles.headingXl}>Portfolio</h2>
          <p>Products we've built and client work we're proud of.</p>
        </div>
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <ProjectItem key={project.name} {...project} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
