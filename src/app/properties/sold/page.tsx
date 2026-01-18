import ComingSoon from "@/components/ui/ComingSoon";

export const metadata = {
  title: "Recently Sold | Everyday Properties",
  description: "See our recently sold and renovated properties in the Twin Cities.",
};

export default function SoldPropertiesPage() {
  return (
    <ComingSoon
      title="Recently Sold"
      description="Browse our portfolio of recently sold and beautifully renovated properties throughout the Twin Cities."
    />
  );
}
