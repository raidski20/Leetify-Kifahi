export function showToastMessage(text, icon) {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        text: text,
        icon: icon
    });
}