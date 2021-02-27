import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level.</p>
        <p className={styles.imagemtwitter}> <img src="/icons/Logo.png" alt="Logo"/></p>
        <p className={styles.twitter}><a class="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Subindo%20o%20Level%20no%20desafio%20NLW-04"
      data-size="large" target="_blank">
    Compartilhar no Twitter</a></p>
    

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="close"/>
        </button>
      </div>
    </div>
  )
}