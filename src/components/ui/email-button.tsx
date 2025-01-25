"use client";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

export function EmailButton({ className }: { className?: string }) {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText("");
    toast({
      title: "Email copied!",
      description: "Looking forward to hearing from you.",
      className: "",
    });
  };

  return (
    <div
      className={cn("group flex items-center", ` ${className}`)}
      onClick={handleCopy}
    >
      <p className="underline">vs@vandanasingh.in</p>
      <Copy className="mr-1 hidden size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
    </div>
  );
}
