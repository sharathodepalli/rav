import { InvoiceHero } from "@/components/invoice-automation/InvoiceHero";
import { WhoItsFor } from "@/components/invoice-automation/WhoItsFor";
import { Deliverables } from "@/components/invoice-automation/Deliverables";
import { Timeline } from "@/components/invoice-automation/Timeline";
import { ScopeBoundaries } from "@/components/invoice-automation/ScopeBoundaries";
import { SecuritySection } from "@/components/invoice-automation/SecuritySection";
import { ProofSection } from "@/components/invoice-automation/ProofSection";
import { Pricing } from "@/components/invoice-automation/Pricing";
import { Retainer } from "@/components/invoice-automation/Retainer";
import { FAQ } from "@/components/invoice-automation/FAQ";
import { FinalCTA } from "@/components/invoice-automation/FinalCTA";

export function InvoiceAutomationPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <InvoiceHero />
        <WhoItsFor />
        <Deliverables />
        <Timeline />
        <ScopeBoundaries />
        <SecuritySection />
        <ProofSection />
        <Pricing />
        <Retainer />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
