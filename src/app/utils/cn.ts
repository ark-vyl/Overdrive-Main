import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...input: Parameters<typeof clsx>) => twMerge(clsx(...input))