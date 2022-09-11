import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className='footer'>
        <h3>Footer组件</h3>
    </div>
  );
};

export default Footer;
