import "@/global.css";
import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeViewArea } from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeViewArea)

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to NativeWind!
      </Text>

      <Pressable
        onPress={() => {
          console.log("BUTTON PRESSED");
          router.push("/onboarding");
        }}
        className="mt-4 rounded-md bg-red-500 px-4 py-2"
      >
        <Text className="text-white">
          Go to Onboarding
        </Text>
      </Pressable>

      <Link href="/(auth)/signUP" className="p-2 m-2 rounded-md bg-yellow-700" >Sign up</Link>
      <Link href="/(auth)/singIn" >Sign up</Link>

      <Link href="/Learn_react_native/src/app/suscriptions/spotify" >Suscriptions</Link>
      <Link href={{
        pathname : "/suscriptions/[id]",
        params : {id : "claude"}
      }}>
        Claude
      </Link>
    </SafeAreaView>
  );
}