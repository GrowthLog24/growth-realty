"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  /** 애니메이션 시작 위치 (기본: "top 90%") */
  start?: string;
  /** 애니메이션 종료 위치 (기본: "top 40%") */
  end?: string;
  /** 스크롤에 따라 부드럽게 애니메이션 (기본: false) */
  scrub?: boolean | number;
  /** 애니메이션 지속 시간 (기본: 0.8) */
  duration?: number;
  /** 시작 시 Y 이동 거리 (기본: 60) */
  yOffset?: number;
  /** 시작 시 투명도 (기본: 0) */
  fromOpacity?: number;
  /** 지연 시간 (기본: 0) */
  delay?: number;
  /** 이징 함수 */
  ease?: string;
}

/**
 * GSAP ScrollTrigger를 사용한 fade-up 애니메이션 훅
 */
export function useFadeUp<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  const {
    start = "top 90%",
    end = "top 40%",
    scrub = false,
    duration = 0.9,
    yOffset = 60,
    fromOpacity = 0,
    delay = 0,
    ease = "power3.out",
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        y: yOffset,
        opacity: fromOpacity,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [start, end, scrub, duration, yOffset, fromOpacity, delay, ease]);

  return ref as RefObject<T>;
}

/**
 * 패럴랙스 효과 훅
 */
export function useParallax<T extends HTMLElement>(
  speed: number = 0.5
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return ref as RefObject<T>;
}

/**
 * 텍스트 reveal 애니메이션 훅 (줄 단위)
 */
export function useTextReveal<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  const {
    start = "top 85%",
    duration = 0.8,
    yOffset = 40,
    delay = 0,
    ease = "power3.out",
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 텍스트 래핑
    const text = element.innerHTML;
    element.style.overflow = "hidden";

    gsap.fromTo(
      element,
      {
        y: yOffset,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [start, duration, yOffset, delay, ease]);

  return ref as RefObject<T>;
}

/**
 * 스태거 애니메이션 (여러 요소에 순차 적용)
 */
export function useStaggerAnimation(
  containerRef: RefObject<HTMLElement>,
  selector: string,
  options: ScrollAnimationOptions = {}
) {
  const {
    start = "top 85%",
    duration = 0.7,
    yOffset = 50,
    delay = 0,
    ease = "power3.out",
  } = options;

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
        delay,
        ease,
        stagger: 0.12,
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
  }, [containerRef, selector, start, duration, yOffset, delay, ease]);
}
