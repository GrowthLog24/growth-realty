"use client";

import { useEffect, useRef } from "react";
import { GoldDivider } from "@/components/ui/GoldDivider";

const philosophyItems = [
  { ko: "신중한 판단", en: "Prudent Advisory" },
  { ko: "현장 실행", en: "Field Execution" },
  { ko: "긴 호흡의 동반", en: "Long-term Partnership" },
];

export function Philosophy() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="phil"
      className="section-padding bg-[var(--color-ow)]"
    >
      <div className="container-custom">
        {/* Vertical Gold Line */}
        <div data-animate className="delay-1">
          <GoldDivider vertical className="mb-10" />
        </div>

        {/* Quote */}
        <blockquote
          data-animate
          className="delay-2 max-w-[760px] mx-auto text-center mb-16"
        >
          <p className="font-serif font-light italic text-[19px] md:text-[24px] lg:text-[30px] text-[var(--color-g)] leading-[1.7]">
            &ldquo;부동산은 단순한 자산이 아닙니다.
            <br />
            그 안에 사람의 시간과 결정이 쌓여 있습니다.
            <br />
            <span className="font-bold not-italic">
              그래서 신중하게 꼼꼼히, 그리고 끝까지 함께합니다.
            </span>
            &rdquo;
          </p>
        </blockquote>

        {/* 3-Column Grid */}
        <div
          data-animate
          className="delay-3 max-w-[820px] mx-auto border border-[var(--color-ad)] grid grid-cols-1 md:grid-cols-3"
        >
          {philosophyItems.map((item, index) => (
            <div
              key={item.en}
              className={`
                p-8 text-center
                transition-colors duration-300
                hover:bg-[var(--color-ab)]
                ${index < philosophyItems.length - 1 ? "md:border-r border-b md:border-b-0 border-[var(--color-ad)]" : ""}
              `}
            >
              <h3 className="font-serif text-[17px] font-semibold text-[var(--color-g)] mb-2">
                {item.ko}
              </h3>
              <span className="font-display text-[11px] tracking-[0.16em] text-[var(--color-au)] uppercase">
                {item.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
