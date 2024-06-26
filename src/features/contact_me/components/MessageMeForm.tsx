import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import TurnstileWidget from "@/features/contact_me/components/TurnstileWidget";
import { sendEmail } from "@/features/contact_me/lib/actions";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
	email: z
		.string()
		.transform((value) => value.replace(/\s+/g, ""))
		.pipe(
			z.string().email({
				message: "Please enter a valid email address.",
			}),
		),
	subject: z
		.string()
		.transform((value) => value.replace(/\s+/g, ""))
		.pipe(
			z
				.string()
				.min(5, {
					message: "Subject must be at least 5 characters.",
				})
				.max(50, {
					message: "Subject must be at most 50 characters.",
				}),
		),
	message: z
		.string()
		.min(10, {
			message: "Message must be at least 10 characters.",
		})
		.max(500, {
			message: "Message must be at most 500 characters.",
		}),
});

interface IMessageMeFormProps extends React.ComponentPropsWithoutRef<"form"> {
	className?: string;
	setOpen: (open: boolean) => void;
}

const MessageMeForm = ({ className, setOpen }: IMessageMeFormProps) => {
	const [captchaStatus, setCaptchaStatus] = useState<
		"idle" | "solved" | "error" | "expired"
	>("idle");
	const [isPending, startTransition] = useTransition();
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			subject: "",
			message: "",
		},
	});

	const onPreSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isPending) return;

		if (captchaStatus !== "solved") {
			toast({
				variant: "destructive",
				title: "CAPTCHA not solved",
				description: "Please solve the CAPTCHA before submitting.",
			});
			return;
		}

		await form.handleSubmit(onSubmit)();
	};

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		startTransition(async () => {
			try {
				await sendEmail(data);
				toast({
					title: "Message sent to me, Akio",
					description: "Thank you! I'll get back to you soon!",
				});
			} catch (e) {
				toast({
					variant: "destructive",
					title: "An error occurred",
					description: "Please try again later.",
				});
			}

			form.reset();
			setOpen(false);
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={(e) => onPreSubmit(e)}
				className={cn("grid items-start gap-4", className)}
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className={"pt-2"}>
							<FormLabel htmlFor={"email"}>Your email</FormLabel>
							<FormControl>
								<Input type="email" id="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor={"subject"}>Subject</FormLabel>
							<FormControl>
								<Input id="subject" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor={"message"}>Your message</FormLabel>
							<FormControl>
								<Textarea
									id={"message"}
									placeholder="Type your message here...."
									rows={4}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<TurnstileWidget
					className={"mt-4"}
					setCaptchaStatus={setCaptchaStatus}
				/>
				<Button
					type="submit"
					className={`mt-2 ${
						isPending || captchaStatus !== "solved"
							? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
							: null
					}`}
				>
					{isPending ? (
						<div
							className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
							role="status"
						>
							<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
								Sending...
							</span>
						</div>
					) : (
						"Send message"
					)}
				</Button>
			</form>
		</Form>
	);
};

export default MessageMeForm;
