import type { Metadata } from "next"
import ContactPageClient from "@/components/home/ContactPage"

export const metadata: Metadata = {
  title: "Contact Veloxpack",
  description: "Contact our team for support, sales, or general inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Veloxpack",
    description: "Contact our team for support, sales, or general inquiries.",
    url: "https://veloxpack.io/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
