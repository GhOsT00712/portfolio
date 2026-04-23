document.addEventListener('DOMContentLoaded', () => {
    const magnets = document.querySelectorAll('.magnetic-wrap');
    const avatarPanel = document.querySelector('.hero-avatar-panel');
    const laptopCode = document.querySelector('.laptop-code');
    const trackedLinks = document.querySelectorAll('[data-track-event]');
    const defaultLaptopText = laptopCode ? laptopCode.textContent : '';
    const bootLaptopText = '#compiling';
    const bootTargets = Array.from(document.querySelectorAll('[data-boot-type]'));
    const postBootTargets = Array.from(document.querySelectorAll('[data-post-boot-type]'));
    const terminalSections = Array.from(document.querySelectorAll('.terminal-section'));
    const TRACK_ENDPOINT = '/api/track-click';
    const typeDelay = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

    const prepareTypeTarget = (element) => {
        const sourceText = element.dataset.typeSource ?? element.textContent.trim();
        element.dataset.typeSource = sourceText;
        return sourceText;
    };

    const renderFinalText = (element) => {
        element.textContent = prepareTypeTarget(element);
        element.classList.remove('is-typing');
    };

    const typeText = async (element) => {
        const sourceText = prepareTypeTarget(element);
        const speed = Number(element.dataset.typeSpeed || 28);

        element.textContent = '';
        element.classList.add('is-typing');

        for (let index = 0; index < sourceText.length; index += 1) {
            element.textContent = sourceText.slice(0, index + 1);
            await typeDelay(speed);
        }

        element.classList.remove('is-typing');
    };

    const revealAllSections = () => {
        bootTargets.forEach(renderFinalText);
        postBootTargets.forEach(renderFinalText);
        terminalSections.forEach((section) => {
            section.classList.add('is-revealed');
            section.querySelectorAll('[data-type-text]').forEach(renderFinalText);
        });
        document.body.classList.add('is-booted');
    };

    const activateSection = async (section, observer) => {
        if (section.dataset.typed === 'true') {
            if (observer) observer.unobserve(section);
            return;
        }

        section.dataset.typed = 'true';
        section.classList.add('is-active');

        const targets = Array.from(section.querySelectorAll('[data-type-text]'));
        for (const target of targets) {
            await typeText(target);
            await typeDelay(80);
        }

        section.classList.remove('is-active');
        section.classList.add('is-revealed');

        if (observer) {
            observer.unobserve(section);
        }
    };

    const startSectionAnimations = () => {
        if (!('IntersectionObserver' in window)) {
            terminalSections.forEach((section) => {
                section.classList.add('is-revealed');
                section.querySelectorAll('[data-type-text]').forEach(renderFinalText);
            });
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activateSection(entry.target, observer);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -12% 0px'
        });

        terminalSections.forEach((section) => observer.observe(section));
    };

    const sendClickMetric = (link) => {
        const event = link.dataset.trackEvent;
        if (!event) return;

        const payload = JSON.stringify({
            event,
            href: link.href,
            label: link.dataset.trackLabel || '',
            location: window.location.pathname,
        });

        if (navigator.sendBeacon) {
            navigator.sendBeacon(
                TRACK_ENDPOINT,
                new Blob([payload], { type: 'application/json' })
            );
            return;
        }

        fetch(TRACK_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            keepalive: true,
        }).catch(() => {});
    };

    const runBootSequence = async () => {
        bootTargets.forEach((target) => {
            prepareTypeTarget(target);
            target.textContent = '';
        });
        postBootTargets.forEach((target) => {
            prepareTypeTarget(target);
            target.textContent = '';
        });

        document.body.classList.add('is-booting');
        if (laptopCode) {
            laptopCode.textContent = bootLaptopText;
        }

        for (const target of bootTargets) {
            await typeText(target);
            await typeDelay(120);
        }

        await typeDelay(700);
        document.body.classList.remove('is-booting');
        document.body.classList.add('is-avatar-settling');
        await typeDelay(950);
        document.body.classList.remove('is-avatar-settling');
        document.body.classList.add('is-post-boot-typing');

        for (const target of postBootTargets) {
            await typeText(target);
            await typeDelay(100);
        }

        document.body.classList.remove('is-post-boot-typing');
        document.body.classList.add('is-booted');
        if (laptopCode) {
            laptopCode.textContent = defaultLaptopText;
        }
        startSectionAnimations();
    };

    magnets.forEach((magnet) => {
        const button = magnet.querySelector('.magnetic-btn');

        if (!button) return;

        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const strength = 0.3;

            button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });

        magnet.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0px, 0px)';
        });
    });

    trackedLinks.forEach((link) => {
        link.addEventListener('click', () => {
            sendClickMetric(link);
        });
    });

    if (avatarPanel) {
        let cheerResetTimeout;

        const playAvatarCheer = () => {
            avatarPanel.classList.remove('is-cheering');
            void avatarPanel.offsetWidth;
            avatarPanel.classList.add('is-cheering');

            if (laptopCode) {
                laptopCode.textContent = bootLaptopText;
                window.clearTimeout(cheerResetTimeout);
                cheerResetTimeout = window.setTimeout(() => {
                    laptopCode.textContent = defaultLaptopText;
                }, 950);
            }
        };

        avatarPanel.addEventListener('click', playAvatarCheer);
        avatarPanel.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                playAvatarCheer();
            }
        });
    }

    runBootSequence();
});
