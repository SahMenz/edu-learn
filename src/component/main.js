import React from 'react';
import styles from './main.module.css';
import Star1 from '../images/Star1.svg'
import book from '../images/book.svg'
import dots from '../images/dots.svg'

function Main() {
  return (
    <div className={styles.content}>
        <div className={styles.mainLeft}>
            <h1 className={styles.start}> Start <span>Learning</span> <br /> From The Best <br /> Platform</h1>
            <p className={styles.parag}>
                Pick from over 100,000 online course
                with new <br /> additions published every month
            </p>
            <button className={styles.mainRight}>Join for Free</button>
        </div>
        <div className={styles.centered}>
            <img src={book} alt="" />
            <div className={styles.text}>
                <div className={styles.numbers}>6,40,000+</div>
                <div className={styles.free}>Free Courses</div>
            </div>
        </div>
        <div className={styles.picgen}>
            <div className={styles.image}>
                <div className={styles.twoDots}>
                    <div className={styles.twoTop}>
                        <img src={dots} alt="" className={styles.picfour}/>
                        <img src={dots} alt="" className={styles.picfive}/>
                    </div>
                    <div><img src={Star1} alt="" className={styles.picTwo}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main