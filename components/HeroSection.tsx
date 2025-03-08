"use client"; // ✅ 클라이언트 컴포넌트 설정 (useEffect 사용 위해 필요)

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  // 💡 연애 시작 날짜 설정 (예: 2022년 6월 10일)
  const startDate = new Date("2022-06-10T00:00:00");

  // 💡 상태 변수 (일, 시간, 분, 초)
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ 연애 시작일부터 현재까지의 시간 계산 함수
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime(); // 밀리초 단위 차이

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    // ⏳ 1초마다 업데이트
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center text-center">
      {/* 상단 배경 이미지 (80vh로 설정) */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/images/background.jpg" // 🔥 경로 확인
          alt="웨딩 배경 이미지"
          fill
          priority
          quality={100}
          className="object-contain"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Wedding Invitation
          </h1>
          <p className="mt-4 text-2xl text-white">송우진 ❤️ 최지인</p>
          <p className="text-white">2026년 4월 25일 (토) 14:00</p>
        </div>
      </div>

      {/* 💖 두 사람이 함께한 시간 표시 */}
      <div className="w-full bg-pink-100 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          두 사람이 함께한 시간
        </h2>
        <div className="mt-4 text-4xl font-bold text-rose-600">
          {time.days}일 {time.hours}시간 {time.minutes}분 {time.seconds}초
        </div>
      </div>

      {/* 신랑 신부 소개 */}
      <div className="w-full bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">신랑과 신부</h2>
        <p className="mt-4 text-gray-600">
          저희 두 사람이 새로운 시작을 함께합니다.
          <br />
          축복과 사랑으로 함께해 주세요.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <Image
              src="/images/groom.jpg"
              alt="신랑 우진"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              신랑 우진
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/bride.jpg"
              alt="신부 지인"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              신부 지인
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
