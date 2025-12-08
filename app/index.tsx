import { Link } from "expo-router";
import { Text, View } from "react-native";
import "./globals.css";

export default function index() {
  return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-5xl text-dark-200 font-Bold">
          Welcome!
        </Text>
        <Link href="/onboarding">Onboarding</Link>
      </View>
  );
}