"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-zinc-200 dark:bg-zinc-800">
      <SliderPrimitive.Range className="absolute h-full bg-zinc-900  dark:bg-zinc-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 rounded-full border-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-100 dark:bg-zinc-400 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
