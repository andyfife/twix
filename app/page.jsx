'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import ReactHlsPlayer from 'react-hls-player';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ReactHlsPlayer
          src="https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/work/work/tonic_streaming.m3u8"
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </div>
    </main>
  );
}
