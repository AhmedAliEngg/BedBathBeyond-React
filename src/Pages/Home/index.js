import React from 'react';
import PrimarySearchAppBar from '../../Header/Header'
import Footer from '../../Footer';
import ApplianceCategories from '../../Components/Home/ApplianceCategories'
import Appliance from '../../Components/Home/ApplianceHeading/Appliance'
import BeyondMembership from '../../Components/Home/BeyondMembership';
import BeyondMembershipDetail from '../../Components/Home/BeyondMembershipDetail';
import CalphalonCookWare from '../../Components/Home/CalphalonCookWare';
import DetailAppliance from '../../Components/Home/DetailAppliance'
import DetailGlossary from '../../Components/Home/DetailGlossary'
import DetailMailer from '../../Components/Home/DetailMailer'
import GiftPrice from '../../Components/Home/GiftPrice'
import GiftPriceRate from '../../Components/Home/GiftPriceRate';
import GlossaryItem from '../../Components/Home/GlossaryItems'
import JustForYou from '../../Components/Home/JustForYou';
import KitchenAid from '../../Components/Home/KitchenAid'
import MailerItem from '../../Components/Home/MailerItem'
import NewMailer from '../../Components/Home/NewMailer'
import OutdoorItem from '../../Components/Home/OutdoorItem'
import Rewards from '../../Components/Home/Rewards/Rewards';
import ShopOutdoor from '../../Components/Home/ShopOutdoor'
import JustForYouHeading from '../../Components/Home/JustForYouHeading';
const Home =()=>{
    return(
        <div>
              <PrimarySearchAppBar/>
      <div style={{    margin: '12.5pc 2pc 2pc 8pc'}}>
       <Rewards/>
      </div>
       <div  style={{color:'#002855',textAlign:'center',fontSize:'2pc'}}>
        <Appliance/>
      </div>
      <div>
        <ApplianceCategories/>
      </div>
      <div>
        <DetailAppliance/>
      </div>
      <div  style={{  margin: '2pc 2pc 2pc 8pc'}}>
        <CalphalonCookWare/>
      </div>
      <div>
        <GlossaryItem/>
      </div>
      <div>
        <DetailGlossary/>
      </div>
      <div  style={{  margin: '2pc 2pc 2pc 8pc'}}>
        <BeyondMembership/>
      </div>
      <div>
        <BeyondMembershipDetail/>
      </div>
      <div  style={{color:'#002855',textAlign:'center',fontSize:'2pc'}}>
        <NewMailer/>
      </div>
      <div>
        <MailerItem/>
      </div>
      <div>
        <DetailMailer/>
      </div>
      <div  style={{  margin: '2pc 2pc 2pc 8pc'}}>
        <OutdoorItem/>
      </div>
      <div>
        <ShopOutdoor/>
      </div>
      <div  style={{display:'flex',justifyContent:'space-evenly',marginTop:'2pc'}}>
        <KitchenAid/>
      </div>
      <div  style={{color:'#002855',textAlign:'center',fontSize:'2pc'}}>
        <GiftPrice/>
      </div>
      <div>
        <GiftPriceRate/>
      </div>
      <div  style={{color:'#002855',textAlign:'center',fontSize:'2pc'}}>
        <JustForYouHeading/>
      </div>
      <div style={{ margin:'4pc' }}>
        <JustForYou/>
      </div>
    <Footer/>
        </div>
    )
}
export default Home;