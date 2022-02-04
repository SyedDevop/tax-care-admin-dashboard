import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Timestamp } from 'firebase/firestore';
import icon from '../../../../assets/resource/tc-logo.png';
import { useDb } from '../../Hooks';
import { formatTimestamp } from '../../Utils';

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
  const { pathname } = useLocation();
  const { push } = useHistory();

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
      const notify = new Notification(title, {
        body: `client: ${client} \nname: ${name} \ndate: ${formatTimestamp(
          new Date(issuedDate.toDate())
        )} ${issuedDate.toDate().toLocaleTimeString()}`,
        icon,
      });
      if (notify !== null) {
        notify.addEventListener('click', () => {
          window.electron.ipcRenderer.windowMaximize();
          if (pathname !== '/orders') {
            push('/orders');
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationData[0]]);

  return (
    <section id="notification">
      <div className="notification__section">
        {/* <NotificationCard /> */}
        {notificationData.map(({ client, name, title, orderId }) => {
          return (
            <div
              key={orderId}
              className="notification__card"
              onClick={() => {
                if (pathname !== '/orders') {
                  push('/orders');
                }
              }}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
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
