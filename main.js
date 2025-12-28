function startGame() { game.startGame(); }

function setupSettingsMenu() {
    const wrap = document.getElementById('settings-wrap');
    const btn = document.getElementById('settings-btn');
    if (!wrap || !btn) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrap.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    wrap.querySelectorAll('.menu-item').forEach((item) => {
        item.addEventListener('click', () => {
            wrap.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (wrap.contains(e.target)) return;
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    });
}

document.addEventListener('DOMContentLoaded', setupSettingsMenu);
