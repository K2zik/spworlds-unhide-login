// ==UserScript==
// @name         SP Worlds — показать кнопки Discord/Telegram
// @name:en      SP Worlds — Show Discord/Telegram Buttons
// @namespace    spworlds-unhide-login
// @version      1.0
// @description  Убирает класс "hidden" с кнопок входа через Discord и Telegram в модалке "Вход в аккаунт" на spworlds.ru
// @description:en Removes the "hidden" class from the Discord and Telegram login buttons in the "Log In" modal on spworlds.ru
// @author       K1zik
// @match        https://spworlds.ru/*
// @run-at       document-idle
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function () {
    'use strict';
 
    function unhideLoginButtons() {
        const buttons = document.querySelectorAll('dialog button.hidden');
        buttons.forEach((btn) => {
            const text = btn.textContent.trim();
            if (text.includes('Discord') || text.includes('Telegram')) {
                btn.classList.remove('hidden');
            }
        });
    }
 
    unhideLoginButtons();
 
    const observer = new MutationObserver(() => {
        unhideLoginButtons();
    });
 
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
})();
