
const defaultDateOptions = {
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}

/**
 * Format a date
 * @param {Date} date unformatted date
 * @param {object} options unformatted date
 * @returns {Date} formatted date
 */
function formatDate(date, options = defaultDateOptions) {
  return new Date(date).toLocaleDateString('en-US', options);
}

scrollToBottom = () => { // TODO: make more 'react'-like
  const chatDisplay = document.getElementById('chatDisplay');
  // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
  console.log('  >> scroll top: ', chatDisplay.scrollTop);
  console.log('  >> scroll height: ', chatDisplay.scrollHeight);
}


export {
  formatDate,
};
