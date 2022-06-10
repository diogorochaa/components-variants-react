import styles from "./card.module.css"
import cn from "clsx"

interface CardProps {
	title: string
	children: string
	className?: string
}

export const Card = ({ title, className, children }: CardProps) => {
	return (
		<div className={cn(className, styles["-card--container"])}>
			<div className={styles["-card--content"]}>
				<div className={styles["-card--header"]}>
					<h3 className={styles["-card--title"]}>{title}</h3>
				</div>
				<span className={styles["-card--body"]}>{children}</span>
			</div>
		</div>
	)
}
