document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentPartIndex = 0;
    let userAnswers = {}; // e.g. { '0': { '1-1': 'A' } }
    let isReviewMode = false;

    // DOM Elements
    const dayMenuEl = document.getElementById('day-menu');
    const activeDayContent = document.getElementById('active-day-content');
    const placeholderContent = document.getElementById('placeholder-content');
    const questionsContainer = document.getElementById('questions-container');
    const submitBtn = document.getElementById('submit-btn');
    const progressPercent = document.getElementById('progress-percent');
    const progressFill = document.getElementById('progress-fill');
    const themeBtn = document.getElementById('theme-btn');

    // Initialize App
    function init() {
        // Restructure Practice 16 in-place to combine the two conversations into parts
        const p16Idx1 = appData.findIndex(d => d.title === "PRACTICE 16 - CONVERSATION 01");
        const p16Idx2 = appData.findIndex(d => d.title === "PRACTICE 16 - CONVERSATION 02");
        if (p16Idx1 !== -1 && p16Idx2 !== -1) {
            const p16_1 = appData[p16Idx1];
            const p16_2 = appData[p16Idx2];
            const p16 = {
                title: "PRACTICE 16",
                parts: [
                    {
                        title: "CONVERSATION 01",
                        audioPlaceholder: p16_1.audioPlaceholder,
                        audio: p16_1.audio,
                        questions: p16_1.questions
                    },
                    {
                        title: "CONVERSATION 02",
                        audioPlaceholder: p16_2.audioPlaceholder,
                        audio: p16_2.audio,
                        questions: p16_2.questions
                    }
                ],
                questions: [...p16_1.questions, ...p16_2.questions]
            };
            appData.splice(p16Idx1, 2, p16); // Replace both with the merged one
        }

        // Load answers from localStorage
        const savedAnswers = localStorage.getItem('vstepListeningAnswers');
        if (savedAnswers) {
            try {
                let parsed = JSON.parse(savedAnswers);
                
                // MIGRATION: Convert numeric keys to title keys if they exist
                let migrated = false;
                for (let key in parsed) {
                    if (!isNaN(key)) { // it's a numeric index
                        const numericIndex = parseInt(key);
                        if (appData[numericIndex]) {
                            const practiceTitle = appData[numericIndex].title;
                            parsed[practiceTitle] = parsed[key];
                            delete parsed[key];
                            migrated = true;
                        }
                    }
                }
                userAnswers = parsed;
                if (migrated) {
                    localStorage.setItem('vstepListeningAnswers', JSON.stringify(userAnswers));
                }
            } catch (e) {
                console.error('Could not parse saved answers', e);
            }
        }

        // Init answer tracking state
        appData.forEach((d) => {
            if (!userAnswers[d.title]) userAnswers[d.title] = {};
        });

        renderSidebar();
        loadDay(currentPartIndex);
        checkLoginState();
    }

    // Render Sidebar Menu
    function renderSidebar() {
        dayMenuEl.innerHTML = '';
        appData.forEach((day, index) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            if (day.isPlaceholder) {
                menuItem.classList.add('placeholder');
            }
            if (index === currentPartIndex) {
                menuItem.classList.add('active');
            }
            menuItem.textContent = day.title;
            
            menuItem.addEventListener('click', () => {
                if (currentPartIndex !== index) {
                    currentPartIndex = index;
                    
                    // Reset review mode and close overlay when switching days
                    isReviewMode = false;
                    document.body.classList.remove('review-mode');
                    const overlay = document.getElementById('results-overlay');
                    if (overlay) overlay.classList.remove('active');
                    
                    // Update active class
                    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
                    menuItem.classList.add('active');
                    loadDay(index);
                }
            });
            
            dayMenuEl.appendChild(menuItem);
        });
    }

    // Load Specific Day
    function loadDay(index) {
        const dayData = appData[index];
        const homeContent = document.getElementById('home-content');
        
        if (dayData.isHome) {
            activeDayContent.style.display = 'none';
            placeholderContent.style.display = 'none';
            if (homeContent) homeContent.style.display = 'block';
            updateProgress();
            return;
        }

        if (dayData.isPlaceholder) {
            activeDayContent.style.display = 'none';
            placeholderContent.style.display = 'block';
            if (homeContent) homeContent.style.display = 'none';
            updateProgress();
            return;
        }

        activeDayContent.style.display = 'block';
        placeholderContent.style.display = 'none';
        if (homeContent) homeContent.style.display = 'none';
        
        // Render Questions
        questionsContainer.innerHTML = '';
        
        const renderQuestion = (q, qIndex) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.style.animationDelay = `${qIndex * 0.08}s`;
            
            const questionText = document.createElement('h3');
            questionText.className = 'question-text';
            questionText.textContent = q.text;
            questionBlock.appendChild(questionText);
            
            if (isReviewMode && q.textVi) {
                const textVi = document.createElement('div');
                textVi.className = 'question-text-vi';
                textVi.textContent = q.textVi;
                questionBlock.appendChild(textVi);
            }
            
            const optionsList = document.createElement('div');
            optionsList.className = 'options-list';
            
            q.options.forEach((opt, optIndex) => {
                const optionItem = document.createElement('div');
                optionItem.className = 'option-item';
                
                const radioCircle = document.createElement('div');
                radioCircle.className = 'radio-circle';
                
                const optionTextContainer = document.createElement('div');
                optionTextContainer.className = 'option-text-container';
                
                const optionText = document.createElement('div');
                optionText.className = 'option-text';
                optionText.textContent = opt;
                optionTextContainer.appendChild(optionText);

                if (isReviewMode && q.optionsVi && q.optionsVi[optIndex]) {
                    const optionVi = document.createElement('div');
                    optionVi.className = 'option-text-vi';
                    optionVi.textContent = q.optionsVi[optIndex];
                    optionTextContainer.appendChild(optionVi);
                }

                optionItem.appendChild(radioCircle);
                optionItem.appendChild(optionTextContainer);
                
                // Restore previous answer
                const practiceId = appData[index].title;
                const isSelected = userAnswers[practiceId][q.id] === opt;
                if (isSelected) {
                    optionItem.classList.add('selected');
                }
                
                if (isReviewMode) {
                    if (opt === q.correctAnswer) {
                        optionItem.classList.add('correct');
                    } else if (isSelected && opt !== q.correctAnswer) {
                        optionItem.classList.add('wrong');
                    }
                    optionItem.style.cursor = 'default';
                }

                // Interaction
                optionItem.addEventListener('click', () => {
                    if (isReviewMode) return;
                    
                    // Deselect siblings
                    optionsList.querySelectorAll('.option-item').forEach(s => s.classList.remove('selected'));
                    
                    // Select
                    optionItem.classList.add('selected');
                    const practiceId = appData[index].title;
                    userAnswers[practiceId][q.id] = opt;
                    
                    // Save to localStorage
                    localStorage.setItem('vstepListeningAnswers', JSON.stringify(userAnswers));
                    
                    updateSubmitButton(index);
                });
                
                optionsList.appendChild(optionItem);
            });
            
            questionBlock.appendChild(optionsList);
            
            if (isReviewMode && q.explanation) {
                const explanationToggle = document.createElement('button');
                explanationToggle.className = 'explanation-toggle';
                explanationToggle.innerHTML = `Giải thích chi tiết`;
                
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'explanation-box';
                explanationDiv.style.display = 'none'; // Initially hidden
                
                let expHTML = q.explanation;
                const matchIdx = expHTML.indexOf("<div class='transcript-en'>");
                
                if (matchIdx === 0) {
                    // Practice 1-15: explanation only has transcript. Extract highlighted text to act as quote.
                    const enMatch = q.explanation.match(/<div class='transcript-en'>[\s\S]*?<span class='highlight'>([\s\S]*?)<\/span>[\s\S]*?<\/div>/);
                    const viMatch = q.explanation.match(/<div class='transcript-vi'>[\s\S]*?<span class='highlight'>([\s\S]*?)<\/span>[\s\S]*?<\/div>/);
                    
                    let extractedQuote = "";
                    if (enMatch && enMatch[1]) {
                        extractedQuote = `<div class='explanation-quote' style='margin-bottom: 1rem;'><b>Đáp án nằm ở câu:</b> <span class='highlight'>"${enMatch[1].trim()}"</span>`;
                        if (viMatch && viMatch[1]) {
                            extractedQuote += `<br><i>(${viMatch[1].trim()})</i>`;
                        }
                        extractedQuote += `</div>`;
                    }
                    
                    expHTML = extractedQuote + q.explanation.replace("<div class='transcript-vi'>", "<div class='transcript-vi' style='margin-top: 1rem;'><strong>Dịch nghĩa:</strong><br>");
                } else if (matchIdx !== -1) {
                    // Practice 16+: strip transcript from explanation (it's shown at the end of the part)
                    const brIdx = expHTML.lastIndexOf("<br>", matchIdx);
                    if (brIdx !== -1 && matchIdx - brIdx <= 5) {
                        expHTML = expHTML.substring(0, brIdx);
                    } else {
                        expHTML = expHTML.substring(0, matchIdx);
                    }
                }
                
                explanationDiv.innerHTML = `<strong>Giải thích:</strong><br><br>${expHTML}`;
                
                explanationToggle.addEventListener('click', () => {
                    if (explanationDiv.style.display === 'none') {
                        explanationDiv.style.display = 'block';
                    } else {
                        explanationDiv.style.display = 'none';
                    }
                });

                questionBlock.appendChild(explanationToggle);
                questionBlock.appendChild(explanationDiv);
            }
            
            questionsContainer.appendChild(questionBlock);
        };

        const renderTranscriptBlock = (questions) => {
            if (!isReviewMode) return;
            
            let hasGlobalTranscript = false;
            let transcriptHTML = null;
            
            for (let q of questions) {
                if (!q.explanation) continue;
                const matchIdx = q.explanation.indexOf("<div class='transcript-en'>");
                if (matchIdx > 0) {
                    hasGlobalTranscript = true;
                    transcriptHTML = q.explanation.substring(matchIdx);
                    // Remove any existing highlights to start fresh
                    transcriptHTML = transcriptHTML.replace(/<span class='highlight'>(.*?)<\/span>/g, "$1");
                    break;
                }
            }

            if (!hasGlobalTranscript) return; // Do not render global transcript block for Practice 1-15

            if (transcriptHTML) {
                // Auto-highlight answers for all questions
                questions.forEach(q => {
                    if (!q.explanation) return;
                    
                    // English Quote
                    let enQuote = null;
                    const enQuoteMatch = q.explanation.match(/<span class='highlight'>"([^"]+)"<\/span>/);
                    if (enQuoteMatch && enQuoteMatch[1]) {
                        enQuote = enQuoteMatch[1];
                    } else {
                        const enHighlightMatch = q.explanation.match(/<span class='highlight'>([^<]+)<\/span>/);
                        if (enHighlightMatch && enHighlightMatch[1]) {
                            enQuote = enHighlightMatch[1].replace(/^"|"$/g, '').trim();
                        }
                    }
                    if (enQuote && enQuote.length > 5) {
                        transcriptHTML = transcriptHTML.split(enQuote).join(`<span class='highlight'>${enQuote}</span>`);
                    }
                    
                    // Vietnamese Quote
                    const viQuoteMatch = q.explanation.match(/<br><i>\(([^)]+)\)<\/i>/);
                    if (viQuoteMatch && viQuoteMatch[1]) {
                        const viQuote = viQuoteMatch[1].trim();
                        if (viQuote.length > 5) {
                            transcriptHTML = transcriptHTML.split(viQuote).join(`<span class='highlight'>${viQuote}</span>`);
                        }
                    }
                });

                const transcriptToggle = document.createElement('button');
                transcriptToggle.className = 'explanation-toggle';
                transcriptToggle.style.marginTop = '1rem';
                transcriptToggle.style.backgroundColor = 'rgba(59, 130, 246, 0.15)'; // subtle primary blue background
                transcriptToggle.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                transcriptToggle.style.color = 'var(--text-primary)'; // standard text color
                transcriptToggle.innerHTML = `Xem Full Transcript`;
                
                const transcriptDiv = document.createElement('div');
                transcriptDiv.className = 'explanation-box';
                transcriptDiv.style.display = 'none';
                transcriptDiv.innerHTML = `<strong>Transcript:</strong><br>${transcriptHTML.replace("<div class='transcript-vi'>", "<div class='transcript-vi'><strong>Dịch nghĩa:</strong><br>")}`;
                
                transcriptToggle.addEventListener('click', () => {
                    if (transcriptDiv.style.display === 'none') {
                        transcriptDiv.style.display = 'block';
                    } else {
                        transcriptDiv.style.display = 'none';
                    }
                });
                
                questionsContainer.appendChild(transcriptToggle);
                questionsContainer.appendChild(transcriptDiv);
            }
        };

        const mainAudioCard = document.getElementById('native-audio').closest('.audio-card');
        
        if (dayData.parts) {
            mainAudioCard.style.display = 'none';
            let globalQIndex = 0;
            dayData.parts.forEach((part, pIndex) => {
                const partTitle = document.createElement('h3');
                partTitle.textContent = part.title;
                partTitle.style.marginTop = pIndex > 0 ? '3rem' : '0';
                partTitle.style.marginBottom = '1rem';
                partTitle.style.color = 'var(--color-primary)';
                questionsContainer.appendChild(partTitle);

                const audioContainer = document.createElement('div');
                audioContainer.className = 'card audio-card part-audio';
                audioContainer.style.marginBottom = '2rem';
                const audioEl = document.createElement('audio');
                audioEl.controls = true;
                if (part.audio) {
                    audioEl.src = part.audio;
                } else {
                    audioEl.style.display = 'none';
                    const placeholder = document.createElement('p');
                    placeholder.textContent = part.audioPlaceholder;
                    placeholder.style.color = '#7f8ea3';
                    placeholder.style.textAlign = 'center';
                    audioContainer.appendChild(placeholder);
                }
                audioContainer.appendChild(audioEl);
                questionsContainer.appendChild(audioContainer);

                part.questions.forEach((q, idx) => {
                    renderQuestion(q, globalQIndex++);
                });

                renderTranscriptBlock(part.questions);
            });
        } else {
            mainAudioCard.style.display = 'block';
            dayData.questions.forEach((q, qIndex) => {
                renderQuestion(q, qIndex);
            });
            renderTranscriptBlock(dayData.questions);
        }

        updateSubmitButton(index);
        updateProgress();
        
        // Reset Audio
        const audioEl = document.getElementById('native-audio');
        audioEl.pause();
        audioEl.currentTime = 0;
        if (dayData.audio) {
            audioEl.src = dayData.audio;
        } else {
            audioEl.removeAttribute('src');
            audioEl.load();
        }
    }

    // Submit Button Logic
    function updateSubmitButton(index) {
        if (isReviewMode) {
            submitBtn.style.display = 'none';
            return;
        }

        const d = appData[index];
        if (d.isPlaceholder) {
            submitBtn.style.display = 'none';
            return;
        }

        const practiceId = d.title;
        submitBtn.style.display = 'inline-block';
    }

    // Submit Event
    submitBtn.addEventListener('click', () => {
        if (isReviewMode) return;
        
        const d = appData[currentPartIndex];
        const practiceId = d.title;
        let questions = [];
        if (d.parts) {
            d.parts.forEach(part => {
                questions = questions.concat(part.questions);
            });
        } else if (d.questions) {
            questions = d.questions;
        }

        let total = questions.length;
        let realScore = 0;
        
        questions.forEach(q => {
            // Count correct answers
            if (userAnswers[practiceId][q.id] === q.correctAnswer) {
                realScore++;
            }
        });
        
        const percent = Math.round((realScore / total) * 100);
        let message = '';
        if (percent >= 90) {
            message = 'Xuất sắc! Tiếp tục phát huy nhé!';
        } else if (percent >= 70) {
            message = 'Khá tốt! Tiếp tục cố gắng nhé!';
        } else if (percent >= 50) {
            message = 'Làm tốt lắm! Hãy tiếp tục luyện tập nhé.';
        } else if (percent > 0) {
            message = 'Cố gắng thêm một chút nữa nhé! Rồi sẽ cải thiện thôi!';
        } else {
            message = 'Cậu chính là Nobita đấy à?';
        }
        
        document.getElementById('final-score').textContent = realScore;
        document.querySelector('.score-total').textContent = `/ ${total}`;
        document.getElementById('score-message').textContent = message;
        document.getElementById('results-overlay').classList.add('active');
    });

    // Results Actions
    document.getElementById('review-btn').addEventListener('click', () => {
        document.getElementById('results-overlay').classList.remove('active');
        isReviewMode = true;
        document.body.classList.add('review-mode');
        submitBtn.style.display = 'none';
        
        // Re-render to show answers and explanations
        loadDay(currentPartIndex);
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
        document.getElementById('results-overlay').classList.remove('active');
        isReviewMode = false;
        document.body.classList.remove('review-mode');
        
        // Clear answers
        const practiceId = appData[currentPartIndex].title;
        userAnswers[practiceId] = {};
        
        // Save to localStorage
        localStorage.setItem('vstepListeningAnswers', JSON.stringify(userAnswers));
        
        loadDay(currentPartIndex);
    });

    // Update Progress
    function updateProgress() {
        let completedDays = 0;
        let totalAvailableDays = appData.filter(d => !d.isPlaceholder).length;
        if (totalAvailableDays === 0) return;
        
        appData.forEach((d) => {
            if (!d.isPlaceholder && Object.keys(userAnswers[d.title] || {}).length > 0) {
                completedDays++;
            }
        });
        
        const percentage = Math.round((completedDays / totalAvailableDays) * 100);
        progressPercent.textContent = `${percentage}%`;
        progressFill.style.width = `${percentage}%`;
    }

    // Theme Toggle (Real logic)
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        if (isLight) {
            // switch icon to moon
            themeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        } else {
            // switch icon to sun
            themeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        }
    });

    // --- Login Logic ---
    const loginOverlay = document.getElementById('loginOverlay');
    const loginForm = document.getElementById('loginForm');
    const studentNameInput = document.getElementById('studentName');
    const studentClassInput = document.getElementById('studentClass');
    const studentPasswordInput = document.getElementById('studentPassword');
    const loginError = document.getElementById('loginError');
    const btnLogin = document.getElementById('btnLogin');

    const ALLOWED_CLASSES = ['CB196', 'CB201', 'CB202', 'B209'];
    const REQUIRED_PASSWORD = 'VSTEPSEPTEMBER';
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU5Jd_R15uECAgsBMHZsqKAaCR2g2K1IzqOGs-ZN9_RbDkdQ/formResponse';
    const GOOGLE_FORM_ENTRY = 'entry.388968236';

    function checkLoginState() {
        const loggedIn = localStorage.getItem('vstep_student_logged_in') || sessionStorage.getItem('vstep_student_logged_in');
        if (loggedIn === 'true') {
            if (loginOverlay) loginOverlay.classList.add('hidden');
        } else {
            if (loginOverlay) loginOverlay.classList.remove('hidden');
            const savedName = localStorage.getItem('vstep_student_name') || '';
            const savedClass = localStorage.getItem('vstep_student_class') || '';
            if (studentNameInput && savedName) studentNameInput.value = savedName;
            if (studentClassInput && savedClass) studentClassInput.value = savedClass;
        }
    }

    function showLoginError(msg) {
        if (!loginError) return;
        loginError.textContent = msg;
        loginError.style.display = 'block';
    }

    function handleLoginSubmit() {
        const nameVal = studentNameInput ? studentNameInput.value.trim() : '';
        const rawClassVal = studentClassInput ? studentClassInput.value.trim().toUpperCase().replace(/\s+/g, '') : '';
        const passwordVal = studentPasswordInput ? studentPasswordInput.value.trim() : '';

        if (!nameVal) {
            showLoginError('Vui lòng nhập đầy đủ Họ và tên.');
            if (studentNameInput) studentNameInput.focus();
            return;
        }

        if (!rawClassVal) {
            showLoginError('Vui lòng nhập Lớp học.');
            if (studentClassInput) studentClassInput.focus();
            return;
        }

        if (!ALLOWED_CLASSES.includes(rawClassVal)) {
            showLoginError(`Lớp học không hợp lệ. Chỉ chấp nhận các lớp: ${ALLOWED_CLASSES.join(', ')}.`);
            if (studentClassInput) studentClassInput.focus();
            return;
        }

        if (!passwordVal) {
            showLoginError('Vui lòng nhập Mật khẩu.');
            if (studentPasswordInput) studentPasswordInput.focus();
            return;
        }

        if (passwordVal.toUpperCase() !== REQUIRED_PASSWORD) {
            showLoginError('Mật khẩu không chính xác. Vui lòng kiểm tra lại!');
            if (studentPasswordInput) {
                studentPasswordInput.focus();
                studentPasswordInput.select();
            }
            return;
        }

        if (loginError) loginError.style.display = 'none';
        if (btnLogin) {
            btnLogin.textContent = 'ĐANG VÀO LỚP...';
            btnLogin.disabled = true;
        }

        // Save student info to storage
        localStorage.setItem('vstep_student_name', nameVal);
        localStorage.setItem('vstep_student_class', rawClassVal);
        localStorage.setItem('vstep_student_logged_in', 'true');
        sessionStorage.setItem('vstep_student_logged_in', 'true');

        // Submit to Google Form (no-cors)
        try {
            const formData = new URLSearchParams();
            formData.append(GOOGLE_FORM_ENTRY, `${nameVal} - ${rawClassVal}`);
            fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData.toString()
            }).catch(e => console.log('Log form info error', e));
        } catch (e) {
            console.log('Log form error', e);
        }

        setTimeout(() => {
            if (loginOverlay) loginOverlay.classList.add('hidden');
            if (btnLogin) {
                btnLogin.textContent = 'BẮT ĐẦU HỌC NGAY';
                btnLogin.disabled = false;
            }
        }, 300);
    }

    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            handleLoginSubmit();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleLoginSubmit();
        });
    }

    [studentNameInput, studentClassInput, studentPasswordInput].forEach((input) => {
        if (!input) return;
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleLoginSubmit();
            }
        });
    });

    init();
});
