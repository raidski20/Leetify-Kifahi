
import vocabulary from './vocabulary.json';
import { showToastMessage } from './customSweetalertFunctions.js';

$(document).ready(function() {

    $('#dataForm').submit(function (e) {
        e.preventDefault();
        const inputString = $('#inputText').val().toLowerCase().trim();

        const result = generateLeet(inputString);
        $('#leetText').text(result);
    });

    $('#copyButton').click(async function () {
        const encryptedText = $('#leetText').text().trim();
        try {
            await navigator.clipboard.writeText(encryptedText);
            showToastMessage('تم النسخ بنجاح', 'success');
        } catch (err) {
            showToastMessage('حدث خطأ ما أثناء النسخ', 'error', 'error');
        }
    });
});

function generateLeet(input) {
    return input
        .split('')
        .map(function (char) {
            return vocabulary[char] || char;
        })
        .join('');
}