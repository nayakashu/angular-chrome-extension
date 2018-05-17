/**
 * Class RuntimeListener
 *
 * Listener for all messages coming from
 * -> Chrome.tabs.sendMessage
 * -> Chrome.runtime.sendMessage
 */

export class RuntimeListener {
    constructor() {
        this.initializeMessagesListener();
    }

    initializeMessagesListener() {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            const command = message['command'];
            console.log('Received runtime command: ' + command);

            const response = { message: 'Hiya!' };
            sendResponse(response);
        });
    }
}
