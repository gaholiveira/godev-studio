"use client";

import { KickerReveal } from "@/components/text-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation";

function TechLogo({ children }: { children: React.ReactNode }) {
  return (
    <StaggerItem
      className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
      yOffset={15}
      duration={0.5}
    >
      {children}
    </StaggerItem>
  );
}

export function TechStack() {
  return (
    <section className="py-24 border-t border-white/5 bg-zinc-950/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Label com reveal sutil */}
          <KickerReveal 
            className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-8"
            delay={0}
          >
            POWERING NEXT-GEN APPS WITH
          </KickerReveal>

          {/* Tech Logos Grid - Stagger Waterfall Pattern */}
          <StaggerContainer
            staggerDelay={0.08}
            delay={0.2}
            threshold={0.3}
            className="grid grid-cols-3 gap-8 md:grid-cols-6 md:gap-12 items-center"
          >
            {/* Next.js */}
            <TechLogo>
              <svg
                viewBox="0 0 180 180"
                className="h-8 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                  fill="white"
                />
                <rect x="115" y="54" width="12" height="72" fill="white" />
                <circle
                  cx="90"
                  cy="90"
                  r="86"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>
            </TechLogo>

            {/* React */}
            <TechLogo>
              <svg
                viewBox="-11.5 -10.23174 23 20.46348"
                className="h-8 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="0" cy="0" r="2.05" fill="white" />
                <g stroke="white" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(-60)" />
                </g>
              </svg>
            </TechLogo>

            {/* TypeScript */}
            <TechLogo>
              <svg
                viewBox="0 0 128 128"
                className="h-8 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
                />
              </svg>
            </TechLogo>

            {/* Tailwind CSS */}
            <TechLogo>
              <svg
                viewBox="0 0 128 128"
                className="h-8 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                />
              </svg>
            </TechLogo>

            {/* Supabase */}
            <TechLogo>
              <svg
                viewBox="0 0 256 263"
                className="h-8 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="logosSupabaseIcon0"
                    x1="20.862%"
                    x2="63.426%"
                    y1="20.687%"
                    y2="44.071%"
                  >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient
                    id="logosSupabaseIcon1"
                    x1="1.991%"
                    x2="21.403%"
                    y1="-13.158%"
                    y2="34.708%"
                  >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosSupabaseIcon0)"
                  d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669Z"
                />
                <path
                  fill="url(#logosSupabaseIcon1)"
                  fillOpacity=".2"
                  d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669Z"
                />
                <path
                  fill="white"
                  d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292L106.4 4.369Z"
                />
              </svg>
            </TechLogo>

            {/* Stripe */}
            <TechLogo>
              <svg
                viewBox="0 0 512 214"
                className="h-8 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658Zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756h-36.694Zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716Zm-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28ZM241.493 36.551l35.698-7.68V0l-35.698 7.538V36.55Zm0 10.809h35.698v124.444h-35.698V47.36Zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524Zm-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862ZM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774Z"
                />
              </svg>
            </TechLogo>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
