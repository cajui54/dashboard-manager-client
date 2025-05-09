import React from 'react';
import FormSearchUser from './form-search-user';
import ListUser from './list-user';

const ManagerUser = () => {
  return (
    <div className="w-full">
      <FormSearchUser />
      <ListUser />
    </div>
  );
};

export default ManagerUser;
