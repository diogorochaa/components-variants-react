import styles from "./button.module.css"
import cn from "clsx"

interface ButtonProps {
	variant?: "primary" | "secondary" | "inverse"
	backgroundColor?: string
	size?: "sm" | "md" | "lg"
	className?: string
	label: string
	onClick?: () => void
}

export const Button = ({
	variant = "primary",
	size = "md",
	backgroundColor,
	label,
	className,
	...props
}: ButtonProps) => {
	const sizeClasses = {
		[styles["-button--small"]]: size === "sm",
		[styles["-button--medium"]]: size === "md",
		[styles["-button--large"]]: size === "lg",
	}

	const variantClasses = {
		[styles["-button--primary"]]: variant === "primary",
		[styles["-button--secondary"]]: variant === "secondary",
		[styles["-button--inverse"]]: variant === "inverse",
	}

	return (
		<button
			type="button"
			className={cn(className, styles["-button"], variantClasses, sizeClasses)}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	)
}
