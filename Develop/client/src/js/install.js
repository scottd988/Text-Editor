const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("event" + event)
    event.preventDefault();
// Save the event in the window so that we can trigger it later.
  window.deferredPrompt = event;
  // Toggle the class 'hidden' on the element with the id 'butInstall' and set the value of the variable 'butInstall' to the element with the id 'butInstall'
  butInstall.classList.toggle('hidden', false)
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;   
  }
  // Show the prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

  // Clear the deferredPrompt variable if the app was successfully installed.
  window.deferredPrompt = null;
});
