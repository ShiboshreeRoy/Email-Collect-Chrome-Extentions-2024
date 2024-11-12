function collectEmails() {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = Array.from(document.body.innerText.matchAll(emailRegex), m => m[0]);
    return [...new Set(emails)];
  }
  