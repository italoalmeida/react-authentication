import React from 'react';

import { FormField, Input, InputHelper } from './styles';

const Field = ({ inputRef, error, ...rest }: any) => {
  return (
    <FormField>
      <Input ref={inputRef} {...rest} />
      {error && <InputHelper>{error.message}</InputHelper>}
    </FormField>
  );
};

export default Field;
