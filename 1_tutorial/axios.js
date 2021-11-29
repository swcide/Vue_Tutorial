const axios = require('axios')


axios({
  method : 'get',
  url : 'https://localhost:3000/testa'
}).then((res)=>{
  console.log(res)
})