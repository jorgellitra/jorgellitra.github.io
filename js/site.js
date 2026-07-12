// Site helpers for the Nocturne portfolio.
window.portfolio = {
    // Hover-to-play for project cards: plays the <video>, or for YouTube cards
    // injects an autoplaying muted iframe over the thumbnail.
    playVideo(card) {
        const v = card.querySelector('video');
        if (v) {
            v.muted = true;
            v.play().catch(() => {});
            return;
        }
        const yt = card.querySelector('.youtube-embed');
        if (yt && !yt.querySelector('iframe')) {
            const id = yt.dataset.youtube;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&playsinline=1&rel=0`;
            iframe.allow = 'autoplay; encrypted-media';
            iframe.setAttribute('frameborder', '0');
            yt.appendChild(iframe);
        }
    },
    stopVideo(card) {
        const v = card.querySelector('video');
        if (v) {
            v.pause();
            try { v.currentTime = 0.01; } catch (e) {}
            return;
        }
        const iframe = card.querySelector('.youtube-embed iframe');
        if (iframe) iframe.remove();
    },
    scrollTop() {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
};

// Blazor's router does not scroll to #fragments — handle in-page anchors here.
document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.getElementById(anchor.getAttribute('href').slice(1));
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    }
});

// On touch devices there is no hover: tapping a card's media toggles playback.
if (window.matchMedia('(hover: none)').matches) {
    document.addEventListener('click', e => {
        const card = e.target.closest('[data-video-card]');
        if (!card || e.target.closest('a')) return;
        const v = card.querySelector('video');
        if (v) {
            if (v.paused) window.portfolio.playVideo(card);
            else window.portfolio.stopVideo(card);
            return;
        }
        const yt = card.querySelector('.youtube-embed');
        if (!yt) return;
        if (yt.querySelector('iframe')) window.portfolio.stopVideo(card);
        else window.portfolio.playVideo(card);
    });
}
