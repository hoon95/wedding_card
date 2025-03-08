"use client"; // ✅ 클라이언트 컴포넌트 설정

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const startDate = useRef(new Date("2026-04-25T12:20:00"));

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = startDate.current.getTime() - now.getTime();

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTime(); // ✅ 최초 실행
    const interval = setInterval(updateTime, 1000); // ✅ 1초마다 실행

    return () => clearInterval(interval); // ✅ 컴포넌트가 언마운트되면 정리
  }, []); // ✅ 의존성 배열을 빈 배열로 설정하여 한 번만 실행

  return (
    <section id="home" className="flex flex-col items-center text-center">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/images/background.png"
          alt="웨딩 배경 이미지"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Wedding Invitation
          </h1>
          <p className="mt-4 text-2xl text-white">송우진 ❤️ 최지인</p>
          <p className="text-white">2026년 4월 25일 (토) 14:00</p>
        </div>
      </div>

      <div className="w-full bg-pink-100 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          두 사람이 함께할 시간
        </h2>
        <div className="mt-4 text-4xl font-bold text-rose-600">
          {time.days}일 {time.hours}시간 {time.minutes}분 {time.seconds}초 전
        </div>
      </div>
    </section>
  );
}
