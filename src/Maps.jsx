import { useState } from "react";

/* ================= IMPORT IMAGES ================= */
import physical from "../assets/physical-map.jpg";
import river from "../assets/river-map.jpg";
import lake from "../assets/lake-map.jpg";
import forest from "../assets/forest-map.jpg";
import soil from "../assets/soil-map.jpg";
import bathymetric from "../assets/bathymetric-map.jpg";
import climate from "../assets/climate-map.jpg";
import vegetation from "../assets/vegetation-map.jpg";

/* ================= DATA ================= */
const mapsData = [
  {
    title: "Physical Map",
    image: physical,
    points: [
      "Shows mountains, plains, plateau",
      "Himalayas are clearly visible",
      "Western & Eastern Ghats marked",
      "Important relief divisions shown"
    ],
    fact: "India has 6 major physical divisions.",
    secret: "Himalayas are still rising every year!"
  },
  {
    title: "River Map",
    image: river,
    points: [
      "Ganga river system",
      "Brahmaputra river",
      "Peninsular rivers",
      "Drainage patterns"
    ],
    fact: "India has over 14 major river systems.",
    secret: "Ganga basin supports 40% population!"
  },
  {
    title: "Lake Map",
    image: lake,
    points: [
      "Freshwater lakes",
      "Saltwater lakes",
      "Natural lakes",
      "Man-made reservoirs"
    ],
    fact: "India has thousands of lakes.",
    secret: "Chilika Lake is largest coastal lagoon."
  },
  {
    title: "Forest Map",
    image: forest,
    points: [
      "Tropical forests",
      "Deciduous forests",
      "Mangrove forests",
      "Coniferous forests"
    ],
    fact: "India has 21% forest cover.",
    secret: "Sundarbans is largest mangrove forest."
  },
  {
    title: "Soil Map",
    image: soil,
    points: [
      "Alluvial soil",
      "Black soil",
      "Red soil",
      "Laterite soil"
    ],
    fact: "Alluvial soil is most fertile.",
    secret: "Black soil is best for cotton."
  },
  {
    title: "Bathymetric Map",
    image: bathymetric,
    points: [
      "Ocean depth",
      "Continental shelf",
      "Sea floor features",
      "Submarine ridges"
    ],
    fact: "India has 7500 km coastline.",
    secret: "Indian Ocean is youngest ocean."
  },
  {
    title: "Climate Map",
    image: climate,
    points: [
      "Monsoon regions",
      "Dry areas",
      "Temperature zones",
      "Rainfall distribution"
    ],
    fact: "India has 4 main seasons.",
    secret: "Mawsynram is wettest place on Earth."
  },
  {
    title: "Vegetation Map",
    image: vegetation,
    points: [
      "Forest types",
      "Grasslands",
      "Desert vegetation",
      "Mountain vegetation"
    ],
    fact: "Vegetation depends on climate.",
    secret: "Western Ghats are biodiversity hotspot."
  }
];

/* ================= COMPONENT ================= */
export default function Maps() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-hero p-6">

      {/* ===== TITLE ===== */}
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text">
        India's Maps Collection
      </h1>

      {/* ===== MAP CARDS ===== */}
      <div className="grid md:grid-cols-2 gap-10">

        {mapsData.map((map, index) => (
          <div key={index} className="card glass-strong">

            {/* ===== IMAGE ===== */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={map.image}
                alt={map.title}
                className="w-full h-60 object-cover"
              />
            </div>

            {/* ===== TITLE ===== */}
            <h2 className="text-xl font-bold mb-3">
              {map.title}
            </h2>

            {/* ===== POINTS ===== */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {map.points.map((p, i) => (
                <div key={i} className="map-point">
                  {p}
                </div>
              ))}
            </div>

            {/* ===== DID YOU KNOW ===== */}
            <div className="did-you-know info-box mb-3">
              <strong>Did You Know:</strong> {map.fact}
            </div>

            {/* ===== TOP SECRET ===== */}
            <div className="top-secret info-box mb-4">
              <strong>Top Secret:</strong> {map.secret}
            </div>

            {/* ===== BUTTON ===== */}
            <button
              onClick={() => setActive(index)}
              className="btn-glow w-full"
            >
              View Details
            </button>

          </div>
        ))}

      </div>

      {/* ===== MODAL ===== */}
      {active !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="glass-strong p-6 rounded-xl max-w-lg w-full">

            <h2 className="text-2xl mb-4">
              {mapsData[active].title}
            </h2>

            <img
              src={mapsData[active].image}
              className="mb-4 rounded"
            />

            <ul className="mb-4">
              {mapsData[active].points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>

            <button
              onClick={() => setActive(null)}
              className="btn-glow w-full"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
