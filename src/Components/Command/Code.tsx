import * as React from 'react';

export default function Code(props: { text: string}) {

  const {text} = props;

  return <span
    style={{
      cursor: 'pointer',
      background: '#eee',
      display: 'inline',
      paddingLeft: '3px',
      paddingRight: '3px',
      paddingTop: '1px',
      paddingBottom: '1px'
    }}
  >
    {text}
  </span>

}
