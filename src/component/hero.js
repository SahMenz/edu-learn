import React from 'react'
import styles from './hero.module.css';
import { courses } from './data';
import { finder } from './data';
import searchh from '../images/searchh.svg';
import expand from '../images/expand.svg';

function Hero() {
  return (
    <div className={styles.everything}>
        <div className={styles.totalRed}>
            <div className={styles.howMany}>
                {courses.map((course) => (
                    <> 
                    <div className={styles.new}>
                        <p className={styles.paraOne}>{course.numbers}</p>
                        <p className={styles.parag}>{course.describe}</p>
                    </div>
                    </>
                ))}
            </div>
        </div>
        <div className={styles.helpGen}>
            <div className={styles.topper}>
                <div className={styles.topperLast}>
                    <p className={styles.our}>OUR COURSES</p>
                    <h1 className={styles.perfect}>Find Your Perfect Course</h1>
                </div>
                <div className={styles.searcherInput}>
                    <input type="search"  placeholder='search your course' name="never" className={styles.pic}/>
                    <img src={searchh} alt="" className={styles.searcher}/>
                </div>
            </div>
            <div className={styles.tech}>
                {finder.map((helper) => (
                    <>
                    <div className={styles.triplet}>
                        <div className={styles.pics}> <img src={helper.img} alt="" /></div>
                        <p>{helper.detail}</p>
                    </div>
                    </>
                ))}
            </div>
            <span className={styles.cat}>View all categories <img src={expand} alt="" className={styles.source}/></span>
        </div>
    </div>
  )
}

export default Hero