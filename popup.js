document.getElementById('collectEmailsBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: collectEmails
      }, (results) => {
        const emails = results[0].result;
        const emailList = document.getElementById('emailList');
        emailList.innerHTML = '';
        emails.forEach(email => {
          const li = document.createElement('li');
          li.textContent = email;
          emailList.appendChild(li);
        });
      });
    });
  });
  
  function collectEmails() {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = Array.from(document.body.innerText.matchAll(emailRegex), m => m[0]);
    return [...new Set(emails)];
  }
  