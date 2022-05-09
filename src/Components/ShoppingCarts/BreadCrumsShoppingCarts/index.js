import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
const BreadCrumsShoppingCarts =()=>{
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return(
        <div role="presentation"
             onClick={handleClick}>
              <Breadcrumbs
                maxItems={4}
                aria-label="breadcrumb"
                style={{ color: 'black'}}
            >
                <Link underline="hover" color="inherit" href="#">
                    Catalog
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Accessories
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    New Collection
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Home
                </Link>
                </Breadcrumbs>
        </div>
    )
}
export default BreadCrumsShoppingCarts;