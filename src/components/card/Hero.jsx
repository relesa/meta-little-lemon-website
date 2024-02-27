import React from "react";
import FullScreenSection from "../../layout/FullScreenSection";
import BannerCard from "./BannerCard";
import {promo} from "../../data/data"

const Hero = () => {
  return (
    <FullScreenSection
      backgroundColor="#18181b"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      mt={20} 
      style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
    >
      {promo.map((project) => (
        <BannerCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
        />
      ))}
    </FullScreenSection>
  );
};


export default Hero;
