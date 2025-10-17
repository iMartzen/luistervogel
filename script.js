// Data voor alle vogels en hun geluiden (met audio file paths)
const birdsData = {
    grondeleenden: [
        { name: 'Krakeend', latin: 'Mareca strepera', audio: 'audio/grondeleenden/XC615261 - Krakeend - Mareca strepera strepera.mp3', description: 'Zacht, krakend geluid.' },
        { name: 'Wilde Eend', latin: 'Anas platyrhynchos', audio: 'audio/grondeleenden/XC591701 - Wilde Eend - Anas platyrhynchos.mp3', description: 'De bekende "kwek kwek" roep.' },
        { name: 'Slobeend', latin: 'Spatula clypeata', audio: 'audio/grondeleenden/XC871138 - Slobeend - Spatula clypeata.wav', description: 'Zacht "tuk-tuk" geluid.' },
        { name: 'Pijlstaart', latin: 'Anas acuta', audio: 'audio/grondeleenden/XC161349 - Pijlstaart - Anas acuta.mp3', description: 'Zacht, melodieus "prüp".' },
        { name: 'Wintertaling', latin: 'Anas crecca', audio: 'audio/grondeleenden/XC998226 - Wintertaling - Anas crecca.mp3', description: 'Hoog, fluisterend "kriek".' },
        { name: 'Zomertaling', latin: 'Spatula querquedula', audio: 'audio/grondeleenden/XC547437 - Zomertaling - Spatula querquedula.mp3', description: 'Droog, rattend "krrrek-krrrek".' },
        { name: 'Smient', latin: 'Mareca penelope', audio: 'audio/grondeleenden/XC1006871 - Smient - Mareca penelope.wav', description: 'Helder fluitend "whiuu".' },
        { name: 'Krooneend', latin: 'Netta rufina', audio: 'audio/grondeleenden/XC357498 - Krooneend - Netta rufina.mp3', description: 'Zacht, fluisterend "uiet".' }
    ],
    duikeenden: [
        { name: 'Kuifeend', latin: 'Aythya fuligula', audio: 'audio/duikeenden/XC361992 - Kuifeend - Aythya fuligula.mp3', description: 'Zacht, grommend "kurr-kurr".' },
        { name: 'Tafeleend', latin: 'Aythya ferina', audio: 'audio/duikeenden/XC797792 - Tafeleend - Aythya ferina.wav', description: 'Laag, krassend "krraa".' },
        { name: 'Topper', latin: 'Aythya marila', audio: 'audio/duikeenden/XC44265 - Topper - Aythya marila.mp3', description: 'Diep, grommend "krrouw".' },
        { name: 'Witoogeend', latin: 'Aythya nyroca', audio: 'audio/duikeenden/XC424887 - Witoogeend - Aythya nyroca.mp3', description: 'Zacht, fluisterend "uiet".' },
        { name: 'Brilduiker', latin: 'Bucephala clangula', audio: 'audio/duikeenden/XC998246 - Brilduiker - Bucephala clangula.mp3', description: 'Scherp, knarend "pieee-kaaa".' },
        { name: 'Nonnetje', latin: 'Mergellus albellus', audio: 'audio/duikeenden/XC608887 - Nonnetje - Mergellus albellus.mp3', description: 'Zacht, piepend "krrrek".' },
        { name: 'Middelste Zaagbek', latin: 'Mergus serrator', audio: 'audio/duikeenden/XC661188 - Middelste Zaagbek - Mergus serrator.mp3', description: 'Zacht, krassend "krraa-krraa".' },
        { name: 'Grote Zaagbek', latin: 'Mergus merganser', audio: 'audio/duikeenden/XC431479 - Grote Zaagbek - Mergus merganser.mp3', description: 'Laag, krassend "uig-a".' },
        { name: 'Eidereend', latin: 'Somateria mollissima', audio: 'audio/duikeenden/XC998232 - Eider - Somateria mollissima.mp3', description: 'Karakteristiek "aa-uuu" geluid.' }
    ],
    exotischeEenden: [
        { name: 'Rosse Stekelstaart', latin: 'Oxyura jamaicensis', audio: 'audio/exotischeenden/XC665164 - Rosse Stekelstaart - Oxyura jamaicensis.mp3', description: 'Zacht, tikkend "plop-plop-plop".' },
        { name: 'Mandarijneend', latin: 'Aix galericulata', audio: 'audio/exotischeenden/XC721862 - Mandarijneend - Aix galericulata.mp3', description: 'Zacht, fluitend "uieb".' },
        { name: 'Muskuseend', latin: 'Cairina moschata', audio: 'audio/exotischeenden/XC714003 - Muskuseend - Cairina moschata.mp3', description: 'Zacht, sissend "pfffst".' },
        { name: 'Carolinaeend', latin: 'Aix sponsa', audio: 'audio/exotischeenden/XC600081 - Carolina-eend - Aix sponsa.mp3', description: 'Scherp "oe-eek" of "jiii-iik".' }
    ],
    anserGanzen: [
        { name: 'Grauwe Gans', latin: 'Anser anser', audio: 'audio/anser/XC1037223 - Grauwe Gans - Anser anser.wav', description: 'Luid, nasaal "gak-gak".' },
        { name: 'Kolgans', latin: 'Anser albifrons', audio: 'audio/anser/XC625132 - Kolgans - Anser albifrons.mp3', description: 'Hoog, jodelend, kakelend gegak.' },
        { name: 'Dwerggans', latin: 'Anser erythropus', audio: 'audio/anser/XC674221 - Dwerggans - Anser erythropus.mp3', description: 'Hoger en scherper dan kolgans.' },
        { name: 'Kleine Rietgans', latin: 'Anser brachyrhynchus', audio: 'audio/anser/XC591415 - Kleine Rietgans - Anser brachyrhynchus.mp3', description: 'Hoge, rauwe "wink-wink".' },
        { name: 'Toendrarietgans', latin: 'Anser serrirostris', audio: 'audio/anser/XC944822 - Toendrarietgans - Anser serrirostris.wav', description: 'Laag en fagotachtig.' },
        { name: 'Taigarietgans', latin: 'Anser fabalis', audio: 'audio/anser/XC769870 - Taigarietgans - Anser fabalis.mp3', description: 'Laag, donker gegak.' }
    ],
    brantaGanzen: [
        { name: 'Brandgans', latin: 'Branta leucopsis', audio: 'audio/branta/XC632772 - Brandgans - Branta leucopsis.mp3', description: 'Hoog, blaffend, kakelend geluid.' },
        { name: 'Roodhalsgans', latin: 'Branta ruficollis', audio: 'audio/branta/XC769279 - Roodhalsgans - Branta ruficollis.mp3', description: 'Hoog, scherp "kik-yoik".' },
        { name: 'Rotgans', latin: 'Branta bernicla bernicla', audio: 'audio/branta/XC973114 - Rotgans - Branta bernicla bernicla.wav', description: 'Laag, grommend "rott rott".' },
        { name: 'Witbuikrotgans', latin: 'Branta bernicla hrota', audio: 'audio/branta/XC352831 - Rotgans - Branta bernicla hrota.mp3', description: 'Iets hoger "rronk" geluid.' },
        { name: 'Zwarte Rotgans', latin: 'Branta bernicla nigricans', audio: 'audio/branta/XC41865 - Rotgans - Branta bernicla nigricans.mp3', description: 'Lager, rollender "rrolk".' },
        { name: 'Kleine Canadese Gans', latin: 'Branta hutchinsii', audio: 'audio/branta/XC144036 - Kleine Canadese Gans - Branta hutchinsii leucopareia.mp3', description: 'Hoger, sneller "ka-ronk".' },
        { name: 'Grote Canadese Gans', latin: 'Branta canadensis', audio: 'audio/branta/XC816269 - Grote Canadese Gans - Branta canadensis.mp3', description: 'Luide "ah-honk".' }
    ],
    exotischeGanzen: [
        { name: 'Sneeuwgans', latin: 'Anser caerulescens', audio: 'audio/exotischganzen/XC771795 - Sneeuwgans - Anser caerulescens.wav', description: 'Hoog, kakelend "kluk-kluk".' },
        { name: 'Ross\' Gans', latin: 'Anser rossii', audio: 'audio/exotischganzen/XC452082 - Ross\' Gans - Anser rossii.mp3', description: 'Hoger en zachter dan Sneeuwgans.' },
        { name: 'Nijlgans', latin: 'Alopochen aegyptiaca', audio: 'audio/exotischganzen/XC800286 - Nijlgans - Alopochen aegyptiaca.mp3', description: 'Luid, krassend "haaa-haaa".' },
        { name: 'Casarca', latin: 'Tadorna ferruginea', audio: 'audio/exotischganzen/XC872213 - Casarca - Tadorna ferruginea.wav', description: 'Diep, rollend "aang aang".' },
        { name: 'Indische Gans', latin: 'Anser indicus', audio: 'audio/exotischganzen/XC452244 - Indische Gans - Anser indicus.mp3', description: 'Nasaal, kakelend "ahng-ahng".' },
        { name: 'Chinese Knobbelgans', latin: 'Anser cygnoides', audio: 'audio/exotischganzen/XC463609 - Zwaangans - Anser cygnoides.mp3', description: 'Luid, trompetterend "ohng-ohng".' },
        { name: 'Bergeend', latin: 'Tadorna tadorna', audio: 'audio/exotischganzen/XC911533 - Bergeend - Tadorna tadorna.mp3', description: 'Snelle reeks "tju-tju-tju".' }
    ]
};

// Quiz functionaliteit
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

function initQuiz() {
    // Verzamel alle vogels uit alle categorieën
    const allBirds = [];
    Object.values(birdsData).forEach(category => {
        category.forEach(bird => allBirds.push(bird));
    });
    
    // Selecteer 10 willekeurige vogels voor de quiz
    quizQuestions = [];
    const usedIndices = new Set();
    
    while (quizQuestions.length < Math.min(10, allBirds.length)) {
        const randomIndex = Math.floor(Math.random() * allBirds.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            const correctBird = allBirds[randomIndex];
            
            // Genereer 3 verkeerde antwoorden
            const wrongAnswers = [];
            while (wrongAnswers.length < 3) {
                const wrongIndex = Math.floor(Math.random() * allBirds.length);
                const wrongBird = allBirds[wrongIndex];
                if (wrongBird.name !== correctBird.name && 
                    !wrongAnswers.find(b => b.name === wrongBird.name)) {
                    wrongAnswers.push(wrongBird);
                }
            }
            
            // Mix de antwoorden
            const options = [correctBird, ...wrongAnswers].sort(() => Math.random() - 0.5);
            
            quizQuestions.push({
                bird: correctBird,
                options: options
            });
        }
    }
    
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showResults();
        return;
    }
    
    answered = false;
    const question = quizQuestions[currentQuestion];
    const progressEl = document.getElementById('quiz-progress');
    const questionEl = document.getElementById('quiz-question-number');
    const audioContainer = document.getElementById('quiz-audio');
    const optionsEl = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');
    
    // Update progress
    progressEl.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
    progressEl.textContent = `Vraag ${currentQuestion + 1} van ${quizQuestions.length}`;
    
    // Update question
    questionEl.textContent = `Vraag ${currentQuestion + 1}`;
    
    // Set audio player
    audioContainer.innerHTML = `
        <audio controls class="audio-player w-100">
            <source src="${question.bird.audio}" type="audio/mpeg">
            <source src="${question.bird.audio.replace('.mp3', '.wav')}" type="audio/wav">
            Je browser ondersteunt het audio element niet.
        </audio>
    `;
    
    // Clear feedback
    feedbackEl.innerHTML = '';
    feedbackEl.className = 'quiz-feedback d-none';
    
    // Create options
    optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.innerHTML = `
            <strong>${option.name}</strong><br>
            <small class="text-muted"><em>${option.latin}</em></small>
        `;
        button.onclick = () => checkAnswer(option.name, question.bird.name);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (answered) return;
    answered = true;
    
    const options = document.querySelectorAll('.quiz-option');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-question-btn');
    
    options.forEach(option => {
        option.classList.add('disabled');
        const optionName = option.querySelector('strong').textContent;
        
        if (optionName === correct) {
            option.classList.add('correct');
        }
        if (optionName === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        score++;
        feedbackEl.innerHTML = '✅ <strong>Correct!</strong> Dat is inderdaad de ' + correct;
        feedbackEl.className = 'quiz-feedback correct';
    } else {
        feedbackEl.innerHTML = '❌ <strong>Helaas!</strong> Het juiste antwoord was: ' + correct;
        feedbackEl.className = 'quiz-feedback incorrect';
    }
    
    nextBtn.classList.remove('d-none');
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-question-btn').classList.add('d-none');
    showQuestion();
}

function showResults() {
    const container = document.querySelector('.quiz-container');
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    let message = '';
    if (percentage >= 90) {
        message = 'Uitstekend! Je bent een echte expert! 🏆';
    } else if (percentage >= 70) {
        message = 'Goed gedaan! Je kent je vogels! 🎉';
    } else if (percentage >= 50) {
        message = 'Niet slecht! Blijf oefenen! 👍';
    } else {
        message = 'Blijf luisteren en oefenen! 💪';
    }
    
    container.innerHTML = `
        <div class="quiz-score">
            <h2>Quiz voltooid!</h2>
            <div class="display-3 my-4">${score} / ${quizQuestions.length}</div>
            <p class="lead">${percentage}% correct</p>
            <p>${message}</p>
            <button class="btn btn-light btn-lg mt-3" onclick="initQuiz()">Opnieuw spelen</button>
            <a href="index.html" class="btn btn-outline-light btn-lg mt-3 ms-2">Terug naar home</a>
        </div>
    `;
}

// Initialiseer quiz als de pagina is geladen
if (window.location.pathname.includes('quiz.html')) {
    document.addEventListener('DOMContentLoaded', initQuiz);
}
