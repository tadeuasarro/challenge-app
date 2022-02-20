import { useSelector } from 'react-redux';

import Show from './Show';
import Create from './Create';
import Update from './Update';

const Address = () => {
  const { addressId } = useSelector((state) => state).ids;
  const { params } = useSelector((state) => state).update;

  if (params) return <Update />;

  if (addressId) return <Show />;

  return <Create />;
};

export default Address;
