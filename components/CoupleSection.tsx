import Image from "next/image";

export default function CoupleSection() {
  return (
    <section id="couple" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800">신랑과 신부</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
        <div>
          <Image
            src="/images/groom.jpg"
            alt="신랑 우진"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            신랑 우진
          </h3>
        </div>
        <div>
          <Image
            src="/images/bride.jpg"
            alt="신부 지인"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            신부 지인
          </h3>
        </div>
      </div>
    </section>
  );
}
