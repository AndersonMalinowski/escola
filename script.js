const App = {
    init() {
        this.tabs();
        this.modals();
        this.chatbot();
        this.forms();
    },

    // Lógica de Navegação
    tabs() {
        const links = document.querySelectorAll('.tab-link');
        const contents = document.querySelectorAll('.tab-content');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.dataset.tab;

                links.forEach(l => l.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                link.classList.add('active');
                document.getElementById(target).classList.add('active');
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    },

    // Gerenciamento de Modais
    modals() {
        const modal = document.getElementById('modal-login');
        const openBtn = document.getElementById('btn-portal');
        const closeBtn = document.getElementById('close-login');

        openBtn.onclick = () => modal.style.display = 'flex';
        closeBtn.onclick = () => modal.style.display = 'none';
        
        // Fechar ao clicar fora
        window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }
    },

    // Chatbot Inteligente
    chatbot() {
        const btn = document.getElementById('chatbot-btn');
        const win = document.getElementById('chat-modal');
        const body = document.getElementById('chat-body');
        
        const respostas = {
            mensalidade: "O investimento para 2026 é de R$ 450,00 mensais.",
            bolsa: "O TechTalent oferece até 50% de desconto. Quer o edital?",
            endereco: "Rua São Cristóvão, 123 - Batel/Curitiba."
        };

        btn.onclick = () => win.style.display = win.style.display === 'flex' ? 'none' : 'flex';

        document.querySelectorAll('.faq-btn').forEach(faq => {
            faq.onclick = () => {
                const q = faq.dataset.q;
                this.addChatMessage('user', faq.innerText);
                setTimeout(() => this.addChatMessage('bot', respostas[q]), 600);
            };
        });
    },

    addChatMessage(type, text) {
        const body = document.getElementById('chat-body');
        const msg = document.createElement('p');
        msg.className = `${type}-msg`;
        msg.innerText = text;
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight;
    },

    // Máscaras e Validação
    forms() {
        const tel = document.getElementById('telefone');
        if(tel) {
            tel.oninput = (e) => {
                let v = e.target.value.replace(/\D/g,"");
                v = v.replace(/^(\d{2})(\d)/g,"($1) $2");
                v = v.replace(/(\d{5})(\d)/,"$1-$2");
                e.target.value = v;
            };
        }
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
