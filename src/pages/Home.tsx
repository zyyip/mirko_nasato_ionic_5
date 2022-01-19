import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

interface Money {
  currency: string;
  amount: number;
}

function formatMoney(money: Money){
  return money.currency + money.amount.toFixed(2);
}

const Home: React.FC = () => {
  const balance = { currency: '$', amount: 123 };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Modified App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Your balance is {formatMoney(balance)}
      </IonContent>
    </IonPage>
  );
};

export default Home;
