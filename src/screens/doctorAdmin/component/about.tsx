import React from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const About = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: hp(3),
        paddingHorizontal: wp(3),
        paddingVertical: wp(5),
      }}
    >
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
        nobis ab nesciunt expedita! Exercitationem sequi blanditiis nisi vero
        nostrum corporis nulla, officia culpa nesciunt odio, qui ut cumque
        impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
        laboriosam nobis ab nesciunt expedita! Exercitationem sequi blanditiis
        nisi vero nostrum corporis nulla, officia culpa nesciunt odio, qui ut
        cumque impedit. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Hic laboriosam nobis ab nesciunt expedita! Exercitationem sequi
        blanditiis nisi vero nostrum corporis nulla, officia culpa nesciunt
        odio, qui ut cumque impedit. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Hic laboriosam nobis ab nesciunt expedita!
        Exercitationem sequi blanditiis nisi vero nostrum corporis nulla,
        officia culpa nesciunt odio, qui ut cumque impedit. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Hic laboriosam nobis ab nesciunt
        expedita! Exercitationem sequi blanditiis nisi vero nostrum corporis
        nulla, officia culpa nesciunt odio, qui ut cumque impedit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Hic laboriosam nobis ab
        nesciunt expedita! Exercitationem sequi blanditiis nisi vero nostrum
        corporis nulla, officia culpa nesciunt odio, qui ut cumque impedit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
        nobis ab nesciunt expedita! Exercitationem sequi blanditiis nisi vero
        nostrum corporis nulla, officia culpa nesciunt odio, qui ut cumque
        impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
        laboriosam nobis ab nesciunt expedita! Exercitationem sequi blanditiis
        nisi vero nostrum corporis nulla, officia culpa nesciunt odio, qui ut
        cumque impedit.
      </Text>
    </View>
  );
};

export default About;
