'use client';

import { motion } from 'framer-motion';
import Title from '../Components/Title';
import RoadmapCard from '../Components/RoadmapCard';

const roadmapData = [
  {
    title: "Q3 2025 – Launch Ready 🚀",
    subtitle: "Setting the foundation for Dexora and launching the first products.",
    points: [
      "Dexora branding, tokenomics & whitepaper",
      "$DORA smart contract deployment",
      "Website & dashboard setup",
      "Tap Tap Game final testing",
      "DEX & staking contract audit",
      "Mainnet launch of Dexora platform",
      "Public release of Tap Tap Game"
    ],
    className: "ftrncard"
  },
  {
    title: "Q4 2025 – Ecosystem Expansion 🌍",
    subtitle: "Growing the Dexora community and increasing platform utility.",
    points: [
      "Community building & ambassador program",
      "Marketing campaigns & influencer partnerships",
      "Tap Tap Game tournaments & leaderboard rewards",
      "Referral system & partner integrations",
      "Educational content & DeFi onboarding"
    ],
    className: "ftrncard2"
  },
  {
    title: "Q1 2026 – Utility Upgrades ⚙",
    subtitle: "Improving the user experience and extending utility.",
    points: [
      "Staking rewards optimization",
      "Seasonal gameplay missions",
      "Mobile-friendly interface (PWA)",
      "Global events & $DORA-based campaigns"
    ],
    className: "ftrncard"
  },
  {
    title: "Q2 2026 – Scaling Forward 🌐",
    subtitle: "Taking Dexora global through multi-chain and analytics.",
    points: [
      "Multi-chain expansion (Polygon → BSC, Arbitrum)",
      "Integration with DeFi protocols",
      "International Dexora community hubs",
      "On-chain analytics & leaderboard dashboards"
    ],
    className: "ftrncard2"
  }
];

const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="relative py-8 md:py-16 bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 relative" data-aos="fade-up">
        <div className="md:flex gap-10 relative">

          <div className="w-full md:w-1/2 md:sticky top-24 h-fit">
            <div className="max-w-3xl">
              <Title
                title="Unfolding the Future — Phase by Phase"
                highlightedWord=""
                highlightedText=""
                subtitle=""
                className="text-left mb-5"
              />
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-center max-w-lg grayscale  rounded-xl"
            >
              <source src="/video/roadmap.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>


          <div className="w-full md:w-1/2 space-y-10">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <RoadmapCard
                  title={item.title}
                  subtitle={item.subtitle}
                  points={item.points}
                  className={item.className}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
