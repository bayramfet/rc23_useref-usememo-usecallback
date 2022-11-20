import React from 'react';
import { memo } from 'react';
import UserItem from './UserItem';

const Users = ({kullanici}) => {
  console.log('USERS COMPONENT RENDERED');

  return (
    <div className="users">
      
      {kullanici.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(Users);
