import React from 'react';
import Style from '../styles/Nav.module.css'
import Link from 'next/link';

export default function Seminav(){
    return(
        <div className={Style.topnav}>
            <ul>
                <Link href='/'><li className={Style.listitem}>Not Resulted</li></Link>
                <Link href='/'><li className={Style.listitem}>Settled</li></Link>
            </ul>
        </div>
    )
}