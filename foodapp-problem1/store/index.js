export const state = () => ({
  fooddata: [
    {
      name: "Taco bout Eating Tacos",
      deliveryTime: 25,
      meal: ["lunch", "dinner"],
      rating: 4.7,
      freeDelivery: true,
      id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
      menu: [
        {
          item: "Taco",
          img: "taco-taco.jpg",
          price: 3.45,
          id: "e85dbacc-f721-44e6-af8c-eda2835e2e50",
          options: ["Al Pastor", "Carnitas", "Lengua", "Carne Asada", "Pollo"],
          addOns: ["sour cream", "avocado", "pico de gallo", "queso"],
          amount: 0
        },
        {
          item: "Quesadilla",
          img: "taco-quesadilla.png",
          price: 7.0,
          id: "e956a779-941f-41ef-874e-d5f6a6c6e0cb",
          options: ["Plain", "Carne Asada", "Pollo"],
          addOns: ["sour cream", "guacamole", "pico de gallo"],
          amount: 0
        },
        {
          item: "Burrito",
          img: "taco-burrito.jpg",
          price: 6.59,
          id: "ecd7c207-acd7-4b58-8685-894ba622949e",
          options: ["Al Pastor", "Carnitas", "Lengua", "Carne Asada", "Pollo"],
          addOns: ["sour cream", "avocado", "pico de gallo", "queso"],
          amount: 0
        }
      ]
    },
    {
      name: "A Real Pizza Work",
      deliveryTime: 40,
      meal: ["lunch", "dinner"],
      rating: 4.5,
      freeDelivery: false,
      id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
      menu: [
        {
          item: "Build Your Own",
          img: "pizza-plain.jpg",
          options: [
            "Sausage",
            "Pepperoni",
            "Tomatoes",
            "Mushrooms",
            "Onion",
            "Green Pepper",
            "Extra Cheese"
          ],
          sizeAndCost: [
            { Personal: 8.25 },
            { Medium: 13.25 },
            { Large: 17.35 },
            { "Extra Large": 21.25 }
          ],
          id: "7644eba9-d6a8-466f-bd49-781bc005cfe5",
          amount: 0
        },
        {
          item: "MeatLovers",
          img: "pizza-meat.jpg",
          sizeAndCost: [
            { Personal: 8.25 },
            { Medium: 13.25 },
            { Large: 17.35 },
            { "Extra Large": 21.25 }
          ],
          id: "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
          amount: 0
        },
        {
          item: "Veggie",
          img: "pizza-veggie.jpg",
          sizeAndCost: [
            { Personal: 8.25 },
            { Medium: 13.25 },
            { Large: 17.35 },
            { "Extra Large": 21.25 }
          ],
          id: "b27f4d8e-7235-42f9-b0a7-98e76a1afaf0",
          amount: 0
        }
      ]
    },
    {
      name: "All that and Dim Sum",
      deliveryTime: 35,
      meal: ["breakfast", "lunch", "dinner"],
      rating: 4.9,
      freeDelivery: true,
      id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
      menu: [
        {
          item: "Shrimp Dumplings",
          img: "dimsum-shrimp.jpg",
          sizeAndCost: [
            { "Small: 3 dumplings": 6.5 },
            { "Large: 6 dumplings": 11.99 }
          ],
          id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
          amount: 0
        },
        {
          item: "Soup Dumplings",
          img: "dimsum-soup.jpg",
          sizeAndCost: [
            { "Small: 3 dumplings": 6.5 },
            { "Large: 6 dumplings": 11.99 }
          ],
          id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
          amount: 0
        },
        {
          item: "Stuffed Eggplant",
          img: "dimsum-eggplant.jpg",
          sizeAndCost: [
            { "Small: 3 pieces": 6.5 },
            { "Large: 6 pieces": 11.99 }
          ],
          id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
          amount: 0
        }
      ]
    }
  ]
});

// export const getters = {
//   getterValue: state => {
//     return state.data;
//   }
// };

// export const mutations = {
//   updateValue: (state, payload) => {
//     state.value = payload;
//   }
// };

// export const actions = {
//   updateActionValue({ commit }) {
//     commit("updateValue", payload);
//   }
// };
