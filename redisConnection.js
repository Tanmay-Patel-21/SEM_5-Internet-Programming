// Redis cannot be run on windows, to run it follow the steps below
//   1. Install linux subsytem by running the following command in powershell (administrator)
//          wsl --install
//   2. Restart PC
//   3. Run the following commands: 
//          sudo apt update
//          sudo apt install redis-server
//          redis-server
// Redis server has now started on port 6379 (default)

const redis = require('redis');
const client = redis.createClient();

client.connect();

client.on('error', (error) => {
    console.log('Error ' + error);
});
client.on('connect', () => {
    console.log("Redis conncection established successfully :)");
});
