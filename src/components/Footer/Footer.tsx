import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";
import React from "react";
import { FooterType } from "../../Types";
interface FooterProps {
  data: FooterType;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <IonFooter className="ion-no-border  " translucent={true}>
      <IonToolbar className="ion-padding">
        <IonTitle>{data?.footer_copyright}</IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
