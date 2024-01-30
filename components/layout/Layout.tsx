import React, { useEffect, useState, type FC } from 'react';
import ModelList from 'components/model-list/ModelList';
import Form from 'components/form/Form';
import styles from './Layout.module.scss';
import { useAppContext } from 'utils/contextHelper';

const API_URL = 'https://1ab5bd1cab252962.mokky.dev'; // mokky.dev used for REST API

const Layout = () => {
  const [data, setData] = useState([]);
  const {
    serverId,
    customerId, 
    serverName, 
    setServerName,
    serverType,
    setServerType
  } = useAppContext();

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/servers`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching:', error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(`${API_URL}/servers/${serverId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: serverId,
        customer_id: customerId,
        server_name: serverName,
        server_type: serverType
      })
    });
    
    if(response.ok) {
      fetchData()
    }
  }

  return (
    <div className={styles['layout']}>
      <ModelList models={data} />
      <Form 
        serverName={serverName!}
        serverType={serverType!} 
        handleSubmit={handleSubmit} 
        setServerName={setServerName} 
        setServerType={setServerType} 
      />
    </div>
  );
}

export default Layout;
