import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DoctorProfileCard } from "../../../components/cards";
import { DefaultSection } from "../../../components/Views";
import { ScrollVertical } from "../../../components/Scrolling";
import Modal from "react-native-modal";
import { DefaultHeading } from "../../../components/headings";
import { DefaultButton } from "../../../components/buttons";
import { useTheme } from "../../../theme/context";
const DoctorList = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <ScrollVertical>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0, position: "absolute", bottom: 0, width: "100%" }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: hp(40),
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        >
          <View
            style={{
              alignItems: "center",
              margin: hp(3),
              borderBottomWidth: 0.5,
            }}
          >
            <DefaultHeading styles={{ marginBottom: hp(3) }}>
              Remove From Favorites
            </DefaultHeading>
          </View>
          <View style={{ marginHorizontal: hp(2) }}>
            <DoctorProfileCard
              favoritesIcone={true}
              name="David Patel"
              departmentName="Cardiologist"
              ClinicAddress="Cardiologist Center,USA"
              fee={1800}
              rating={4.5}
              totalRating="4.5"
              source={require("../../../images/doctorImage1.png")}
            />
          </View>
          <View
            style={{
              marginHorizontal: hp(3),

              flexDirection: "row",
            }}
          >
            <DefaultButton buttonKey="Cancel" styles={{ marginRight: wp(2) }} />

            <DefaultButton buttonKey="Remove" />
          </View>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.primary.bg,
          paddingHorizontal: 10,
        }}
      >
        <DefaultSection>
          <DoctorProfileCard
            handler={() => setModalVisible(true)}
            favoritesIcone={true}
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            fee={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            handler={() => setModalVisible(true)}
            favoritesIcone={true}
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            fee={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            handler={() => setModalVisible(true)}
            favoritesIcone={true}
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            fee={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            handler={() => setModalVisible(true)}
            favoritesIcone={true}
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            fee={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../../images/doctorImage1.png")}
          />
          <DoctorProfileCard
            handler={() => setModalVisible(true)}
            favoritesIcone={true}
            name="David Patel"
            departmentName="Cardiologist"
            ClinicAddress="Cardiologist Center,USA"
            fee={1800}
            rating={4.5}
            totalRating="4.5"
            source={require("../../../images/doctorImage1.png")}
          />
        </DefaultSection>
      </View>
    </ScrollVertical>
  );
};

export default DoctorList;
