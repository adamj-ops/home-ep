"use client";

import { motion } from "framer-motion";
import { fadeUpInView } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const comparisonData = [
  {
    feature: "Timeline",
    cashOffer: "7-14 days",
    partnership: "60-90 days",
    bridge: "Varies",
  },
  {
    feature: "Repairs needed",
    cashOffer: { value: "None", highlight: true },
    partnership: { value: "None (we handle)", highlight: true },
    bridge: "Minimal / Strategic",
  },
  {
    feature: "Your effort",
    cashOffer: { value: "Minimal", highlight: true },
    partnership: { value: "Minimal", highlight: true },
    bridge: "Some involvement",
  },
  {
    feature: "Sale price potential",
    cashOffer: "Below market",
    partnership: { value: "Full market value", highlight: true },
    bridge: "Market value",
  },
  {
    feature: "Best for",
    cashOffer: "Speed & simplicity",
    partnership: "Maximum profit",
    bridge: "Specific price target",
  },
];

type CellValue = string | { value: string; highlight: boolean };

function renderCell(cell: CellValue) {
  if (typeof cell === "string") {
    return cell;
  }
  return (
    <span className={cell.highlight ? "text-[var(--green)] font-medium" : ""}>
      {cell.value}
    </span>
  );
}

export default function OptionsComparison() {
  return (
    <section className="section-padding bg-white">
      <SectionHeader headline="Compare your options at a glance." centered />

      <motion.div className="overflow-x-auto" {...fadeUpInView}>
        <table className="w-full max-w-[900px] mx-auto border-collapse">
          <thead>
            <tr>
              <th className="py-5 px-6 text-left text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[1px] border-b border-[#eee]">
                &nbsp;
              </th>
              <th className="py-5 px-6 text-left text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[1px] border-b border-[#eee]">
                Cash Offer
              </th>
              <th className="py-5 px-6 text-left text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[1px] border-b border-[#eee]">
                Remodel Partnership
              </th>
              <th className="py-5 px-6 text-left text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[1px] border-b border-[#eee]">
                Bridge to Goal
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td className="py-5 px-6 text-[15px] font-semibold text-[var(--text-primary)] border-b border-[#eee]">
                  {row.feature}
                </td>
                <td className="py-5 px-6 text-[15px] text-[var(--text-secondary)] border-b border-[#eee]">
                  {renderCell(row.cashOffer)}
                </td>
                <td className="py-5 px-6 text-[15px] text-[var(--text-secondary)] border-b border-[#eee]">
                  {renderCell(row.partnership)}
                </td>
                <td className="py-5 px-6 text-[15px] text-[var(--text-secondary)] border-b border-[#eee]">
                  {renderCell(row.bridge)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
