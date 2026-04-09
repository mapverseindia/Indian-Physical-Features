import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

/* =====================================================
   LIVE INDIA POPULATION COUNTER
===================================================== */
const useLivePopulation = () => {
  const [population, setPopulation] = useState(1420000000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPopulation((prev) => prev + Math.floor(Math.random() * 5));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return population;
};

/* =====================================================
   STAT COMPONENT (EXPANDED)
===================================================== */
const StatCard = ({ title, value, extra }) => {
  return (
    <div className="glass p-6 rounded-xl card-lift">
      <h3 className="text-sm opacity-60">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-xs opacity-60 mt-2">{extra}</p>
    </div>
  );
};

/* =====================================================
   MAP CARD COMPONENT (VERY DETAILED)
===================================================== */
const MapCard = ({ title, points, fact, secret }) => {
  return (
    <div className="glass p-6 rounded-xl space-y-4 card-lift">
      <h2 className="text-xl font-bold gradient-text">{title}</h2>

      {/* POINTS */}
      <div className="grid gap-2">
        {points.map((p, i) => (
          <div key={i} className="bg-white/5 p-2 rounded text-sm">
            {p}
          </div>
        ))}
      </div>

      {/* DID YOU KNOW */}
      <div className="bg-cyan-500/10 p-3 rounded">
        <p className="text-cyan-300 text-xs">Did You Know?</p>
        <p className="text-xs">{fact}</p>
      </div>

      {/* TOP SECRET */}
      <div className="bg-purple-500/10 p-3 rounded">
        <p className="text-purple-300 text-xs">Top Secret</p>
        <p className="text-xs">{secret}</p>
      </div>
    </div>
  );
};

/* =====================================================
   HOME PAGE (FULLY EXPANDED)
===================================================== */
const Home = () => {
  const population = useLivePopulation();

  return (
    <div className="pt-24 px-6 text-white bg-hero">

      {/* HERO */}
      <section className="text-center max-w-5xl mx-auto mb-16">
        <h1 className="text-5xl font-bold gradient-text mb-4">
          MapVerse India
        </h1>

        <p className="text-lg opacity-80">
          Geography is not just a subject — it's the story of our Earth,
          written in mountains, rivers, and deserts.
        </p>

        <p className="mt-4 text-cyan-400">— Map Verse India</p>
      </section>

      {/* VIDEO */}
      <section className="max-w-5xl mx-auto mb-20">
        <iframe
          className="w-full h-[400px] rounded-xl video-wrapper"
          src="https://www.youtube.com/embed/TPfG8TmlkWw"
          allowFullScreen
        ></iframe>
      </section>

      {/* INDIA BY NUMBERS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-24">

        <StatCard title="Population (Live)" value={population.toLocaleString()} extra="Increasing every second" />
        <StatCard title="Total States" value="28" extra="Administrative divisions" />
        <StatCard title="Union Territories" value="8" extra="Direct central control" />
        <StatCard title="Total Lakes" value="2000+" extra="Natural + artificial" />
        <StatCard title="Total Glaciers" value="9575+" extra="Himalayan region" />
        <StatCard title="Forest Cover" value="24.62%" extra="ISFR Report" />
        <StatCard title="Total Rivers" value="20+" extra="Major river systems" />
        <StatCard title="Longest River" value="Ganga" extra="2525 km" />
        <StatCard title="Highest Peak" value="Kangchenjunga" extra="8586 m" />
        <StatCard title="Coastline" value="7516 km" extra="Including islands" />
        <StatCard title="Total Islands" value="1200+" extra="Andaman + Lakshadweep" />
        <StatCard title="Desert Region" value="Thar Desert" extra="NW India" />
        <StatCard title="Plateau Area" value="Deccan Plateau" extra="Largest plateau" />
        <StatCard title="Major Deltas" value="Ganga-Brahmaputra" extra="Largest delta" />
        <StatCard title="Wetlands" value="75+" extra="Ramsar Sites" />

      </section>
    </div>
  );
};

/* =====================================================
   MAPS PAGE (ALL 6 MAPS DETAILED)
===================================================== */
const Maps = () => {
  return (
    <div className="pt-24 px-6 text-white space-y-10">

      <h1 className="text-4xl gradient-text">Maps of India</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <MapCard
          title="Physical Map"
          points={[
            "Shows elevation and terrain",
            "Himalayas, plains, plateaus",
            "Color gradient indicates height"
          ]}
          fact="India has one of the most diverse terrains."
          secret="The Himalayas are still rising every year."
        />

        <MapCard
          title="River Map"
          points={[
            "Ganga, Brahmaputra systems",
            "Peninsular rivers",
            "Drainage patterns"
          ]}
          fact="India depends heavily on river systems."
          secret="Many rivers are glacier-fed."
        />

        <MapCard
          title="Forest Map"
          points={[
            "Evergreen forests",
            "Deciduous forests",
            "Mangroves"
          ]}
          fact="India has tropical biodiversity."
          secret="Western Ghats is a biodiversity hotspot."
        />

        <MapCard
          title="Drainage Map"
          points={[
            "River basins",
            "Water flow systems",
            "Watersheds"
          ]}
          fact="Drainage defines agriculture."
          secret="Some rivers change course over time."
        />

        <MapCard
          title="Soil Map"
          points={[
            "Alluvial soil",
            "Black soil",
            "Red soil"
          ]}
          fact="Soil determines crops."
          secret="Black soil is ideal for cotton."
        />

        <MapCard
          title="Bathymetric Map"
          points={[
            "Ocean depth",
            "Sea floor structure",
            "Continental shelf"
          ]}
          fact="India is surrounded by deep seas."
          secret="Indian Ocean has underwater mountains."
        />

      </div>
    </div>
  );
};

/* =====================================================
   FEATURES PAGE (FULL)
===================================================== */
const Features = () => {
  return (
    <div className="pt-24 px-6 text-white space-y-10">

      <h1 className="text-4xl gradient-text">Physical Features</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <MapCard
          title="Himalayas"
          points={[
            "Young fold mountains",
            "World's highest peaks",
            "Glacier source"
          ]}
          fact="Contains Mount Everest region."
          secret="Still rising due to tectonic plates."
        />

        <MapCard
          title="Western Ghats"
          points={[
            "Runs parallel to west coast",
            "High rainfall region",
            "Biodiversity hotspot"
          ]}
          fact="UNESCO World Heritage site."
          secret="Older than Himalayas."
        />

        <MapCard
          title="Eastern Ghats"
          points={[
            "Discontinuous range",
            "Lower than Western Ghats",
            "Rich minerals"
          ]}
          fact="Crossed by many rivers."
          secret="Heavily eroded mountains."
        />

        <MapCard
          title="Sundarbans"
          points={[
            "Mangrove forests",
            "Delta region",
            "Royal Bengal tiger habitat"
          ]}
          fact="Largest mangrove forest."
          secret="Land changes due to tides."
        />

      </div>
    </div>
  );
};

/* =====================================================
   MODEL PAGE
===================================================== */
const Model = () => {
  return (
    <div className="pt-24 px-6 text-white text-center">

      <h1 className="text-4xl gradient-text mb-10">3D Model</h1>

      <iframe
        className="w-full h-[500px] rounded-xl"
        src="https://sketchfab.com/models/03362640702b49a7bdfc93fc249b2f44/embed?autostart=1"
        allowFullScreen
      ></iframe>
    </div>
  );
};

/* =====================================================
   TEAM PAGE (YOU)
===================================================== */
const Team = () => {
  return (
    <div className="pt-24 px-6 text-white text-center">

      <h1 className="text-4xl gradient-text mb-10">Team</h1>

      <div className="glass p-10 max-w-xl mx-auto rounded-xl">

        <h2 className="text-2xl font-bold">Zaeem Bhat</h2>

        <p className="opacity-70 mt-2">
          Class 9-D • Aakash Institute Rajbagh
        </p>

        <div className="mt-4 text-sm space-y-1">
          <p>• Developer</p>
          <p>• Designer</p>
          <p>• Researcher</p>
          <p>• UI/UX Creator</p>
          <p>• Visionary</p>
        </div>

        <p className="mt-6 italic text-cyan-400">
          "Geography is not just a subject — it's the story of our Earth,
          written in mountains, rivers, and deserts."
        </p>

      </div>
    </div>
  );
};

/* =====================================================
   MAIN APP
===================================================== */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/features" element={<Features />} />
        <Route path="/model" element={<Model />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}
