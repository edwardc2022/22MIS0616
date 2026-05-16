const Log = require("./logger");

async function testLogger() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJlZHdhcmQuYzIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkyNzYwNiwiaWF0IjoxNzc4OTI2NzA2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNTk5YTBkZDQtNmNjNy00ZDhiLTllNWUtM2ZjNzg0MzJjYmNlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZWR3YXJkIGMiLCJzdWIiOiJmNmM3MzMzZS1iYjYyLTQxMTQtYTJmNC0yYzdlODc1ZjgzY2UifSwiZW1haWwiOiJlZHdhcmQuYzIwMjJAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJlZHdhcmQgYyIsInJvbGxObyI6IjIybWlzMDYxNiIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6ImY2YzczMzNlLWJiNjItNDExNC1hMmY0LTJjN2U4NzVmODNjZSIsImNsaWVudFNlY3JldCI6IkpXbUpFZEpVelhUWGhQeUcifQ.wYx6MR1FVtGJNFMDgoPhu9ZBJpSbFYuiylJ1txJcVIQ";

  const result = await Log(
    "backend",
    "info",
    "middleware",
    "Logger middleware integrated successfully",
    token
  );

  console.log(result);
}

testLogger();
