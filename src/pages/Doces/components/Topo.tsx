import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import logo from "../../../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Topo() {

    return <>

<Image source={logo} style={estilos.logo} />
    </>
}
   
const estilos = StyleSheet.create({
    logo: {
      width: "100%",
      height: (578 / 768) * width,
    },
});