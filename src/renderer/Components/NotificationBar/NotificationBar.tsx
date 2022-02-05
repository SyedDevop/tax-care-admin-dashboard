import React from 'react';

import { useNotification } from './useNotification';

const NotificationBar: React.FC = () => {
  const { handelNotificationClick, notificationData } = useNotification();
  return (
    <section id="notification">
      <div className="notification__section">
        {notificationData.map(({ client, name, title, orderId, id }) => {
          return (
            <div
              key={orderId}
              className="notification__card"
              onClick={() => {
                // handelNotificationClick(id);
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
