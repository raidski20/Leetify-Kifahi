
import vocabulary from './vocabulary.json';

$(document).ready(function() {

    $('#dataForm').submit(function (e) {
        e.preventDefault();
        const inputString = $('#inputText').val().toLowerCase().trim();

        const result = generateLeet(inputString);
        $('#leetText').text(result);
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