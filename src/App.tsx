import { useEffect, useState } from 'react'
import './App.css'
import { educations, experiences, profile, projects, skillGroups } from './data/portfolio'
import type { ProjectMedia } from './types'

function imageUrl(src: string) {
  return src.startsWith('/') && !src.startsWith('//')
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [preview, setPreview] = useState<ProjectMedia | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!preview) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreview(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [preview])

  const openPreview = (media: ProjectMedia) => setPreview(media)

  const closePreview = () => setPreview(null)

  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="identity" href="#top" aria-label="페이지 맨 위로 이동">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </a>

          <nav aria-label="주요 메뉴">
            <a href="#experience"><span>01</span> Work</a>
            <a href="#projects"><span>02</span> Projects</a>
            <a href="#about"><span>03</span> About</a>
            <a href="#contact"><span>04</span> Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero page-shell" id="top" aria-labelledby="hero-title">
          {/* <div className="hero-kicker" data-reveal>
            <span className="signature-dot" aria-hidden="true" />
            <span>Portfolio / 2026</span>
            <span className="signature-line" aria-hidden="true" />
          </div> */}

          <h1 id="hero-title" data-reveal>
            안녕하세요.
            <br />
            저는 {profile.name}입니다.
          </h1>

          <div className="hero-bottom" data-reveal>
            <p>{profile.introduction}</p>
            <div className="text-links" aria-label="외부 링크">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowIcon />
              </a>
              <a href={`mailto:${profile.email}`}>
                Email <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          className="experience page-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading" data-reveal>
            <span>01</span>
            <h2 id="experience-title">Work Experience.</h2>
            <p>실제 서비스의 흐름과 협업 방식을 배웠습니다.</p>
          </div>

          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.period}`} data-reveal>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <strong>{item.duration}</strong>
                </div>
                <div className="experience-content">
                  <div className="experience-title-row">
                    <div>
                      <h3>{item.company}</h3>
                      <p>{item.position}</p>
                    </div>
                    <span></span>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <div className="experience-details">
                    <ul>
                      {item.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                    <p>{item.stack.join(' · ')}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects page-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading" data-reveal>
            <span>02</span>
            <h2 id="projects-title">Projects.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.id} data-reveal>
                <div className="project-meta">
                  <span className="project-index">0{index + 1}</span>
                  <span>{project.period}</span>
                  <span>{project.type}</span>
                </div>

                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span>{project.role}</span>
                  </div>
                  <p className="project-summary">{project.summary}</p>

                  <div
                    className={`project-gallery media-count-${project.media.length}`}
                    aria-label={`${project.name} 프로젝트 이미지`}
                  >
                    {project.media.map((media, mediaIndex) => (
                      <figure className="media-frame" key={media.caption}>
                        {media.src ? (
                          <button
                            className="media-preview-trigger"
                            type="button"
                            onClick={() => openPreview(media)}
                            aria-label={`${media.alt} 크게 보기`}
                          >
                            <img src={imageUrl(media.src)} alt={media.alt} />
                          </button>
                        ) : (
                          <div className="media-placeholder" role="img" aria-label={media.alt}>
                            <span>{project.name}</span>
                            <strong>0{mediaIndex + 1}</strong>
                          </div>
                        )}
                      </figure>
                    ))}
                  </div>

                  <div className="project-details">
                    <div>
                      <h4>What I built</h4>
                      <ul>
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-stack">
                      <h4>Tech stack</h4>
                      <p>{project.stack.join(' · ')}</p>
                    </div>
                  </div>

                  <div className="project-links" aria-label={`${project.name} 링크`}>
                    {project.links.map((link) => (
                      <a href={link.url} key={link.label} target="_blank" rel="noreferrer">
                        {link.label} <ArrowIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about page-shell" id="about" aria-labelledby="about-title">
          <div className="section-heading" data-reveal>
            <span>03</span>
            <h2 id="about-title">How I Work.</h2>
            <p>기술을 목적이 아닌 문제 해결의 도구로 사용합니다.</p>
          </div>

          <div className="about-intro" data-reveal>
            <p>
              문제를 해결하기 위해서는 방향을 맞추는 것이 중요하다고 믿습니다. 
              익숙하지 않은 영역에서도 필요한 것을 빠르게 학습하고, 
              질문과 확인을 통해 소통하며 맡은 일을 끝까지 수행하는 개발자가 되고 싶습니다.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title} data-reveal>
                <span>{group.index}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul aria-label={`${group.title} 기술`}>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="education" data-reveal>
            <span>Education &amp; Training</span>
            <div className="education-list">
              {educations.map((item) => (
                <article className="education-item" key={`${item.title}-${item.period}`}>
                  <span>{item.category}</span>
                  <div>
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    {item.detail && <small>{item.detail}</small>}
                  </div>
                  <time>{item.period}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact page-shell" id="contact" aria-labelledby="contact-title">
          <div className="section-heading contact-heading" data-reveal>
            <span>04</span>
            <h2 id="contact-title">CONTACT.</h2>
          </div>

          <div className="contact-bottom" data-reveal>
            <p>
              함께 해결할 문제가 있다면 편하게 연락해주세요.
              <br />
              새로운 기회를 기다리고 있습니다.
            </p>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <span>© 2026 {profile.name}</span>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
      </footer>

      {preview?.src && (
        <div
          className="preview-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePreview()
          }}
        >
          <section
            className="preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${preview.alt} 미리보기`}
          >
            <button
              className="preview-close"
              type="button"
              onClick={closePreview}
              aria-label="미리보기 닫기"
              autoFocus
            >
              ×
            </button>

            <div className="preview-viewport">
              <img src={imageUrl(preview.src)} alt={preview.alt} />
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
