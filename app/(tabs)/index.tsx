import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 gap-8 p-6">
      <View className="gap-2">
        <Text className="text-4xl font-bold text-center">
          Registrar refeição
        </Text>
        <Text className="text-xl text-center">
          Tire uma foto da sua refeição para acompanha sua dieta.
        </Text>
      </View>

      <View className="h-[250px] w-full bg-white items-center justify-center rounded-lg border border-black border-dashed">
        <View className="h-[120px] w-[120px] rounded-full bg-red-300" />
      </View>

      <View className="gap-2">
        <TouchableOpacity className="bg-blue-500 h-[60px] rounded-lg items-center justify-center">
          <Text className="text-white text-center text-xl font-bold">
            Tirar foto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white h-[60px] rounded-lg items-center justify-center">
          <Text className="text-black text-center text-xl font-bold">
            Escolher da galeria
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
