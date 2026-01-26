import { InvoiceHero } from "@/components/invoice-automation/InvoiceHero";
import { WhoItsFor } from "@/components/invoice-automation/WhoItsFor";
import { Deliverables } from "@/components/invoice-automation/Deliverables";
import { DayByDayTimeline } from "@/components/invoice-automation/DayByDayTimeline";
import { WhatWeNeed } from "@/components/invoice-automation/WhatWeNeed";
import { Pricing } from "@/components/invoice-automation/Pricing";
import { FAQ } from "@/components/invoice-automation/FAQ";
import { FinalCTA } from "@/components/invoice-automation/FinalCTA";

export function InvoiceAutomationPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <InvoiceHero />
        <WhoItsFor />
        <Deliverables />
        <DayByDayTimeline />
        <WhatWeNeed />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
