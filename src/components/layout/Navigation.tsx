"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#expertise", label: "전문성" },
  { href: "#services", label: "서비스" },
  { href: "#track", label: "수행 실적" },
  { href: "#founder", label: "대표 소개" },
  { href: "#community", label: "커뮤니티" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          h-[72px] flex items-center
          transition-all duration-300
          ${
            isScrolled
              ? "bg-[rgba(10,61,47,0.96)] backdrop-blur-[14px] border-b border-[rgba(191,164,111,0.15)] shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/assets/icons/simbol_logo.svg"
              alt="그로스리얼티"
              width={140}
              height={40}
              className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-underline text-[13px] tracking-[0.05em] text-[var(--color-dm)] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact">
              <Button variant="outline" className="text-[13px] px-5 py-2">
                문의하기
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`
          fixed inset-0 z-[100] lg:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 right-0 bottom-0 w-[280px]
            bg-[var(--color-g)]
            transition-transform duration-300 ease-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white"
              aria-label="메뉴 닫기"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-4 font-serif text-[22px] text-white border-b border-[rgba(191,164,111,0.15)] transition-colors hover:text-[var(--color-au)]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="mt-8"
            >
              <Button variant="outline" fullWidth>
                문의하기
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
