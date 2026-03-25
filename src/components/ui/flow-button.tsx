import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface FlowButtonProps {
  text?: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: (e?: any) => void;
  variant?: "dark" | "light";
  type?: "button" | "submit" | "reset";
}

export function FlowButton({ text = "Modern Button", href, target, rel, className, onClick, variant = "dark", type = "button" }: FlowButtonProps) {
  const isLight = variant === "light";
  
  const arrowBaseClass = isLight ? "stroke-[#e7b167]" : "stroke-[#234932]";
  const arrowHoverClass = isLight ? "group-hover:stroke-[#234932]" : "group-hover:stroke-[#e7b167]";
  const textClass = isLight ? "text-[#e7b167]" : "text-[#234932]";
  const textHoverClass = isLight ? "hover:text-[#234932]" : "hover:text-[#e7b167]";
  const circleClass = isLight ? "bg-[#e7b167]" : "bg-[#234932]";
  const borderClass = isLight ? "border-[#e7b167]/40" : "border-[#234932]/40";

  const content = (
    <>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={`absolute w-4 h-4 left-[-25%] ${arrowBaseClass} fill-none z-[9] group-hover:left-4 ${arrowHoverClass} transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`} 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle */}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${circleClass} rounded-[50%] opacity-0 group-hover:w-[800px] group-hover:h-[800px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]`}></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={`absolute w-4 h-4 right-4 ${arrowBaseClass} fill-none z-[9] group-hover:right-[-25%] ${arrowHoverClass} transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`} 
      />
    </>
  );

  const baseClassName = cn(
    "group relative flex justify-center items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-transparent px-8 py-3 text-sm font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:rounded-[12px] active:scale-[0.95]",
    borderClass,
    textClass,
    textHoverClass,
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClassName}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClassName} onClick={onClick}>
      {content}
    </button>
  );
}
