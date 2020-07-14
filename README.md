# listing_mobile_app
React Navite listing app

#Set-Up ngrok
install ngrok from https://dashboard.ngrok.com/get-started/setup

To start a HTTP tunnel forwarding to your local run:
 ./ngrok http 9000
 
 #Frontend Set up
Replace the baseUrl in the api/client.js file:
baseURL: "<your HTTP tunnel>/api"

#Backend Set up
Replace the assetsBaseUrl in the developmet.json with the HTTP tunnel:
"assetsBaseUrl": "<your HTTP tunnel>/assets/"

#Start app
From backend directory run:
node index.js

From root directory run:
npm start





