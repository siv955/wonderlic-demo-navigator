import { StoryBadge } from "@/components/story-badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sparkles } from "lucide-react";

export function FlexibleProfileBadge() {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex">
            <StoryBadge variant="flexible" className="cursor-help gap-1">
              <Sparkles className="mr-1 inline h-3 w-3" />
              Flexible Profile
            </StoryBadge>
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-xs leading-relaxed">
          This person was built to support attribute-based stories. They are not one of the six
          canonical archetypes. Use the customer&rsquo;s role and pain to shape the story.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
