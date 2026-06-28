module.exports = {
  config: {
    name: "rxjibon",
    version: "1.0",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "triggered by 🫦",
    longDescription: "sends Fahad video when 🫦 emoji is sent",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message }) {
    if (event.body && event.body.includes("🫦")) {
      const video = "https://files.catbox.moe/g1wej3.mp4";

      return message.reply({
        body: " 𝐉𝐈𝐁𝐎𝐍 𝐀𝐇𝐌𝐄𝐃 𝐏𝐑𝐄𝐌𝐈𝐔𝐌💫𝐓𝐇𝐈𝐒 𝐐𝐔𝐀𝐋𝐈𝐓𝐘🎬",
        attachment: await global.utils.getStreamFromURL(video)
      });
    }
  }
}
