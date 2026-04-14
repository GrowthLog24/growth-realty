"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";

const stats = [
  { value: 17, suffix: "년", label: "부동산 실전 경력" },
  { value: 50, suffix: "채+", label: "직접 운영한 부동산 자산" },
  { value: 20, suffix: "개", label: "서울 핵심 집중 권역" },
  { value: 300, suffix: "회+", label: "강연 & 언론 보도" },
  { value: 1000, suffix: "억+", label: "컨설팅 자산 규모" },
];

function useCountUp(end: number, duration: number = 1600, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  shouldAnimate,
}: {
  value: number;
  suffix: string;
  label: string;
  shouldAnimate: boolean;
}) {
  const count = useCountUp(value, 1600, shouldAnimate);

  return (
    <div className="text-center py-6 md:py-0">
      <div className="font-display text-[36px] md:text-[42px] lg:text-[50px] font-bold text-[var(--color-g)] mb-2">
        {shouldAnimate ? count : 0}
        <span className="text-[0.7em]">{suffix}</span>
      </div>
      <p className="font-sans text-[13px] md:text-[14px] text-[var(--color-dk)]">
        {label}
      </p>
    </div>
  );
}

export function Numbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="numbers"
      className="section-padding bg-[var(--color-ow)]"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">Trust Indicators</SectionLabel>
          <h2 className="font-serif text-[26px] md:text-[36px] font-bold text-[var(--color-g)] mb-4">
            숫자로 보는 신뢰
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-[var(--color-ad)]">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
