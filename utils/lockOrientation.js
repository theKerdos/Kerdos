const lockOrientation = () => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('portrait').catch((error) => {
        console.error('Orientation lock failed: ', error);
      });
    } else {
      console.warn('Orientation API not supported.');
    }
  };
  
  export default lockOrientation;