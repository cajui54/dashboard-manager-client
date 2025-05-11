import React, { Suspense } from 'react';
import FormSearchUser from './form-search-user';
import ListUser from './list-user';
import { getAllUsers } from '@/app/_data-access/get-users';
import SpinLoading from './spin-loading';
import PaginationComponent from './pagination';

const ManagerUser = async () => {
  const users = await getAllUsers();
  return (
    <div className="w-full">
      <FormSearchUser />
      <Suspense fallback={<SpinLoading />}>
        {users.length > 0 && (
          <>
            <ListUser users={users} />
            <PaginationComponent />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default ManagerUser;
