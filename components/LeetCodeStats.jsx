"use client";

import { useEffect, useState } from "react";
import { FaMedal, FaChartLine, FaTrophy } from "react-icons/fa";

const Counter = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="flex items-center bg-white/80 dark:bg-white/10 dark:text-white p-5 rounded-xl shadow-sm w-full">
      <Icon className="text-3xl text-blue-600 dark:text-blue-400 mr-4" />
      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {count}
        </div>
        <div className="text-gray-700 dark:text-gray-300 text-sm">{label}</div>
      </div>
    </div>
  );
};

export default function LeetCodeStats({ data }) {
  const stats = data?.submitStats?.acSubmissionNum || [];

  const easy = stats.find((s) => s.difficulty === "Easy")?.count || 0;
  const medium = stats.find((s) => s.difficulty === "Medium")?.count || 0;
  const hard = stats.find((s) => s.difficulty === "Hard")?.count || 0;
  const rank = data?.profile?.ranking || 0;

  return (
    <section className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        🚀 My LeetCode Journey
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Counter end={easy} label="Easy Problems Solved" icon={FaMedal} />
        <Counter end={medium} label="Medium Problems Solved" icon={FaTrophy} />
        <Counter end={hard} label="Hard Problems Solved" icon={FaTrophy} />
        <Counter end={rank} label="Global Ranking" icon={FaChartLine} />
      </div>
    </section>
  );
}
