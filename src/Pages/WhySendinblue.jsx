import React from 'react'
import { Flex,  Box, Text, Button, Img,  } from "@chakra-ui/react";
import GrowFaster from '../SendinBlueCompo/GrowFaster';
import RelationShip from '../SendinBlueCompo/RelationShip';
import Communications from '../SendinBlueCompo/Communications';
import PopOver from '../SendinBlueCompo/PopOver';
import Nomatter from '../SendinBlueCompo/Nomatter';
import Zen from '../SendinBlueCompo/Zen';
import { Footer } from '../SmallCompo/Footer';
import HereCustomer from '../EnterpriseCompo/HereCustomer';

const WhySendinblue = () => {
  return (
    <>
    <Flex marginTop='40px' color="white" className="flex1">
        <Box flex="1" bg="white"  >
          <h1 className="takeoff">
          Bring your business <br /> online. We’ve got <br /> your back.
          </h1>
          <Text className="growing">
          We’re here to help small businesses grow. Get the right <br />
           marketing and sales tools you need to build stronger <br />
            relationships with your customers — all in one platform.
          </Text>
                  </Box>

        <Box flex="1" >
            <Img height='90%' width='90%' src="https://cdn.vox-cdn.com/thumbor/F0qr-a5Wc-dHetzcloMSOw-sGYw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21693783/iStock_1047941552.jpg" />
        </Box>
      </Flex>
      <GrowFaster/>
      <RelationShip/>
      <Communications/>
      <PopOver/>
      <Nomatter/>
      <Zen/>
      <Footer/>
     
    </>
  )
}

export default WhySendinblue