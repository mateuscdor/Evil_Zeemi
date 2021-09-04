function handler(m) {
//   Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '923435041018', 'Evil_Zeemi', m)
  this.sendContact(m.chat, '923435041018', 'Evi_Zeemi', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
