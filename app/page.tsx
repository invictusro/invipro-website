'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href')!)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          setMobileMenuOpen(false)
        }
      })
    })

    // Reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el)
    })

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Background Effects */}
      <div className="bg-wrap">
        <div className="bg"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            <Image src="/assets/images/logo.svg" alt="Invictus Pro" className="logo-img" width={36} height={36} />
            <span>Invictus Pro</span>
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content reveal">
          <h1>
            Elite Software <span className="grad-text">Development</span> & <span className="grad-text">Automation</span> Solutions
          </h1>
          <p>
            Transform your business with premium software solutions. We build cutting-edge applications and automation systems that drive results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <a href="#contact" className="btn-cta" style={{ flex: '1 1 auto', minWidth: '150px' }}>Start Your Project</a>
            <a href="#services" className="btn-secondary" style={{ flex: '1 1 auto', minWidth: '150px' }}>Explore Services</a>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section id="projects">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Completed Projects</h2>
            <p className="section-desc">
              Recent success stories showcasing our expertise in building scalable automation and conversion-optimized platforms.
            </p>
          </div>

          <div className="projects-grid">
            {/* Linkgate.bio */}
            <div className="project-card reveal">
              <div className="project-header">
                <div className="project-badge">⚡</div>
                <div className="project-title-wrap">
                  <h3>Linkgate.bio</h3>
                  <div className="project-platforms">
                    <span className="platform-tag">TikTok</span>
                    <span className="platform-tag">Instagram</span>
                    <span className="platform-tag">Reddit</span>
                    <span className="platform-tag">Threads</span>
                  </div>
                </div>
              </div>
              <p className="project-desc">
                A powerful deeplink service, links that bypass in-app browsers of various social media applications.
              </p>
              <ul className="project-features">
                <li>Users are already logged in and have cards saved</li>
                <li>Great for OFM, Crypto and Ecom</li>
                <li>Custom domains, ultra fast loading times</li>
              </ul>
              <a
                href="https://t.me/linkgatebio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ marginTop: '1.5rem', display: 'inline-block' }}
              >
                Learn More on Telegram
              </a>
            </div>

            {/* DropsXpress */}
            <div className="project-card reveal">
              <div className="project-header">
                <div className="project-badge">🚀</div>
                <div className="project-title-wrap">
                  <h3>DropsXpress</h3>
                  <div className="project-platforms">
                    <span className="platform-tag">X (Twitter)</span>
                    <span className="platform-tag">Automation</span>
                  </div>
                </div>
              </div>
              <p className="project-desc">
                Advanced Retweet groups automation for X with intelligent features and randomized actions.
              </p>
              <ul className="project-features">
                <li>Built-in free Anti-Detect Browser (no Dolphyn needed)</li>
                <li>Non-API based operation for reduced rate limiting</li>
                <li>Human-like behavior with randomized actions</li>
              </ul>
              <a
                href="https://t.me/dropsxpress"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ marginTop: '1.5rem', display: 'inline-block' }}
              >
                Learn More on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div className="card reveal">
              <div className="card-icon">📱</div>
              <h3>Fully Automated Phone Farms (iOS/Android)</h3>
              <p>
                Automate any action on any social media platform across multiple phones/accounts.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <li style={{ padding: '0.4rem 0' }}>• Custom automations with custom features: following, posting, commenting with AI, you name it</li>
                <li style={{ padding: '0.4rem 0' }}>• Auto-posting, account workflows, engagement, and data extraction</li>
                <li style={{ padding: '0.4rem 0' }}>• Custom API integrations and orchestration</li>
              </ul>
            </div>

            <div className="card reveal">
              <div className="card-icon">🔍</div>
              <h3>Web Scraping & Data Extraction</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ padding: '0.5rem 0' }}>• Leads (emails, phone numbers) and business data</li>
                <li style={{ padding: '0.5rem 0' }}>• Product catalogs, media assets, articles, and metadata</li>
                <li style={{ padding: '0.5rem 0' }}>• Multi-layer, anti-bot-aware crawling with scheduling and storage</li>
              </ul>
            </div>

            <div className="card reveal">
              <div className="card-icon">💻</div>
              <h3>Web & SaaS Development</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ padding: '0.5rem 0' }}>• Dashboards, admin portals, recurring payments and customer apps</li>
                <li style={{ padding: '0.5rem 0' }}>• Greenfield SaaS (auth, billing, roles, audit logs)</li>
                <li style={{ padding: '0.5rem 0' }}>• Secure, scalable backends (REST/GraphQL, queues, workers)</li>
              </ul>
            </div>

            <div className="card reveal">
              <div className="card-icon">📲</div>
              <h3>Mobile App Development</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ padding: '0.5rem 0' }}>• Android (Kotlin/Java) and iOS (Swift)</li>
                <li style={{ padding: '0.5rem 0' }}>• Cross-platform with Flutter or React Native</li>
              </ul>
            </div>

            <div className="card reveal" style={{ gridColumn: '1 / -1' }}>
              <div className="card-icon">⚙️</div>
              <h3>General Programming</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ padding: '0.5rem 0' }}>• Desktop tools & executables (.exe)</li>
                <li style={{ padding: '0.5rem 0' }}>• API integrations and internal tools</li>
                <li style={{ padding: '0.5rem 0' }}>• Task automation scripts</li>
                <li style={{ padding: '0.5rem 0' }}>• AI Automations integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Advantages</span>
            <h2 className="section-title">Why Work With Me</h2>
          </div>

          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0, marginTop: '0.25rem' }}>🔧</div>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', margin: '0 0 0.5rem', letterSpacing: '-0.01em', color: 'var(--text)' }}>Custom-Built — no generic scripts</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.6' }}>
                    Every solution is tailored specifically to your requirements and workflows.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0, marginTop: '0.25rem' }}>⚡</div>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', margin: '0 0 0.5rem', letterSpacing: '-0.01em', color: 'var(--text)' }}>High performance & accuracy</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.6' }}>
                    Optimized code and intelligent algorithms deliver fast, reliable results you can depend on.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0, marginTop: '0.25rem' }}>🚀</div>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', margin: '0 0 0.5rem', letterSpacing: '-0.01em', color: 'var(--text)' }}>Fast delivery & great communication</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.6' }}>
                    Quick turnarounds with transparent updates throughout the entire development process.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0, marginTop: '0.25rem' }}>🧠</div>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', margin: '0 0 0.5rem', letterSpacing: '-0.01em', color: 'var(--text)' }}>Full-stack: backend, frontend, mobile</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.6' }}>
                    10 years of experience in automations and web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <div className="faq-item reveal">
              <div className="faq-question">
                How do we start?
              </div>
              <div className="faq-answer">
                Send me a brief on Telegram or email. I'll reply with clarifying questions or a call link.
              </div>
            </div>

            <div className="faq-item reveal">
              <div className="faq-question">
                Which tech stack do you use?
              </div>
              <div className="faq-answer">
                Node.js, Python, or Go for automation and scraping; modern frameworks for web/mobile; secure, scalable backends and databases.
              </div>
            </div>

            <div className="faq-item reveal">
              <div className="faq-question">
                Can you maintain my project?
              </div>
              <div className="faq-answer">
                Yes—ongoing support, monitoring, and enhancements are available as monthly packages.
              </div>
            </div>

            <div className="faq-item reveal">
              <div className="faq-question">
                Can you give an invoice?
              </div>
              <div className="faq-answer">
                Yes, we can give you an invoice from a VAT Paying European Entity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Get Started</span>
            <h2 className="section-title">Start Your Project</h2>
            <p className="section-desc">
              Let's discuss how we can help transform your business
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0' }}>
            <a
              href="mailto:contact@invictuspro.com"
              className="btn-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 auto', minWidth: '200px' }}
            >
              <span style={{ fontSize: '1.2rem' }}>📧</span>
              Email Me
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 auto', minWidth: '200px' }}
            >
              <span style={{ fontSize: '1.2rem' }}>💬</span>
              Message on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 Invictus Pro. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
