import React, { useEffect, useState, type FC } from 'react';
import styles from './Form.module.scss';
import type { FormProps } from './Form.types';

const Form: FC<FormProps> = ({
  serverName,
  serverType,
  handleSubmit,
  setServerName,
  setServerType
}) => {
  return (
    <div className={styles['form']}>
      <h1 className={styles['form__title']}>Форма редактирования</h1>
      {serverName !== '' ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              name="server_name"
              value={serverName}
              onChange={(e)=> setServerName(e.target.value)}
              className={styles['form__input']}
            />
          </div>
          <div>
            <select 
              name="server_type" 
              value={serverType}
              onChange={(e)=> setServerType(e.target.value)}
              className={styles['form__select']}
            >
              <option value="vds">vds</option>
              <option value="dedicated">dedicated</option>
              <option value="hosting">hosting</option>
            </select>
          </div>
          <button type="submit" className={styles['form__button']}>Сохранить</button>
        </form>
      ) : (
        <div>
          <div className={styles['form__sample']}></div>
          <div className={styles['form__sample']}></div>
          <div className={styles['form__sample']}></div>
        </div>
      )}
    </div>
  );
}

export default Form;
