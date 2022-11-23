import ReactDOM from 'react-dom/client';
import React from 'react';

import PromoCard from './components-project/PromoCard';
import london from './img/london-img.jpg';
import atlanta from './img/atlanta-img.png';
import singapore from './img/singapore-img.jpg';

import './index.scss';

const App = () => (
  <>
    <h1 className="default-text title">World Traveler</h1>
    <div className="app__body">
      <PromoCard
        className="main-promo"
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
        onButtonClick={() => alert('I bet if this was a real, functional site this would naviate to another page, in which case the button should probably be link.')}
      />

      <PromoCard
        className="smaller-card"
        imgSource={atlanta}
        imgAltText="London corner buildling"
        imageOverlayText="Domestic"
        imageOverlayBorderColor="#32C5FF"
        date="2020-04-15"
        mainTitle="Atlanta, GA"
        callout="Register Now"
        text="Torquatos nostros? quos tu paulo ante cum soluta nobis est."
      />

      <PromoCard
        className="smaller-card"
        imgSource={singapore}
        imgAltText="Atlanta skyline"
        imageOverlayText="International"
        date="2020-04-15"
        mainTitle="London, England"
        callout="Register Now"
        text="Primum igitur, inquit, sic agam, ut aliquid ex eo delectu."
      />
    </div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
