import "./CartPage.styles.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Cart from "../../Components/Cart/Cart";

const CartPage = () => {
  return (
    <>
      <Header />
      <main className="my-24">
        <Cart />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
