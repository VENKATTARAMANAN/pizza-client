const pizzadata = [
  {
    name: "Pepper Barbeque Chicken",
    varients: ["regular", "medium", "large"],
    pizzabase: [
      "New_Hand_Tossed",
      "Cheese_Burst",
      "Classic_Hand_Tossed",
      "Fresh_Pan_Pizza",
      "Wheat_Thin_Crust",
    ],
    sauce: [
      "Spicy_Red_Sauce",
      "BBQ_Sauce",
      "plain_tomato_sauce",
      "Marinara_sauce",
      "Pesto_Sauce",
    ],
    cheese: [
      "Mozzarella_Cheese",
      "Cheddar_Cheese",
      "Parmesan_Cheese",
      "Ricotta_Cheese",
    ],
    vegtoppings: [
      "Grilled_Mushrooms",
      "Onion",
      "Fresh_Tomato",
      "Jalapeno",
      "Black_Olive",
    ],
    nonvegtoppings: [
      "Pepper_Barbecue_chicken",
      "Peri-Peri chicken",
      "Grilled chicken Rasher",
      "Chicken Tikka",
    ],
    prices: [
      {
        regular: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    description: "Pepper barbecue chicken for that extra zing",
    deleteflag:false,
      stock:25,
  },
  {
    name: "Non Veg Supreme",
    varients: ["regular", "medium", "large"],
    pizzabase: [
      "New_Hand_Tossed",
      "Cheese_Burst",
      "Classic_Hand_Tossed",
      "Fresh_Pan_Pizza",
      "Wheat_Thin_Crust",
    ],
    sauce: [
      "Spicy_Red_Sauce",
      "BBQ_Sauce",
      "plain_tomato_sauce",
      "Marinara_sauce",
      "Pesto_Sauce",
    ],
    cheese: [
      "Mozzarella_Cheese",
      "Cheddar_Cheese",
      "Parmesan_Cheese",
      "Ricotta_Cheese",
    ],
    vegtoppings: [
      "Grilled_Mushrooms",
      "Onion",
      "Fresh_Tomato",
      "Jalapeno",
      "Black_Olive",
    ],
    nonvegtoppings: [
      "Pepper_Barbecue_chicken",
      "Peri-Peri chicken",
      "Grilled chicken Rasher",
      "Chicken Tikka",
    ],

    prices: [
      {
        regular: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    description:
      "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers",
      deleteflag:false,
      stock:25,
  },
  {
    name: "Golden Corn Pizza",
    varients: ["regular", "medium", "large"],
    pizzabase: [
      "New_Hand_Tossed",
      "Cheese_Burst",
      "Classic_Hand_Tossed",
      "Fresh_Pan_Pizza",
      "Wheat_Thin_Crust",
    ],
    sauce: [
      "Spicy_Red_Sauce",
      "BBQ_Sauce",
      "plain_tomato_sauce",
      "Marinara_sauce",
      "Pesto_Sauce",
    ],
    cheese: [
      "Mozzarella_Cheese",
      "Cheddar_Cheese",
      "Parmesan_Cheese",
      "Ricotta_Cheese",
    ],
    vegtoppings: [
      "Grilled_Mushrooms",
      "Onion",
      "Fresh_Tomato",
      "Jalapeno",
      "Black_Olive",
    ],
    nonvegtoppings: [
      "Pepper_Barbecue_chicken",
      "Peri-Peri chicken",
      "Grilled chicken Rasher",
      "Chicken Tikka",
    ],
    prices: [
      {
        regular: 180,
        medium: 250,
        large: 360,
      },
    ],
    category: "veg",
    description: "A delectable combination of sweet & juicy golden corn",
    image: "https://www.crazymasalafood.com/wp-content/images/golden-1.jpg",
    deleteflag:false,
      stock:25,
  },
  {
    name: "Fiery Jalapeno & Paprika",
    varients: ["regular", "medium", "large"],
    pizzabase: [
      "New_Hand_Tossed",
      "Cheese_Burst",
      "Classic_Hand_Tossed",
      "Fresh_Pan_Pizza",
      "Wheat_Thin_Crust",
    ],
    sauce: [
      "Spicy_Red_Sauce",
      "BBQ_Sauce",
      "plain_tomato_sauce",
      "Marinara_sauce",
      "Pesto_Sauce",
    ],
    cheese: [
      "Mozzarella_Cheese",
      "Cheddar_Cheese",
      "Parmesan_Cheese",
      "Ricotta_Cheese",
    ],
    vegtoppings: [
      "Grilled_Mushrooms",
      "Onion",
      "Fresh_Tomato",
      "Jalapeno",
      "Black_Olive",
    ],
    nonvegtoppings: [
      "Pepper_Barbecue_chicken",
      "Peri-Peri chicken",
      "Grilled chicken Rasher",
      "Chicken Tikka",
    ],
    prices: [
      {
        regular: 200,
        medium: 300,
        large: 420,
      },
    ],
    category: "veg",
    image: "https://www.crazymasalafood.com/wp-content/images/jalepeno.jpg",
    description:
      "A super spicy veg pizza with a new spicy peri peri sauce and topped with jalapeno & red paprika.",
      deleteflag:false,
      stock:25,
  },
  {
    name: "Margerita",
    varients: ["regular", "medium", "large"],
    pizzabase: [
      "New_Hand_Tossed",
      "Cheese_Burst",
      "Classic_Hand_Tossed",
      "Fresh_Pan_Pizza",
      "Wheat_Thin_Crust",
    ],
    sauce: [
      "Spicy_Red_Sauce",
      "BBQ_Sauce",
      "plain_tomato_sauce",
      "Marinara_sauce",
      "Pesto_Sauce",
    ],
    cheese: [
      "Mozzarella_Cheese",
      "Cheddar_Cheese",
      "Parmesan_Cheese",
      "Ricotta_Cheese",
    ],
    vegtoppings: [
      "Grilled_Mushrooms",
      "Onion",
      "Fresh_Tomato",
      "Jalapeno",
      "Black_Olive",
    ],
    nonvegtoppings: [
      "Pepper_Barbecue_chicken",
      "Peri-Peri chicken",
      "Grilled chicken Rasher",
      "Chicken Tikka",
    ],
    prices: [
      {
        regular: 150,
        medium: 220,
        large: 300,
      },
    ],
    category: "veg",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
    deleteflag:false,
      stock:25,
  },
  {
    name: "Double Cheese Margherita Pizza",
    varients: ["regular", "medium", "large"],
    pizzabase: [
      "New_Hand_Tossed",
      "Cheese_Burst",
      "Classic_Hand_Tossed",
      "Fresh_Pan_Pizza",
      "Wheat_Thin_Crust",
    ],
    sauce: [
      "Spicy_Red_Sauce",
      "BBQ_Sauce",
      "plain_tomato_sauce",
      "Marinara_sauce",
      "Pesto_Sauce",
    ],
    cheese: [
      "Mozzarella_Cheese",
      "Cheddar_Cheese",
      "Parmesan_Cheese",
      "Ricotta_Cheese",
    ],
    vegtoppings: [
      "Grilled_Mushrooms",
      "Onion",
      "Fresh_Tomato",
      "Jalapeno",
      "Black_Olive",
    ],
    nonvegtoppings: [
      "Pepper_Barbecue_chicken",
      "Peri-Peri chicken",
      "Grilled chicken Rasher",
      "Chicken Tikka",
    ],
    prices: [
      {
        regular: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "veg",
    image: "https://www.crazymasalafood.com/wp-content/images/double-1.jpg",
    description:
      "A classic delight loaded with extra 100% real mozzarella cheese",
      deleteflag:false,
      stock:25,
  },
];
export default pizzadata;
