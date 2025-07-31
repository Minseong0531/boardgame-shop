import Banner from "../components/Banner";
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
      </div>
    )
}

export default Home;