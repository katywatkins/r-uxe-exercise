import React from 'react';

import PromoCard from './components-project/PromoCard';
import london from './img/london-img.jpg';
import atlanta from './img/atlanta-img.png';
import singapore from './img/singapore-img.jpg';

import './App.scss';

const alertText = 'I bet if this was a fully functional site it would need to navigate to another page, in which case the button should probably be link.';

const App = () => (
  <>
    <header className="app__header">
      <h1 className="title-text app__title">World Traveler</h1>
    </header>
    <main className="app__body">
      <PromoCard
        className="app__main-promo"
        largerPromo
        imgSource={london}
        imgAltText="London corner buildling"
        imageOverlayText="International"
        date="2020-04-15"
        mainTitle="London, England"
        callout="Register Now"
        text="Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio
            quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa,
            mox video; interea hoc epicurus in culpa, qui blanditiis praesentium
            voluptatum adipiscendarum causa aut officiis debits aut fugit, sed uti
            oratione perpetua."
        buttonText="Register for London"
        // eslint-disable-next-line
        onButtonClick={() => alert(alertText)}
      />

      <PromoCard
        className="smaller-card"
        imgSource={atlanta}
        imgAltText="Atlanta"
        imageOverlayText="Domestic"
        imageOverlayBorderColor="#32C5FF"
        date="2019-03-10"
        mainTitle="Atlanta, GA"
        callout="Register Now"
        text="Torquatos nostros? quos tu paulo ante cum soluta nobis est."
        buttonText="Register for Atlanta"
        // eslint-disable-next-line
        onButtonClick={() => alert(alertText)}
      />

      <PromoCard
        className="smaller-card"
        imgSource={singapore}
        imgAltText="Singapore skyline"
        imageOverlayText="International"
        date="2020-02-15"
        mainTitle="Singapore"
        callout="3 Spots Left!"
        text="Primum igitur, inquit, sic agam, ut aliquid ex eo delectu."
        buttonText="Register for Singapore"
        // eslint-disable-next-line
        onButtonClick={() => alert(alertText)}
      />
    </main>
  </>
);

export default App;
