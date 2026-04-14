"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowDownIcon } from "@/components/ui/Icons";
import { HeroSlider } from "@/components/ui/HeroSlider";
import Link from "next/link";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 히어로 슬라이더 이미지 (실제 이미지 추가 시 아래 주석 해제)
// 이미지가 없으면 딥그린 그라데이션 배경으로 표시됨
const heroImages: { src: string; alt: string }[] = [
  // { src: "/images/hero-1.jpg", alt: "럭셔리 부동산 이미지 1" },
  // { src: "/images/hero-2.jpg", alt: "럭셔리 부동산 이미지 2" },
  // { src: "/images/hero-3.jpg", alt: "럭셔리 부동산 이미지 3" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 타임라인 생성 - TREF 스타일의 순차 애니메이션
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.9,
        },
      });

      // Label 애니메이션
      tl.fromTo(
        labelRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        0.2
      );

      // Title 애니메이션 - TREF 스타일 (더 큰 이동 거리)
      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 },
        0.4
      );

      // Subtext 애니메이션
      tl.fromTo(
        subtextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        0.7
      );

      // Note 애니메이션
      tl.fromTo(
        noteRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        0.9
      );

      // CTA 버튼 애니메이션
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        1.1
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image Slider */}
      <HeroSlider images={heroImages} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 hero-grid-pattern z-[1]" />

      {/* Skyline Silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] opacity-[0.03] z-[2]">
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
        <div className="max-w-[720px]">
          {/* Label */}
          <div ref={labelRef} className="opacity-0">
            <SectionLabel>Seoul · Boutique Real Estate Consulting</SectionLabel>
          </div>

          {/* Main Headline - TREF 스타일 (98px, 자간 -2.9px) */}
          <h1
            ref={titleRef}
            className="opacity-0 font-serif text-[42px] md:text-[64px] lg:text-[80px] xl:text-[90px] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-8"
          >
            자산의 무게를 이해하는
            <br />
            <span className="text-[var(--color-al)]">조용한 혁신</span>
          </h1>

          {/* Sub Headline */}
          <p
            ref={subtextRef}
            className="opacity-0 font-serif text-[18px] md:text-[22px] lg:text-[26px] text-white/90 leading-[1.5] tracking-[-0.01em] mb-6"
          >
            바로 곁에서 시작부터 끝까지 함께 실행합니다.
          </p>

          {/* Description */}
          <p
            ref={noteRef}
            className="opacity-0 font-sans text-[14px] md:text-[15px] text-[var(--color-dm)] leading-[1.9] mb-10 max-w-[520px]"
          >
            제도와 이론 위에 17년 실무를 쌓은 부동산 컨설턴트.
            <br />
            신축·리모델링·자산이동·PM·특수물건까지
            <br />
            고객의 자산을 신중하게 결과로 증명합니다.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-4">
            <Link href="#contact">
              <Button variant="outline" className="w-full sm:w-auto text-[14px] px-8 py-4">
                문의하기
              </Button>
            </Link>
            <Link href="#track">
              <Button variant="secondary" className="w-full sm:w-auto text-[14px] px-8 py-4">
                수행 실적 보기
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="font-display text-[10px] tracking-[0.3em] text-[var(--color-dm)] uppercase">
          Scroll
        </span>
        <div className="animate-scroll-indicator">
          <ArrowDownIcon size={18} className="text-[var(--color-dm)]" />
        </div>
      </div>
    </section>
  );
}
