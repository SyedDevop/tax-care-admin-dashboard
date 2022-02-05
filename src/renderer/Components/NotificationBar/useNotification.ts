import { useEffect, useRef, useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { useHistory, useLocation } from 'react-router-dom';

import icon from '../../../../assets/resource/tc-logo.png';

import { formatTimestamp } from '../../Utils';
import { useDb } from '../../Hooks';

interface NotifyDta {
  id: string;
  client: string;
  name: string;
  orderId: string;
  title: string;
  issuedDate: Timestamp;
}

const useNotification = () => {
  const { onSnapshot, getQueryReference, deleteDocument } = useDb();
  const [notificationData, setNotificationData] = useState<NotifyDta[]>([]);
  const { pathname } = useLocation();
  const { push } = useHistory();
  const preListCount = useRef(' ');

  const isPathnameEqualToOrder = () => {
    if (pathname !== '/orders') {
      push('/orders');
    }
  };

  useEffect(() => {
    const q = getQueryReference('notification');
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setNotificationData([]);
        querySnapshot.docChanges().forEach((change) => {
          preListCount.current = change.type;
        });
        querySnapshot.forEach((change) => {
          setNotificationData((pre) => [
            ...pre,
            { ...change.data(), id: change.id } as NotifyDta,
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
  // TODO:un comment notification alert && handelNotificationClick---
  // TODO: --- in NotificationBar component.

  //
  // useEffect(() => {
  //   if (notificationData.length > 0 && preListCount.current === 'added') {
  //     const { title, name, client, issuedDate } = notificationData.reverse()[0];
  //     const notify = new Notification(title, {
  //       body: `client: ${client} \nname: ${name} \ndate: ${formatTimestamp(
  //         new Date(issuedDate.toDate())
  //       )} ${issuedDate.toDate().toLocaleTimeString()}`,
  //       icon,
  //       silent: false,
  //     });

  //     if (notify !== null) {
  //       notify.addEventListener('click', () => {
  //         window.electron.ipcRenderer.windowMaximize();
  //         isPathnameEqualToOrder();
  //       });
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [notificationData[0]]);
  const handelNotificationClick = async (id: string) => {
    isPathnameEqualToOrder();
    await deleteDocument(id, 'notification');
  };

  return { notificationData, isPathnameEqualToOrder, handelNotificationClick };
};

export { useNotification, NotifyDta };
