import { IonHeader, IonToolbar, IonImg } from "@ionic/react";
import React from "react";
import "./Navbar.css";
const Navbar: React.FC = () => {
  return (
    <>
      <IonHeader collapse="fade" className="ion-no-border" >
        <IonToolbar className="ion-padding-horizontal">
          <IonImg src="https://www.expressvpn.com/frtr/assets/images/edsv2/logo/expressvpn-logo-red.svg" />
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Navbar;
