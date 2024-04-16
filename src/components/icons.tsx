import { AntDesign } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

interface Iconprops {
  size?: number;
  color?: string;
}
export const RightArrow: React.FC<Iconprops> = ({
  size = 18,
  color = "gray",
}) => <AntDesign name="arrowright" size={size} color={color} />;

export const Home: React.FC<Iconprops> = ({ size = 30, color = "white" }) => (
  <FontAwesome name="home" size={size} color={color} />
);

export const Search: React.FC<Iconprops> = ({ size = 30, color = "white" }) => (
  <AntDesign name="search1" size={size} color={color} />
);

export const Login: React.FC<Iconprops> = ({ size = 30, color = "white" }) => (
  <AntDesign name="login" size={size} color={color} />
);
export const Location: React.FC<Iconprops> = ({
  size = 30,
  color = "white",
}) => <Entypo name="location" size={size} color={color} />;

export const Services: React.FC<Iconprops> = ({
  size = 30,
  color = "white",
}) => <MaterialIcons name="medical-services" size={size} color={color} />;
export const LeftArrow: React.FC<Iconprops> = ({
  size = 25,
  color = "white",
}) => <AntDesign name="arrowleft" size={size} color={color} />;
export const Share: React.FC<Iconprops> = ({ size = 25, color = "white" }) => (
  <Entypo name="share" size={size} color={color} />
);

export const Ambulance: React.FC<Iconprops> = ({
  size = 25,
  color = "red",
}) => <FontAwesome5 name="ambulance" size={size} color={color} />;

export const Clinic: React.FC<Iconprops> = ({ size = 25, color = "red" }) => (
  <FontAwesome5 name="clinic-medical" size={size} color={color} />
);
export const Doctor: React.FC<Iconprops> = ({ size = 25, color = "red" }) => (
  <Fontisto name="doctor" size={size} color={color} />
);
export const Email: React.FC<Iconprops> = ({ size = 20, color = "black" }) => (
  <Fontisto name="email" size={size} color={color} />
);
export const UnLock: React.FC<Iconprops> = ({ size = 20, color = "black" }) => (
  <AntDesign name="unlock" size={size} color={color} />
);
