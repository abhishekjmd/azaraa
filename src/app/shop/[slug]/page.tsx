import React from "react";
import ProductDetailsClient, {
  Product,
} from "../../../components/ProductDetailsClient";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = { params: { slug: string } };

export default function Page({ params }: Props) {
  const slug = params?.slug || "kundan-choker";

  const product: Product = {
    id: slug,
    title: "Kundan Choker Set",
    price: 85000,
    priceText: "₹85,000",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLI9cvGmvwx1UD-6pV2yaFD9vDKhlQgervRNfm4RNwj0Hz-kkV4m4MXT24yQBFatJb2nc8dVnNVkhPhzvytK9smG1-n_oPOh9FYXCoTCc2Plr6ho6QWHiITD5e_yZUnDm4dn9J2Vg0RIhMjKQSteBXhO_HPXBNMopX2kxtg1tHa9hk-nurb6R0OzJK2-LMf7frmCjfx6jJy5_4gQJlRuxewLLFZJC-8Ry9OCx1lOzudASTUdEHF7jK-otJa8rt1ijChBzmz9xJSvY",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfrZyeMjWoBq0_Fw2t4Eq2LXwI89Ywgyog1GnlCZ3QJsM3N12lJdl-g6SAKEnoFcV5cgvE86ZDSISmOSULRWuWDEPm8s8dutTUu3MhMO1B-4SOwmY01Lf5gtAshfFvURj0Fye3SHuzqEVXibOkemuDKDaXTRUH3wi9nXqJ-I7PtKGBmxRNveJYuhYAXbKeEpsyaJd4WYD1MBZGsUQZ2S0eRmADA8ZOkRdsbJJ7CBYm6esYpqf8z2px7DS0Lmirye5xwSLIyD07BiM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTtxJb5VWn_pkM_wdQ9E4CDhxY0WPb2bWtLGMwbQ4a2GLIRmj4iXWQfHukc1nClnVgyPL1vTgLmZj6hayMBlVGMLfpwKRigFX7LJT0TUvd1tjmW0kWkRFTGLI1gB-fPrXIVeHkABzKCM1ElQSjU_gbqmLvIQ4Xv7b7Soymf7YE8wn-a58VwturFT18p428lo806Cr9w-oj9JPmjl83MUBb_rwfoLez78fg9RWUmtS5GcoRNm8Gd3CsKQW0QA2O0SyD5bPjzlcDbuI",
    ],
    rating: 4.9,
    reviews: 124,
    brand: "RITU KUMAR DESIGN",
    specs: {
      Material: "Gold Plated Silver (925)",
      Stones: "Hand-cut Kundan Polki",
      "Drop Details": "Freshwater Pearls, Emerald Beads",
      Closure: "Adjustable Silk Dori",
    },
    description:
      "Centuries of heritage distilled into a single piece. Each Kundan stone is meticulously set by master artisans in our Jaipur atelier, preserving the imperial traditions of the Mughal era.",
  };

  return (
    <>
      <Header />
      <ProductDetailsClient product={product} />
      <Footer />
    </>
  );
}
