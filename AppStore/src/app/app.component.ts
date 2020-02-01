import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppStore';
  deferredInstallPrompt = null;

  constructor() {
    window.addEventListener('beforeinstallprompt', this.saveBeforeInstallPromptEvent);
    window.addEventListener('appinstalled', this.logAppInstalled);
  }
  // CODELAB: Add event listener for beforeinstallprompt event


  /**
   * Event handler for beforeinstallprompt event.
   *   Saves the event & shows install button.
   *
   * @param {Event} evt
   */
  saveBeforeInstallPromptEvent(evt) {
    // CODELAB: Add code to save event & show the install button.
    this.deferredInstallPrompt = evt;
    const installButton = document.getElementById('butInstall');
    installButton.removeAttribute('hidden');
  }


  /**
   * Event handler for butInstall - Does the PWA installation.
   *
   * @param {Event} evt
   */
  installPWA(evt) {
    // CODELAB: Add code show install prompt & hide the install button.
    this.deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribute('hidden', true);

    // CODELAB: Log user response to prompt.
    this.deferredInstallPrompt.userChoice
      .then((choice) => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt', choice);
        } else {
          console.log('User dismissed the A2HS prompt', choice);
        }
        this.deferredInstallPrompt = null;
      });

  }

  // CODELAB: Add event listener for appinstalled event

  /**
   * Event handler for appinstalled event.
   *   Log the installation to analytics or save the event somehow.
   *
   * @param {Event} evt
   */
  logAppInstalled(evt) {
    // CODELAB: Add code to log the event
    console.log('AppStore App was installed.', evt);

  }
}
