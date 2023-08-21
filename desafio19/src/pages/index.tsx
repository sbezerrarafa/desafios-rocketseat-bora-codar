import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { CardMotorista } from '../components/CardMotorista';

export default function Home() {
  return (
    <section className="container">
      <CardMotorista />
    </section>
  );
}
