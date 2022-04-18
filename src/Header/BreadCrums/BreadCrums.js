/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function CollapsedBreadcrumbs() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }



    return (

        <div
            role="presentation"
            onClick={handleClick}
            style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}
        >

            <Breadcrumbs
                maxItems={14}
                aria-label="breadcrumb"
                separator=""
                style={{ color: 'black', backgroundColor: 'white' }}
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
                <Link underline="hover" color="inherit" href="#">
                    Catalog
                </Link>
            </Breadcrumbs>
        </div>
    );
}
