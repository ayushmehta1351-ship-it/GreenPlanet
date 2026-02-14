(function () {
    const form = document.getElementById('sim-form');
    const feedback = document.getElementById('sim-feedback');
    const recipient = document.getElementById('recipient');
    const amount = document.getElementById('amount');

    if (!form || !feedback) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const addr = (recipient && recipient.value.trim()) || '';
        const amt = (amount && amount.value) || '0';
        if (!addr) {
            feedback.textContent = 'Enter a recipient address (e.g. 0x...).';
            feedback.style.color = '#c53030';
            return;
        }
        if (!amt || parseInt(amt, 10) < 1) {
            feedback.textContent = 'Enter a valid amount (at least 1).';
            feedback.style.color = '#c53030';
            return;
        }
        feedback.textContent = 'Simulation: ' + amt + ' credits transferred to ' + (addr.length > 12 ? addr.slice(0, 8) + '...' + addr.slice(-6) : addr) + '.';
        feedback.style.color = 'var(--green-mid, #1a7a4c)';
    });
})();
