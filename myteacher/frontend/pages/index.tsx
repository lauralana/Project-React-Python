import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import List from '../src/components/MY_LIST/List';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <List /> 
    </div>
  )
}

export default Home;