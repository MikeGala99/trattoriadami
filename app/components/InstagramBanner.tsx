import Link from "next/link";
import { Instagram } from "lucide-react";

type InstagramBannerProps = {
  instagramUrl: string;
};

export default function InstagramBanner({ instagramUrl }: InstagramBannerProps) {
  return (
    <div className="w-full bg-[#f1ede0] border-b border-black/10">
      <div className="container mx-auto max-w-screen-xl px-4 lg:px-6 py-3 md:py-4">
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-base md:text-lg font-serif font-bold text-[#6e5c50] hover:text-[#c2953e] transition-colors"
          aria-label="Segui Trattoria Damì su Instagram"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          <span>Rimani aggiornato sui nostri eventi — seguici su Instagram</span>
        </Link>
      </div>
    </div>
  );
}
