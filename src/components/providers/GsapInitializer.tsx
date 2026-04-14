"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapInitializerProps {
  children: React.ReactNode;
}

/**
 * TREF 스타일의 스크롤 애니메이션을 자동으로 적용하는 컴포넌트
 *
 * 사용법:
 * - data-animate="fade-up" : 아래에서 위로 페이드인
 * - data-animate="fade-in" : 페이드인만
 * - data-animate="slide-left" : 왼쪽에서 슬라이드
 * - data-animate="slide-right" : 오른쪽에서 슬라이드
 * - data-animate="parallax" : 패럴랙스 효과 (이미지용)
 * - data-animate="scale" : 스케일 애니메이션
 *
 * 추가 속성:
 * - data-delay="0.2" : 지연 시간 (초)
 * - data-duration="1" : 애니메이션 시간 (초)
 * - data-scrub="true" : 스크롤에 따라 애니메이션 (패럴랙스용)
 * - data-stagger="0.1" : 자식 요소들 순차 애니메이션
 */
export function GsapInitializer({ children }: GsapInitializerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. fade-up 애니메이션 (기본)
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.9");
        const scrub = el.dataset.scrub === "true";

        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "top 50%",
              toggleActions: scrub ? undefined : "play none none reverse",
              scrub: scrub ? 1 : false,
            },
          }
        );
      });

      // 2. fade-in 애니메이션
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.8");

        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3. slide-left 애니메이션
      gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.9");

        gsap.fromTo(
          el,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 4. slide-right 애니메이션
      gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.9");

        gsap.fromTo(
          el,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 5. 패럴랙스 효과 (TREF 핵심!)
      gsap.utils.toArray<HTMLElement>('[data-animate="parallax"]').forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.3");

        gsap.fromTo(
          el,
          { yPercent: 20 * speed },
          {
            yPercent: -20 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // 6. 이미지 reveal 패럴랙스 (TREF 스타일)
      gsap.utils.toArray<HTMLElement>('[data-animate="image-reveal"]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0, scale: 1.05 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });

      // 7. 스케일 애니메이션
      gsap.utils.toArray<HTMLElement>('[data-animate="scale"]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.8");

        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 8. 스태거 애니메이션 (자식 요소들 순차 적용)
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((container) => {
        const stagger = parseFloat(container.dataset.stagger || "0.1");
        const children = container.children;

        gsap.fromTo(
          children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger,
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 9. 텍스트 라인별 애니메이션 (TREF 스타일)
      gsap.utils.toArray<HTMLElement>('[data-animate="text-lines"]').forEach((el) => {
        const lines = el.querySelectorAll('.line, span, br');

        if (lines.length === 0) {
          // 줄바꿈으로 분리된 텍스트 처리
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else {
          gsap.fromTo(
            lines,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // 10. 카운터 애니메이션
      gsap.utils.toArray<HTMLElement>('[data-animate="counter"]').forEach((el) => {
        const target = parseInt(el.dataset.target || el.textContent || "0", 10);
        const suffix = el.dataset.suffix || "";

        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate: function() {
              el.textContent = Math.round(parseFloat(el.textContent || "0")) + suffix;
            },
          }
        );
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
