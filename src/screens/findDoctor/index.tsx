import React from "react";
import { DefaultView, Header } from "../../components/Views";

import { ScrollVertical } from "../../components/Scrolling";
import SearchBox from "./components/searchBox";
import DepartmentList from "./components/departmentList";
import DoctorList from "./components/doctorList";

const FindDoctorScreen = () => {
  return (
    // <ScrollVertical>
    <DefaultView styles={{ flex: 1 }}>
      <Header title="All Doctors" />
      <SearchBox />
      <DepartmentList />
      <DoctorList />
    </DefaultView>
    // </ScrollVertical>
  );
};

export default FindDoctorScreen;
