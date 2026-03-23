document.addEventListener('DOMContentLoaded', () => {
   
    // NAVEGAÇÃO ENTRE TELAS
    const links = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-tab');

            // Troca classes active
            links.forEach(l => l.classList.remove('active'));
            contents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none'; // Garante que suma
            });

            link.classList.add('active');
            const target = document.getElementById(targetId);
            target.style.display = 'block';
            setTimeout(() => target.classList.add('active'), 10);

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // MODAL DE LOGIN
    const modal = document.getElementById('modal-login');
    const btnPortal = document.getElementById('btn-portal');
    const closeLogin = document.getElementById('close-login');

    btnPortal.onclick = () => modal.style.display = 'block';
    closeLogin.onclick = () => modal.style.display = 'none';

    // CHATBOT LÓGICA
    const chatBtn = document.getElementById('chatbot-btn');
    const chatWin = document.getElementById('chat-modal');
    const chatBody = document.getElementById('chat-body');

    chatBtn.onclick = () => {
        chatWin.style.display = chatWin.style.display === 'flex' ? 'none' : 'flex';
    };

    const botRespostas = {
        mensalidade: "O curso técnico tem o valor de R$ 450,00/mês para 2025.",
        bolsa: "Temos o programa 'TechTalent' que oferece bolsas de até 50% conforme nota na prova.",
        endereco: "Estamos na Rua São Cristóvão, 123, Próximo à Praça do Japão."
    };

    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.onclick = () => {
            const q = btn.getAttribute('data-q');
            chatBody.innerHTML += `<div class="user-msg">${btn.innerText}</div>`;
           
            setTimeout(() => {
                chatBody.innerHTML += `<div class="bot-msg">${botRespostas[q]}</div>`;
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 600);
        };
    });

    // MÁSCARA TELEFONE
    const telInput = document.getElementById('telefone');
    if(telInput) {
        telInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, "");
            v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
            v = v.replace(/(\d{5})(\d)/, "$1-$2");
            e.target.value = v;
        });
    }

    // SIMULAÇÃO DE ENVIO DE FORMULÁRIO
    document.getElementById('preinscricao-form').onsubmit = (e) => {
        e.preventDefault();
        alert("Solicitação enviada! Nossa equipe entrará em contato em breve.");
        e.target.reset();
    };
});
