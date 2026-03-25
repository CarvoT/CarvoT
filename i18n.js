(function () {
    'use strict';

    var translations = {
        en: {
            "nav.home": "Home",
            "nav.experience": "Experience",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "home.title": "LUCAS CARVALHO GOULART",
            "home.hero.title": "Developing Robust <span class='text-secondary'>SaaS Solutions</span>",
            "home.hero.desc": "Strategizing and executing complex enterprise software transitions. Specialized in bridging the gap between legacy reliability and modern SaaS scalability through Delphi, C#, and Cloud-native architectures.",
            "home.hero.badge": "Available for Strategy Consulting",
            "exp.badge": "Trajectory",
            "exp.hero.title": "Professional <br/> <span class='text-primary-fixed-dim'>Roadmap</span>",
            "exp.hero.desc": "Over 8 years of architectural evolution at GVdasa, bridging the gap between legacy reliability and cloud-native SaaS scalability.",
            "skills.title": "Technical <span class='text-secondary'>Arsenal</span>",
            "skills.desc": "Bridging the gap between legacy reliability and modern cloud scale. A specialized focus on high-performance architecture and strategic engineering leadership.",
            "skills.legacy.title": "Legacy Mastery",
            "skills.legacy.desc": "Expertise in maintaining, scaling, and modernizing large-scale mission-critical systems built on <strong>Delphi</strong>. Deep understanding of memory management, low-level integration, and VCL/FMX frameworks.",
            "skills.csharp.desc": "Architecting modern microservices and high-throughput web APIs with performance-first principles.",
            "skills.csharp.current": "Current Focus",
            "skills.csharp.expert": "Expert",
            "skills.sql.desc": "Complex query optimization, performance tuning, and schema design for transactional systems with millions of records.",
            "skills.sql.item1": "T-SQL Stored Procedures",
            "skills.sql.item2": "Index Optimization",
            "skills.arch.desc": "Systemic thinking applied to code. Emphasizing maintainability and robustness through proven patterns.",
            "skills.arch.solid": "SOLID & Clean Code",
            "skills.arch.solid.desc": "Writing self-documenting, testable code.",
            "skills.arch.patterns.desc": "Factory, Repository, Singleton, Observer.",
            "skills.lead.title": "Technical Leadership",
            "skills.lead.desc": "Mentoring junior engineers and setting architectural standards for distributed teams.",
            "skills.cloud.title": "Cloud & Ecosystem",
            "skills.cloud.desc": "Managing modern deployment pipelines and cloud infrastructure to ensure high availability and continuous delivery.",
            "contact.title": "Let's build something precise.",
            "contact.desc": "Open for architectural discussions, leadership opportunities, and technical consulting.",
            "contact.email": "Email Me",
            "contact.linkedin": "LinkedIn"
        },
        pt: {
            "nav.home": "Início",
            "nav.experience": "Experiência",
            "nav.skills": "Habilidades",
            "nav.contact": "Contato",
            "home.title": "LUCAS C. GOULART",
            "home.hero.title": "Desenvolvendo Soluções <span class='text-secondary'>SaaS Robustas</span>",
            "home.hero.desc": "Estrategizando e executando transições complexas de software corporativo. Especializado em conectar a confiabilidade do legado com a escalabilidade moderna do SaaS através das arquiteturas Delphi, C# e Cloud-native.",
            "home.hero.badge": "Disponível para Consultoria Estratégica",
            "exp.badge": "Trajetória",
            "exp.hero.title": "Roteiro <br/> <span class='text-primary-fixed-dim'>Profissional</span>",
            "exp.hero.desc": "Mais de 8 anos de evolução arquitetônica na GVdasa, unindo a confiabilidade de sistemas legados à escalabilidade SaaS nativa da nuvem.",
            "skills.title": "Arsenal <span class='text-secondary'>Técnico</span>",
            "skills.desc": "Preenchendo a lacuna entre a confiabilidade dos sistemas legados e a escala moderna da nuvem. Foco especializado em arquitetura de alto desempenho e liderança estratégica de engenharia.",
            "skills.legacy.title": "Maestria em Legados",
            "skills.legacy.desc": "Experiência em manter, escalar e modernizar sistemas de missão crítica em larga escala construídos em <strong>Delphi</strong>. Profundo entendimento de gestão de memória, integração de baixo nível e frameworks VCL/FMX.",
            "skills.csharp.desc": "Arquitetando microsserviços modernos e APIs web de alto rendimento com foco total em performance.",
            "skills.csharp.current": "Foco Atual",
            "skills.csharp.expert": "Especialista",
            "skills.sql.desc": "Otimização complexa de consultas, ajuste de desempenho e design de esquemas para sistemas transacionais com milhões de registros.",
            "skills.sql.item1": "Procedures (T-SQL)",
            "skills.sql.item2": "Otimização de Índices",
            "skills.arch.desc": "Pensamento sistêmico aplicado ao código. Enfatizando a manutenção e a robustez através de padrões comprovados.",
            "skills.arch.solid": "SOLID & Código Limpo",
            "skills.arch.solid.desc": "Escrevendo código testável e autodocumentado.",
            "skills.arch.patterns.desc": "Factory, Repository, Singleton, Observer.",
            "skills.lead.title": "Liderança Técnica",
            "skills.lead.desc": "Mentoria para engenheiros juniores e definição de padrões de arquitetura para equipes distribuídas.",
            "skills.cloud.title": "Ecossistema Nuvem",
            "skills.cloud.desc": "Gestão de pipelines modernos de implantação e infraestrutura em nuvem para garantir alta disponibilidade e entrega contínua.",
            "contact.title": "Vamos construir o estado da arte.",
            "contact.desc": "Aberto para discussões arquitetônicas, oportunidades de liderança e consultoria técnica.",
            "contact.email": "Enviar E-mail",
            "contact.linkedin": "LinkedIn"
        }
    };

    // ── Language State ──
    var currentLang = 'en';
    try { currentLang = localStorage.getItem('siteLang') || 'en'; } catch (e) { }

    // ── Public toggle ──
    window.toggleLanguage = function () {
        currentLang = (currentLang === 'en') ? 'pt' : 'en';
        try { localStorage.setItem('siteLang', currentLang); } catch (e) { }
        applyTranslations();
        console.log('[i18n] Language switched to:', currentLang);
    };

    // ── Apply Translations ──
    function applyTranslations() {
        var dict = translations[currentLang];
        if (!dict) return;

        var els = document.querySelectorAll('[data-i18n]');
        console.log('[i18n] Translating', els.length, 'elements to', currentLang);

        for (var i = 0; i < els.length; i++) {
            var key = els[i].getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                els[i].innerHTML = dict[key];
            }
        }

        // Update language toggle button labels
        var langLabel = document.getElementById('lang-label');
        if (langLabel) langLabel.textContent = (currentLang === 'en') ? 'PT / EN' : 'EN / PT';

        var mobileLangBtn = document.getElementById('mobile-lang-toggle');
        if (mobileLangBtn) mobileLangBtn.textContent = (currentLang === 'en') ? 'PT / EN' : 'EN / PT';
    }

    // ── Scroll Spy ──
    function setupScrollSpy() {
        var ids = ['home', 'skills', 'experience', 'contact'];
        var sections = [];
        for (var i = 0; i < ids.length; i++) {
            var el = document.getElementById(ids[i]);
            if (el) sections.push({ id: ids[i], el: el });
        }
        if (sections.length === 0) return;

        function onScroll() {
            var scrollY = window.pageYOffset + (window.innerHeight / 3);
            var current = sections[0].id;

            for (var i = sections.length - 1; i >= 0; i--) {
                if (sections[i].el.offsetTop <= scrollY) {
                    current = sections[i].id;
                    break;
                }
            }

            var links = document.querySelectorAll('.sidebar-link, .nav-link');
            for (var j = 0; j < links.length; j++) {
                var page = links[j].getAttribute('data-page');
                if (page === current) {
                    links[j].classList.add('active');
                } else {
                    links[j].classList.remove('active');
                }
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ── Smooth Scrolling ──
    function setupSmoothScrolling() {
        var anchors = document.querySelectorAll('.sidebar-link, .nav-link');
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].addEventListener('click', function (e) {
                var pageId = this.getAttribute('data-page');
                if (pageId === 'home') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    var target = document.getElementById(pageId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                // Close mobile menu
                var mob = document.getElementById('mobile-menu');
                if (mob) mob.classList.add('hidden');
            });
        }
    }

    // ── Init ──
    function init() {
        console.log('[i18n] Initializing. Current language:', currentLang);
        applyTranslations();
        setupScrollSpy();
        setupSmoothScrolling();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
