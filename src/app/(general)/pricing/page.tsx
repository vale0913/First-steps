import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'Pricing Page',
 description: 'Precing',
 keywords: ['Pricing Page', 'Valentina', '...']
};

export default function PricingPage() {
    return (
      <>
        <span className="text-7xl">Pricing Page</span>
      </>
      
    );
  }