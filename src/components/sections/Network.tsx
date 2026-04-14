"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import {
  LawyerIcon,
  TaxIcon,
  ConstructionIcon,
  FinanceIcon,
} from "@/components/ui/Icons";

const networks = [
  {
    icon: LawyerIcon,
    title: "부동산 전문 변호사",
    description:
      "소유권 분쟁, 등기 소송, 명도, 경매 법률 대응. 복잡한 권리관계를 법적으로 정리합니다.",
  },
  {
    icon: TaxIcon,
    title: "세무 · 회계 파트너",
    description:
      "취득세·양도세·법인세 등 자산이동에 수반되는 세금 이슈를 사전에 검토합니다.",
  },
  {
    icon: ConstructionIcon,
    title: "설계 · 시공 · 인테리어",
    description:
      "신축·리모델링 프로젝트에 최적화된 협력사를 프로젝트별로 연결합니다.",
  },
  {
    icon: FinanceIcon,
    title: "금융 · 투자 네트워크",
    description:
      "PF, 브릿지론, 투자 구조화 등 케이스에 맞는 금융 경로를 함께 모색합니다.",
  },
];

export function Network() {
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
      id="network"
      className="section-padding bg-[var(--color-g)]"
    >
      <div className="container-custom">
        <div className="text-center mb-4">
          <div data-animate className="delay-1">
            <SectionLabel className="justify-center">Professional Network</SectionLabel>
          </div>
        </div>

        <h2
          data-animate
          className="delay-2 font-serif text-[26px] md:text-[36px] font-bold text-white text-center mb-4"
        >
          제대로 하기 위해, 혼자 풀지 않습니다.
        </h2>

        <p
          data-animate
          className="delay-3 text-center font-sans text-[15px] text-[var(--color-dm)] max-w-2xl mx-auto mb-4"
        >
          부동산은 법무·세무·시공·금융이 얽히는 복합 영역입니다.
          <br className="hidden md:block" />
          오랜 협업을 통해 신뢰를 검증한 전문가 네트워크와 함께 움직입니다.
        </p>

        <GoldDivider className="mx-auto mb-12" />

        <div
          data-animate
          className="delay-4 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {networks.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className="card-dark p-8">
                <IconComponent
                  size={38}
                  className="text-[var(--color-au)] mb-5"
                />
                <h3 className="font-serif text-[17px] font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[14px] text-[var(--color-dm)] leading-[1.85]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
