import { Metadata } from "next";
import Link from "next/link";
import { BuildingIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 그로스리얼티(주)",
  description: "그로스리얼티(주) 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-ow)]">
      {/* Header */}
      <header className="bg-[var(--color-g)] py-6">
        <div className="container-custom">
          <Link href="/" className="flex items-center gap-3">
            <BuildingIcon size={28} className="text-[var(--color-au)]" />
            <div className="flex flex-col">
              <span className="font-serif text-[15px] font-semibold text-white leading-tight">
                그로스리얼티
              </span>
              <span className="font-display text-[9px] tracking-[0.15em] text-[var(--color-dm)] uppercase">
                Growth Realty
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="section-padding">
        <div className="container-custom max-w-[800px]">
          <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-[var(--color-g)] mb-8">
            개인정보처리방침
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-dk)] mb-8">
              그로스리얼티(주)(이하 &quot;회사&quot;)는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
              개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
            </p>

            <section className="mb-10">
              <h2 className="font-serif text-[20px] font-semibold text-[var(--color-g)] mb-4">
                1. 개인정보의 수집 및 이용 목적
              </h2>
              <p className="text-[var(--color-dk)] leading-[1.85]">
                회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[var(--color-dk)]">
                <li>상담 문의에 대한 회신 및 처리</li>
                <li>서비스 제공에 관한 계약 이행</li>
                <li>고객 요청에 따른 맞춤 컨설팅 제공</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-[20px] font-semibold text-[var(--color-g)] mb-4">
                2. 수집하는 개인정보 항목
              </h2>
              <p className="text-[var(--color-dk)] leading-[1.85]">
                회사는 상담 문의를 위해 아래와 같은 개인정보를 수집하고 있습니다.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[var(--color-dk)]">
                <li>필수항목: 이름, 연락처, 문의 내용</li>
                <li>선택항목: 이메일</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-[20px] font-semibold text-[var(--color-g)] mb-4">
                3. 개인정보의 보유 및 이용 기간
              </h2>
              <p className="text-[var(--color-dk)] leading-[1.85]">
                회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 기간 동안 보관합니다.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-[20px] font-semibold text-[var(--color-g)] mb-4">
                4. 개인정보의 제3자 제공
              </h2>
              <p className="text-[var(--color-dk)] leading-[1.85]">
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
                다만, 아래의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[var(--color-dk)]">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-[20px] font-semibold text-[var(--color-g)] mb-4">
                5. 개인정보 보호책임자
              </h2>
              <div className="text-[var(--color-dk)] leading-[1.85]">
                <p>성명: 안혜린</p>
                <p>직책: 대표</p>
                <p>이메일: contact@growthrealty.net</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-[20px] font-semibold text-[var(--color-g)] mb-4">
                6. 개인정보처리방침의 변경
              </h2>
              <p className="text-[var(--color-dk)] leading-[1.85]">
                이 개인정보처리방침은 2026년 4월 14일부터 적용됩니다.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-ad)]">
            <Link
              href="/"
              className="inline-flex items-center text-[var(--color-au)] hover:text-[var(--color-g)] transition-colors"
            >
              ← 메인으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
