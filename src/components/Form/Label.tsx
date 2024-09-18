import React from 'react';

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="leading-7 text-sm">
      {children}
    </label>
  );
}

export default Label;
