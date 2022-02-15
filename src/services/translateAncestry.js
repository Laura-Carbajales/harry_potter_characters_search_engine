const translateAncestry = (ancestry) => {
  switch (ancestry) {
    case 'half-blood':
      ancestry = 'Sangre Mixta';
      break;
    case 'muggleborn':
      ancestry = 'Sangre Sucia';
      break;
    case 'pure-blood':
      ancestry = 'Sangre Pura';
      break;
    case '':
      ancestry = null;
      break;
    default:
      ancestry = null;
  }
  return ancestry;
};
export default translateAncestry;
