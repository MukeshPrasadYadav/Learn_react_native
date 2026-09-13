import { View, Text } from 'react-native';

import { SafeAreaView as RNSafeViewArea } from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeViewArea)

const setting = () => {
  return (
    <SafeAreaView className ="flex-1 bg-background p-5">
      <Text>settintg</Text>
    </SafeAreaView>
      )
}

export default setting