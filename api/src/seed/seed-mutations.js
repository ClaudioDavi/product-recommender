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
    p5: CreateProduct(id: "p5", name: "Amendoim") {
      id
      name
    }
    p6: CreateProduct(id: "p6", name: "Barra de Cereal") {
      id
      name
    }
    p7: CreateProduct(id: "p7", name: "Biscoito Recheado") {
      id
      name
    }
    p8: CreateProduct(id: "p8", name: "Picole Bolshoi") {
      id
      name
    }
    p9: CreateProduct(id: "p9", name: "Vinho Tinto") {
      id
      name
    }
    p10: CreateProduct(id: "p10", name: "Cerveja Lata") {
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
    t6: CreateTag(value: "#verao") {
      value
    }
    t7: CreateTag(value: "#saudavel") {
      value
    }
    t8: CreateTag(value: "#alcool") {
      value
    }
    t9: CreateTag(value: "#graos") {
      value
    }
    t10: CreateTag(value: "#cereal") {
      value
    }
    t11: CreateTag(value: "#vinho") {
      value
    }
    t12: CreateTag(value: "#reserva") {
      value
    }
    t13: CreateTag(value: "#cerveja") {
      value
    }
    t14: CreateTag(value: "#naoperecivel") {
      value
    }
    t15: CreateTag(value: "#especial") {
      value
    }
    t16: CreateTag(value: "#vegetariano") {
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
    tp11: AddProductHashtags(from: { id: "p4" }, to: { value: "#sorvete" }) {
      from {
        id
      }
    }
    tp12: AddProductHashtags(from: { id: "p4" }, to: { value: "#saudavel" }) {
      from {
        id
      }
    }
    tp13: AddProductHashtags(from: { id: "p4" }, to: { value: "#verao" }) {
      from {
        id
      }
    }
    tp14: AddProductHashtags(from: { id: "p4" }, to: { value: "#doce" }) {
      from {
        id
      }
    }
    tp15: AddProductHashtags(from: { id: "p1" }, to: { value: "#doce" }) {
      from {
        id
      }
    }
    tp16: AddProductHashtags(from: { id: "p5" }, to: { value: "#graos" }) {
      from {
        id
      }
    }
    tp17: AddProductHashtags(from: { id: "p5" }, to: { value: "#saudavel" }) {
      from {
        id
      }
    }
    tp18: AddProductHashtags(from: { id: "p5" }, to: { value: "#crocante" }) {
      from {
        id
      }
    }
    tp19: AddProductHashtags(from: { id: "p5" }, to: { value: "#naoperecivel" }) {
      from {
        id
      }
    }
    tp20: AddProductHashtags(from: { id: "p6" }, to: { value: "#cereal" }) {
      from {
        id
      }
    }
    tp21: AddProductHashtags(from: { id: "p6" }, to: { value: "#saudavel" }) {
      from {
        id
      }
    }
    tp22: AddProductHashtags(from: { id: "p6" }, to: { value: "#doce" }) {
      from {
        id
      }
    }
    tp23: AddProductHashtags(from: { id: "p6" }, to: { value: "#naoperecivel" }) {
      from {
        id
      }
    }
    tp24: AddProductHashtags(from: { id: "p6" }, to: { value: "#vegetariano" }) {
      from {
        id
      }
    }
    tp25: AddProductHashtags(from: { id: "p7" }, to: { value: "#naoperecivel" }) {
      from {
        id
      }
    }
    tp26: AddProductHashtags(from: { id: "p8" }, to: { value: "#congelado" }) {
      from {
        id
      }
    }
    tp27: AddProductHashtags(from: { id: "p8" }, to: { value: "#verao" }) {
      from {
        id
      }
    }
    tp28: AddProductHashtags(from: { id: "p8" }, to: { value: "#especial" }) {
      from {
        id
      }
    }
    tp29: AddProductHashtags(from: { id: "p9" }, to: { value: "#alcool" }) {
      from {
        id
      }
    }
    tp30: AddProductHashtags(from: { id: "p9" }, to: { value: "#reserva" }) {
      from {
        id
      }
    }
    tp31: AddProductHashtags(from: { id: "p9" }, to: { value: "#especial" }) {
      from {
        id
      }
    }
    tp32: AddProductHashtags(from: { id: "p10" }, to: { value: "#alcool" }) {
      from {
        id
      }
    }
    tp33: AddProductHashtags(from: { id: "p10" }, to: { value: "#cerveja" }) {
      from {
        id
      }
    }
    tp34: AddProductHashtags(from: {id:"p9"}, to: {value: "#vinho"}) {
      from {
        id
      }
    }
  }
`;
