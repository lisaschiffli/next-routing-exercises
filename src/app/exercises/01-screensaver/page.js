import React from 'react';
import Link from 'next/link';

function ScreenSaverExercise() {

  return (
    <main>
      <h1>Choose your color:</h1>
      <ul>
        <li><Link href="01-screensaver/lavender">lavender</Link></li>
        <li><Link href="01-screensaver/slateblue">slateblue</Link></li>
        <li><Link href="01-screensaver/yellow">yellow</Link></li>
        <li><Link href="01-screensaver/darkorange">darkorange</Link></li>
        <li><Link href="01-screensaver/fuchsia">fuchsia</Link></li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
