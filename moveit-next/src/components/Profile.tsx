import styles from "../styles/components/Profile.module.css";

export default function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src="https://instagram.fjoi2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/150664335_1142958182804905_1380314763817617158_n.jpg?_nc_ht=instagram.fjoi2-1.fna.fbcdn.net&_nc_ohc=uPTWx0KHgbIAX9yDrcU&tp=1&oh=1a5e9ad1a16862fa6d485758d85ff102&oe=605D7625" alt="Carlos Uchôa"/>
			<div>
					<strong>Carlos Uchôa</strong>
					<p>
						<img src="icons/level.svg" alt="Level"/>
						Level 1
					</p>
			</div>
		</div>
	);
}