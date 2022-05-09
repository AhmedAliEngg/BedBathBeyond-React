import React from 'react';
import DividerLine from './Divider';
import ListItem from './ListItem';
const Footer = () =>{
    return(
        <div style={{backgroundColor:'#f7f7f7'}}>
            <div>
                <div style={{ display: 'flex',
                              justifyContent: 'space-around',
                              width: '100%',
                              marginTop:'1pc'
                             }}>
                    <div style={{ width:'52%' }}>
                    <h3>
                        <strong>We write really great emails.</strong>
                    </h3>
                    <p>
                    We'll let you know about the latest deals & newest products. New <div>subscribers get 
                    <strong>20% off</strong>
                    any single item. 
                    </div>
                    </p>
                    </div>
                    <div>
                    <form>
                        <input placeholder='Email' type={'email'}/>
                        <button type='submit'> sign up for emails </button>
                    </form>
                    </div>
                </div>
            </div>
            <DividerLine/>
            <ListItem/>
        </div>
    );
}
export default Footer;