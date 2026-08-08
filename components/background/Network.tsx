"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function Network() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="network"
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        detectRetina: true,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
          },

          color: {
            value: ["#22d3ee", "#3b82f6", "#60a5fa"],
          },

          links: {
            enable: true,
            distance: 160,
            color: "#22d3ee",
            opacity: 0.18,
            width: 1,
            triangles: {
              enable: false,
            },
          },

          move: {
            enable: true,
            speed: 0.6,
            random: true,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: {
              min: 0.2,
              max: 0.7,
            },
            animation: {
              enable: true,
              speed: 0.6,
              minimumValue: 0.2,
            },
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          shape: {
            type: "circle",
          },
        },

        interactivity: {
          detectsOn: "window",

          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: {
              enable: true,
            },
          },

          modes: {
            grab: {
              distance: 180,

              links: {
                opacity: 0.5,
              },
            },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
