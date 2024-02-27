import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from '../assets/logo/Asset_9@4x.png';

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer style={{ padding: "20px 0" }}>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
        >

          <img src={Logo} alt="Footer Image" style={{ width: 100, height: 100 }} />

            {/* <div>
              <h4>Contact</h4>
              <p>97 Bob Junction</p>
              <p>+31 505 256 2654</p>
              <p>littlelemon@restaurant.com</p>
            </div>
            <div>
              <h4>Social Media Links</h4>
              <ul>
                <li><a href='https://www.instagram.com'>Instagram</a></li>
                <li><a href='https://www.twitter.com'>Twitter</a></li>
                <li><a href='https://www.facebook.com'>Facebook</a></li>
              </ul>
            </div> */}

        </Flex>

        <div style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
          Copyright ©️ 2023 
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
