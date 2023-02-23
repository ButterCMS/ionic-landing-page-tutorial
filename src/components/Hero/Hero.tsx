import { IonButton, IonIcon, IonImg, IonRow, IonText } from "@ionic/react";
import React from "react";
import "./Hero.css";
import { arrowForward } from "ionicons/icons";
import { HeroType } from "../../Types";

interface HeroProps {
  data: HeroType;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="hero_container">
      <div className="text_container">
        <IonText>
          <h2 className="hero_text">{data?.hero_title}</h2>
        </IonText>
      </div>

      <div className="subtitle">
        <IonText>
          <p className="hero_subtitle">
            {" "}
            <strong>{data?.hero_subtitle}</strong>
          </p>
        </IonText>
      </div>

      <IonButton
        shape="round"
        size="default"
        expand="block"
        color="success"
        className="ion-margin-vertical"
      >
        {data?.btn_text}
        <IonIcon slot="end" icon={arrowForward}></IonIcon>
      </IonButton>
      <img src={data?.hero_image} />
    </div>
  );
};

export default Hero;
