import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import PageLoader from "@/components/common/Loader";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "nprogress/nprogress.css";
import { justSans } from "@/lib/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "FACE World Leadership School",
    template: "%s | FACE World Leadership School",
  },
  alternates: {
    canonical: "https://www.faceschool.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  description:
    "FACE World Leadership School, a residential institution in Kerala, is dedicated to nurturing the next generation of civil servants and global leaders from diverse and underprivileged backgrounds. We offer a holistic educational model with fully funded scholarships , providing intensive coaching for competitive exams like Civil Services, CUET, JEE, and NDA. Our unique three-stage journey guides students from our campus in Kozhikode to top national and international universities and finally to our FACE IAS Academy in Trivandrum for dedicated civil service preparation. Rooted in ethical leadership and social impact, our curriculum includes AI and technology training, global diplomacy, and social entrepreneurship to create changemakers for a better world",
  keywords: [
    "FACE World Leadership School",
    "FACE School",
    "FACE Campus",
    "FACE Foundation",
    "FACE IAS Academy",
    "Civil Service Coaching Kerala",
    "IAS Coaching India",
    "Free IAS Coaching",
    "Residential Coaching Academy (RCA)",
    "UPSC Preparation",
    "Kerala Civil Service Academy",
    "Nurturing Future Leaders",
    "Leadership School for Underprivileged Youth",
    "Social Impact Education",
    "P Kamalkutty IAS",
    "MP Joseph IAS",
    "Global Leaders",
    "Changemakers",
    "Fully Funded Education",
    "Scholarships for Indian Students",
    "CUET Coaching",
    "NDA Coaching",
    "Higher Secondary School Kerala",
    "Humanities and Science School",
    "Global University Preparation",
    "UN Opportunities for Youth",
    "AI and Technology Education",
    "Moral and Ethical Leadership",
    "NGO for Education India",
    "NITI Aayog",
    "CSR Funded Education",
    "FACE INSPIRA",
    "FACEx Talk Show",
    "Campus Expeditia",
    "Kozhikode",
    "Trivandrum",
    "Kerala",
  ],
  metadataBase: new URL("https://www.faceschool.in"),
  openGraph: {
    title: "FACE World Leadership School",
    type: "website",
    url: "https://www.faceschool.in",
    siteName: "FACE World Leadership School",
    description:
      "FACE World Leadership School, a residential institution in Kerala, is dedicated to nurturing the next generation of civil servants and global leaders from diverse and underprivileged backgrounds. We offer a holistic educational model with fully funded scholarships , providing intensive coaching for competitive exams like Civil Services, CUET, JEE, and NDA. Our unique three-stage journey guides students from our campus in Kozhikode to top national and international universities and finally to our FACE IAS Academy in Trivandrum for dedicated civil service preparation. Rooted in ethical leadership and social impact, our curriculum includes AI and technology training, global diplomacy, and social entrepreneurship to create changemakers for a better world",
    images: ["https://www.faceschool.in/images/logo-thumb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${justSans.className} antialiased bg-white`}>
        {" "}
        <GoogleAnalytics gaId="G-M27DXTCC1X" />
        <PageLoader />
        <PrimeReactProvider>{children}</PrimeReactProvider>
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
