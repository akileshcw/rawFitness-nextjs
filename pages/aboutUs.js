import React from "react";
import Head from 'next/head';

import TeamMemberCard from "../components/teamMember";

import AkilPic from "../public/images/pics/akilPic.JPG";

function AboutUS() {
  return (
    <>
      <Head>
        <title>Raw Fitness - About Us</title>
      </Head>
      <TeamMemberCard src={AkilPic} name="Akileswaran Chinnasamy" instaId={"@darkness_akil"} desc={'He is one of the partner at Raw Fitness Studio'} /> 
    </>
  );
};


export default AboutUS;
