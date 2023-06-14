import React from 'react';
import SurahDropdown from './SurahDropdown';

const SurahVerseContainer = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', padding: '10px' }}>
        <SurahDropdown />
      </div>
      <div style={{ flex: '1', padding: '10px' }}>
        <SurahDropdown />
      </div>
    </div>
  );
};

export default SurahVerseContainer;
