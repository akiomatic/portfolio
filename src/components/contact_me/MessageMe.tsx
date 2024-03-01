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
import React, { useEffect, useState } from "react";

const MessageMe = () => {
	const [open, setOpen] = useState(false);
	const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(false);
	const isDesktop = useMediaQuery(Breakpoints.md);

	useEffect(() => {
		setIsJavaScriptEnabled(true);
	}, []);

	if (!isJavaScriptEnabled) return null;

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button
						variant={"outline"}
						size={"default"}
						className={"mt-8 text-base"}
					>
						Send me a message 👋
					</Button>
				</DialogTrigger>
				<DialogContent
					className={
						"max-w-[50%] flex flex-col justify-center items-center py-12"
					}
				>
					<DialogHeader>
						<DialogTitle className={"text-2xl text-center"}>
							Contact Me
						</DialogTitle>
						<DialogDescription className={"pt-2 text-center lg:px-24"}>
							Thank you again for exploring my portfolio. If there's anything
							you'd like to discuss, share, or ask, feel free to message me
							here!
						</DialogDescription>
					</DialogHeader>
					<MessageMeForm
						className={"w-full lg:w-[500px] pt-4"}
						setOpen={setOpen}
					/>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button
					variant={"outline"}
					size={"default"}
					className={"mt-8 text-base"}
				>
					Send me a message 👋
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-center pt-12">
					<DrawerTitle className={"text-2xl"}>Contact Me</DrawerTitle>
					<DrawerDescription className={"pt-2 lg:px-24"}>
						Thank you again for exploring my portfolio. If there's anything
						you'd like to discuss, share, or ask, feel free to message me here!
					</DrawerDescription>
				</DrawerHeader>
				<MessageMeForm className="px-4 pb-12" setOpen={setOpen} />
			</DrawerContent>
		</Drawer>
	);
};

export default MessageMe;
