import React from "react";
import PrimarySearchAppBar from '../../Header/Header'
import BreadCrumsShoppingCarts from "../../Components/ShoppingCarts/BreadCrumsShoppingCarts";
import MyGallery from "../../Components/ShoppingCarts/ImageGallery";
import Footer from '../../Footer'
const ShoppingCarts = () =>{
    return(
        <div>
            <PrimarySearchAppBar/>
            <div className="txtSm">
            <BreadCrumsShoppingCarts/>
            </div>
            <div>
                <MyGallery/>
            </div>
            <Footer/>
        </div>
    )
}
export default ShoppingCarts;