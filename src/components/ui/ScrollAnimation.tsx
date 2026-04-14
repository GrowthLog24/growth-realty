"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: ReactNode;
  /** 애니메이션 종류 */
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  /** 애니메이션 지속 시간 (초) */
  duration?: number;
  /** 애니메이션 지연 시간 (초) */
  delay?: number;
  /** Y축 이동 거리 (px) */
  yOffset?: number;
  /** X축 이동 거리 (px) */
  xOffset?: number;
  /** 스크롤 시작 위치 */
  start?: string;
  /** 스크롤에 따라 애니메이션 (scrub) */
  scrub?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** HTML 태그 */
  as?: ElementType;
}

/**
 * GSAP ScrollTrigger 기반 스크롤 애니메이션 래퍼
 * TREF 스타일의 부드러운 애니메이션 적용
 */
export function ScrollAnimation({
  children,
  animation = "fade-up",
  duration = 0.9,
  delay = 0,
  yOffset = 60,
  xOffset = 60,
  start = "top 85%",
  scrub = false,
  className = "",
  as: Component = "div",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 애니메이션 초기 상태 설정
    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: scrub ? undefined : "play none none reverse",
        scrub: scrub ? 1 : false,
      },
    };

    // 애니메이션 종류별 설정
    switch (animation) {
      case "fade-up":
        fromVars.y = yOffset;
        toVars.y = 0;
        break;
      case "fade-in":
        // opacity만 변경
        break;
      case "slide-left":
        fromVars.x = xOffset;
        toVars.x = 0;
        break;
      case "slide-right":
        fromVars.x = -xOffset;
        toVars.x = 0;
        break;
      case "scale":
        fromVars.scale = 0.9;
        toVars.scale = 1;
        break;
    }

    gsap.fromTo(element, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, duration, delay, yOffset, xOffset, start, scrub]);

  // @ts-ignore - 동적 컴포넌트 타입
  return (
    <Component ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </Component>
  );
}

interface StaggerAnimationProps {
  children: ReactNode;
  /** 자식 요소 선택자 */
  selector?: string;
  /** 스태거 간격 (초) */
  stagger?: number;
  /** 애니메이션 지속 시간 (초) */
  duration?: number;
  /** Y축 이동 거리 (px) */
  yOffset?: number;
  /** 스크롤 시작 위치 */
  start?: string;
  /** 추가 클래스명 */
  className?: string;
}

/**
 * 여러 요소에 순차적으로 애니메이션 적용
 */
export function StaggerAnimation({
  children,
  selector = "> *",
  stagger = 0.1,
  duration = 0.8,
  yOffset = 50,
  start = "top 85%",
  className = "",
}: StaggerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      {
        y: yOffset,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [selector, stagger, duration, yOffset, start]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
