import React from 'react';

import { Btn } from './styles';

const Button = ({ ...props }) => {
  return <Btn {...props} />;
};

export default Button;
