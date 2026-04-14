"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Community() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="community"
      className="section-padding bg-[var(--color-g)]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div data-animate className="delay-1">
              <SectionLabel>Private Community</SectionLabel>
            </div>
            <h2
              data-animate
              className="delay-2 font-serif text-[26px] md:text-[36px] font-bold text-white mb-4"
            >
              THE12 · 실행하는 사람들
            </h2>
            <GoldDivider className="mb-8" />

            <div data-animate className="delay-3 space-y-5 mb-10">
              <p className="font-sans text-[15px] text-[var(--color-dm)] leading-[1.85]">
                그로스리얼티는 단독으로 움직이지 않습니다. THE12는 실행력 있는 부동산 투자자,
                전문 중개사, 개발 관계자가 모이는 부동산 투자 중심 커뮤니티입니다.
              </p>
              <p className="font-sans text-[15px] text-[var(--color-dm)] leading-[1.85]">
                검증된 사람들 사이의 입소문으로 성장 중입니다. 딜과 사람, 정보가 흐르는 구조를
                조용히 만들어가고 있습니다.
              </p>
            </div>

            <div data-animate className="delay-4">
              <Link href="#contact">
                <Button variant="outline">커뮤니티 문의하기</Button>
              </Link>
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div
            data-animate
            className="delay-5 relative aspect-[4/3] bg-[rgba(191,164,111,0.05)] rounded-[2px] border border-[rgba(191,164,111,0.14)] overflow-hidden"
          >
            {/* Abstract community visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Central circle */}
                <div className="w-20 h-20 rounded-full border-2 border-[var(--color-au)] flex items-center justify-center">
                  <span className="font-display text-[24px] font-bold text-[var(--color-au)]">
                    12
                  </span>
                </div>
                {/* Surrounding dots */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x = Math.cos(angle) * 80;
                  const y = Math.sin(angle) * 80;
                  return (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-[var(--color-au)] opacity-40"
                      style={{
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                      }}
                    />
                  );
                })}
                {/* Outer ring */}
                <div
                  className="absolute w-48 h-48 rounded-full border border-[rgba(191,164,111,0.2)]"
                  style={{ left: "calc(50% - 96px)", top: "calc(50% - 96px)" }}
                />
              </div>
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display italic text-[13px] text-[rgba(191,164,111,0.6)]">
                "실행하는 사람들이 모여, 함께 성장합니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
