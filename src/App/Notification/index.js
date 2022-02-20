import { useSelector, useDispatch } from 'react-redux';

import { setNotification } from '../../actions/notification';

import './Notification.css';

const Notification = () => {
  const { notification } = useSelector((state) => state);

  if (!notification.status) return '';

  let statusClass = 'success-notification';

  if (notification.status === 'error') statusClass = 'error-notification';

  const dispatch = useDispatch();

  const clearNotifications = () => {
    setTimeout(() => {
      dispatch(setNotification({ status: null, message: null }));
    }, 5000);
  };

  return (
    <div onLoad={clearNotifications()} className={statusClass} id="notification">{notification.message}</div>
  );
};

export default Notification;
