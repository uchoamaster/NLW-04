import style from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/uchoamaster.png" alt="Carlos Uchôa" />
      <div>
        <strong>Carlos Uchôa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
