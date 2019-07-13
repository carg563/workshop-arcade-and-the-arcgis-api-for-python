import React from 'react';
import { CalciteA } from 'calcite-react/Elements';

const Twitter = ({ user }) => {
  return (
    <div>
      <CalciteA
        target="_blank"
        href={`https://twitter.com/${user}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img style={{ height: '1.5em' }} src="/static/assets/twitter.svg" />
        {user}
      </CalciteA>
    </div>
  );
};

export default Twitter;
