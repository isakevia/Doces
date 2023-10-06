import React from "react";
import { StyleSheet, Image, Dimensions, Text, ScrollView, View } from "react-native";
import Detalhe from './components/Detalhe';
import Topo from "./components/Topo";
import doce from "../../mocks/doce";

const width = Dimensions.get("screen").width;

export default function Doces() {
  return <>

  <Topo/>
  
  <View>
    <Detalhe
      nomeDoceria={doce.detalhes.nomeDoceria}
      bala={doce.detalhes.bala}
      descricaobala={doce.detalhes.descricaobala}
      precobala={doce.detalhes.precobala}
      maca={doce.detalhes.maca}
      descricaomaca={doce.detalhes.descricaomaca}
      precomaca={doce.detalhes.precomaca}
      morango={doce.detalhes.morango}
      descricaomorango={doce.detalhes.descricaomorango}
      precomorango={doce.detalhes.precomorango}
      uva={doce.detalhes.uva}
      descricaouva={doce.detalhes.descricaouva}
      precouva={doce.detalhes.precouva}
    />
  </View>
  </>
  }

const estilos = StyleSheet.create({
  doceria: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
