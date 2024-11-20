import logo from './logo.svg';
import './App.css';
import Header from './Sections/Header.jsx';
import TopSection from './Sections/TopSection';
import Who from './Sections/Who';
import Separator from './Sections/Seperator';
import {FieldCard} from "./Components/FieldCard";
import {Shoots} from "./Components/Shoots";
import '@fontsource/inter';
import React from "react";
import {Fields} from "./Sections/Fields";
import {Members} from "./Sections/Members";
import Seperator from "./Sections/Seperator";
import {FourLetterSection} from "./Components/4LetterSection";
import {What} from "./Sections/What";
import {Price} from "./Sections/Price";
import {Team} from "./Sections/Team";
import {PricingCards} from "./Sections/PricingCards"; // This imports the default weight


function App() {

  return (
      <>
        <Header/>
        <TopSection/>
        <Who/>
        <Separator/>
        <Fields/>
        <What/>
        <Seperator/>
        <Price/>
        <Seperator/>
        <PricingCards/>
      <Seperator/>
        <Team/>
        <Members/>
        <Seperator/>

          {/*<div className="w-[1144px] h-[923px] justify-center items-center gap-5 inline-flex">*/}
          {/*    <FieldCard/>*/}
          {/*    <FieldCard/>*/}
          {/*    <Shoots/>*/}
          {/*</div>*/}

      </>

  );
}

export default App;
