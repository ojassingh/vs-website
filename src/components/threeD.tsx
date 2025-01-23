import Spline from "@splinetool/react-spline/next";
import { cn } from "@/lib/utils";

export default function ThreeD({ className }: { className?: string }) {
  return (
    <main className={cn("", ` ${className}`)}>
      <Spline 
        scene="https://draft.spline.design/RuRS6moFGOSqtxNO/scene.splinecode" 
        />
    </main>
  );
}
