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
    t1: CreateTag(value: "#crocante") {
      value
    }
    t2: CreateTag(value: "#sorvete") {
      value
    }
    t3: CreateTag(value: "#acai") {
      value
    }
    t4: CreateTag(value: "#congelado") {
      value
    }
    t5: CreateTag(value: "#doce") {
      value
    }
    t6: CreateTag(value: "#verao"){
      value
    }
    t7: CreateTag(value: "#saudavel") {
      value
    }
    t8: CreateTag(value: "#vegetariano") {
      value
    }
    tp1: AddProductHashtags(from: { id: "p1" }, to: { value: "#sorvete" }) {
      from {
        id
      }
    }
    tp2: AddProductHashtags(from: { id: "p1" }, to: { value: "#congelado" }) {
      from {
        id
      }
    }
    tp3: AddProductHashtags(from: { id: "p1" }, to: { value: "#verao" }) {
      from {
        id
      }
    }
    tp4: AddProductHashtags(from: { id: "p2" }, to: { value: "#acai" }) {
      from {
        id
      }
    }
    tp5: AddProductHashtags(from: { id: "p2" }, to: { value: "#congelado" }) {
      from {
        id
      }
    }
    tp6: AddProductHashtags(from: { id: "p2" }, to: { value: "#verao" }) {
      from {
        id
      }
    }
    tp7: AddProductHashtags(from: { id: "p2" }, to: { value: "#saudavel" }) {
      from {
        id
      }
    }
    tp8: AddProductHashtags(from: { id: "p3" }, to: { value: "#saudavel" }) {
      from {
        id
      }
    }
    tp9: AddProductHashtags(from: { id: "p3" }, to: { value: "#vegetariano" }) {
      from {
        id
      }
    }
    tp10: AddProductHashtags(from: { id: "p3" }, to: { value: "#crocante" }) {
      from {
        id
      }
    }
    tp11: AddProductHashtags(from: { id:"p4"}, to: {value: "#sorvete"}) {
      from {
        id
      }
    }
    tp12: AddProductHashtags(from: {id: "p4"}, to: { value: "#saudavel"}) {
      from {
        id
      }
    }
    tp13: AddProductHashtags(from: {id: "p4"}, to: { value: "#verao"}) {
      from {
        id
      }
    }
    tp14: AddProductHashtags(from: {id: "p4"}, to: { value: "#doce"}) {
      from {
        id
      }
    }

  }
`;
