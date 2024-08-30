import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
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
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/dispatchAndSelector";
import { doctorDataSelector } from "../../../redux/doctor";
import { favoriteData, favoriteDataSelector } from "../../../redux/favorite";
import { Doctor } from "../../../types/doctor";
import { capitalizeName } from "../../../../ulitity/capitalizeName";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { NavigationType } from "../../../types/navigationType";
import { persistor } from "../../../store";
const DoctorList = () => {
  const navigation: NavigationType = useNavigation();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const doctorList = useAppSelector(doctorDataSelector).list;
  const favoriteListSelector =
    useAppSelector(favoriteDataSelector).FavoriteReducer.list;
  const favoriteList = async () => {
    // await persistor.purge();
    doctorList.forEach((object) => {
      if (object.isFavorite) {
        dispatch(favoriteData(object));
      }
    });
  };

  useEffect(() => {
    favoriteList();
  }, [doctorList]);

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0, position: "absolute", bottom: 0, width: "100%" }}
      >
        <View
          style={{
            backgroundColor: theme.primary.bg,
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
          <FlatList
            data={favoriteListSelector}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }: { item: Doctor }) => (
              <DoctorProfileCard
                favoritesIcone={item.isFavorite}
                doctorDetail={() => navigation.navigate("DoctorDetail")}
                name={capitalizeName(item.first_name + " " + item.last_name)}
                departmentName={capitalizeName(item.department_name)}
                ClinicAddress="Cardiologist Center,USA"
                fee={1800}
                rating={4.5}
                totalRating="4.5"
                source={require("../../../images/userpic.jpg")}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </DefaultSection>
      </View>
    </>
  );
};

export default DoctorList;
