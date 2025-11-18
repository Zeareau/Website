// src/App.jsx
import { useMemo } from "react";
import NavBar from "./components/NavBar";
import Feature from "./components/Feature";
import Track from "./components/Track";
import { EVENTS } from "./components/events.jsx";
import { TEAM } from "./components/team.jsx";
import logo from "./assets/sita-logo.png";
import Featured from "./components/Featured";

const LINKS = {
  signup: "https://linktr.ee/gwusita",
  groupme: "https://groupme.com/join_group/108630136/PRB5QZG8",
  github: "https://github.com/gwusita",
  linkedin: "https://www.linkedin.com/company/gwsita/",
  email: "mailto:gwusita@gmail.com",
};

export default function App() {
  const year = new Date().getFullYear();
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const features = useMemo(
    () => [
      { icon: "☁️", title: "Cloud", sub: "AWS & DevOps" },
      { icon: "💻", title: "Build", sub: "Web & Apps" },
      { icon: "📊", title: "Data", sub: "SQL & Analytics" },
      { icon: "🛡️", title: "Security", sub: "Best practices" },
      { icon: "🤝", title: "Mentor", sub: "Peer support" },
      { icon: "📅", title: "Events", sub: "Weekly" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#0b0d14] text-white">
      <GradientBackdrop />
      <NavBar onJump={jump} signup={LINKS.signup} />

      {/* HERO (H1 logo-centric) */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1 bg-white/5 border border-white/15">
              <span className="h-2 w-2 rounded-full bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] shadow-[0_0_12px_rgba(255,115,179,0.8)]" />
              GW’s First, All-Encompassing Student Tech Club • Cloud • Code • Data
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Build skills. Ship projects.{" "}
              <span className="bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] bg-clip-text text-transparent">
                Do it together.
              </span>
            </h2>
            <p className="mt-4 text-white/70 max-w-prose">
              GW SITA connects builders across cloud, software, AI, and security. We run hands-on workshops,
              ship community projects, and help members land internships.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={LINKS.signup}
                className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-black bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] hover:brightness-110 transition shadow-[0_0_28px_rgba(255,115,179,0.45)]"
              >
                Get involved
              </a>
              <a
                href={LINKS.groupme}
                className="rounded-2xl px-5 py-2.5 text-sm font-semibold border border-white/15 hover:border-white/30 bg-white/0 hover:bg-white/0.04 transition"
              >
                Join GroupMe
              </a>
              <button
                onClick={() => jump("events")}
                className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-white/85 hover:text-white"
              >
                See events →
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
              <div>👥 100+ members</div>
              <div>🚀 Weekly workshops</div>
              <div>🛡️ Peer mentorship</div>
            </div>
          </div>

<div className="order-1 lg:order-2">
  <div
    className="relative mx-auto w-full max-w-[420px] aspect-square rounded-32px
               overflow-hidden border border-white/10
               bg-linear-to-br from-[#161821] via-[#101117] to-[#0a0b0f]
               shadow-[0_0_80px_rgba(255,115,179,0.25)]"
  >
    {/* Subtle glowing edge ring */}
    <div className="pointer-events-none absolute inset-0 rounded-32px ring-1 ring-white/10" />

    {/* Main logo — now fills the space cleanly */}
    <img
      src={logo}
      alt="GW SITA"
      className="absolute inset-0 h-full w-full object-contain p-6
                 drop-shadow-[0_0_65px_rgba(255,115,179,0.35)]
                 select-none"
      draggable="false"
      decoding="async"
    />

    {/* Ambient Light Fields */}
    <span
      className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full
                 bg-linear-to-r from-fuchsia-500 via-pink-500 to-amber-400
                 blur-[100px] opacity-60"
    />
    <span
      className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full
                 bg-cyan-400 blur-[110px] opacity-45"
    />
  </div>
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">What is SITA?</h3>
            <p className="mt-3 text-white/70 max-w-prose">
              We’re a community for students who learn by doing. Every month we host hands-on technical workshops,
              hackathons, professional development, mock interviews—and partner with industry guests to keep obtain invaluable insights.
            </p>
          </div>
          <ul className="md:col-span-1 text-white space-y-2">
            <li>⚡ Practical workshops</li>
            <li>🤝 Team projects & mentorship</li>
            <li>🧭 Career prep & referrals</li>
            <li>🎯 Beginner-friendly tracks</li>
          </ul>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-white/0.03 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
              <p className="text-white/70">Show up, learn something useful, meet your people.</p>
            </div>
            <a
              href={LINKS.signup}
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-white/15 hover:border-white/30 bg-white/0 hover:bg-white/0.04 transition"
            >
              View full calendar
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {EVENTS.map((e) => (
              <article
                key={e.title}
                className="rounded-3xl border border-white/10 bg-[#0f111a] p-6 shadow-[0_0_24px_rgba(255,115,179,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{e.title}</h4>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {e.date}
                  </span>
                </div>
                <div className="mt-2 text-sm text-white/70">📍 {e.where}</div>
                <p className="mt-3 text-white/80">{e.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full px-2 py-1 bg-linear-to-r from-fuchsia-400/20 via-pink-400/20 to-amber-300/20 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Featured />

      {/* WORKSHOPS */}
      <section id="workshops" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl font-bold">Skill Tracks & Workshops</h3>
        <p className="text-white/70">Pick a lane or sample everything—cloud, dev, data, and security.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <Track title="Cloud" items={["AWS Basics", "Serverless", "IaC & Terraform"]} />
          <Track title="Web Dev" items={["HTML/CSS", "React", "Deploy on CloudFront"]} />
          <Track title="Data" items={["SQL 101", "Modeling", "Dashboards"]} />
          <Track title="Security" items={["IAM", "OWASP", "Threat modeling"]} />
        </div>
      </section>

{/* TEAM */}
<section id="team" className="bg-white/0.03 border-y border-white/10">
  <div className="mx-auto max-w-7xl px-4 py-16">
    <h3 className="text-2xl font-bold">Meet the Team</h3>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {TEAM.map((m) => (
        <div
          key={m.name}
          className="rounded-3xl border border-white/10 p-6 bg-[#0f111a] flex items-center gap-5 hover:bg-white/5 transition"
        >
          {/* ✅ Headshot */}
          {m.img && (
            <img
              src={m.img}
              alt={m.name}
              className="w-16 h-16 rounded-full object-cover border border-white/20 shadow-lg"
            />
          )}

          <div>
            <h4 className="font-semibold">{m.name}</h4>
            <p className="text-white/70">{m.role}</p>

            {/* Links */}
            <div className="mt-3 flex gap-4 text-sm">
              {m.github && (
                <a
                  className="text-white/80 hover:text-white"
                  href={m.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}
              {m.linkedin && (
                <a
                  className="text-white/80 hover:text-white"
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </div>
      ))}      </div>
    </div>
  </section>

      {/* SUBCOMMITTEES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Want to get more involved?</h3>
          <p className="mt-3 text-white/70">Join one of our Subcommittees</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Subcommittee Card */}
          <div className="rounded-3xl border border-white/10 p-8 bg-[#0f111a] hover:bg-white/5 transition">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Project Subcommittee</h4>
              <p className="text-white/70 mb-6">
                Lead technical projects, mentor junior members, and help build solutions that make a real impact in our community.
              </p>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-2xl px-6 py-3 text-sm font-semibold text-black bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] hover:brightness-110 transition shadow-[0_0_24px_rgba(255,115,179,0.35)]"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Outreach Subcommittee Card */}
          <div className="rounded-3xl border border-white/10 p-8 bg-[#0f111a] hover:bg-white/5 transition">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Outreach Subcommittee</h4>
              <p className="text-white/70 mb-6">
                Connect with industry professionals, organize networking events, and help expand our community reach.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScjy3ygohDVjgr5a0mBQUB6kTmUNguAjYiThvJIvfWRy522Ow/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-2xl px-6 py-3 text-sm font-semibold text-black bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] hover:brightness-110 transition shadow-[0_0_24px_rgba(255,115,179,0.35)]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold">Join SITA</h3>
              <p className="mt-3 text-white/70 max-w-prose">
                Drop your info and we’ll send meeting details, event reminders, and opportunities. We’re beginner-friendly.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap text-sm">
                <a className="text-white/80 hover:text-white" href={LINKS.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a className="text-white/80 hover:text-white" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a className="text-white/80 hover:text-white" href={LINKS.email}>
                  Email ↗
                </a>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 p-6 bg-white/0.03">
              <label className="text-sm text-white/80">Name</label>
              <input
                className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="Your Name"
              />
              <label className="mt-4 block text-sm text-white/80">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="name@gwu.edu"
              />
              <label className="mt-4 block text-sm text-white/80">Mesage</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="Say hello or ask a question!"
              />
              <button
                type="submit"
                className="mt-5 w-full rounded-2xl px-4 py-2 text-sm font-semibold text-black bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] hover:brightness-110 transition shadow-[0_0_24px_rgba(255,115,179,0.35)]"
              >
                Submit
              </button>
              <p className="mt-2 text-xs text-white/50">We’ll never share your info. Opt-out anytime.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} GW SITA. Built by Chris Enriquez.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#join" className="hover:text-white">Join</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GradientBackdrop() {
  return (
    <>
      {/* global gradient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-linear-to-r from-fuchsia-500 via-pink-500 to-amber-400 opacity-20 blur-3xl" />
        <div className="absolute bottom-[-120px] -right-80px h-[420px] w-[420px] rounded-full bg-cyan-400 opacity-20 blur-3xl" />
      </div>
    </>
  );
}
