// ==UserScript==
// @ShortcutManager
// @name 
// @namespace iv4aMErvzrgV
// @key 
// @include *
// @execute OpenAPage()
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name Maniphest - status resolved
// @namespace iv4aMErvzrgV
// @key s r
// @include https://phabricator.*
// ==/UserScript==
javascript:
document.getElementById('transaction-action').value = 'status';
document.getElementById('resolution').style['display'] = '';
document.getElementById('UQ0_4').value = 'resolved';
document.querySelectorAll("[action='/maniphest/transaction/save/']")[0].submit();



// ==UserScript==
// @ShortcutManager
// @name Maniphest - status wontfix
// @namespace iv4aMErvzrgV
// @key s w
// @include https://phabricator.*
// ==/UserScript==
javascript:
document.getElementById('transaction-action').value = 'status';
document.getElementById('resolution').style['display'] = '';
document.getElementById('UQ0_4').value = 'wontfix';
document.querySelectorAll("[action='/maniphest/transaction/save/']")[0].submit();



// ==UserScript==
// @ShortcutManager
// @name Maniphest - status invalid
// @namespace iv4aMErvzrgV
// @key s i
// @include https://phabricator.*
// ==/UserScript==
javascript:
document.getElementById('transaction-action').value = 'status';
document.getElementById('resolution').style['display'] = '';
document.getElementById('UQ0_4').value = 'invalid';
document.querySelectorAll("[action='/maniphest/transaction/save/']")[0].submit();



// ==UserScript==
// @ShortcutManager
// @name Maniphest - status spite
// @namespace iv4aMErvzrgV
// @key s s
// @include https://phabricator.*
// ==/UserScript==
javascript:
document.getElementById('transaction-action').value = 'status';
document.getElementById('resolution').style['display'] = '';
document.getElementById('UQ0_4').value = 'spite';
document.querySelectorAll("[action='/maniphest/transaction/save/']")[0].submit();



// ==UserScript==
// @ShortcutManager
// @name Maniphest - status open
// @namespace iv4aMErvzrgV
// @key s o
// @include https://phabricator.*
// ==/UserScript==
javascript:
document.getElementById('transaction-action').value = 'status';
document.getElementById('resolution').style['display'] = '';
document.getElementById('UQ0_4').value = 'open';
document.querySelectorAll("[action='/maniphest/transaction/save/']")[0].submit();
