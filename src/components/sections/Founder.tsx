"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function Founder() {
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
      id="founder"
      className="section-padding bg-[var(--color-ow)]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image Placeholder */}
          <div
            data-animate
            className="delay-1 relative aspect-[3/4] max-w-[400px] mx-auto lg:mx-0"
          >
            {/* Profile Image Placeholder */}
            <div className="w-full h-full bg-[var(--color-g)] rounded-[2px] overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-[var(--color-au)] flex items-center justify-center">
                  <span className="font-serif text-[32px] font-bold text-[var(--color-au)]">
                    안
                  </span>
                </div>
                <p className="font-display text-[12px] tracking-[0.2em] text-[var(--color-au)] uppercase">
                  Profile Photo
                </p>
                <p className="font-sans text-[11px] text-[var(--color-dm)] mt-2">
                  프로필 사진 영역
                </p>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--color-au)] rounded-[2px] -z-10 opacity-30" />
          </div>

          {/* Right: Text Content */}
          <div>
            <div data-animate className="delay-2">
              <SectionLabel>About the Founder</SectionLabel>
            </div>
            <h2
              data-animate
              className="delay-3 font-serif text-[26px] md:text-[36px] font-bold text-[var(--color-g)] mb-4"
            >
              대표 안혜린
            </h2>
            <GoldDivider className="mb-8" />

            <div data-animate className="delay-4 space-y-5">
              <p className="font-sans text-[15px] text-[var(--color-dk)] leading-[1.85]">
                한양대 법학과에서 부동산 관련 제도와 법적 구조를, 서울대 환경대학원에서
                도시계획과 공간 논리를 익혔습니다. 이론적으로 단단한 기반은 모든 컨설팅의
                토대가 됩니다.
              </p>
              <p className="font-sans text-[15px] text-[var(--color-dk)] leading-[1.85]">
                2015년 코티에이블을 창업하여 서울 10개 주요 대학가에서 50채 이상의
                셰어하우스를 직접 운영하며 임대 수익화의 현장 감각을 체득했습니다.
                2021년 직방 엑싯 이후, 서울 주요 도심의 상업용 빌딩, 신축 개발,
                리모델링 PM까지 활동 영역을 확장했습니다.
              </p>
              <p className="font-sans text-[15px] text-[var(--color-dk)] leading-[1.85]">
                부동산과 기술의 접목을 가장 이른 시기부터 실험해 온 프롭테크 1세대로서,
                IT 개발자 커뮤니티(그로스로그) 운영을 통해 AI 자동화·데이터 기반
                자산 분석을 실무에 적용하고 있습니다.
              </p>
            </div>

            {/* Career Highlights */}
            <div
              data-animate
              className="delay-5 mt-10 pt-8 border-t border-[var(--color-ad)]"
            >
              <h3 className="font-display text-[11px] tracking-[0.2em] text-[var(--color-au)] uppercase mb-6">
                Career Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-display text-[24px] font-bold text-[var(--color-g)]">
                    17
                  </span>
                  <span className="font-display text-[14px] text-[var(--color-g)]">년</span>
                  <p className="font-sans text-[12px] text-[var(--color-dk)] mt-1">
                    부동산 실전 경력
                  </p>
                </div>
                <div>
                  <span className="font-display text-[24px] font-bold text-[var(--color-g)]">
                    50
                  </span>
                  <span className="font-display text-[14px] text-[var(--color-g)]">채+</span>
                  <p className="font-sans text-[12px] text-[var(--color-dk)] mt-1">
                    직접 운영한 자산
                  </p>
                </div>
                <div>
                  <span className="font-display text-[24px] font-bold text-[var(--color-g)]">
                    2021
                  </span>
                  <p className="font-sans text-[12px] text-[var(--color-dk)] mt-1">
                    직방 엑싯
                  </p>
                </div>
                <div>
                  <span className="font-display text-[24px] font-bold text-[var(--color-g)]">
                    1000
                  </span>
                  <span className="font-display text-[14px] text-[var(--color-g)]">억+</span>
                  <p className="font-sans text-[12px] text-[var(--color-dk)] mt-1">
                    컨설팅 자산 규모
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
