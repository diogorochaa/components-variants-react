import styles from "./input.module.css"
import cn from "clsx"

interface InputProps {
	label?: string
	value?: string
	variant?: "error" | "success" | "default"
	size?: "sm" | "md" | "lg"
	className?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
	label,
	value,
	variant = "default",
	size = "md",
	className,
	onChange,
	...props
}: InputProps) => {
	const sizeClasses = {
		[styles["-input--small"]]: size === "sm",
		[styles["-input--medium"]]: size === "md",
		[styles["-input--large"]]: size === "lg",
	}

	const variantClasses = {
		[styles["-input--error"]]: variant === "error",
		[styles["-input--success"]]: variant === "success",
		[styles["-input--default"]]: variant === "default",
	}

	return (
		<div className={cn(styles["label-container"])}>
			<label className={cn(className, styles["label"])}>{label}</label>

			<input
				className={cn(className, styles["-input"], variantClasses, sizeClasses)}
				onChange={onChange}
				{...props}
			/>
		</div>
	)
}
