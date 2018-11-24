import debug from 'debug';

const BASE = 'PTG';
const COLORS = {
  trace: 'green',
  info: 'blue',
  warn: 'magenta',
  error: 'red'
};

export class Log {
  generateMessage = (level, message, source) => {
    const namespace = `${BASE}:${level}`; // Set prefix which allows debug to enable the message
    const createDebug = debug(namespace);
    
    createDebug.color = COLORS[level]; // Set color of message based on the level
    
    if (source) {
      createDebug(source, `\n  ${message}`);
    } else {
      createDebug( `\n  ${message}`);
    }
  }

  trace = (message, source) => this.generateMessage('trace', message, source);
  info = (message, source) => this.generateMessage('info', message, source);
  warn = (message, source) => this.generateMessage('warn', message, source);
  error = (message, source) => this.generateMessage('error', message, source);
}


export default new Log();
