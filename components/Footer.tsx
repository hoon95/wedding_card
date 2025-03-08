export default function Footer() {
  return (
    <footer className="py-12 bg-gray-800 text-center text-white">
      <h2 className="text-2xl font-bold">💌 마음 전하실 곳</h2>

      {/* 신랑 & 신부 계좌 정보 구분 */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* 신랑 측 계좌 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-semibold text-blue-400">신랑 측</h3>
          <p className="mt-2 text-sm text-gray-300">신한은행 000-000-000000</p>
          <p className="text-sm text-gray-300">예금주: 송우진</p>
        </div>

        {/* 신부 측 계좌 */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-semibold text-pink-400">신부 측</h3>
          <p className="mt-2 text-sm text-gray-300">국민은행 031-1234-5678</p>
          <p className="text-sm text-gray-300">예금주: 최지인</p>
        </div>
      </div>

      {/* 안내사항 */}
      <div className="mt-12 max-w-2xl mx-auto text-gray-300 text-sm text-left">
        <h3 className="text-lg font-semibold text-white text-center">
          📢 안내사항
        </h3>
        <ul className="mt-4 space-y-2">
          <li>✔️ 예식은 정시에 시작되오니 여유 있게 도착해 주세요.</li>
          <li>
            ✔️ 건물 내 주차 공간이 혼잡할 수 있으니 대중교통 이용을
            권장드립니다.
          </li>
          <li>
            ✔️ 축하 화환은 정중히 사양하오니, 따뜻한 마음만 전해 주시면
            감사하겠습니다.
          </li>
        </ul>
      </div>

      {/* 연락처 */}
      <div className="mt-8 text-xs opacity-70">
        <p>문의: 신랑 010-1234-5678 | 신부 010-8765-4321</p>
      </div>
    </footer>
  );
}
