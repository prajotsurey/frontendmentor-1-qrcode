import Head from 'next/head'
import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Head>
        <title>
            FrontendMentor QrCode Challenge
        </title>
      </Head>
      <main>
        <Card />
      </main>
    </>
  )
}
