import React from 'react';
import Loader from 'react-js-loader';
import './Loader.scss';

export const LoaderView = () => {
  return (
    <div className="loader">
      <Loader
        type="bubble-loop"
        bgColor={'white'}
        title={''}
        color={'white'}
        size={100}
      />
    </div>
  );
};
