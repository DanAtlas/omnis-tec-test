import React, { type FC } from 'react';
import Model from '../model/Model';
import styles from './ModelList.module.scss';
import type { ModelProps } from '../model/Model.types';

interface ModelListProps {
  models: ModelProps[];
};

const ModelList: FC<ModelListProps> = ({ models }) => {
  return (
    <div className={styles['model-list']}>
      <h1 className={styles['model-list__title']}>Cписок серверов</h1>
      <ul className={styles['model-list__wrapper']}>
        {models.map((model: ModelProps) => (
          <Model 
            key={model.customer_id}
            id={model.id}
            customer_id={model.customer_id} 
            server_name={model.server_name} 
            server_type={model.server_type} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ModelList;
