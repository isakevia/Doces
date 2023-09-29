import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import bala from "../../../../assets/bala.jpg";
import uva from "../../../../assets/uva.jpg";
import morango from "../../../../assets/morango.jpg"
import maca from "../../../../assets/maca.jpg"

type Props = {
  nomeDoceria: string;
  descricao: string;
  bala: string;
  preco: string;
}

export default function Detalhe ({

  nomeDoceria,
  descricao,
  preco,
}: Props) {
    return<>

<Text style={estilos.nomeDoceria}>{nomeDoceria}</Text>

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

<View style={estilos.morango}>
  <Image style={estilos.imagem} source={morango} />
  <Text style={estilos.nome}>Coxinha de morango</Text>
</View>

<Text style={estilos.descricao}>Brigadeiro ao leite recheado com morango inteiro.</Text>

<Text style={estilos.preco}>R$ 4,50</Text>

<View style={estilos.maca}>
  <Image style={estilos.imagem} source={maca} />
  <Text style={estilos.nome}>Maçã do amor</Text>
</View>

<Text style={estilos.descricao}>Maçã com uma calda de caramelo.</Text>

<Text style={estilos.preco}>R$ 4,50</Text>
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
