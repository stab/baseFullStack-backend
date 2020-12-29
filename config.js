const dotenv = require('dotenv');
var path = require('path');

const result = dotenv.config({ 
    path: path.join(__dirname, 'environment', '.env') 
})
 
if (result.error) {
  throw result.error
}
 
const { parsed: envs } = result;
//console.log(envs);
module.exports = envs;
