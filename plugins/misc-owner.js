function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([quoted:fkontak]) => [quoted:fkontak]), m)
}
handler.alias = ['owner']
handler.command = /^(owner)$/i

export default handler
