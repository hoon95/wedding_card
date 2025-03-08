"use client"; // ✅ 클라이언트 컴포넌트 설정

import { useState } from "react";
import Calendar from "react-calendar"; // 📅 React Calendar 라이브러리 추가
import "react-calendar/dist/Calendar.css"; // 기본 스타일 유지하면서 Tailwind로 오버라이드

export default function EventSection() {
  // ✅ 결혼식 날짜 설정 (2026년 4월 25일)
  const weddingDate = new Date(2026, 3, 25); // 월은 0부터 시작 (4월 = 3)

  return (
    <section id="event" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">웨딩 이벤트</h2>
      <div className="mt-8 space-y-4">
        <p className="text-lg text-gray-600">
          <span className="font-semibold">일시:</span> 2026년 4월 25일 (토)
          12:20
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">장소:</span> 서울특별시 강남구 언주로
          508 상록아트홀
        </p>
      </div>

      {/* 📅 달력 추가 */}
      <div className="mt-8 flex justify-center">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Calendar
            value={weddingDate} // 기본 선택된 날짜 = 결혼식 날짜
            className="w-full max-w-xs text-gray-800 pointer-events-none"
            tileClassName={({ date }) =>
              date.getTime() === weddingDate.getTime()
                ? "bg-rose-500 text-white font-bold rounded-lg"
                : "hover:bg-gray-100 rounded-lg"
            }
            showNavigation={false} // ✅ "2026년 4월" 제거
            locale="en-US" // ✅ 일요일부터 시작하도록 설정
            formatDay={(locale, date) => String(date.getDate())} // ✅ '일' 제거하여 숫자만 표시
          />
        </div>
      </div>
    </section>
  );
}
