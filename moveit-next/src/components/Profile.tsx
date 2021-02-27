import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/uchoamaster.png" alt="Carlos"/>
      <div>
        <strong>Carlos Uchôa</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
        
        <p className={styles.pfooter}><img className={styles.imgfooter} src="icons/logotipo-do-github.svg" alt="github" width="25"/><a href="https://github.com/uchoamaster" target="_blank">Github</a> </p>
      
      </div>
    </div>
  )
}