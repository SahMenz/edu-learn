import React from 'react';
import styles from './platform.module.css'
import { scores } from './data'
import beautyTwo from '../images/beautyTwo.svg'

function Platform() {
  return (
    <div className={styles.general}>
      <main className={styles.content}>
        <div className={styles.contentLeft}>
          <h1 className={styles.headies}>one platform and many <br /> courses for you</h1>
          <p className={styles.para}>
            It is a long established fact that a ready will be distracted 
            by <br /> the readable content of a page when looking at its layout. <br /> 
            The point of using Lorem Ipsum is that it has a more-or-less <br />
            normal distribution of letters
          </p>
          <div className={styles.tick}>
            <div className={styles.score}>
              {scores.map((score)=> (
                <>
                <span className={styles.spanner}>
                  <img src={score.ticks}alt="" />
                  {score.note}
                </span>
                </>
              ))}
            </div>
          </div>
          <button className={styles.butt}>Explore Courses</button>
        </div>
        <div className={styles.backer}>
          <img src={beautyTwo} alt="" />
        </div>
      </main>
    </div>
  )
}

export default Platform