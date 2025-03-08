import {
  MapPin,
  TrainFront,
  BusFront,
  Phone,
  ParkingCircle,
} from "lucide-react"; // 🚇 `Subway` 대신 `TrainFront` 사용
import Image from "next/image";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">오시는 길</h2>

      {/* 🏢 장소 정보 */}
      <div className="mt-10 max-w-2xl mx-auto text-left text-gray-700">
        <div className="flex items-center space-x-2">
          <MapPin size={24} className="text-red-500" />
          <h3 className="text-xl font-semibold text-gray-800">상록아트홀</h3>
        </div>

        {/* 🗺 지도 바로가기 (네이버, 카카오, TMAP) */}
        <div className="mt-6 flex justify-center space-x-10">
          <a
            href="https://naver.me/F7b9j2sT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <Image
              src="/images/naver-map.png"
              alt="네이버 지도"
              width={50}
              height={50}
            />
            <p>네이버 지도</p>
          </a>
          <a
            href="https://map.kakao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <Image
              src="/images/kakao-map.png"
              alt="카카오 지도"
              width={50}
              height={50}
            />
            <p>카카오 맵</p>
          </a>
          <a
            href="https://www.tmap.co.kr/tmap2/mobile/main.do"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <Image src="/images/tmap.png" alt="T맵" width={50} height={50} />
            <p>TMAP</p>
          </a>
        </div>

        {/* 🚇 지하철 안내 */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <TrainFront size={20} className="text-blue-500" />
            <h4 className="font-semibold">지하철</h4>
          </div>
          <p className="ml-6 text-gray-600">
            <span className="font-semibold">2호선 역삼역</span> 8번 출구 도보
            5분
          </p>
          <p className="ml-6 text-gray-600">
            <span className="font-semibold">2호선 강남역</span> 2번 출구 도보
            10분
          </p>
        </div>

        {/* 🚌 버스 안내 */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <BusFront size={20} className="text-green-500" />
            <h4 className="font-semibold">버스</h4>
          </div>
          <p className="ml-6 text-gray-600">
            <span className="font-semibold">지선</span> 3412, 3422
          </p>
          <p className="ml-6 text-gray-600">
            <span className="font-semibold">간선</span> 140, 144, 145, 146, 341,
            360
          </p>
        </div>

        {/* 📍 주소 */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-orange-500" />
            <h4 className="font-semibold">주소</h4>
          </div>
          <p className="ml-6 text-gray-600">
            서울특별시 강남구 언주로 508 상록아트홀
          </p>
        </div>

        {/* 🅿️ 주차 안내 */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <ParkingCircle size={20} className="text-gray-500" />
            <h4 className="font-semibold">주차</h4>
          </div>
          <p className="ml-6 text-gray-600">
            건물 주차장 또는 병원 주차장 이용 시{" "}
            <span className="font-semibold">90분 무료</span>
          </p>
          <p className="ml-6 text-gray-600 text-sm">* 이후 추가요금 발생</p>
        </div>
      </div>
    </section>
  );
}
