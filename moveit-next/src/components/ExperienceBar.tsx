import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ExperienceBar.module.css';

interface ExperienceBarProps {
  start: number;
  current: number;
  end: number;
}

export function ExperienceBar(props: ExperienceBarProps) {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );
  const current = props.current <= props.end ? props.current : props.end;
  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );
  return (
    <header className={style.experienceBar}>
      <span>{props.start} xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span
          className={style.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
