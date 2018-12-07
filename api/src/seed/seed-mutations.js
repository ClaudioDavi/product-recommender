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
    p8: CreateProduct(id: "p8", name: "Picole Uva Bolshoi") {
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
    t1: CreateTag(id: "t1", value: "#crocante") {
      id
      value
    }
    t2: CreateTag(id: "t2", value: "#sorvete") {
      id
      value
    }
    t3: CreateTag(id: "t3", value: "#acai") {
      id
      value
    }
    t4: CreateTag(id: "t4", value: "#congelado") {
      id
      value
    }
    t5: CreateTag(id: "t5", value: "#doce") {
      id
      value
    }
    t6: CreateTag(id: "t6", value: "#verao") {
      id
      value
    }
    t7: CreateTag(id: "t7", value: "#saudavel") {
      id
      value
    }
    t8: CreateTag(id: "t8", value: "#alcool") {
      id
      value
    }
    t9: CreateTag(id: "t9", value: "#graos") {
      id
      value
    }
    t10: CreateTag(id: "t10", value: "#cereal") {
      id
      value
    }
    t11: CreateTag(id: "t11", value: "#vinho") {
      id
      value
    }
    t12: CreateTag(id: "t12", value: "#reserva") {
      id
      value
    }
    t13: CreateTag(id: "t13", value: "#cerveja") {
      id
      value
    }
    t14: CreateTag(id: "t14", value: "#naoperecivel") {
      id
      value
    }
    t15: CreateTag(id: "t15", value: "#especial") {
      id
      value
    }
    t16: CreateTag(id: "t16", value: "#vegetariano") {
      id
      value
    }
    tp1: AddProductHashtags(from: { id: "p1" }, to: { id: "t2" }) {
      from {
        id
      }
    }
    tp2: AddProductHashtags(from: { id: "p1" }, to: { id: "t3" }) {
      from {
        id
      }
    }
    tp3: AddProductHashtags(from: { id: "p1" }, to: { id: "t6" }) {
      from {
        id
      }
    }
    tp4: AddProductHashtags(from: { id: "p2" }, to: { id: "t3" }) {
      from {
        id
      }
    }
    tp5: AddProductHashtags(from: { id: "p2" }, to: { id: "t4" }) {
      from {
        id
      }
    }
    tp6: AddProductHashtags(from: { id: "p2" }, to: { id: "t6" }) {
      from {
        id
      }
    }
    tp7: AddProductHashtags(from: { id: "p2" }, to: { id: "t7" }) {
      from {
        id
      }
    }
    tp8: AddProductHashtags(from: { id: "p3" }, to: { id: "t7" }) {
      from {
        id
      }
    }
    tp9: AddProductHashtags(from: { id: "p3" }, to: { id: "t16" }) {
      from {
        id
      }
    }
    tp10: AddProductHashtags(from: { id: "p3" }, to: { id: "t1" }) {
      from {
        id
      }
    }
    tp11: AddProductHashtags(from: { id: "p4" }, to: { id: "t2" }) {
      from {
        id
      }
    }
    tp12: AddProductHashtags(from: { id: "p4" }, to: { id: "t7" }) {
      from {
        id
      }
    }
    tp13: AddProductHashtags(from: { id: "p4" }, to: { id: "t6" }) {
      from {
        id
      }
    }
    tp14: AddProductHashtags(from: { id: "p4" }, to: { id: "t5" }) {
      from {
        id
      }
    }
    tp15: AddProductHashtags(from: { id: "p1" }, to: { id: "t5" }) {
      from {
        id
      }
    }
    tp16: AddProductHashtags(from: { id: "p5" }, to: { id: "t9" }) {
      from {
        id
      }
    }
    tp17: AddProductHashtags(from: { id: "p5" }, to: { id: "t7" }) {
      from {
        id
      }
    }
    tp18: AddProductHashtags(from: { id: "p5" }, to: { id: "t1" }) {
      from {
        id
      }
    }
    tp19: AddProductHashtags(from: { id: "p5" }, to: { id: "t14" }) {
      from {
        id
      }
    }
    tp20: AddProductHashtags(from: { id: "p6" }, to: { id: "t10" }) {
      from {
        id
      }
    }
    tp21: AddProductHashtags(from: { id: "p6" }, to: { id: "t7" }) {
      from {
        id
      }
    }
    tp22: AddProductHashtags(from: { id: "p6" }, to: { id: "t5" }) {
      from {
        id
      }
    }
    tp23: AddProductHashtags(from: { id: "p6" }, to: { id: "t14" }) {
      from {
        id
      }
    }
    tp24: AddProductHashtags(from: { id: "p6" }, to: { id: "t16" }) {
      from {
        id
      }
    }
    tp25: AddProductHashtags(from: { id: "p7" }, to: { id: "t14" }) {
      from {
        id
      }
    }
    tp26: AddProductHashtags(from: { id: "p8" }, to: { id: "t4" }) {
      from {
        id
      }
    }
    tp27: AddProductHashtags(from: { id: "p8" }, to: { id: "t6" }) {
      from {
        id
      }
    }
    tp28: AddProductHashtags(from: { id: "p8" }, to: { id: "t15" }) {
      from {
        id
      }
    }
    tp29: AddProductHashtags(from: { id: "p9" }, to: { id: "t8" }) {
      from {
        id
      }
    }
    tp30: AddProductHashtags(from: { id: "p9" }, to: { id: "t12" }) {
      from {
        id
      }
    }
    tp31: AddProductHashtags(from: { id: "p9" }, to: { id: "t15" }) {
      from {
        id
      }
    }
    tp32: AddProductHashtags(from: { id: "p10" }, to: { id: "t8" }) {
      from {
        id
      }
    }
    tp33: AddProductHashtags(from: { id: "p10" }, to: { id: "t13" }) {
      from {
        id
      }
    }
    tp34: AddProductHashtags(from: {id:"p9"}, to: {id: "t11"}) {
      from {
        id
      }
    }
  }
`;
