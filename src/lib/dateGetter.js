const getCurrentDateTime = () => {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString("en-GB", { weekday: "short" });
  const date = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
  const time = currentDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day} ${date} ${time}`;
};

export {getCurrentDateTime}