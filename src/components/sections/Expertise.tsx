"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Tag } from "@/components/ui/Tag";

const phases = [
  {
    label: "Phase 1 · 2005-2015 · 제도 기반 출발",
    title: "법학 × 도시계획 — 구조를 먼저 배웠습니다",
    description: `한양대 법학과에서 부동산 관련 제도와 법적 구조를, 서울대 환경대학원에서 도시계획과 공간 논리를 익혔습니다. 이론적으로 단단한 기반은 모든 컨설팅의 토대가 됩니다. 정부 정책 방향과 규제 변화를 읽고, 자산 전략에 연결하는 역량의 출발점입니다.`,
    tags: ["부동산 공법", "도시계획", "제도 분석", "정책 자문"],
  },
  {
    label: "Phase 2 · 2010–2022 · 주거 수익화 실무",
    title: "서울 캠퍼스 지역, 50채를 직접 운영했습니다",
    description: `서울 10개 주요 대학가를 직접 발로 뛰며 셰어하우스로 기숙사를 만들며 청년주거 사업을 키워, 임대 수익화의 현장 감각을 체득했습니다. 임차인 계약·수선·공실 관리·커뮤니티 운영까지 실전 부동산 경영을 직접 수행했으며, 이 경험은 임대차 컨설팅과 PM의 핵심 자산이 됩니다.`,
    tags: ["임대관리", "공실 전략", "계약 협상", "주거형 PM"],
  },
  {
    label: "Phase 3 · 2023–현재 · 도심 상업 자산 확장",
    title: "엑싯 이후, 영역을 넓혔습니다",
    description: `2021년 직방 엑싯 후 서울 주요 도심 — 강남·서초·성동·용산 권역의 상업용 빌딩, 대장 아파트, 경매, 신축 개발, 리모델링 PM, 감리, 법률 연계 특수물건까지 활동 영역을 확장했습니다. 고객의 생애주기에 따라 주거에서 상업·투자 자산으로의 자연스러운 이동을 함께 설계합니다.`,
    tags: ["상업용 빌딩", "신축 개발", "리모델링 PM", "감리", "경매", "특수물건"],
  },
];

const timeline = [
  { period: "2005–2011", title: "법학 전공 · 제도 기반 구축" },
  { period: "2010–2013", title: "대학가 쉐어하우스 첫 운영" },
  { period: "2013–2015", title: "서울대 환경대학원 도시계획" },
  { period: "2015–2021", title: "코티에이블 창업 · 50채 운영" },
  { period: "2021", title: "직방 엑싯" },
  { period: "2021–현재", title: "도심 상업 자산 · 개발 컨설팅" },
  { period: "2024–현재", title: "그로스로그 운영 · AX 최전선" },
];

export function Expertise() {
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
      id="expertise"
      className="section-padding bg-[var(--color-g)]"
    >
      <div className="container-custom">
        <div data-animate className="delay-1 mb-4">
          <SectionLabel>Core Expertise</SectionLabel>
        </div>
        <h2
          data-animate
          className="delay-2 font-serif text-[26px] md:text-[36px] font-bold text-white mb-4"
        >
          대표 전문성
        </h2>
        <GoldDivider className="mb-12" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Phase Text Blocks */}
          <div data-animate className="delay-3 space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.label}>
                <span className="font-display text-[12px] tracking-[0.2em] text-[var(--color-au)] mb-3 block">
                  {phase.label}
                </span>
                <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="font-sans text-[14px] md:text-[15px] text-[var(--color-dm)] leading-[1.85] mb-4">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {phase.tags.map((tag) => (
                    <Tag key={tag} variant="dark">
                      {tag}
                    </Tag>
                  ))}
                </div>
                {index < phases.length - 1 && (
                  <div className="h-[1px] bg-[rgba(191,164,111,0.14)] mt-8" />
                )}
              </div>
            ))}

            {/* DX Box */}
            <div className="mt-8">
              <div className="h-[1px] bg-[rgba(191,164,111,0.14)] mb-8" />
              <span className="font-display text-[12px] tracking-[0.2em] text-[var(--color-au)] mb-3 block">
                Phase 4 · 2024–현재 · 프롭테크로 도약
              </span>
              <div className="p-6 bg-[rgba(191,164,111,0.07)] border border-[rgba(191,164,111,0.22)] rounded-[2px]">
                <h3 className="font-serif text-[18px] font-semibold text-[var(--color-al)] mb-3">
                  프롭테크 1세대 — DX · AX 최전선
                </h3>
                <p className="font-sans text-[14px] text-[var(--color-dm)] leading-[1.85]">
                  부동산과 기술의 접목을 가장 이른 시기부터 실험해 온 프롭테크 1세대입니다.
                  코티에이블 창업과 직방 엑싯 경험 후 IT 개발자 커뮤니티(그로스로그) 운영을 통해
                  AI 자동화·데이터 기반 자산 분석·업무 DX·AX를 실무에 적용하는 역량을 보유하고 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div data-animate className="delay-4">
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div
                className="absolute left-[3px] top-2 bottom-2 w-[1.5px]"
                style={{
                  background: "linear-gradient(180deg, var(--color-au) 0%, transparent 100%)",
                }}
              />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.period} className="relative">
                    {/* Dot */}
                    <div
                      className="absolute -left-8 top-1 w-2 h-2 rounded-full bg-[var(--color-au)]"
                      style={{ boxShadow: "0 0 8px rgba(191,164,111,0.4)" }}
                    />
                    <span className="font-display text-[12px] tracking-[0.1em] text-[var(--color-au)] block mb-1">
                      {item.period}
                    </span>
                    <h4 className="font-sans text-[15px] text-white">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
