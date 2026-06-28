const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "jibon",
    version: "1.0",
    author: "💋𝗠𝗢𝗦𝗧𝗔𝗞𝗜𝗠 × 𝗕𝗔𝐃𝐇𝐎𝐍💀",
    countDown: 5,
    role: 0,
    shortDescription: "Jibon information",
    longDescription: "Displays information about Jibon when triggered",
    category: "reply",
  },
  
  onStart: async function () {},
  
  onChat: async function ({ event, message, getLang }) {
    if (event.body?.toLowerCase() !== "jibon ke") {
      return;
    }

    const replyText = `
𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 𝐉𝐈𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃
╚═ ══════════════ ═╝

═《 💬 𝐁𝐎𝐓 𝐈𝐍𝐓𝐑𝐎 💬 》═

✨𝗜 𝗔𝗠 𝗬𝗢𝗨𝗥 𝗙𝗔𝗩𝗢𝗨𝗥𝗜𝗧𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧✨  

💙𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦💙
[ - ]─⎝Ꮇ🅔Ꭱ🅡🅨⎞▁▁▁🦋😘🩵🪽󱢏

👑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 𝐉𝐈𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃
📡 𝐎𝐧𝐥𝐢𝐧𝐞: ✅  𝐎𝐍𝐋𝐈𝐍𝐄
📛 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: [ - ]─⎝Ꮇ🅔Ꭱ🅡🅨⎞▁▁▁🦋😘🩵🪽󱢏
🔖 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.0  
➤ 𝐏𝐫𝐞𝐟𝐢𝐱: -  

📘 COMMANDS: 148 
🔐 ADMINS ONLINE: -
🌍 USERS: -

👑 𝐀𝐝𝐦𝐢𝐧 𝐍𝐚𝐦𝐞: 𝐉𝐈𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃
🕌 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐌𝐔𝐒𝐋𝐈𝐌
🎓 𝐒𝐓𝐔𝐃𝐘: 
🇧🇩 𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐘: 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇𝐈
🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: CHATKIL, NOHAKHALI 

📎 𝐒𝐎𝐂𝐈𝐀𝐋𝐒 & 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒:
📸 IG: 𝐒𝐂𝐘𝐋4_𝐒𝐌0𝐊3
📘 FB: 𝐉𝐈𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃 / 𝐉𝐈𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃
📨 TG: 01894398338
▶️ YT: 𝐁𝐑𝐒 𝐘𝐓
🎮 Discord: 𝐒𝐌𝐎𝐊𝐄𝐘𝐘𝐘_𝐉𝐈𝐁𝐎𝐍
📧 Email: jibonmals@gmail.com
📱 Phone/WhatsApp: +8801894398338

📅 LAST RESTART: 2026-04-25
🌐 SERVER ID: *****

`;

    try {
      
      let videoUrl = "https://files.catbox.moe/2acx7d.mp4";
      let response = await axios.get(videoUrl, { responseType: "stream" });
      
      
      if (!response.data) {
        videoUrl = "https://drive.google.com/uc?export=download&id=10NCI0fJW4mwMKmTr7NW15yc0DhB5A8Ad";
        response = await axios.get(videoUrl, { responseType: "stream" });
      }

      
      const tempDir = path.join(__dirname, 'temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }

      const videoPath = path.join(tempDir, 'jibon.mp4');
      const writer = fs.createWriteStream(videoPath);
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      return message.reply({
        body: replyText,
        attachment: fs.createReadStream(videoPath)
      });

    } catch (err) {
      console.error("Error:", err);
      return message.reply({
        body: replyText + "\n\n[Video unavailable right now]",
      });
    }
  }
};
