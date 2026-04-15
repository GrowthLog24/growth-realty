"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpIcon } from "@/components/ui/Icons";
import { useEffect, useState } from "react";

const menuLinks = [
  { href: "#expertise", label: "전문성" },
  { href: "#services", label: "서비스" },
  { href: "#track", label: "수행 실적" },
  { href: "#founder", label: "대표 소개" },
  { href: "#community", label: "커뮤니티" },
  { href: "#contact", label: "문의하기" },
];

const serviceLinks = [
  "신축 개발 컨설팅",
  "리모델링 & PM",
  "자산이동 컨설팅",
  "임대차 컨설팅",
  "특수물건 · 법률 협력",
  "THE12 커뮤니티",
];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[var(--color-footer)] pt-16 pb-8">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-[rgba(191,164,111,0.12)]">
            {/* Column 1: Logo & Company Info */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/assets/icons/simbol_logo.svg"
                  alt="그로스리얼티"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>

              <div className="space-y-2 text-[13px] text-[var(--color-dm)]">
                <p>서울특별시 강남구 강남대로 84길 23</p>
                <p>한라클래식 1703-2호 (06233)</p>
                <p className="pt-2">대표: 안혜린</p>
                <p>사업자등록번호: 664-81-03678</p>
                <p className="pt-4 font-display text-[11px] tracking-[0.1em] text-[var(--color-au)] uppercase">
                  Part of ENTR Group
                </p>
              </div>
            </div>

            {/* Column 2: Menu Links */}
            <div>
              <h4 className="font-display text-[11px] tracking-[0.2em] text-[var(--color-au)] uppercase mb-5">
                Menu
              </h4>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--color-dm)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services & Legal */}
            <div>
              <h4 className="font-display text-[11px] tracking-[0.2em] text-[var(--color-au)] uppercase mb-5">
                Services
              </h4>
              <ul className="space-y-3 mb-8">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <span className="text-[13px] text-[var(--color-dm)]">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/privacy"
                className="text-[12px] text-[var(--color-dm)] hover:text-[var(--color-au)] transition-colors"
              >
                개인정보처리방침
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-[rgba(255,255,255,0.4)]">
              © 2026 그로스리얼티(주) Growth Realty Co., Ltd. All rights reserved.
            </p>
            <p className="font-display italic text-[12px] text-[rgba(191,164,111,0.5)]">
              Boutique · Trusted · Executed
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50
          w-12 h-12 rounded-full
          bg-[var(--color-au)] text-white
          flex items-center justify-center
          shadow-lg
          transition-all duration-300
          hover:bg-[#8B6B3A] hover:-translate-y-1
          ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        aria-label="맨 위로 이동"
      >
        <ArrowUpIcon size={20} />
      </button>
    </>
  );
}
