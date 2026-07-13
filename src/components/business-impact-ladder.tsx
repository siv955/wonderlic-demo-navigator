import { CopyButton } from "@/components/copy-button";
import { ArrowRight } from "lucide-react";

export type BusinessImpactLadderData = {
  observablePattern: string;
  operationalConsequence: string;
  businessPain: string;
  wonderlicValue: string;
};

export function BusinessImpactLadder({
  ladder,
}: {
  ladder: BusinessImpactLadderData;
}) {
  const text = [
    "Business Impact Ladder",
    "",
    `Observable pattern: ${ladder.observablePattern}`,
    `Operational consequence: ${ladder.operationalConsequence}`,
    `Business pain: ${ladder.businessPain}`,
    `Wonderlic value: ${ladder.wonderlicValue}`,
  ].join("\n");
  const rows = [
    {
      label: "1. Observable pattern",
      value: ladder.observablePattern,
      tone: "border-blue-lilac bg-soft-purple/40",
    },
    {
      label: "2. Operational consequence",
      value: ladder.operationalConsequence,
      tone: "border-blue-lilac bg-card",
    },
    {
      label: "3. Business pain",
      value: ladder.businessPain,
      tone: "border-select/50 bg-select-ice/60",
    },
    {
      label: "4. Wonderlic value",
      value: ladder.wonderlicValue,
      tone: "border-develop/50 bg-develop-ice/60",
    },
  ];
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-blurple" />
          <h2 className="font-display text-2xl font-normal text-wonderlic-blue">
            Business Impact Ladder
          </h2>
        </div>
        <CopyButton text={text} label="Copy Business Impact Ladder" />
      </div>
      <p className="mb-4 text-xs italic text-muted-foreground">
        The behavior is the mechanism. Connect it to the operational or commercial
        consequence the buyer cares about.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className={`rounded-xl border p-4 ${r.tone}`}>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
              {r.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-wonderlic-blue">
              {r.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
