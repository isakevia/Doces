import React from "react";
import { StyleSheet, Image, Dimensions, Text, ScrollView } from "react-native";
import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";

const width = Dimensions.get("screen").width;

export default function Doces() {
  return (
    <>
      <ScrollView style={estilos.doceria}>
        <Topo />
        <Detalhe />
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  doceria: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
