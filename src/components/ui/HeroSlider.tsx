"use client";

import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper 스타일 - 정적 임포트
import "swiper/css";
import "swiper/css/effect-fade";

interface SlideImage {
  src: string;
  alt: string;
}

interface HeroSliderProps {
  images?: SlideImage[];
  className?: string;
}

/**
 * 히어로 섹션용 자동 재생 이미지 슬라이더
 * TREF 스타일의 페이드 트랜지션 적용
 *
 * 이미지가 없으면 딥그린 그라데이션 배경만 표시
 */
export function HeroSlider({ images = [], className = "" }: HeroSliderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 이미지가 없거나 마운트 전: 단색 그라데이션 배경
  if (!mounted || images.length === 0) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="relative w-full h-full bg-[var(--color-g)]">
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-g)] via-[var(--color-g2)] to-[var(--color-g3)]" />
          {/* 미묘한 패턴 오버레이 */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,var(--color-au)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_20%,var(--color-au)_0%,transparent_50%)]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* 이미지 배경 */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-g)]/90 via-[var(--color-g)]/70 to-[var(--color-g)]/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 슬라이더 네비게이션 (하단 중앙) */}
      {images.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
