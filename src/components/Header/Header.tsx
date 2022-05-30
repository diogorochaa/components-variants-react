import { Button } from "../Button/button"
import styles from "./header.module.css"

type User = {
	name: string
}

interface HeaderProps {
	user?: User
	onLogin: () => void
	onLogout: () => void
	onCreateAccount: () => void
}

export const Header = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount,
}: HeaderProps) => (
	<header>
		<div className={styles.wrapper}>
			<div>
				<h1>Header</h1>
			</div>
			<div>
				{user ? (
					<>
						<span className={styles.welcome}>
							Welcome, <b>{user.name}</b>!
						</span>
						<Button size="sm" onClick={onLogout} label="Log out" />
					</>
				) : (
					<>
						<Button size="sm" onClick={onLogin} label="Log in" />
						<Button
							variant="secondary"
							size="sm"
							onClick={onCreateAccount}
							label="Sign up"
						/>
					</>
				)}
			</div>
		</div>
	</header>
)
