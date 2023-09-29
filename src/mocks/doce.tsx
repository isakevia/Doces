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
        descricao: "Doces feitos com produtos de qualidade e deliciosos.",
        bala: "bala baiana",
        preco: "R$ 10,00",
        
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