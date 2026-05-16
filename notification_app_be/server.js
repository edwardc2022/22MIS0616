const express = require("express");

const notifications = require("./notifications");
const calculatePriority = require("./priority");

const app = express();

app.get("/notifications/priority", (req, res) => {

  const prioritizedNotifications = notifications.map((notification) => {
    return {
      ...notification,
      priorityScore: calculatePriority(notification)
    };
  });

  prioritizedNotifications.sort(
    (a, b) => b.priorityScore - a.priorityScore
  );

  const topNotifications = prioritizedNotifications.slice(0, 10);

  res.json(topNotifications);

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
