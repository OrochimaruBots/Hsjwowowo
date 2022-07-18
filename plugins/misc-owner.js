function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, {quoted:fkontak})
handler.alias = ['owner']
handler.command = /^(owner)$/i

export default handler
