export const getCurrentPos = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
export const loadPos = async () => {
  try {
    const position = await getCurrentPos();
    const { latitude, longitude } = position.coords;

    const userCoords = [latitude, longitude];
    // await console.log(`${lat}; ${lon}`)
    localStorage.setItem("userLocation", JSON.stringify(userCoords));
    
  } catch (error) {
    console.error("UhOH!,", error);
  }
};
