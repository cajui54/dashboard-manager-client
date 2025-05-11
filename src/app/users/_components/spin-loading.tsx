import { Loader } from 'lucide-react';
import React from 'react';

const SpinLoading = () => {
  return (
    <div className="mx-auto mt-10 w-4/5 space-x-2">
      <p>
        <Loader className="animate-spin" /> Carregando...
      </p>
    </div>
  );
};

export default SpinLoading;
