// PORTAL DO ALUNO
const btnPortal = document.getElementById('btn-portal');
const modalLogin = document.getElementById('modal-login');
const closeLogin = document.getElementById('close-login');

btnPortal.onclick = () => modalLogin.style.display = 'block';
closeLogin.onclick = () => modalLogin.style.display = 'none';

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Login simulado realizado com sucesso!\n\nBem-vindo, aluno!');
    modalLogin.style.display = 'none';
});

// FILTRO DE NOTÍCIAS
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.news-card').forEach(card => {
            card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
        });
    });
});

// FORMULÁRIO + MÁSCARA TELEFONE
const form = document.getElementById('preinscricao-form');
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function(e) {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = v.substring(0, 15);
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const tel = telefoneInput.value;
    if (!email.includes('@') || tel.length < 14) {
        alert('❌ Por favor, preencha todos os campos corretamente.');
        return;
    }
    alert('✅ Pré-inscrição enviada com sucesso!\nNossa equipe entrará em contato em breve.');
    form.reset();
});

// CHATBOT
const chatbotBtn = document.getElementById('chatbot-btn');
const chatModal = document.getElementById('chat-modal');
const closeChat = document.getElementById('close-chat');
const chatBody = document.getElementById('chat-body');

chatbotBtn.onclick = () => chatModal.style.display = 'block';
closeChat.onclick = () => chatModal.style.display = 'none';

document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const pergunta = btn.dataset.question;
        const resposta = btn.dataset.answer;

        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.textContent = pergunta;
        chatBody.appendChild(userMsg);

        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.textContent = resposta;
        chatBody.appendChild(botMsg);

        chatBody.scrollTop = chatBody.scrollHeight;
    });
});

// Fecha modais ao clicar fora
window.onclick = function(e) {
    if (e.target === modalLogin) modalLogin.style.display = 'none';
    if (e.target === chatModal) chatModal.style.display = 'none';
};
