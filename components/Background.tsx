import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/images/background.jpg"
        alt="배경 이미지"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
