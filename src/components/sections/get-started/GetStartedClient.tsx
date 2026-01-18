"use client";

import { useState } from "react";
import SplitLayout from "./SplitLayout";
import BenefitsPanel from "./BenefitsPanel";
import LeadCaptureForm from "./LeadCaptureForm";
import FormSuccess from "./FormSuccess";

export default function GetStartedClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SplitLayout
      left={<BenefitsPanel />}
      right={
        submitted ? (
          <FormSuccess />
        ) : (
          <LeadCaptureForm onSuccess={() => setSubmitted(true)} />
        )
      }
    />
  );
}
