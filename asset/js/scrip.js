document.addEventListener('DOMContentLoaded', function() {
            const openBtn = document.getElementById('openBtn');
            const envelopeWrapper = document.getElementById('envelopeWrapper');
            const heartSeal = document.getElementById('heartSeal');
            const letter = document.getElementById('letter');
            const message = document.getElementById('message');
            const img = document.getElementById("img-bg");
            let isOpen = false;
            
            openBtn.addEventListener('click', function() {
                if (!isOpen) {
                    // Ouvrir l'enveloppe
                    envelopeWrapper.classList.add('open');
                    heartSeal.classList.add('beat');
                    
                    // Animation du sceau qui s'envole
                    setTimeout(() => {
                        heartSeal.classList.add('float-up');
                    }, 300);
                    
                    // Changer le texte du bouton
                    setTimeout(() => {
                        openBtn.innerHTML = '<i class="fas fa-envelope"></i> Fermer l\'enveloppe';
                    }, 500);

                    // image
                    setTimeout(() => {
                        message.classList.add('show');
                    }, 1500);
                    
                    // Afficher le message romantique
                    setTimeout(() => {
                        message.classList.add('show');
                    }, 1500);
                    
                    isOpen = true;
                } else {
                    // Fermer l'enveloppe
                    envelopeWrapper.classList.remove('open');
                    heartSeal.classList.remove('float-up');
                    
                    // Animation du sceau qui revient
                    setTimeout(() => {
                        heartSeal.classList.add('beat');
                        setTimeout(() => {
                            heartSeal.classList.remove('beat');
                        }, 1000);
                    }, 300);
                    
                    // Changer le texte du bouton
                    openBtn.innerHTML = '<i class="fas fa-envelope-open-text"></i> Ouvrir l\'enveloppe';
                    
                    // Cacher le message romantique
                    message.classList.remove('show');
                    
                    isOpen = false;
                }
            });
            
            // Animation initiale du sceau
            setTimeout(() => {
                heartSeal.classList.add('beat');
                setTimeout(() => {
                    heartSeal.classList.remove('beat');
                }, 1000);
            }, 1000);
        });
        function typeWriter(element, text, speed = 10) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Appliquer l'effet de typing au titre si souhaité
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.text-header');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 100);
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "<i class='fas fa-heart'></i>";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  setInterval(createHeart, 300);
