"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";

const trackRecords = [
  {
    year: "2023",
    location: "강남구",
    title: "상업용 빌딩 신축 PM",
    description:
      "100억 원대 규모. 금융 단계 이후 철거·설계·시공 전 단계 컨설팅. 인허가·공사비 조율·일정 관리 수행.",
    tags: ["지하2·지상8층", "250억+", "신축PM"],
    isOngoing: false,
  },
  {
    year: "2024",
    location: "서초구",
    title: "상업용 빌딩 리모델링 PM",
    description:
      "60억 원대 규모. 그린리모델링 정부지원 연계, 설계·시공·인테리어·임대차·임대관리 일괄 컨설팅.",
    tags: ["지하1·지상6층", "150억+", "그린리모델링", "임대관리"],
    isOngoing: false,
  },
  {
    year: "2025",
    location: "강남구 · 서초구 · 성동구 · 용산구",
    title: "중소형 수익빌딩, 단독빌딩 자산 이동",
    description:
      "업무지구 임대차 조건 협상 및 계약 관리. 중대형 아파트 매매 의사결정 지원 및 거래 실행. 수익형 빌딩 및 단독빌딩 매매 실행 지원. 거래 구조 설계 및 이해관계자 협의 진행",
    tags: ["임대차", "아파트 매매", "빌딩 매매", "자산관리 컨설팅"],
    isOngoing: false,
  },
  {
    year: "2026",
    location: "강남구 · 성동구 · 동대문구",
    title: "사옥 매입매각 / 집합건물 소유권 등기 소송 연계",
    description:
      "기업 법인의 사옥 매입 전략 수립 및 딜 실행 지원. 입지 분석, 가격 협상, 법적 검토 병행 중. 부동산 전문 변호사 팀과 협력하여 컨설팅과 법무 동시 진행.",
    tags: ["사옥 매입매각", "법인 거래", "소유권 소송", "변호사 협업"],
    isOngoing: true,
  },
];

export function TrackRecord() {
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
      id="track"
      className="section-padding bg-[var(--color-g)]"
    >
      <div className="container-custom">
        <div className="text-center mb-8">
          <div data-animate className="delay-1">
            <SectionLabel className="justify-center">Track Record</SectionLabel>
          </div>
          <h2
            data-animate
            className="delay-2 font-serif text-[26px] md:text-[36px] font-bold text-white mb-4"
          >
            수행 실적
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        {/* Security Note */}
        <p
          data-animate
          className="delay-3 text-center font-display italic text-[13px] text-[rgba(191,164,111,0.6)] mb-12 max-w-2xl mx-auto"
        >
          VIP 자산 보호를 위해 행정구역·유형·규모 수준으로만 공개합니다. 세부 내용은 상담 시 공유드립니다.
        </p>

        <div
          data-animate
          className="delay-4 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {trackRecords.map((record) => (
            <div key={record.title} className="card-dark p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[13px] tracking-[0.1em] text-[var(--color-au)]">
                  [{record.year}]
                </span>
                <span className="font-sans text-[13px] text-[var(--color-dm)]">
                  {record.location}
                </span>
                {record.isOngoing && <Badge>진행 중</Badge>}
              </div>
              <h3 className="font-serif text-[17px] font-semibold text-white mb-3">
                {record.title}
              </h3>
              <p className="font-sans text-[14px] text-[var(--color-dm)] leading-[1.85] mb-5">
                {record.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {record.tags.map((tag) => (
                  <Tag key={tag} variant="dark">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
