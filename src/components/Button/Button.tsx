import React from "react";
import { Button, type ButtonProps } from "@tamagui/button";
import { type GestureResponderEvent } from "react-native";

interface Props extends Omit<ButtonProps, 'onPress'> {
  disabled?: boolean;
  color?: string;
  accessibilityLabel?: string;
  onPress: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
}

const DscButton: React.FC<Props> = ({
  disabled = false,
  color = "red",
  accessibilityLabel = "A Button",
  onPress,
  children = "Press Mee",
  ...rest
}) => {
  return (
    <Button
      backgroundColor={disabled ? "#ccc" : color}
      pressStyle={{
        backgroundColor: disabled ? "#ccc" : "#aaff00",
      }}
      disabled={disabled}
      onPress={onPress}
      accessible
      accessibilityLabel={accessibilityLabel}
      padding="$2"
      borderRadius="$2"
      color="white"
      fontSize="$4"
      fontWeight="$6"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default DscButton;