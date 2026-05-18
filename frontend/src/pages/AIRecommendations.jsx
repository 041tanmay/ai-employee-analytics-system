import { useState } from "react";

import Navbar from "../components/Navbar";
import API from "../api/axios";

function AIRecommendations() {
  const [result, setResult] = useState("");

  const getRecommendations = async () => {
    try {
      const { data } = await API.post("/ai/recommend");

      setResult(data.recommendations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-10">
        <button
          onClick={getRecommendations}
          className="bg-cyan-500 px-6 py-3 rounded text-xl"
        >
          Generate AI Recommendations
        </button>

        <div className="bg-slate-800 p-6 rounded-2xl mt-8 whitespace-pre-wrap">
          {result}
        </div>
      </div>
    </div>
  );
}

export default AIRecommendations;