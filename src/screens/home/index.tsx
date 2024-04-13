import React from "react";
import { View, ImageBackground, TextInput } from "react-native";
import { DefaultView } from "../../components/Views";
import OurServices from "./component/OurServices";
import GreateDoctors from "./component/greateDoctors";
import PatientSay from "./component/patientSays";
import Layout from "../../layout";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DefaultImage } from "../../components/images";
import { DefaultHeading } from "../../components/headings";
import { Ambulance, Clinic } from "../../components/icons";

const HomeScreen = () => {
  return (
    <Layout
      emergencyBox={true}
      headerstyles={{
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}
    >
      <DefaultView styles={{}}>
        <OurServices />
        <GreateDoctors />
        <PatientSay />
      </DefaultView>
    </Layout>
  );
};

export default HomeScreen;
