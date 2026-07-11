import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { copyText } from "@/lib/copy";

export function CopyButton({
  text,
  label = "Copy",
  size = "sm",
}: {
  text: string;
  label?: string;
  size?: "sm" | "icon";
}) {
  if (size === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-muted-foreground hover:text-blurple"
        onClick={() => copyText(text, `${label} copied`)}
        aria-label={label}
      >
        <Copy className="h-3.5 w-3.5" />
      </Button>
    );
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="h-7 gap-1.5 rounded-full border-border text-xs font-semibold text-muted-foreground hover:text-blurple"
      onClick={() => copyText(text, `${label} copied`)}
    >
      <Copy className="h-3 w-3" />
      {label}
    </Button>
  );
}
