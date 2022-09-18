## GeoLocation

#### Steps for Running this Repository

1. git clone this repo.
2. For installing dependencies - `npm install`
3. Before running server setup/create your `.env` file ,it has keys as [`API_KEY`,`HOST`,`PORT`]
4. To run the server enter - `node server.js`

---

#### For Unit Testing

1. Run - `npm run test`

---

#### For Taking inputs from File

1. Go to `input.txt` and enter the List of Cities(one on each line) whose Location you want to get.
2. Output of the result will be stored in `output.txt`

---

#### API REQUESTS

1. For Getting location of batch of cities
   HIT THIS URL - `http://localhost:{PORT}/api/batch`
2. For fetching details about a single city
   HIT THIS URL - `http://localhost:{PORT}/api/geoCode?address={ADDRESS}&key={API_KEY}`
