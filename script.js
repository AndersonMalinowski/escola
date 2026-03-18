document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MODAL DE LOGIN ---
    const modal = document.getElementById('modal-login');
    const btnPortal = document.getElementById('btn-portal');
    const closeLogin = document.getElementById('close-login');

    btnPortal.onclick = () => modal.style.display = 'block';
    closeLogin.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; }

    // --- FILTRO DE NOTÍCIAS ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover classe ativa
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            newsCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- CHATBOT SIMULADO ---
    const chatBtn = document.getElementById('chatbot-btn');
    const chatWindow = document.getElementById('chat-modal');
    const closeChat = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const faqBtns = document.querySelectorAll('.faq-btn');

    chatBtn.onclick = () => chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    closeChat.onclick = () => chatWindow.style.display = 'none';

    const respostas = {
        mensalidade: "O valor para o curso de DS em 2025 é de R$ 450,00 mensais.",
        horario: "As aulas ocorrem no período noturno, das 19h às 22h30.",
        endereco: "Estamos na Rua São Cristóvão, 123, próximo à Praça Central.",
        estagio: "Sim! Temos convênio com mais de 50 empresas de tecnologia da região."
    };

    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const pergunta = btn.innerText;
            const chave = btn.getAttribute('data-q');
            
            chatBody.innerHTML += `<p><strong>Você:</strong> ${pergunta}</p>`;
            setTimeout(() => {
                chatBody.innerHTML += `<p style="color:blue"><strong>Assistente:</strong> ${respostas[chave]}</p>`;
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 500);
        });
    });

    // --- MÁSCARA DE TELEFONE ---
    const telInput = document.getElementById('telefone');
    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = value;
    });
});
