# Stage 1 - Notification API Design

## APIs

### Get Notifications

GET /notifications

Response:

```json
[
  {
    "id": 1,
    "title": "Placement Drive",
    "message": "Company registration opened",
    "type": "placement",
    "isRead": false,
    "createdAt": "2026-05-16T10:00:00Z"
  }
]
```

### Create Notification

POST /notifications

Request:

```json
{
  "title": "Exam Result",
  "message": "Results published",
  "type": "academic"
}
```

### Mark Notification as Read

PATCH /notifications/:id/read

### Get Unread Notifications

GET /notifications/unread

---

## Headers

```http
Authorization: Bearer <token>
Content-Type: application/json
```

---

## Real-Time Notification Delivery

WebSocket can be used for instant notification delivery to connected clients.
REST APIs handle CRUD operations, while WebSocket pushes new notifications without requiring repeated polling from the client side.

# Stage 2 - Database Choice

PostgreSQL is suitable for the notification system because the data is structured and relational in nature.

Reasons for choosing PostgreSQL:

* Supports indexing for faster query performance
* Handles filtering, sorting, and pagination efficiently
* ACID compliance ensures reliable transactions
* Suitable for large-scale read and write operations

Suggested optimizations:

* Add indexes on frequently queried columns like studentID and createdAt
* Use pagination to avoid loading large datasets at once
* Partition old notification records if data grows significantly

# Stage 3 - Query Optimization

The query becomes slow because filtering and sorting are performed on large amounts of data without an optimized index.

Current query:

```sql
SELECT * FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC;
```

Recommended optimization:

```sql
CREATE INDEX idx_notifications_student_read_created
ON notifications(studentID, isRead, createdAt DESC);
```

Why this helps:

* Reduces full table scans
* Improves filtering speed
* Optimizes sorting on createdAt
* Improves response time for unread notification retrieval

Why indexing every column is not recommended:

* Increases storage usage
* Slows down insert and update operations
* Too many indexes can reduce overall database performance

# Stage 4 - Scaling Strategy

To support millions of notifications and high traffic during peak hours, the system can be scaled using the following approaches:

* Use Redis caching for frequently accessed unread notifications
* Implement pagination to reduce the amount of data loaded per request
* Use lazy loading on the client side for older notifications
* Use WebSocket connections for real-time updates instead of continuous polling
* Deploy multiple backend instances behind a load balancer

Possible challenge:

* Cached data may become temporarily inconsistent with the database if updates are not synchronized properly

# Stage 5 - Email Queue Architecture

Sending emails directly inside the main API request is not efficient for large-scale systems because email delivery can be slow and may block other requests.

Recommended approach:

* Push email jobs into a message queue
* Process emails asynchronously using worker services
* Retry failed email jobs automatically
* Use a dead letter queue for permanently failed messages

Suitable technologies:

* RabbitMQ
* Kafka
* BullMQ with Redis

Advantages:

* Faster API response time
* Better scalability during heavy traffic
* Improved fault tolerance and retry handling

# Stage 6 - Priority Notification API
