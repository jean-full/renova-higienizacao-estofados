document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            alert(`Você clicou em: ${service}`);
        });
    });
});
