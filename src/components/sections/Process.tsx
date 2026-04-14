"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";

const steps = [
  {
    number: "01",
    title: "상담 · 목표 정의",
    description: "자산 목적, 리스크 허용 범위, 일정을 먼저 정확히 파악합니다.",
  },
  {
    number: "02",
    title: "현장 · 자료 점검",
    description: "등기·임대현황·공사범위·시장을 직접 확인합니다.",
  },
  {
    number: "03",
    title: "전략 설계",
    description: "개발·임대·매각·투자 시나리오를 비교해 최선의 방향을 제안합니다.",
  },
  {
    number: "04",
    title: "실행 · PM",
    description: "파트너 협업, 일정·이슈 관리. 끝까지 현장에 있습니다.",
  },
  {
    number: "05",
    title: "리뷰 · 다음 액션",
    description: "운영 안정화, 재투자, 자산이동 등 다음 스텝을 함께 그립니다.",
  },
];

export function Process() {
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
      id="process"
      className="section-padding bg-[var(--color-ow)]"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <div data-animate className="delay-1">
            <SectionLabel className="justify-center">Our Process</SectionLabel>
          </div>
          <h2
            data-animate
            className="delay-2 font-serif text-[26px] md:text-[36px] font-bold text-[var(--color-g)] mb-4"
          >
            일하는 방식
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <div data-animate className="delay-3 relative">
          {/* Connection Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-[rgba(191,164,111,0.35)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full border-[1.5px] border-[var(--color-au)] bg-white transition-all duration-300 hover:bg-[var(--color-au)] hover:text-white group">
                  <span className="font-display text-[18px] text-[var(--color-au)] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[16px] font-semibold text-[var(--color-g)] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[13px] text-[var(--color-dk)] leading-[1.75]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
