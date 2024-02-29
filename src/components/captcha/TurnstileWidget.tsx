import { Turnstile } from "@marsidev/react-turnstile";

interface ITurnstileWidgetProps {
	className?: string;
	setCaptchaStatus: (status: "idle" | "solved" | "error" | "expired") => void;
}

const TurnstileWidget = ({
	className,
	setCaptchaStatus,
}: ITurnstileWidgetProps) => {
	if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
		throw new Error("TURNSTILE_SITE_KEY is not defined.");
	}

	return (
		<Turnstile
			className={className}
			siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
			onError={() => setCaptchaStatus("error")}
			onExpire={() => setCaptchaStatus("expired")}
			onSuccess={() => setCaptchaStatus("solved")}
			options={{
				theme: "light",
				language: "en",
			}}
		/>
	);
};

export default TurnstileWidget;
