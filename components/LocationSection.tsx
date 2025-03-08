export default function LocationSection() {
  return (
    <section
      id="location"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800">오시는 길</h2>
      <iframe
        className="mt-4 w-full max-w-md h-96 rounded-lg shadow-lg"
        src="https://map.naver.com"
        allowFullScreen
      ></iframe>
    </section>
  );
}
