import * as React from 'react';

export default function ColorTabs() {
    return (
        <div style={{ background: '#002854', height: '34px',paddingTop:'5px' }}>
            <div style={{margin:'0 auto'}}>
            <a href="https://www.bedbathandbeyond.com/">

                <img
                    src='https://b3h2.scene7.com/is/image/BedBathandBeyond/BBBY_waypoint_logo?$PNG$&fmt=png-alpha;'
                    style={{ filter: 'brightness(0) invert(1)', height: '25px', marginLeft: '10em' }}
                />
            </a>
            <a href="https://www.bedbathandbeyond.com/apis/services/cbcc/redirect/v1.0/cookie-redirect?url=https://www.buybuybaby.com">

                <img
                    src='https://b3h2.scene7.com/is/image/BedBathandBeyond/BABY_waypoint_logo?$PNG$&fmt=png-alpha'
                    style={{ filter: 'brightness(0) invert(1)', height: '25px' }}
                />
            </a>
            <a href="https://www.bedbathandbeyond.com/apis/services/cbcc/redirect/v1.0/cookie-redirect?url=https://www.harmonfacevalues.com">

                <img
                    src='https://assets.bounceexchange.com/assets/uploads/clients/4540/creatives/2693f610e1727f4f9c526ee7103f0e0f.png'
                    style={{ filter: 'brightness(0) invert(1)', height: '25px' }}
                />
            </a>
            </div>
        </div>
    );
}
