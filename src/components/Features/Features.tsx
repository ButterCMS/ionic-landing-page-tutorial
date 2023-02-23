import { IonText } from "@ionic/react";
import React from "react";
import { FeatureType } from "../../Types";
import Card from "../Card/Card";
import "./Features.css";

interface FeatureProps {
  data: FeatureType[];
}

const Features: React.FC<FeatureProps> = ({ data }) => {
  return (
    <div className="features_container">
      <IonText
        color="primary"
        className="ion-text-center ion-margin-horizontal"
      >
        <h1>Why Express VPN?</h1>
      </IonText>

      {data?.map((item) => (
        <Card
          key={item.id}
          cardTitle={item.feature_title}
          cardImg={item.feature_img}
          cardContent={item.feature_content}
        />
      ))}
    </div>
  );
};

export default Features;
