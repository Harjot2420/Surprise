// Messages for each rose
const messages = [
    "You make my heart skip a beat every time I see you",
    "Your smile lights up my world",
    "I fall in love with you more every day",
    "You're the most beautiful person I know, inside and out",
    "Being with you feels like home",
    "Your laugh is my favorite sound",
    "I cherish every moment with you",
    "You understand me like no one else",
    "My life is better with you in it",
    "You're my favorite thought",
    "I love the way you love me",
    "You're my dream come true",
    "I'm so grateful for you",
    "You make ordinary moments extraordinary",
    "I love us together",
    "You're my happy place",
    "I'd choose you in every lifetime",
    "You're my favorite notification",
    "You're the reason I believe in love",
    "I love you more than words can express",
    "Your eyes sparkle like the stars",
    "Your touch is my favorite feeling",
    "You complete me in ways I never knew possible",
    "Every day with you is a gift",
    "You're my perfect match",
    "I love how you understand me without words",
    "You make my soul happy",
    "I'm addicted to your love",
    "You're my greatest adventure",
    "My heart belongs to you"
];

document.addEventListener('DOMContentLoaded', function() {
    const bouquet = document.getElementById('bouquet');
    const messageContainer = document.getElementById('messageContainer');
    const messageText = document.getElementById('messageText');
    const closeBtn = document.getElementById('closeBtn');
    const soundEffect = document.getElementById('soundEffect');
    
    // Create 100 roses
    for (let i = 0; i < 100; i++) {
        const roseContainer = document.createElement('div');
        roseContainer.className = 'rose-container';
        
        // Random position variation
        const posX = Math.random() * 20 - 10;
        const posY = Math.random() * 20 - 10;
        roseContainer.style.transform = `translate(${posX}px, ${posY}px)`;
        
        // Random size variation
        const size = 0.8 + Math.random() * 0.4;
        roseContainer.style.width = `${80 * size}px`;
        roseContainer.style.height = `${100 * size}px`;
        
        // Random animation delay
        roseContainer.style.animationDelay = `${Math.random() * 2}s`;
        
        // Create rose
        const rose = document.createElement('div');
        rose.className = 'rose';
        
        // Create petals (12-16 petals per rose)
        const petalCount = 12 + Math.floor(Math.random() * 5);
        const petalColors = [
            'linear-gradient(to bottom, #ff4d6d, #ff758f)',
            'linear-gradient(to bottom, #ff758f, #ff8fa3)',
            'linear-gradient(to bottom, #ff8fa3, #ffb3c1)',
            'linear-gradient(to bottom, #ff4d6d, #ff8fa3)'
        ];
        
        for (let p = 0; p < petalCount; p++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            // Position petals in a circle
            const angle = (p / petalCount) * Math.PI * 2;
            const distance = 15 + Math.random() * 10;
            const x = 30 + Math.cos(angle) * distance;
            const y = 40 + Math.sin(angle) * distance;
            
            petal.style.left = `${x}px`;
            petal.style.top = `${y}px`;
            
            // Random petal size
            const petalWidth = 20 + Math.random() * 15;
            const petalHeight = 25 + Math.random() * 15;
            petal.style.width = `${petalWidth}px`;
            petal.style.height = `${petalHeight}px`;
            
            // Random rotation
            petal.style.transform = `rotate(${angle}rad)`;
            
            // Random color variation
            petal.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];
            
            // Random z-index
            petal.style.zIndex = Math.floor(Math.random() * 5);
            
            rose.appendChild(petal);
        }
        
        // Add rose center
        const roseCenter = document.createElement('div');
        roseCenter.className = 'rose-center';
        rose.appendChild(roseCenter);
        
        // Add stem
        const stem = document.createElement('div');
        stem.className = 'stem';
        rose.appendChild(stem);
        
        // Add leaf (50% chance)
        if (Math.random() > 0.5) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            rose.appendChild(leaf);
        }
        
        roseContainer.appendChild(rose);
        
        roseContainer.addEventListener('click', function() {
            // Play sound
            soundEffect.currentTime = 0;
            soundEffect.play();
            
            // Heart beat animation
            this.classList.add('heart-beat');
            setTimeout(() => {
                this.classList.remove('heart-beat');
            }, 1000);
            
            // Create petals
            createFallingPetals(this);
            
            // Show random message
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            messageText.textContent = randomMessage;
            messageContainer.classList.remove('hidden');
            messageContainer.classList.add('show');
            
            // Make the clicked rose glow
            roseCenter.classList.add('glow');
            setTimeout(() => {
                roseCenter.classList.remove('glow');
            }, 2000);
        });
        
        bouquet.appendChild(roseContainer);
    }
    
    // Close message
    closeBtn.addEventListener('click', function() {
        messageContainer.classList.remove('show');
        setTimeout(() => {
            messageContainer.classList.add('hidden');
        }, 500);
    });
    
    // Create falling petals effect
    function createFallingPetals(rose) {
        const rect = rose.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        for (let i = 0; i < 15; i++) {
            const petal = document.createElement('div');
            petal.className = 'falling-petal';
            
            // Random position around the rose
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 30;
            const startX = x + Math.cos(angle) * distance;
            const startY = y + Math.sin(angle) * distance;
            
            petal.style.left = `${startX}px`;
            petal.style.top = `${startY}px`;
            
            // Random size
            const size = 5 + Math.random() * 10;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            
            // Random rotation
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Random color
            const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1'];
            petal.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(petal);
            
            // Animate petal falling
            const animationDuration = 2 + Math.random() * 3;
            petal.style.transition = `all ${animationDuration}s ease-out`;
            
            setTimeout(() => {
                petal.style.left = `${startX + (Math.random() * 200 - 100)}px`;
                petal.style.top = `${startY + 100 + Math.random() * 100}px`;
                petal.style.opacity = '0';
                petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 10);
            
            // Remove petal after animation
            setTimeout(() => {
                petal.remove();
            }, animationDuration * 1000);
        }
    }
    
    // Initial animation - make roses "bloom"
    setTimeout(() => {
        const roses = document.querySelectorAll('.rose-container');
        roses.forEach((rose, index) => {
            setTimeout(() => {
                rose.classList.add('bloom');
            }, index * 50);
        });
    }, 500);
});