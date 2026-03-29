import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Phone, WhatsappLogo, MapPin, Clock, Star, List, X, ArrowRight,
  CaretDown, Envelope, InstagramLogo, Syringe, Sparkle,
  UserCircle, ShieldCheck, CalendarBlank, Heart, Scales,
  Leaf, Timer, CheckCircle, FirstAidKit, PersonSimpleRun
} from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548991079698?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Ibelli.'
const TEL = 'tel:+5548991079698'

function useOnView() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return [ref, inView]
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

/* ==================== NAVBAR ==================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__logo"><img src="./images/logo.webp" alt="Clínica Ibelli" /></a>
        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
          <a href="#procedimentos" onClick={() => setOpen(false)}>Procedimentos</a>
          <a href="#especialistas" onClick={() => setOpen(false)}>Especialistas</a>
          <a href="#estrutura" onClick={() => setOpen(false)}>Estrutura</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="nav__cta">
            <WhatsappLogo size={16} weight="duotone" /> Agendar
          </a>
        </div>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} weight="duotone" /> : <List size={26} weight="duotone" />}
        </button>
      </div>
    </nav>
  )
}

/* ==================== HERO ==================== */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg"><img src="./images/hero-bg.webp" alt="Clínica Ibelli" /><div className="hero__overlay" /></div>
      <div className="container hero__content">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Estética e Endocrinologia</motion.span>
          <motion.h1 variants={fadeUp} className="hero__title">Cuide Hoje Mesmo<br/><span className="hero__accent">de Você</span></motion.h1>
          <motion.p variants={fadeUp} className="hero__sub">
            Harmonização facial, emagrecimento, saúde integrativa e envelhecimento saudável. Sua transformação começa aqui.
          </motion.p>
          <motion.div variants={fadeUp} className="hero__actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--red"><WhatsappLogo size={20} weight="duotone" /> Agendar Consulta</a>
            <a href="#procedimentos" className="btn btn--glass">Nossos Procedimentos <ArrowRight size={16} weight="duotone" /></a>
          </motion.div>
          <motion.div variants={fadeUp} className="hero__badges">
            <div className="hero__badge"><Star size={16} weight="fill" /> 4.6 Google</div>
            <div className="hero__badge"><UserCircle size={16} weight="duotone" /> 200+ avaliações</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== ABOUT ==================== */
function About() {
  const [ref, inView] = useOnView()
  return (
    <section className="about section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="about__grid">
          <div className="about__text">
            <motion.span variants={fadeUp} className="section-label">Sobre Nós</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Beleza, Saúde e<br/><span className="accent">Bem-estar</span></motion.h2>
            <motion.p variants={fadeUp}>A Clínica Ibelli é referência em estética e endocrinologia na Grande Florianópolis. Com profissionais altamente qualificados, oferecemos tratamentos personalizados que unem beleza, saúde e qualidade de vida.</motion.p>
            <motion.p variants={fadeUp} style={{ marginTop: '12px' }}>Do emagrecimento à harmonização facial, cada procedimento é planejado com cuidado, segurança e atenção aos detalhes que fazem toda a diferença.</motion.p>
            <motion.div variants={fadeUp} className="about__highlights">
              <div className="about__hl"><CheckCircle size={20} weight="duotone" style={{ color: 'var(--red)' }} /><span>Atendimento personalizado</span></div>
              <div className="about__hl"><CheckCircle size={20} weight="duotone" style={{ color: 'var(--red)' }} /><span>Tecnologia de ponta</span></div>
              <div className="about__hl"><CheckCircle size={20} weight="duotone" style={{ color: 'var(--red)' }} /><span>Equipe multidisciplinar</span></div>
            </motion.div>
            <motion.div variants={fadeUp}><a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--red"><WhatsappLogo size={18} weight="duotone" /> Fale Conosco</a></motion.div>
          </div>
          <motion.div variants={fadeUp} className="about__img"><img src="./images/ibelli-vista.webp" alt="Clínica Ibelli" /></motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== SERVICES ==================== */
const services = [
  { icon: Sparkle, title: 'Harmonização Facial', desc: 'Preenchimento labial, rinomodelação, ácido hialurônico e bioestimuladores para realçar sua beleza natural.' },
  { icon: Syringe, title: 'Toxina Botulínica', desc: 'Aplicação de botox para suavizar linhas de expressão e prevenir o envelhecimento.' },
  { icon: Scales, title: 'Emagrecimento', desc: 'Programa personalizado com acompanhamento endocrinológico e nutricional para resultados duradouros.' },
  { icon: FirstAidKit, title: 'Endocrinologia', desc: 'Diagnóstico e tratamento de distúrbios hormonais, tireoide, diabetes e metabolismo.' },
  { icon: Leaf, title: 'Medicina Integrativa', desc: 'Abordagem holística combinando tratamentos convencionais com práticas naturais e preventivas.' },
  { icon: Heart, title: 'Envelhecimento Saudável', desc: 'Protocolos anti-aging que atuam de dentro para fora, promovendo vitalidade e longevidade.' },
  { icon: PersonSimpleRun, title: 'Nutrição Esportiva', desc: 'Planejamento nutricional especializado para otimizar performance e composição corporal.' },
  { icon: Timer, title: 'Implantes Hormonais', desc: 'Reposição hormonal com implantes subcutâneos para equilíbrio e qualidade de vida.' },
]

function Services() {
  const [ref, inView] = useOnView()
  return (
    <section id="procedimentos" className="svcs section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="svcs__header">
          <motion.span variants={fadeUp} className="section-label">Procedimentos</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Tratamentos<br/><span className="accent">Personalizados</span></motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: '520px', margin: '0 auto' }}>Cada procedimento é adaptado às suas necessidades, com segurança e resultados naturais.</motion.p>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="svcs__grid">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="svc-card">
              <div className="svc-card__icon"><s.icon size={26} weight="duotone" /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--red"><WhatsappLogo size={18} weight="duotone" /> Agendar Procedimento</a>
        </div>
      </div>
    </section>
  )
}

/* ==================== TEAM ==================== */
const team = [
  { name: 'Dr. Nemer Finotelo', role: 'Endocrinologista e Nutrólogo', img: './images/dr-nemer.webp' },
  { name: 'Dra. Fernanda Wilk', role: 'Nutricionista Clínica', img: './images/dra-fernanda.webp' },
]

function Team() {
  const [ref, inView] = useOnView()
  return (
    <section id="especialistas" className="team section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="team__header">
          <motion.span variants={fadeUp} className="section-label">Especialistas</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Profissionais<br/><span className="accent">Qualificados</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="team__grid">
          {team.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="doc-card">
              <div className="doc-card__img"><img src={t.img} alt={t.name} /></div>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="doc-card__link"><CalendarBlank size={16} weight="duotone" /> Agendar</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== STRUCTURE ==================== */
function Structure() {
  const [ref, inView] = useOnView()
  const imgs = [
    { src: './images/recepcao.webp', label: 'Recepção' },
    { src: './images/sala-espera.webp', label: 'Sala de Espera' },
    { src: './images/ibelli-vista.webp', label: 'Clínica' },
  ]
  return (
    <section id="estrutura" className="structure section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="structure__header">
          <motion.span variants={fadeUp} className="section-label">Estrutura</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Ambiente<br/><span className="accent">Acolhedor</span></motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: '520px', margin: '0 auto' }}>Espaço moderno e confortável, projetado para sua tranquilidade.</motion.p>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="structure__grid">
          {imgs.map((img, i) => (
            <motion.div key={i} variants={fadeUp} className="structure__item">
              <img src={img.src} alt={img.label} />
              <span>{img.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== TESTIMONIALS ==================== */
const reviews = [
  { text: 'A Clínica Ibelli mudou minha vida! Perdi 15kg com acompanhamento do Dr. Nemer. Me sinto renovada e cheia de energia.', author: 'Patricia R.', stars: 5 },
  { text: 'Fiz harmonização facial e o resultado ficou super natural. Equipe atenciosa do início ao fim. Super recomendo!', author: 'Camila S.', stars: 5 },
  { text: 'Ambiente lindo e acolhedor. A Dra. Fernanda montou um plano alimentar perfeito para minha rotina. Já indiquei para todas as amigas.', author: 'Juliana M.', stars: 5 },
]

function Testimonials() {
  const [ref, inView] = useOnView()
  const [cur, setCur] = useState(0)
  useEffect(() => { const t = setInterval(() => setCur(c => (c+1) % reviews.length), 5000); return () => clearInterval(t) }, [])

  return (
    <section className="testi section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={{ textAlign: 'center' }}>
          <motion.span variants={fadeUp} className="section-label" style={{ justifyContent: 'center' }}>Depoimentos</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Pacientes <span className="accent">Satisfeitas</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="testi__card">
          <div className="testi__stars">{[...Array(5)].map((_,i) => <Star key={i} size={18} weight="fill" />)}</div>
          <AnimatePresence mode="wait">
            <motion.div key={cur} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="testi__text">"{reviews[cur].text}"</p>
              <strong>{reviews[cur].author}</strong>
            </motion.div>
          </AnimatePresence>
          <div className="testi__dots">
            {reviews.map((_,i) => <button key={i} className={`testi__dot ${i===cur?'active':''}`} onClick={() => setCur(i)} aria-label={`Depoimento ${i+1}`} />)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== CTA ==================== */
function CTA() {
  const [ref, inView] = useOnView()
  return (
    <section className="cta">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="cta__inner">
          <motion.h2 variants={fadeUp}>Sua Transformação<br/><span style={{ color: 'white' }}>Começa Agora</span></motion.h2>
          <motion.p variants={fadeUp}>Agende sua avaliação e descubra o melhor tratamento para você.</motion.p>
          <motion.div variants={fadeUp} className="cta__btns">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--white"><WhatsappLogo size={20} weight="duotone" /> WhatsApp</a>
            <a href={TEL} className="btn btn--glass"><Phone size={20} weight="duotone" /> (48) 99107-9698</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== CONTACT ==================== */
function Contact() {
  const [ref, inView] = useOnView()
  return (
    <section id="contato" className="contact section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="contact__grid">
          <div>
            <motion.span variants={fadeUp} className="section-label">Contato</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Fale<br/><span className="accent">Conosco</span></motion.h2>
            <motion.div variants={fadeUp} className="contact__items">
              <div className="contact__item"><WhatsappLogo size={22} weight="duotone" style={{ color: 'var(--red)' }} /><div><strong>WhatsApp</strong><a href={WA} target="_blank" rel="noopener noreferrer">(48) 99107-9698</a></div></div>
              <div className="contact__item"><Phone size={22} weight="duotone" style={{ color: 'var(--red)' }} /><div><strong>Telefone</strong><a href={TEL}>(48) 99107-9698</a></div></div>
              <div className="contact__item"><MapPin size={22} weight="duotone" style={{ color: 'var(--red)' }} /><div><strong>Endereço</strong><span>R. Monza, 226 — Sala 708<br/>Pagani, Palhoça/SC — 88132-147</span></div></div>
              <div className="contact__item"><Clock size={22} weight="duotone" style={{ color: 'var(--red)' }} /><div><strong>Horário</strong><span>Seg a Sex — 8h às 17h</span></div></div>
              <div className="contact__item"><InstagramLogo size={22} weight="duotone" style={{ color: 'var(--red)' }} /><div><strong>Instagram</strong><a href="https://instagram.com/ibelliclinica" target="_blank" rel="noopener noreferrer">@ibelliclinica</a></div></div>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="contact__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536!2d-48.66!3d-27.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCl%C3%ADnica+Ibelli!5e0!3m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0, borderRadius: 'var(--radius-lg)', minHeight: '400px' }} allowFullScreen loading="lazy" title="Localização Clínica Ibelli" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== FOOTER ==================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand"><img src="./images/logo.webp" alt="Ibelli" className="footer__logo" /><p>Estética, endocrinologia e saúde integrativa na Grande Florianópolis.</p></div>
        <div className="footer__col"><h4>Procedimentos</h4><a href="#procedimentos">Harmonização Facial</a><a href="#procedimentos">Emagrecimento</a><a href="#procedimentos">Endocrinologia</a><a href="#procedimentos">Medicina Integrativa</a></div>
        <div className="footer__col"><h4>Contato</h4><a href={WA} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a><a href={TEL}><Phone size={14} weight="duotone" /> (48) 99107-9698</a><a href="https://instagram.com/ibelliclinica" target="_blank" rel="noopener noreferrer"><InstagramLogo size={14} weight="duotone" /> @ibelliclinica</a></div>
      </div>
      <div className="container footer__bottom"><p>&copy; 2026 Clínica Ibelli. Todos os direitos reservados.</p></div>
    </footer>
  )
}

function FloatingWA() { return <a href={WA} target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="WhatsApp"><WhatsappLogo size={30} weight="fill" /></a> }

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section><About /></section>
      <section><Services /></section>
      <section><Team /></section>
      <section><Structure /></section>
      <section><Testimonials /></section>
      <section><CTA /></section>
      <section><Contact /></section>
      <Footer />
      <FloatingWA />
    </>
  )
}

export default App
