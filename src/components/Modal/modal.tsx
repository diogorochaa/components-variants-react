import styles from "./modal.module.css"
import cn from "clsx"

interface ModalProps {
	show: boolean
	onClose: () => void
	title: string
	children: React.ReactNode
}

export const Modal = ({
	show = false,
	onClose,
	title,
	children,
}: ModalProps) => {
	const modalClasses = cn(styles["-modal"], {
		[styles["-modal--show"]]: show,
	})
	const handleShow = () => (show = true)

	return (
		<div className={modalClasses}>
			<div className={styles["-modal--overlay"]} onClick={handleShow} />
			<div className={styles["-modal--content"]}>
				<div className={styles["-modal--header"]}>
					<h3 className={styles["-modal--title"]}>{title}</h3>
					<button
						type="button"
						className={styles["-modal--close"]}
						onClick={handleShow}
					>
						<span className={styles["-modal--close-icon"]}>Fechar</span>
					</button>
				</div>
				<div className={styles["-modal--body"]}>{children}</div>
			</div>
		</div>
	)
}
