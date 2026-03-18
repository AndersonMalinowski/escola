document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVEGAÇÃO POR ABAS (TELAS) ---
    const links = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-tab');

            // Remove active de tudo
            links.forEach(l => l.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Ativa a aba clicada e a tela correspondente
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');

            // Scroll para o topo suave
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // --- MODAL DE LOGIN ---
    const modal = document.getElementById('modal-login');
    const btnPortal = document.getElementById('btn-portal');
    const closeLogin = document.getElementById('close-login');

    btnPortal.onclick = () => modal.style.display = 'block';
    closeLogin.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }

    // --- FILTRO DE NOTÍCIAS ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            newsCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
            });
        });
    });

    // --- CHATBOT ---
    const chatBtn = document.getElementById('chatbot-btn');
    const chatModal = document.getElementById('chat-modal');
    const closeChat = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const faqBtns = document.querySelectorAll('.faq-btn');

    chatBtn.onclick = () => chatModal.style.display = chatModal.style.display === 'flex' ? 'none' : 'flex';
    closeChat.onclick = () => chatModal.style.display = 'none';

    const respostas = {
        mensalidade: "O valor para 2025 é R$ 450,00 mensais.",
        horario: "Aulas noturnas: 19h às 22h30.",
        endereco: "Rua São Cristóvão, 123 - Centro, Curitiba."
    };

    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const q = btn.getAttribute('data-q');
            chatBody.innerHTML += `<p><b>Você:</b> ${btn.innerText}</p>`;
            setTimeout(() => {
                chatBody.innerHTML += `<p style="color:blue"><b>Assistente:</b> ${respostas[q]}</p>`;
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 400);
        });
    });

    // --- MÁSCARA TELEFONE ---
    const tel = document.getElementById('telefone');
    tel.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = v;
    });
});
