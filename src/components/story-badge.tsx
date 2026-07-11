import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Variant =
  | "select"
  | "develop"
  | "team-dynamics"
  | "core"
  | "extra"
  | "exact"
  | "near"
  | "caution"
  | "neutral";

const STYLES: Record<Variant, string> = {
  select: "bg-select-ice text-wonderlic-blue border border-select/40",
  develop: "bg-develop-ice text-wonderlic-blue border border-develop/50",
  "team-dynamics": "bg-purple-chalk text-blurple border border-blue-lilac",
  core: "bg-wonderlic-blue text-white border-transparent",
  extra: "bg-muted text-muted-foreground border border-border",
  exact: "bg-blurple text-white border-transparent",
  near: "bg-soft-purple text-blurple border border-blue-lilac",
  caution: "bg-select-ice text-wonderlic-blue border border-select/60",
  neutral: "bg-muted text-muted-foreground border border-border",
};

export function StoryBadge({
  variant,
  children,
  className,
}: {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
        STYLES[variant],
        className,
      )}
    >
      {children}
    </Badge>
  );
}
