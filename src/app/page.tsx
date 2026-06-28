"use client";

import { useState } from "react";
import { PasswordGate } from "@/components/sections/PasswordGate";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Hero } from "@/components/sections/Hero";
import { LoveStory } from "@/components/sections/LoveStory";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Memories } from "@/components/sections/Memories";
import { VideoSection } from "@/components/sections/VideoSection";
import { LoveLetter } from "@/components/sections/LoveLetter";
import { ReasonsWhy } from "@/components/sections/ReasonsWhy";
import { MemoryMap } from "@/components/sections/MemoryMap";
import { FutureDreams } from "@/components/sections/FutureDreams";
import { FinalSurprise } from "@/components/sections/FinalSurprise";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // If not unlocked, show password gate
  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <>
      <CustomCursor />
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="bg-[#0a0a0a] min-h-screen selection:bg-rose-500/30">
          <MusicPlayer />
          
          <Hero />
          <LoveStory />
          <PhotoGallery />
          <Memories />
          <VideoSection />
          <LoveLetter />
          <ReasonsWhy />
          <MemoryMap />
          <FutureDreams />
          <FinalSurprise />
        </main>
      )}
    </>
  );
}
