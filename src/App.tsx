/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSection } from "./components/HeroSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { BrandStory } from "./components/BrandStory";
import { InteractiveQuiz } from "./components/InteractiveQuiz";
import { CTAStrip } from "./components/CTAStrip";
import { SocialLoop } from "./components/SocialLoop";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-drp-black min-h-screen text-white selection:bg-drp-red selection:text-white">
      <HeroSection />
      <SocialProofSection />
      <ProductShowcase />
      <BrandStory />
      <InteractiveQuiz />
      <CTAStrip />
      <SocialLoop />
      <Footer />
    </main>
  );
}

