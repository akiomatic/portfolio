import { Button } from "@/components/shadcn_ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shadcn_ui/form";
import { Input } from "@/components/shadcn_ui/input";
import { Textarea } from "@/components/shadcn_ui/textarea";
import { useToast } from "@/components/shadcn_ui/use-toast";
import { sendEmail } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	subject: z
		.string()
		.min(5, {
			message: "Subject must be at least 5 characters.",
		})
		.max(50, {
			message: "Subject must be at most 50 characters.",
		}),
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

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
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
				onSubmit={form.handleSubmit(onSubmit)}
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
						<FormItem className={"pt-2"}>
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
						<FormItem className={"pt-2"}>
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
				<Button
					type="submit"
					className={`mt-4 ${
						isPending
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
