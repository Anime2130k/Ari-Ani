require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "kala",
    alias: ["xtt" ],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "✅",
    category: "General",
    start: async (client, m, {command,prefix,text,args}) => {
        let images = [
            'https://images6.alphacoders.com/103/1037400.png',
            'https://images3.alphacoders.com/110/1105901.jpg',
            'https://images5.alphacoders.com/102/1028689.jpg',
            'https://images4.alphacoders.com/102/1029828.png',
            'https://wallpaperaccess.com/full/1105099.jpg',
            'https://images8.alphacoders.com/120/1206602.png'
          ]
          
          let ariAni = await axios.get('https://chat.whatsapp.com/J66CTiDheI94vkxx6nIyp2')
let random = images[Math.floor(Math.random() * images.length)]

var caption = 
`✨ _*Ari-Ani*_  ✨\n\n🍀 *Description:* ${ariAni.data.description}\n
📎 *Repo Link:* ${ariAni.data.html_url} \n
🌠 *Total Star:* ${ariAni.data.stargazers_count}\n
💕 *Total Forks:* ${ariAni.data.forks} \n
💁🏻‍♂️ *Tutorial:* https://chat.whatsapp.com/E5dNeqOHEjr6zzduSyDNPZ \n`
await client.sendMessage(m.from,{image:{url:random}, caption:caption},{quoted:m})
    }
}
