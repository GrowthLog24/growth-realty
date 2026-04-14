"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Button } from "@/components/ui/Button";
import { EmailIcon } from "@/components/ui/Icons";

const inquiryTypes = [
  "신축 개발 컨설팅 & PM",
  "리모델링 컨설팅 & PM",
  "자산이동 (매매) 컨설팅",
  "임대차 컨설팅 & 운영",
  "특수물건 · 법률 협력",
  "THE12 커뮤니티",
  "기타",
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
    privacy: false,
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          inquiryType: "",
          message: "",
          privacy: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <div data-animate className="delay-1">
            <SectionLabel className="justify-center">Contact Us</SectionLabel>
          </div>
          <h2
            data-animate
            className="delay-2 font-serif text-[24px] md:text-[32px] font-bold text-[var(--color-g)] mb-2 leading-[1.4]"
          >
            지금 상황을 차분히 설명해 주세요.
            <br />
            다음 액션을 함께 정리해 드리겠습니다.
          </h2>
          <GoldDivider className="mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div data-animate className="delay-3">
            <blockquote className="font-serif font-light italic text-[18px] md:text-[20px] text-[var(--color-g)] mb-10 leading-[1.7]">
              &ldquo;복잡한 부동산 문제일수록
              <br />
              전략적 파트너가 필요합니다.&rdquo;
            </blockquote>

            <div className="space-y-6">
              <div>
                <span className="font-display text-[11px] tracking-[0.2em] text-[var(--color-au)] uppercase block mb-2">
                  Email
                </span>
                <a
                  href="mailto:contact@growthrealty.net"
                  className="font-sans text-[15px] text-[var(--color-g)] hover:text-[var(--color-au)] transition-colors"
                >
                  contact@growthrealty.net
                </a>
              </div>

              <a href="mailto:contact@growthrealty.net">
                <Button variant="outline" className="mt-4">
                  <EmailIcon size={18} className="mr-2" />
                  이메일 보내기
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div data-animate className="delay-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-[13px] text-[var(--color-sb)] mb-2 block">
                    이름 <span className="text-[var(--color-au)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="font-sans text-[13px] text-[var(--color-sb)] mb-2 block">
                    연락처 <span className="text-[var(--color-au)]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="font-sans text-[13px] text-[var(--color-sb)] mb-2 block">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="font-sans text-[13px] text-[var(--color-sb)] mb-2 block">
                  문의 유형
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="form-input cursor-pointer"
                >
                  <option value="">선택해 주세요</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-sans text-[13px] text-[var(--color-sb)] mb-2 block">
                  문의 내용 <span className="text-[var(--color-au)]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="현재 상황과 필요한 것을 자유롭게 적어 주세요. 자산 규모, 위치, 일정을 간략히 포함해 주시면 더 빠르게 안내드릴 수 있습니다."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 accent-[var(--color-au)]"
                />
                <label className="font-sans text-[13px] text-[var(--color-dk)] leading-[1.6]">
                  <a href="/privacy" className="text-[var(--color-au)] hover:underline">
                    개인정보처리방침
                  </a>
                  에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며 제3자에게 제공하지 않습니다.
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-[rgba(10,61,47,0.08)] border border-[var(--color-g)] rounded-[2px]">
                  <p className="font-sans text-[14px] text-[var(--color-g)]">
                    문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-[rgba(200,50,50,0.08)] border border-red-500 rounded-[2px]">
                  <p className="font-sans text-[14px] text-red-600">
                    문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "전송 중..." : "문의 보내기"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
