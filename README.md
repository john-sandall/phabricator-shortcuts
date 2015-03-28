## Keyboard shortcuts for Phabricator

[Phabricator](http://phabricator.org) is a suite of open source tools for peer code review, task management, and project communication. Its keyboard shortcuts are generally pretty terrible, especially when compared to other web apps for task management.

This project uses the [Shortcut Manager extension](https://chrome.google.com/webstore/detail/shortcut-manager/mgjjeipcdnnjhgodgjpfkffcejoljijf) for Google Chrome.

####Instructions
1. Get the [Shortcut Manager extension](https://chrome.google.com/webstore/detail/shortcut-manager/mgjjeipcdnnjhgodgjpfkffcejoljijf).
2. Go to the settings page.
3. Click "Import settings".
4. Select all, then copy/paste everything from this file into the textbox: `https://raw.githubusercontent.com/john-sandall/phabricator-shortcuts/master/shortcuts.js`
5. Hit "Done", hopefully it worked!

####Examples
**Change status in Maniphest:**

  * Typing `s r` (`s` then `r`) closes task as resolved
  * Typing `s w` (`s` then `r`) closes task as wontfix
  * Typing `s i` (`s` then `r`) closes task as invalid
  * Typing `s s` (`s` then `r`) closes task as spite
  * Typing `s o` (`s` then `r`) reopens the task

####Caveats
These shortcuts will only work for you if your Phabricator instance is hosted on a subdomain, i.e. URL looks like `https://phabricator.example.com`. If this is not true you will need to change the "URL patterns" field on each shortcut.