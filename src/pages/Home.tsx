import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonFooter } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='white'>
          <IonTitle class='ion-text-center'>Metric Converter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p id='dari'>From : </p>
        <br></br>
        <p id='ke'>To : </p>
        <ExploreContainer />
        <IonFooter id='foot'>By: Syalom Megumi Fortuna Warongan</IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
