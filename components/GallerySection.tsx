import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800">갤러리</h2>
      {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-4"> */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`갤러리 이미지 ${index + 1}`}
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
