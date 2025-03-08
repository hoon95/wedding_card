"use client";

import { useState } from "react";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `감사합니다! ${name} 님, 참석 여부: ${
        attendance === "yes" ? "참석" : "불참"
      }`
    );
    setName("");
    setMessage("");
  };

  return (
    <section
      id="rsvp"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center py-20"
    >
      <h2 className="text-3xl font-bold text-gray-800">참석 여부 확인</h2>
      <p className="mt-2 text-gray-600">참석 여부를 알려주세요!</p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto w-full">
        <input
          type="text"
          placeholder="성함"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 mb-4 border rounded-lg shadow-sm"
        />
        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg shadow-sm"
        >
          <option value="yes">참석합니다</option>
          <option value="no">참석하지 못합니다</option>
        </select>
        <textarea
          placeholder="축하 메시지를 남겨주세요!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg shadow-sm"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-3 rounded-lg shadow-md hover:bg-rose-600"
        >
          제출하기
        </button>
      </form>
    </section>
  );
}
