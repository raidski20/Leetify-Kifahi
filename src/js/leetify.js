
import vocabulary from './vocabulary.json';

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
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
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