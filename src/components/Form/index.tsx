import React from 'react';
import Label from './Label';
import Input from './Input';

function FormLabel({
  htmlFor,
  labelName,
  type,
  id,
  name,
  className,
}: {
  htmlFor: string;
  labelName: string;
  type: string;
  id: string;
  name: string;
  className: string;
}) {
  return (
    <>
      <Label htmlFor={htmlFor}>{labelName}</Label>
      <Input type={type} id={id} name={name} className={className} />
    </>
  );
}

export default FormLabel;
