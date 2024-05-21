import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'Contact Page',
 description: 'Contact Page',
 keywords: ['Contact Page', 'Valentina', '...']
};

export default function ContactPage() {
    return (
      <>
        <span className="text-7xl">Contact Page</span>
      </>
      
    );
  }