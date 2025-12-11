import { cn } from "@/lib/utils";

interface MithilaBorderProps {
  children: React.ReactNode;
  className?: string;
}

const MithilaBorder = ({ children, className }: MithilaBorderProps) => {
  return (
    <div className={cn("mithila-border p-6 md:p-8 bg-card rounded-lg", className)}>
      {children}
    </div>
  );
};

export default MithilaBorder;
