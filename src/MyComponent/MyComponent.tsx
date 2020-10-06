import React from 'react';

interface IMyComponentProps {
    text: string;
}

type Props = IMyComponentProps;

const MyComponent = (props: Props) => {
  const { text } = props;

  return (
    <p style={{ color: 'red' }}>
      {text}
    </p>
  );
};

export { MyComponent };
