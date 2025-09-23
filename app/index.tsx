import "./globals.css"
import { Text, View } from "react-native";

export default function index() {
  return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-5xl text-blue-500 font-Inter-Italic">
          Welcome to NativeWind!
        </Text>
      </View>
  );
}