import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import logo from "../../../assets/logo.png";
import bala from "../../../assets/bala.jpg";
import uva from "../../../assets/uva.jpg";

const width = Dimensions.get("screen").width;

export default function Doces() {
  return (
    <>
      <Image source={logo} style={estilos.logo} />

      <View style={estilos.doceria}>
        <Text style={estilos.nomeDoceria}>Doces</Text>

        <View style={estilos.bala}>
          <Image style={estilos.imagem} source={bala} />
          <Text style={estilos.nome}>Bala Baiana</Text>
        </View>

        <Text style={estilos.descricao}>Beijinho passado no caramelo.</Text>

        <Text style={estilos.preco}>R$ 10,00 {'\n'}</Text>

        
        <View style={estilos.uva}>
          <Image style={estilos.imagem} source={uva} />
          <Text style={estilos.nome}>Surpresa de Uva</Text>
        </View>

        <Text style={estilos.descricao}>Brigadeiro de leite ninho recheado com uva.</Text>

        <Text style={estilos.preco}>R$ 10,00</Text>

        
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  imagemDoceria: {
    width: 32,
    height: 32,
  },

  nomeDoceria: {
    fontSize: 26,
    lineHeight: 42,
    color: "#000000",
    fontFamily: "montserratBold",
  },

  descricao: {
    color: "#836FFF",
    fontStyle: "italic",
  },

  nome: {
    fontSize: 16,
    lineHeight: 50,
    marginLeft: 12,
    fontWeight: "bold"
  },

  imagem: {
    width: 62,
    height: 62,
    borderRadius: 10,
  },

  bala: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  uva: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  morango: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#836FFF",
    marginTop: 8,
  },

  doceria: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
