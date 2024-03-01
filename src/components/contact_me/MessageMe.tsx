"use client";

import MessageMeForm from "@/components/contact_me/MessageMeForm";
import { Button } from "@/components/shadcn_ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/shadcn_ui/dialog";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/shadcn_ui/drawer";
import { Breakpoints, useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface IMessageMeProps {
	children?: React.ReactNode;
	className?: string;
	buttonText: string;
	title: string;
	description: string;
}

const MessageMe = ({
	children,
	className,
	buttonText,
	title,
	description,
}: IMessageMeProps) => {
	const [open, setOpen] = useState(false);
	const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(false);
	const isDesktop = useMediaQuery(Breakpoints.md);

	useEffect(() => {
		setIsJavaScriptEnabled(true);
	}, []);

	if (!isJavaScriptEnabled) return null;

	if (isDesktop) {
		return (
			<>
				{children}
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button
							variant={"outline"}
							size={"default"}
							className={cn("text-base", className)}
						>
							{buttonText}
						</Button>
					</DialogTrigger>
					<DialogContent
						className={
							"max-w-[50%] flex flex-col justify-center items-center py-12"
						}
					>
						<DialogHeader>
							<DialogTitle className={"text-2xl text-center"}>
								{title}
							</DialogTitle>
							<DialogDescription className={"pt-2 text-center lg:px-24"}>
								{description}
							</DialogDescription>
						</DialogHeader>
						<MessageMeForm
							className={"w-full lg:w-[500px] pt-4"}
							setOpen={setOpen}
						/>
					</DialogContent>
				</Dialog>
			</>
		);
	}

	return (
		<>
			{children}
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button
						variant={"outline"}
						size={"default"}
						className={cn("text-base", className)}
					>
						{buttonText}
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className="text-center pt-12">
						<DrawerTitle className={"text-2xl"}>{title}</DrawerTitle>
						<DrawerDescription className={"pt-2 lg:px-24"}>
							{description}
						</DrawerDescription>
					</DrawerHeader>
					<MessageMeForm className="px-4 pb-12" setOpen={setOpen} />
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MessageMe;
