import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const handleTakePhoto = async () => {
    try {
      // const response = openai.responses.create({
      //   model: "gpt-5-nano",
      //   input: "write a haiku about ai",
      //   store: true,
      // });
      // response.then((result) => console.log(result.output_text));
    } catch (error) {
      console.log("Falha ao tirar foto" + error);
    }
  };
  return (
    <SafeAreaView className="flex-1 gap-8 p-6 ">
      <View className="gap-2">
        <Text className="text-4xl font-bold text-center">
          Registrar refeição
        </Text>
        <Text className="text-xl text-center">
          Tire uma foto da sua refeição para acompanha sua dieta.
        </Text>
      </View>

      <View className="h-[250px] w-full bg-white items-center justify-center rounded-lg border border-black border-dashed">
        <View className="h-[120px] w-[120px] rounded-full bg-gray-100" />
      </View>

      <View className="gap-3">
        <TouchableOpacity
          className="bg-blue-700 h-[60px] rounded-lg items-center justify-center"
          onPress={handleTakePhoto}
        >
          <Text className="text-white text-center text-xl font-bold">
            Tirar foto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="h-[60px] rounded-lg items-center justify-center border border-blue-700">
          <Text className="text-blue-700 text-center text-xl font-bold">
            Escolher da galeria
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
