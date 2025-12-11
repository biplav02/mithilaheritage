import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className }: SectionDividerProps) => {
  return (
    <div className={cn("w-full py-4", className)}>
      <div className="mithila-divider max-w-md mx-auto" />
    </div>
  );
};

export default SectionDivider;
