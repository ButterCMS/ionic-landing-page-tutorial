import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react'
import React from 'react'

interface CardProp {
    cardImg: string;
    cardTitle: string;
    cardContent: string;
  }

const Card:React.FC<CardProp> = (props) => {
  return (
    <IonCard className='ion-margin-bottom'>
    <img alt="Silhouette of mountains" src={props.cardImg} />
    <IonCardHeader>
      <IonCardTitle>{props.cardTitle}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>{props.cardContent}</IonCardContent>
  </IonCard>
  )
}

export default Card
