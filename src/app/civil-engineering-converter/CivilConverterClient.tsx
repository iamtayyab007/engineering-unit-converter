"use client";

import dynamic from "next/dynamic";

// Dynamically load the CivilConverter on the client only
const CivilConverter = dynamic(
  () =>
    import("@/components/specialized/CivilConverter").catch(() => {
      // Fallback component if CivilConverter is not found
      return import("@/components/UnitConverter").then(
        (mod) => mod.default || mod
      );
    }),
  {
    loading: () => <div>Loading converter...</div>,
    ssr: false,
  }
);

export default function CivilConverterClient() {
  return <CivilConverter />;
}