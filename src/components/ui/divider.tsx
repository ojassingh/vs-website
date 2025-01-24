import type React from "react";

interface GradientDividerProps {
  showBuckle?: boolean;
  direction?: "top" | "bottom";
}

// Simple utility function to concatenate class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const GradientDivider: React.FC<GradientDividerProps> = ({
  showBuckle = false,
  direction = "bottom",
}) => {
  return (
    <div className="relative w-full">
      <div
        className={cn(
          "absolute left-0 h-full w-full",
          direction === "bottom"
            ? "top-1/2 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.neutral[950]/5%),transparent)] dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]"
            : "-top-1/2 bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.neutral[950]/5%),transparent)] dark:bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.white/8%),transparent)]",
        )}
      />
      {/* the line */}
      <div className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-neutral-950/30 to-transparent dark:via-white/30" />
      {showBuckle && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-950 p-1.5">
          <div className="h-1.5 w-8 rounded-lg bg-neutral-950/90 dark:bg-white" />
        </div>
      )}
    </div>
  );
};

export default GradientDivider;
