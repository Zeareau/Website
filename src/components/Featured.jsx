import React from "react";
import featuredImg from "/src/assets/featured_hackathon.jpg";

// EDIT THIS OBJECT to change featured item anytime
const FEATURED = {
  title: "Most Recent Hackathon",
  blurb:
    "Members of our project subcommittee participated in an NVIDIA hosted hackathon at Howard University, focusing on using NVIDIA's new Nemotron model to build an 'Agent for Impact'.",
  img: featuredImg,
  alt: "Our project subcommitee at an NVIDIA Activity at Howard University",
  date: "Oct 28, 2025",
  ctaLabel: "View Photos - N/A",
  ctaLink: "https://photos.app.goo.gl/your-album-link",
  tags: ["Hackathon", "AI", "Sustainability"],
};

export default function Featured() {
  const f = FEATURED;

  return (
    <section id="featured" className="py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">Featured</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
<div className="relative group rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm 
shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_65px_-5px_rgba(132,85,255,0.6)] hover:border-purple-400/60 hover:scale-[1.015]">
  <img 
    src={f.img} 
    alt={f.alt} 
    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:saturate-125"
  />
  {/* subtle gradient overlay at bottom */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
</div>

          {/* Text */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0f111a] p-6">
            <div>
              <div className="text-sm text-white/60">{f.date}</div>
              <h3 className="text-xl font-bold mt-2">{f.title}</h3>
              <p className="mt-3 text-white/80">{f.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <a
                href={f.ctaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition"
              >
                {f.ctaLabel} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
