import margherita from "../assets/pizzas/Margherita (1).jpeg";
import pepperoni from "../assets/pizzas/Pepperoni (1).jpeg";
import quatroQueijos from "../assets/pizzas/Quatro Queijos (1).jpeg";
import calabresa from "../assets/pizzas/Calabresa (2).jpeg";
import frangoCatupiry from "../assets/pizzas/Frango com Catupiry (1).jpeg";
import portuguesa from "../assets/pizzas/Portuguesa (1).jpeg";
import vegetariana from "../assets/pizzas/Vegetariana (4).jpeg";
import baconMilho from "../assets/pizzas/Bacon com Milho (1).jpeg";
import margheritaEspecial from "../assets/pizzas/Margherita Especial (1).jpeg";
import napolitana from "../assets/pizzas/Napolitana (1).jpeg";
import toscana from "../assets/pizzas/Toscana (1).jpeg";
import rúculaTomateSeco from "../assets/pizzas/Rúcula com Tomate Seco (1).jpeg";
import siciliana from "../assets/pizzas/Siciliana (1).jpeg";
import mexicana from "../assets/pizzas/Mexicana (1).jpeg";
import camarãoCatupiry from "../assets/pizzas/Camarão com Catupiry (1).jpeg";

export const menuPizzas = [
  {
    id: 1,
    nome: "Margherita",
    descricao:
      "Clássica pizza italiana com molho de tomate, mozarela e manjericão fresco.",
    imagem: margherita,
    ingredientes: ["Molho de tomate", "Mozzarella", "Manjericão fresco"],
    preco: 25.99,
  },
  {
    id: 2,
    nome: "Pepperoni",
    descricao:
      "Uma explosão de sabor com molho de tomate, mozarela e fatias generosas de pepperoni.",
    imagem: pepperoni,
    ingredientes: ["Molho de tomate", "Mozzarella", "Pepperoni"],
    preco: 27.99,
  },
  {
    id: 3,
    nome: "Quatro Queijos",
    descricao:
      "Deliciosa combinação de molho de tomate, mozarela, gorgonzola, parmesão e provolone.",
    imagem: quatroQueijos,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Gorgonzola",
      "Parmesão",
      "Provolone",
    ],
    preco: 29.99,
  },
  {
    id: 4,
    nome: "Calabresa",
    descricao:
      "Saborosa pizza com molho de tomate, mozarela, calabresa, cebola e azeitonas.",
    imagem: calabresa,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Calabresa",
      "Cebola",
      "Azeitonas",
    ],
    preco: 26.99,
  },
  {
    id: 5,
    nome: "Frango com Catupiry",
    descricao:
      "Uma opção cremosa com molho de tomate, mozarela, frango desfiado e catupiry.",
    imagem: frangoCatupiry,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Frango desfiado",
      "Catupiry",
    ],
    preco: 28.99,
  },
  {
    id: 6,
    nome: "Portuguesa",
    descricao:
      "Tradicional pizza com molho de tomate, mozarela, presunto, mussarela, ovo, cebola e azeitonas.",
    imagem: portuguesa,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Presunto",
      "Mussarela",
      "Ovo",
      "Cebola",
      "Azeitonas",
    ],
    preco: 30.99,
  },
  {
    id: 7,
    nome: "Vegetariana",
    descricao:
      "Saborosa opção vegetariana com molho de tomate, mozarela, pimentão, cebola, tomate, azeitonas e ervilhas.",
    imagem: vegetariana,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Pimentão",
      "Cebola",
      "Tomate",
      "Azeitonas",
      "Ervilhas",
    ],
    preco: 27.99,
  },
  {
    id: 8,
    nome: "Bacon com Milho",
    descricao: "Pizza com molho de tomate, mozarela, bacon, milho e cebola.",
    imagem: baconMilho,
    ingredientes: ["Molho de tomate", "Mozzarella", "Bacon", "Milho", "Cebola"],
    preco: 29.99,
  },
  {
    id: 9,
    nome: "Margherita Especial",
    descricao:
      "Versão especial da clássica Margherita, com mozarela de búfala e manjericão fresco.",
    imagem: margheritaEspecial,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella de búfala",
      "Manjericão fresco",
    ],
    preco: 31.99,
  },
  {
    id: 10,
    nome: "Napolitana",
    descricao:
      "Pizza com molho de tomate, mozarela, tomate em rodelas, azeitonas e manjericão fresco.",
    imagem: napolitana,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Tomate em rodelas",
      "Azeitonas",
      "Manjericão fresco",
    ],
    preco: 30.99,
  },
  {
    id: 11,
    nome: "Toscana",
    descricao:
      "Pizza com molho de tomate, mozarela, calabresa, bacon e cebola.",
    imagem: toscana,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Calabresa",
      "Bacon",
      "Cebola",
    ],
    preco: 28.99,
  },
  {
    id: 12,
    nome: "Rúcula com Tomate Seco",
    descricao: "Pizza com molho de tomate, mozarela, rúcula e tomate seco.",
    imagem: rúculaTomateSeco,
    ingredientes: ["Molho de tomate", "Mozzarella", "Rúcula", "Tomate seco"],
    preco: 32.99,
  },
  {
    id: 13,
    nome: "Siciliana",
    descricao:
      "Pizza com molho de tomate, mozarela, aliche, orégano e azeitonas.",
    imagem: siciliana,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Aliche",
      "Orégano",
      "Azeitonas",
    ],
    preco: 31.99,
  },
  {
    id: 14,
    nome: "Mexicana",
    descricao:
      "Pizza com molho de tomate, mozarela, carne moída, pimenta jalapeño, pimentão e cebola.",
    imagem: mexicana,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Carne moída",
      "Pimenta jalapeño",
      "Pimentão",
      "Cebola",
    ],
    preco: 33.99,
  },
  {
    id: 15,
    nome: "Camarão com Catupiry",
    descricao:
      "Pizza com molho de tomate, mozarela, camarão, catupiry e cebola.",
    imagem: camarãoCatupiry,
    ingredientes: [
      "Molho de tomate",
      "Mozzarella",
      "Camarão",
      "Catupiry",
      "Cebola",
    ],
    preco: 35.99,
  },
];
