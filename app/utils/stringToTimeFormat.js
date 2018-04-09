export const stringToTimeFormat = (sourceTime) => {
  // if param isNaN...
  if (isNaN(sourceTime)) {
    return '- -:- -';
  }
  // get time and parse it
  const convertSourceTime = parseInt(sourceTime, 10);
  // math stuff
  const totalTime = Math.floor(convertSourceTime);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  let output = `${minutes}:${seconds}`;

  if (seconds < 10) {
    // if total seconds are less than 10, add extra '0'
    output = `${minutes}:0${seconds}`;
  }

  return output;
};
