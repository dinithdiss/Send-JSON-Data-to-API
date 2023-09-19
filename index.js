const fs = require("fs");
const axios = require("axios");

// Function to send a JSON object to the API
async function sendObjectToAPI(jsonObject) {
  try {
    // Make a POST request to the API endpoint
    const response = await axios.post(
      "http://localhost:4000/app/admin/flavorsheet",
      jsonObject
    );

    console.log("Object sent successfully:", jsonObject);
    console.log("API response:", response.data);
  } catch (error) {
    console.error("Error sending object:", jsonObject);
    console.error(error);
  }
}

// Read the JSON file
fs.readFile("Flavorsheet.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Iterate over each data entry and send it to the API
    for (const entry of jsonData) {
      sendObjectToAPI(entry);
    }
  } catch (error) {
    console.error("Error parsing JSON file:", error);
  }
});
