const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";

async function getToken() {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, {
      email: "edward.c2022@vitstudent.ac.in",
      name: "EDWARD C",
      rollNo: "22mis0616",
      accessCode: "SfFuWg",
      clientID: "f6c7333e-bb62-4114-a2f4-2c7e875f83ce",
      clientSecret: "JWmJEdJUzXTXhPyG"
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

getToken();
