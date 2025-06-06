import Constants from 'expo-constants';
import { ScrollView, View } from "react-native";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Section } from '../components/Section';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex:1 }} className="bg-slate-200" 
    showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section 
        name='Comidas em alta'
        label='Veja mais'
        action={() => console.log("VEJA MAIS")}
        size='text-2xl'
      />
    </ScrollView>
  );
}
