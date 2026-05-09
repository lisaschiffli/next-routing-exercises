import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

async function ScreenSaverColor( {params} ) {
  const {selectedColor} =  await params;
  
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={selectedColor} />
    </main>
  );
}

export default ScreenSaverColor;
