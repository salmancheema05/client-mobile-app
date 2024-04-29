import { View, Text } from "react-native";
import React, { useState } from "react";
import { DefaultSection, DefaultView, Header } from "../../components/Views";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Card } from "react-native-shadow-cards";
const BookingScreen = () => {
  const [selected, setSelected] = useState("");
  const currentDate = new Date();
  return (
    <DefaultView>
      <Header title="Booking Appointment" />
      <DefaultSection>
        <Card>
          <Calendar
            minDate={currentDate.toISOString().split("T")[0]}
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                marked: false,
                selectedColor: " hsla(212, 52%, 23%, 1)",
              },
            }}
          />
        </Card>
      </DefaultSection>
    </DefaultView>
  );
};

export default BookingScreen;
