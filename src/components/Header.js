import React from 'react';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <a href='#'>
          Fernando Ramos
        </a>
        <button className='btn btn-sm'>Contact me</button>
      </div>
    </div>
  </header>;
};

export default Header;
