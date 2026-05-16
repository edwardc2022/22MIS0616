function calculatePriority(notification) {
  let baseScore = 0;

  if (notification.type === "placement") {
    baseScore = 30;
  } else if (notification.type === "academic") {
    baseScore = 20;
  } else {
    baseScore = 10;
  }

  const createdTime = new Date(notification.createdAt).getTime();
  const currentTime = Date.now();

  const minutesDifference =
    (currentTime - createdTime) / (1000 * 60);

  const recencyScore = Math.max(0, 20 - minutesDifference);

  return baseScore + recencyScore;
}

module.exports = calculatePriority;
