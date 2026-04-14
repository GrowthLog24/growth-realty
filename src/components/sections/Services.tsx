import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import {
  DevelopmentIcon,
  RenovationIcon,
  TransactionIcon,
  LeasingIcon,
  LegalIcon,
  CommunityIcon,
} from "@/components/ui/Icons";

const services = [
  {
    icon: DevelopmentIcon,
    titleKo: "신축 개발 컨설팅",
    titleEn: "New Development",
    description:
      "철거부터 금융 구조 설계, 인허가, 설계·시공 단계까지 프로젝트 전 과정을 연결합니다.",
  },
  {
    icon: RenovationIcon,
    titleKo: "리모델링 컨설팅 & PM",
    titleEn: "Renovation & PM",
    description:
      "그린리모델링 지원사업 연계, 공사·인테리어, 임대차 셋업까지 이어갑니다.",
  },
  {
    icon: TransactionIcon,
    titleKo: "자산이동 컨설팅",
    titleEn: "Asset Transaction Advisory",
    description:
      "서울 주요 권역의 상업용 빌딩, 대형 아파트, 사옥 매입·매각을 지원합니다.",
  },
  {
    icon: LeasingIcon,
    titleKo: "임대차 컨설팅 & 운영",
    titleEn: "Leasing & Operations",
    description:
      "공실 리스크를 줄이고, 임차인 유치·계약·운영 흐름을 설계합니다.",
  },
  {
    icon: LegalIcon,
    titleKo: "특수물건 · 법률 협력",
    titleEn: "Special Asset & Legal",
    description:
      "소유권 소송, 명도, 경매, 투자 구조화 등 법률전문가 네트워크와 함께 대응합니다.",
  },
  {
    icon: CommunityIcon,
    titleKo: "전문가 커뮤니티 연계",
    titleEn: "THE12 Community",
    description:
      "실행력 있는 투자자·전문 중개사를 연결하는 THE12 커뮤니티를 운영합니다.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-[var(--color-ow)]"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <div data-animate="fade-up" data-delay="0">
            <SectionLabel className="justify-center">Our Services</SectionLabel>
          </div>
          <h2
            data-animate="fade-up"
            data-delay="0.1"
            className="font-serif text-[26px] md:text-[36px] font-bold text-[var(--color-g)] mb-4"
          >
            서비스
          </h2>
          <div data-animate="fade-up" data-delay="0.15">
            <GoldDivider className="mx-auto" />
          </div>
        </div>

        {/* 카드 그리드 - 스태거 애니메이션 */}
        <div
          data-stagger="0.1"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[rgba(10,61,47,0.08)]"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.titleEn}
                className="card-light p-9 md:p-10 bg-white"
              >
                <IconComponent
                  size={38}
                  className="text-[var(--color-au)] mb-5"
                />
                <h3 className="font-serif text-[17px] font-bold text-[var(--color-g)] mb-1">
                  {service.titleKo}
                </h3>
                <span className="font-display text-[11px] tracking-[0.16em] text-[var(--color-au)] uppercase block mb-4">
                  {service.titleEn}
                </span>
                <p className="font-sans text-[14px] text-[var(--color-dk)] leading-[1.85]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
