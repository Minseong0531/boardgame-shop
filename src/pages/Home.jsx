import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Category from "./Category";
import Products from "./Products";

function Home(){
    return(
      <div>
        <MainBanner />
        <Banner />
        <Category />
        <Products />
        <Footer />
      </div>
    )
}

export default Home;