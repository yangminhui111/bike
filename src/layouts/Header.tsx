import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='header'>
        <h3>Header组件</h3>
    </div>
  );
};

export default Header;
