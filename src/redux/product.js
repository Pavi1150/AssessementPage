import img1 from "../Components/assets/img1.png";
import img2 from "../Components/assets/img2.png";
import img3 from "../Components/assets/img3.png";
import img4 from "../Components/assets/img4.png";
import imgg5 from "../Components/assets/img5.png";
import imgg6 from "../Components/assets/img6.png";
import imgg from "../Components/assets/img7.png";
import imgg8 from "../Components/assets/img8.png";

const initialState = {
  
  products: [
    {
      id: 1,
      category: "Sneakers",
      title: "Nike Air Max 2700 react",
      image: img1,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 2,
      category: "Bag",
      title: "Bag-1",
      image: img2,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 3,
      category: "Bag",
      title: "Bag-2",
      image: img3,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 4,
      category: "Sneakers",
      title: "Sneaker-2",
      image: img4,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 5,
      category: "Belt",
      title: "Belt-1",
      image: imgg5,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 6,
      category: "Sunglasses",
      title: "Sunglasses-1",
      image: imgg6,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 7,
      category: "Belt",
      title: "Belt-2",
      image: imgg,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 8,
      category: "Sunglasses",
      title: "Sunglasses-2",
      image: imgg8,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
  ],
};
const Product = (state = initialState, action) => {
  return state;
};
export default Product;
