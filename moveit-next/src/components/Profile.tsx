import styles from '../styles/components/Profile.module.css';


export function Profile(){

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/5197047?s=400&v=4" alt="Foto Carlos Uchoa"/>

            <strong>Carlos Júnior Uchôa</strong>
            <p>Level 1</p>
        </div>
    );
}