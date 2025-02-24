"use client"

import React from 'react';
import styles from './Sidebar.module.css';
import { SidebarData } from './SidebarData';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    return (
    <div className={styles.Sidebar}>
        <ul className={styles.SidebarList}>
        {SidebarData.map((val, key) => {
            return (
                <li 
                key={key}
                className={styles.row}
                id={pathname === val.link ? styles.active : ""}
                onClick={() => {window.location.pathname = val.link}}>
                     <div id={styles.icon}>{val.icon}</div> 
                     <div id={styles.title}>{val.title}</div>
                </li>
            );
        })}
    </ul>
    </div>
    );
}