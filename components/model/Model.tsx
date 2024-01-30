import React, { type FC } from 'react';
import { useAppContext } from 'utils/contextHelper';
import styles from './Model.module.scss';
import type { ModelProps } from './Model.types';

const Model: FC<ModelProps> = (model) => {
  const {
    setServerId,
    setCustomerId, 
    setServerName,
    setServerType
  } = useAppContext();

  const handleClickModel = () => {
    setServerId(model.id)
    setCustomerId(model.customer_id)
    setServerName(model.server_name)
    setServerType(model.server_type)
  }

  return (
    <li className={styles['model']} onClick={handleClickModel}>
      <p><strong>customer_id:</strong> {model.customer_id}</p>
      <p><strong>server_name:</strong> {model.server_name}</p>
      <p><strong>server_type:</strong> {model.server_type}</p>
    </li>
  );
}

export default Model;
