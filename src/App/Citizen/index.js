import { useSelector } from 'react-redux';

import Show from './Show';
import Create from './Create';
import Update from './Update';

const Citizen = () => {
  const { params } = useSelector((state) => state).update;
  const { citizenId } = useSelector((state) => state).ids;

  if (params) return <Update />;

  if (citizenId) return <Show />;

  return <Create />;
};

export default Citizen;
