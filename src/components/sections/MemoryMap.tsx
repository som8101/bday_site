"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { siteConfig } from "@/config/siteConfig";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function MemoryMap() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-glow text-white">Our World</h2>
          <p className="text-zinc-400">Places that hold a special piece of our heart.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full h-[60vh] max-h-[600px] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden relative shadow-[0_0_50px_rgba(255,255,255,0.05)]"
        >
          <ComposableMap
            projectionConfig={{ scale: 150 }}
            className="w-full h-full opacity-80"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a1a1a"
                    stroke="#333"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#2a2a2a", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {siteConfig.mapPins.map((pin, idx) => (
              <Marker key={idx} coordinates={pin.coordinates as [number, number]}>
                <motion.circle 
                  r={4} 
                  fill="#f43f5e" 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 + (idx * 0.2) }}
                />
                <motion.circle
                  r={12}
                  fill="#f43f5e"
                  opacity={0.3}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                />
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{ fontFamily: "inherit", fill: "#fff", fontSize: 10, fontWeight: 500 }}
                  className="drop-shadow-md"
                >
                  {pin.name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </motion.div>
      </div>
    </section>
  );
}
