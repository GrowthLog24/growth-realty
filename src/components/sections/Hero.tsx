"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowDownIcon } from "@/components/ui/Icons";
import Link from "next/link";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-[var(--color-g)] overflow-hidden"
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 hero-grid-pattern" />

      {/* Skyline Silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] opacity-5">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="var(--color-au)"
        >
          <path d="M0,200 L0,120 L60,120 L60,80 L120,80 L120,100 L180,100 L180,60 L240,60 L240,100 L300,100 L300,140 L360,140 L360,80 L420,80 L420,40 L480,40 L480,80 L540,80 L540,120 L600,120 L600,60 L660,60 L660,100 L720,100 L720,140 L780,140 L780,100 L840,100 L840,40 L900,40 L900,80 L960,80 L960,120 L1020,120 L1020,60 L1080,60 L1080,100 L1140,100 L1140,140 L1200,140 L1200,80 L1260,80 L1260,120 L1320,120 L1320,100 L1380,100 L1380,140 L1440,140 L1440,200 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-[620px]">
          {/* Label */}
          <div data-animate className="delay-1">
            <SectionLabel>Seoul · Boutique Real Estate Consulting</SectionLabel>
          </div>

          {/* Main Headline */}
          <h1
            data-animate
            className="delay-2 font-serif text-[36px] md:text-[48px] lg:text-[64px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-7"
          >
            자산의 무게를 이해하는
            <br />
            조용한 혁신
            <br />
            <span className="text-[var(--color-al)]">
              바로 곁에서 시작부터 끝까지 함께 실행합니다.
            </span>
          </h1>

          {/* Sub Text */}
          <p
            data-animate
            className="delay-3 font-sans text-[15px] md:text-[16px] text-[var(--color-dm)] leading-[1.85] mb-4"
          >
            제도와 이론 위에 17년 실무를 쌓은 부동산 컨설턴트.
            <br />
            신축·리모델링·자산이동·PM·특수물건까지
            <br />
            고객의 자산을 신중하게 결과로 증명합니다.
          </p>

          {/* Note */}
          <p
            data-animate
            className="delay-4 font-display italic text-[14px] text-[rgba(212,183,138,0.65)] mb-10"
          >
            - 신뢰하는 지인들의 소개로 프라이빗한 부동산 밸류애드를 만들어냅니다.
          </p>

          {/* CTA Buttons */}
          <div data-animate className="delay-5 flex flex-col sm:flex-row gap-4">
            <Link href="#contact">
              <Button variant="outline" className="w-full sm:w-auto">
                문의하기
              </Button>
            </Link>
            <Link href="#track">
              <Button variant="secondary" className="w-full sm:w-auto">
                수행 실적 보기
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="animate-scroll-indicator">
          <ArrowDownIcon size={16} className="text-[var(--color-dm)]" />
        </div>
      </div>
    </section>
  );
}
