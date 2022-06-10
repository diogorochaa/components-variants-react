import styles from "./header.module.css"

interface HeaderProps {
	label: string
}

export const Header = ({ label }: HeaderProps) => (
	<header>
		<div className={styles.wrapper}>
			<div>
				<h1>{label}</h1>
			</div>
		</div>
	</header>
)
