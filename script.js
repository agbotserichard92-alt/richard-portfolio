const btn = document.getElementById('themeBtn');

btn.addEventListener('click', function() {
    alert('Button was clicked!');
    document.body.classList.toggle('light-mode');
});