import Image from "next/image";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800">신랑과 신부</h2>
      <div className="mt-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        {[
          { name: "신랑 우진", image: "/images/groom.jpg" },
          { name: "신부 지인", image: "/images/bride.jpg" },
        ].map(({ name, image }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
