import { quizData } from './data.js';

// Game State
const gameState = {
  difficulty: 'easy',
  categories: ['character-images', 'stage-images'],
  currentQuestion: 0,
  questions: [],
  score: 0,
  totalQuestions: 10,
  timePerQuestion: 20,
  timeRemaining: 20,
  timerInterval: null,
  answers: []
};

// DOM Elements
const screens = {
  start: document.getElementById('start-screen'),
  game: document.getElementById('game-screen'),
  results: document.getElementById('results-screen')
};

const startScreen = {
  startBtn: document.getElementById('start-btn'),
  difficultyBtns: document.querySelectorAll('.difficulty-btn'),
  categoryCheckboxes: document.querySelectorAll('input[name="category"]'),
  questionCount: document.getElementById('question-count'),
  timePerQuestion: document.getElementById('time-per-question')
};

const gameScreen = {
  questionCounter: document.getElementById('question-counter'),
  scoreDisplay: document.getElementById('score-display'),
  timer: document.getElementById('timer'),
  questionImage: document.getElementById('question-image'),
  questionText: document.getElementById('question-text'),
  answerInput: document.getElementById('answer-input'),
  submitBtn: document.getElementById('submit-btn'),
  skipBtn: document.getElementById('skip-btn'),
  feedback: document.getElementById('feedback')
};

const resultsScreen = {
  finalScore: document.getElementById('final-score'),
  accuracyPercent: document.getElementById('accuracy-percent'),
  answerList: document.getElementById('answer-list'),
  playAgainBtn: document.getElementById('play-again-btn')
};

// Initialize Event Listeners
function initializeEventListeners() {
  // Difficulty selection
  startScreen.difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      startScreen.difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameState.difficulty = btn.dataset.difficulty;
    });
  });

  // Start button
  startScreen.startBtn.addEventListener('click', startQuiz);

  // Submit button
  gameScreen.submitBtn.addEventListener('click', submitAnswer);

  // Skip button
  gameScreen.skipBtn.addEventListener('click', skipQuestion);

  // Enter key to submit
  gameScreen.answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      submitAnswer();
    }
  });

  // Play again button
  resultsScreen.playAgainBtn.addEventListener('click', resetToStart);
}

// Start Quiz
function startQuiz() {
  // Get selected categories
  const selectedCategories = Array.from(startScreen.categoryCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (selectedCategories.length === 0) {
    alert('Please select at least one category!');
    return;
  }

  // Get settings
  gameState.categories = selectedCategories;
  gameState.totalQuestions = parseInt(startScreen.questionCount.value);
  gameState.timePerQuestion = parseInt(startScreen.timePerQuestion.value);
  gameState.timeRemaining = gameState.timePerQuestion;

  // Generate questions
  gameState.questions = generateQuestions(
    gameState.difficulty,
    gameState.categories,
    gameState.totalQuestions
  );

  // Reset game state
  gameState.currentQuestion = 0;
  gameState.score = 0;
  gameState.answers = [];

  // Show game screen
  showScreen('game');
  displayQuestion();
  startTimer();
}

// Generate Questions
function generateQuestions(difficulty, categories, count) {
  const allQuestions = [];

  // Collect questions from selected categories
  categories.forEach(category => {
    const categoryQuestions = quizData[category][difficulty];
    allQuestions.push(...categoryQuestions);
  });

  // Shuffle and select
  const shuffled = shuffleArray([...allQuestions]);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Shuffle Array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Display Question
function displayQuestion() {
  const question = gameState.questions[gameState.currentQuestion];

  // Update UI
  gameScreen.questionCounter.textContent = `Question ${gameState.currentQuestion + 1}/${gameState.questions.length}`;
  gameScreen.scoreDisplay.textContent = `Score: ${gameState.score}/${gameState.currentQuestion}`;
  gameScreen.questionText.textContent = question.question;
  gameScreen.answerInput.value = '';
  gameScreen.answerInput.focus();
  gameScreen.feedback.textContent = '';
  gameScreen.feedback.className = 'feedback';

  // Handle image display
  if (question.image) {
    gameScreen.questionImage.src = question.image;
    gameScreen.questionImage.style.display = 'block';
    gameScreen.questionImage.onerror = function() {
      // If image fails to load, show a placeholder message
      this.style.display = 'none';
      console.warn(`Image not found: ${question.image}`);
    };
  } else {
    gameScreen.questionImage.style.display = 'none';
  }

  // Reset timer
  gameState.timeRemaining = gameState.timePerQuestion;
  gameScreen.timer.textContent = gameState.timeRemaining;
  gameScreen.timer.classList.remove('timer-low', 'timer-critical');
}

// Start Timer
function startTimer() {
  clearInterval(gameState.timerInterval);

  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    gameScreen.timer.textContent = gameState.timeRemaining;

    // Visual warnings
    if (gameState.timeRemaining <= 5) {
      gameScreen.timer.classList.add('timer-critical');
    } else if (gameState.timeRemaining <= 10) {
      gameScreen.timer.classList.add('timer-low');
    }

    // Time's up
    if (gameState.timeRemaining <= 0) {
      clearInterval(gameState.timerInterval);
      submitAnswer(true); // Auto-submit as timeout
    }
  }, 1000);
}

// Submit Answer
function submitAnswer(isTimeout = false) {
  clearInterval(gameState.timerInterval);

  const question = gameState.questions[gameState.currentQuestion];
  const userAnswer = gameScreen.answerInput.value.trim();
  const isCorrect = checkAnswer(userAnswer, question.answers);

  // Record answer
  gameState.answers.push({
    question: question.question,
    userAnswer: userAnswer || '(no answer)',
    correctAnswer: question.answers[0],
    isCorrect: isCorrect,
    isTimeout: isTimeout
  });

  // Update score
  if (isCorrect) {
    gameState.score++;
  }

  // Show feedback
  showFeedback(isCorrect, question.answers[0], isTimeout);

  // Move to next question after delay
  setTimeout(() => {
    gameState.currentQuestion++;

    if (gameState.currentQuestion < gameState.questions.length) {
      displayQuestion();
      startTimer();
    } else {
      endQuiz();
    }
  }, 1500);
}

// Check Answer
function checkAnswer(userAnswer, correctAnswers) {
  if (!userAnswer) return false;

  const normalized = normalizeAnswer(userAnswer);

  return correctAnswers.some(answer => {
    const normalizedCorrect = normalizeAnswer(answer);
    return normalizedCorrect === normalized ||
           normalizedCorrect.includes(normalized) ||
           normalized.includes(normalizedCorrect);
  });
}

// Normalize Answer
function normalizeAnswer(answer) {
  return answer
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' '); // Normalize spaces
}

// Show Feedback
function showFeedback(isCorrect, correctAnswer, isTimeout) {
  gameScreen.feedback.className = 'feedback';

  if (isTimeout) {
    gameScreen.feedback.classList.add('show', 'timeout');
    gameScreen.feedback.textContent = `Time's up! Correct answer: ${correctAnswer}`;
  } else if (isCorrect) {
    gameScreen.feedback.classList.add('show', 'correct');
    gameScreen.feedback.textContent = 'Correct!';
  } else {
    gameScreen.feedback.classList.add('show', 'incorrect');
    gameScreen.feedback.textContent = `Incorrect. Correct answer: ${correctAnswer}`;
  }
}

// Skip Question
function skipQuestion() {
  gameScreen.answerInput.value = '';
  submitAnswer();
}

// End Quiz
function endQuiz() {
  clearInterval(gameState.timerInterval);
  showScreen('results');
  displayResults();
}

// Display Results
function displayResults() {
  const accuracy = Math.round((gameState.score / gameState.questions.length) * 100);

  resultsScreen.finalScore.textContent = `${gameState.score}/${gameState.questions.length}`;
  resultsScreen.accuracyPercent.textContent = `${accuracy}%`;

  // Build answer list
  const answerListHTML = gameState.answers.map((answer, index) => {
    const statusClass = answer.isCorrect ? 'correct' : 'incorrect';
    const statusIcon = answer.isCorrect ? '✓' : '✗';

    return `
      <div class="answer-item ${statusClass}">
        <div class="answer-header">
          <span class="answer-number">${index + 1}.</span>
          <span class="answer-status">${statusIcon}</span>
        </div>
        <div class="answer-content">
          <p class="answer-question">${answer.question}</p>
          <p class="answer-user">Your answer: <strong>${answer.userAnswer}</strong></p>
          ${!answer.isCorrect ? `<p class="answer-correct">Correct answer: <strong>${answer.correctAnswer}</strong></p>` : ''}
        </div>
      </div>
    `;
  }).join('');

  resultsScreen.answerList.innerHTML = answerListHTML;
}

// Reset to Start
function resetToStart() {
  clearInterval(gameState.timerInterval);
  showScreen('start');
}

// Show Screen
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// Initialize
initializeEventListeners();
