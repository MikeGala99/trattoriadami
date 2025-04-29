"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadAppButton({
  href = "/download",
  label = "Accedi all'app",
  extraClasses = "",
}: {
  href?: string;
  label?: string;
  extraClasses?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`relative inline-flex items-center px-5 py-2.5 rounded-lg bg-[#D32F2F] text-white font-medium shadow-md hover:shadow-lg hover:bg-[#B71C1C] transition-all duration-300 ${extraClasses}`}
      >
        <span className="relative z-10 flex items-center">
          <Download className="w-4 h-4 mr-2" />
          {label}
        </span>
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFDE59] rounded-b-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
      </Link>
    </motion.div>
  );
}