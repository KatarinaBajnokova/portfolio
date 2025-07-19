import Hero from "@/components/hero/Hero";
import ResumeStory from "@/components/ResumeStory/ResumeStory";
import IntroGrid from "@/components/intro-grid/IntroGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <IntroGrid />
      <ResumeStory />
    </div>
  );
}
