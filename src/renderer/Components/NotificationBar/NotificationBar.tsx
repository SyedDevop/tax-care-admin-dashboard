import { Timestamp } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useDb } from '../../Hooks';
import { isObjectEmpty } from '../../Utils';
// import { NotificationCard } from './NotificationCard';
interface NotifyDta {
  client: string;
  name: string;
  orderId: string;
  title: string;
  issuedDate: Timestamp;
}

const NotificationBar: React.FC = () => {
  const { onSnapshot, getQueryReference } = useDb();
  const [notificationData, setNotificationData] = useState<NotifyDta[]>([]);

  useEffect(() => {
    const q = getQueryReference('notification');
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setNotificationData([]);
        querySnapshot.forEach((change) => {
          setNotificationData((pre) => [
            ...pre,
            { ...change.data() } as NotifyDta,
          ]);
        });
      },
      (err) => {
        console.error(err);
      }
    );
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (notificationData.length > 0) {
      const { title, name, client, orderId, issuedDate } =
        notificationData.reverse()[0];
      // eslint-disable-next-line no-new
      new Notification(title, {
        body: name,
        icon: 'assets\\icons\\32x32.png',
        image: 'assets\\icons\\32x32.png',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationData[0]]);

  return (
    <section id="notification">
      <div className="notification__section">
        {/* <NotificationCard /> */}
        {notificationData.map(({ client, name, title, orderId }) => {
          return (
            <div key={orderId} className="notification__card">
              <h1>{title}</h1>
              <h5>{client}</h5>
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NotificationBar;
