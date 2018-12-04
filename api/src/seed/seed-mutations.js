export default /* GraphQL */ `
  mutation {
    p1: CreateProduct(id: "p1", name: "Sorvete de creme") {
      id
      name
    }
    p2: CreateProduct(id: "p2", name: "Acai 300ml") {
      id
      name
    }
    p3: CreateProduct(id: "p3", name: "Granola 500gr") {
      id
      name
    }
    p4: CreateProduct(id: "p4", name: "Sorvete de Morango") {
      id
      name
    }
    t1: CreateTag(name: "#crocante") {
      name
    }
    t2: CreateTag(name: "#sorvete") {
      name
    }
    t3: CreateTag(name: "#acai") {
      name
    }
    t4: CreateTag(name: "#congelado") {
      name
    }
    t5: CreateTag(name: "#doce") {
      name
    }
    t6: CreateTag(name: "#verao"){
      name
    }
    t7: CreateTag(name: "#saudavel") {
      name
    }
    t8: CreateTag(name: "#vegetariano") {
      name
    }
    tp1: AddProductHashtags(from: { id: "p1" }, to: { name: "#sorvete" }) {
      from {
        id
      }
    }
    tp2: AddProductHashtags(from: { id: "p1" }, to: { name: "#congelado" }) {
      from {
        id
      }
    }
    tp3: AddProductHashtags(from: { id: "p1" }, to: { name: "#verao" }) {
      from {
        id
      }
    }
    tp4: AddProductHashtags(from: { id: "p2" }, to: { name: "#acai" }) {
      from {
        id
      }
    }
    tp5: AddProductHashtags(from: { id: "p2" }, to: { name: "#congelado" }) {
      from {
        id
      }
    }
    tp6: AddProductHashtags(from: { id: "p2" }, to: { name: "#verao" }) {
      from {
        id
      }
    }
    tp7: AddProductHashtags(from: { id: "p2" }, to: { name: "#saudavel" }) {
      from {
        id
      }
    }
    tp8: AddProductHashtags(from: { id: "p3" }, to: { name: "#saudavel" }) {
      from {
        id
      }
    }
    tp9: AddProductHashtags(from: { id: "p3" }, to: { name: "#vegetariano" }) {
      from {
        id
      }
    }
    tp10: AddProductHashtags(from: { id: "p3" }, to: { name: "#crocante" }) {
      from {
        id
      }
    }
  }
`;
