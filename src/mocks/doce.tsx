import bala from '../../assets/bala.jpg';
import maca from '../../assets/maca.jpg';
import morango from '../../assets/morango.jpg';
import uva from '../../assets/uva.jpg';

const doce = {
    topo: {
        titulo: "Detalhes dos Doces",
    },
    detalhes: {
        nomeDoceria: "Kevia Candies",
        bala: "Bala baiana",
        descricaobala: "Beijinho passado no caramelo.",
        precobala: "R$10,00",
        maca: "Maçã do amor",
        descricaomaca: "Maçã com uma calda de caramelo.",
        precomaca: "R$5,00",
        morango: "Coxinha de brigadeiro com morango",
        descricaomorango: "Coxinha de brigadeiro recheada com morango.",
        precomorango: "R$4,50",
        uva: "Surpresa de uva",
        descricaouva: "Brigadeiro de leite ninho recheado com uva verde.",
        precouva: "R$10,00"
    },
   
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "Bala baiana",
          imagem: bala,
        },
        {
          nome: "Maçã do amor",
          imagem: maca,
        },
        {
          nome: "Coxinha de brigadeiro com morango",
          imagem: morango,
        },
        {
          nome: "Surpresa de uva",
          imagem: uva,
        }
      ]
    }
  }

export default doce;