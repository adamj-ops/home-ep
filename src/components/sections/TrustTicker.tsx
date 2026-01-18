"use client";

const tickerItems = [
  { value: "150+", label: "Twin Cities families helped" },
  { value: "$2.4M", label: "additional value created" },
  { value: "24hr", label: "response time" },
  { value: "100%", label: "transparent pricing" },
];

export default function TrustTicker() {
  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-[var(--dark)] text-white py-[18px] overflow-hidden">
      <div className="flex gap-20 animate-ticker whitespace-nowrap">
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-[14px] text-[#999]">
            <strong className="text-[18px] text-[var(--green)] font-semibold">
              {item.value}
            </strong>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
