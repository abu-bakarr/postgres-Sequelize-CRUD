/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonGrid,
  IonPage,
  IonButtons,
} from '@ionic/react';
import { NavButtons } from '../components/NavButton';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../env';
import Posts from './Posts';

const Dashboard = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const getPosts = await axios.get(`${BASE_URL}posts/`);
    getPosts ? setPosts(getPosts.data.post) : setPosts([]);
  }, []);

  const renderPosts = (data) => {
    return <Posts posts={data} />;
  };

  return (
    <>
      <IonPage>
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <NavButtons />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <h4 className="text-center py-4 text-md">Welcome to Dev Meet</h4>
            {posts.length < 0 ? 'No Post Available' : renderPosts(posts)}
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Dashboard;