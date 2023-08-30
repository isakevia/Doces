import { View, StatusBar, SafeAreaView } from 'react-native';
import Doces from './src/pages/Doces';

export default function App() {

  return (
    <SafeAreaView>
      <StatusBar/>
      <Doces/>
    </SafeAreaView>
  );
}