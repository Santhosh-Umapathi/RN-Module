import { View } from "react-native";
import React from "react";
import { Button } from "react-native-ui-lib";

type Props = {};

const ButtonComp = (props: Props) => {
  return (
    <View>
      <Button label="Press" backgroundColor="salmon" />
    </View>
  );
};

export default ButtonComp;
