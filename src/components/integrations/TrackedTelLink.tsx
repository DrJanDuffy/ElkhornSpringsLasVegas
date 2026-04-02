"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const callActionOn = process.env.NEXT_PUBLIC_CALLACTION_ENABLED === "true";
const callActionPhoneClass = process.env.NEXT_PUBLIC_CALLACTION_PHONE_LINK_CLASS?.trim();

/**
 * Wraps tel: links so CallAction (or similar) can target a consistent class when the script is enabled.
 * Set NEXT_PUBLIC_CALLACTION_PHONE_LINK_CLASS to match your vendor dashboard (e.g. pool link class).
 */
export const TrackedTelLink = forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
  function TrackedTelLink({ className, ...props }, ref) {
    return (
      <a
        ref={ref}
        className={cn(className, callActionOn && callActionPhoneClass)}
        {...props}
      />
    );
  },
);
