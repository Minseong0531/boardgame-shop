import MainBanner from "../components/MainBanner";
import Category from "./Category";
import Products from "./Products";

function Home(){
    return(
      <div>
        <MainBanner />
        <Category />
        <Products />
      </div>
    )
}

export default Home;