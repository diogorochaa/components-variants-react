import styles from "./modal.module.css"
import cn from "clsx"

interface ModalProps {
	show: boolean
	onClose: () => void
	title: string
	children: React.ReactNode
}

export const Modal = ({ show, onClose, title, children }: ModalProps) => {
	const modalClasses = cn(styles["-modal"], {
		[styles["-modal--show"]]: show,
	})

	return (
		<div className={modalClasses}>
			<div className={styles["-modal--overlay"]} onClick={onClose} />
			<div className={styles["-modal--content"]}>
				<div className={styles["-modal--header"]}>
					<h3 className={styles["-modal--title"]}>{title}</h3>
					<button
						type="button"
						className={styles["-modal--close"]}
						onClick={onClose}
					>
						<span className={styles["-modal--close-icon"]}>Fechar</span>
					</button>
				</div>
				<div className={styles["-modal--body"]}>{children}</div>
			</div>
		</div>
	)
}
