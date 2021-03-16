import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Seminav from '../components/seminav'
import style from '../styles/Home.module.css'
import Table from '../components/Table';
import TableData from '../components/TableData'
import axios from 'axios';

let now = new Date();
let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

export default function Home() {

  return (

    <div className={style.pagestyle}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </head>

      <div className={style.headerpart}>        <button><i class="fas fa-chevron-left"></i></button>
        <h2><span>{time}</span> Chlemsford City</h2>
      </div>
      <Seminav />
      <Table />
      <TableData />
    </div>
  )
}
