// utilities.js

function truncateText(text, wordCount) {
  const words = text.split(' ')
  const truncatedText = words.slice(0, wordCount).join(' ')
  return truncatedText
}

module.exports = { truncateText }
