import ComingSoon from "@/components/ui/ComingSoon";

// Generate static params for known areas
export function generateStaticParams() {
  return [
    { slug: "plymouth" },
    { slug: "maple-grove" },
    { slug: "eden-prairie" },
    { slug: "st-louis-park" },
    { slug: "edina" },
    { slug: "minnetonka" },
    { slug: "bloomington" },
  ];
}

function formatAreaName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const areaName = formatAreaName(slug);
  return {
    title: `${areaName} | Everyday Properties`,
    description: `Helping homeowners in ${areaName} find better options for properties that need work.`,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const areaName = formatAreaName(slug);

  return (
    <ComingSoon
      title={areaName}
      description={`We help homeowners in ${areaName} navigate their property options. Local market insights coming soon.`}
    />
  );
}
