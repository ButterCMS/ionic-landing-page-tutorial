import { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { FeatureType, ResponseType } from "../Types";

const Home: React.FC = () => {
  const [response, setResponse] = useState<ResponseType>();
  const [featuresResponse, setFeaturesResponse] = useState<FeatureType[]>();
  const access_token = "your key";

  useEffect(() => {
    async function getHomePage() {
      await axios
        .get(
          `https://api.buttercms.com/v2/pages/*/home-page/?auth_token=${access_token}`
        )
        .then((response) => {
          setResponse(response?.data?.data?.fields)!;
        })
        .catch((err) => console.error(err));
    }

    getHomePage();
  }, []);

  useEffect(() => {
    async function getFeatures() {
      await axios
        .get(
          `https://api.buttercms.com/v2/content/feature/?auth_token=${access_token}`
        )
        .then((response) => {
          setFeaturesResponse(response.data.data.feature);
        })
        .catch((err) => console.error(err));
    }

    getFeatures();
  }, []);

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen scrollY={true}>
        <Hero data={response?.hero_section!} />
        <Features data={featuresResponse!} />
        <Contact data={response?.contact_section!} />
        <Footer data={response?.footer_section!} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
