import { IonButton, IonText } from "@ionic/react";
import React from "react";
import { ContactType } from "../../Types";
import "./Contact.css";

interface ContactProps {
  data: ContactType;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <div className="contact_container ion-padding">
      <img src={data?.contact_img} />
      <IonText>
        <h3 className="contact_heading">{data?.contact_header}</h3>
      </IonText>

      <IonText>
        <p className="contact_subtitle">{data?.contact_subtitle}</p>
      </IonText>

      <IonButton shape="round" size="default" expand="block" fill="outline">
        Contact Support
      </IonButton>
    </div>
  );
};

export default Contact;
