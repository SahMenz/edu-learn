import React from 'react'
import styles from './nav.module.css'

function Nav() {

  return (
    <div className={styles.header}>
        <nav >
            <h2>Edu<span>Learn</span></h2>
            <div className={styles.side}>
              <ul className={styles.list}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Courses</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
              </ul>
              <button className={styles.find}>Sign In</button>
            </div>
            <div className={styles.bars}>
                <div className={styles.barer}></div>
                <div className={styles.barer}></div>
                <div className={styles.barer}></div>
            </div>
        </nav>
    </div>
  )
}

export default Nav