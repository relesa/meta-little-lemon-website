import React, { useEffect, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import Logo from '../assets/logo/Asset_16@4x.png';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={visible ? "translateY(0)" : "translateY(-200px)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#ffff"
      zIndex={1000}
    >
      <header style={{ textAlign: 'center' }}>
        <img src={Logo} alt='Little Lemon logo' style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />
      </header>
    </Box>
  );
}


export default Header
