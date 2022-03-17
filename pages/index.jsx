import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home() {
  return (
    <Layout
      title="Best Pizza"
      description="The best homemade pizza in town."
      className={styles.container}
    >
      
    </Layout>
  );
}
