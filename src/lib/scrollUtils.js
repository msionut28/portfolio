const calculateMaxScroll = (projects) => {
  const totalProjects = Object.keys(projects).length;
  const viewportWidth = window.innerWidth;
  const projectWidthPercentage = 30;

  const projectWidth = (viewportWidth * projectWidthPercentage) / 100;

  return (totalProjects - 1) * projectWidth;
};

const calculateOneScroll = (projects) => {
  const totalProjects = Object.keys(projects).length;
  const viewportWidth = window.innerWidth;
  const gapPercentage = viewportWidth * 0.23;

  const projectWidth = viewportWidth / totalProjects + gapPercentage;

  return projectWidth;
};

export {calculateMaxScroll, calculateOneScroll}