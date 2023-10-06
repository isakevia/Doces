import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import balas from "../../../../assets/bala.jpg";
import uvas from "../../../../assets/uva.jpg";
import morangos from "../../../../assets/morango.jpg"
import macas from "../../../../assets/maca.jpg"

type Props = {
  nomeDoceria: string;
  bala: string;
  descricaobala: string;
  precobala: string;
  maca: string;
  descricaomaca: string;
  precomaca: string;
  morango: string;
  descricaomorango: string;
  precomorango: string;
  uva: string;
  descricaouva: string;
  precouva: string;
}

export default function Detalhe ({

  nomeDoceria,
  bala,
  descricaobala,
  precobala,
  maca,
  descricaomaca,
  precomaca,
  morango,
  descricaomorango,
  precomorango,
  uva,
  descricaouva,
  precouva

}: Props) {
    return<>

<Text style={estilos.nomeDoceria}>{nomeDoceria}</Text>

<View style={estilos.bala}>
  <Image style={estilos.imagem} source={balas} />
  <Text style={estilos.bala}>{bala}</Text>
</View>

<Text style={estilos.descricao}>{descricaobala}</Text>

<Text style={estilos.preco}>{precobala}{'\n'}</Text>


<View style={estilos.uva}>
  <Image style={estilos.imagem} source={uvas} />
  <Text style={estilos.uva}>{uva}</Text>
</View>

<Text style={estilos.descricao}>{descricaouva}</Text>

<Text style={estilos.preco}>{precouva}</Text>

<View style={estilos.morango}>
  <Image style={estilos.imagem} source={morangos} />
  <Text style={estilos.morango}>{morango}</Text>
</View>

<Text style={estilos.descricao}>{descricaomorango}</Text>

<Text style={estilos.preco}>{precomorango}</Text>

<View style={estilos.maca}>
  <Image style={estilos.imagem} source={macas} />
  <Text style={estilos.maca}>{maca}</Text>
</View>

<Text style={estilos.descricao}>{descricaomaca}</Text>

<Text style={estilos.preco}>{precomaca}</Text>
    </>
}

const estilos = StyleSheet.create({
   
    imagemDoceria: {
      width: 32,
      height: 32,
    },
  
    nomeDoceria: {
      fontSize: 26,
      lineHeight: 42,
      color: "#000000",
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

    maca: {
        flexDirection: "row",
        paddingVertical: 12,
      },
  
    preco: {
      fontSize: 26,
      lineHeight: 42,
      color: "#836FFF",
      marginTop: 8,
    }
});
