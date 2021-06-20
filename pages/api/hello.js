// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
export default (req, res) => {
  let sand = req.body.clay;
  let clay = req.body.silt;
  let silt = req.body.sand;
  if (req.method === 'POST') {
    axios.post('http://45.79.45.68:3011/soiltexture', {
      "clay":clay,
      "sand":sand,
      "silt":silt
  }) .then((result) => {
    res.send(result.data)
  }).catch((err) => {
    console.log(err)
  });
  }

}
