/**
 * Reference: https://www.red-gate.com/simple-talk/dotnet/software-tools/developing-google-chrome-extension-using-angular-4/
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.connectWithContentScript();
    this.sendContentScriptCommand();
  }

  connectWithContentScript() {
    const tabQueryData = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(tabQueryData, (tabs) => {
      /**
       * Chrome.tabs.connect – This opens a communication port to the selected browser tab,
       * such as the currently active one; and allows it to send the message.
       * This can…
       * -> communicate within single extension elements
       * -> define a method to handle an incoming response event
       */
      const port = chrome.tabs.connect(tabs[0].id);
      port.postMessage('Zahardanik!');
      port.onMessage.addListener((response) => {
        console.log('Content script connected!: ' + response);
      });
    });
  }

  sendContentScriptCommand() {
    const tabQueryData = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(tabQueryData, (tabs) => {
      const commandMessage = { command: 'Grand Salute!' };
      /**
       * Chrome.tabs.sendMessage – This sends the message to the selected browser tab,
       * such as the currently active one. This allows us to …
       * -> send message within currently executed extension by default.
       * -> define an ID of the extension, especially to a different one
       * -> define a method to handle an incoming response event
       */
      chrome.tabs.sendMessage(tabs[0].id, commandMessage, (response) => {
        const responseMessage = response['message'];
        console.log('Content script responded: ' + responseMessage);
      });
    });
  }
}
