import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

type Props = {
  content: string;
  done: Boolean;
  onRemove: () => void;
  onCheck: () => void;
};

export function Task({ content, done, onRemove, onCheck }: Props) {
  const [isChecked, setIsChecked] = useState(done);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={17}
        fillColor="#4EA8DE"
        innerIconStyle={{ borderWidth: 1.5 }}
        onPress={(checked: boolean) => {
          onCheck();
          setIsChecked(checked);
        }}
        disableText
        style={styles.checkButton}
      />
      <Text
        style={[isChecked ? styles.textChecked : styles.text]}
        numberOfLines={2}
      >
        {content}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.removeButton}
          source={require("../../images/delete.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
