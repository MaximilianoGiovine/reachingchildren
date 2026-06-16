import './App.css'
import BackgroundSlideshow from './components/BackgroundSlideshow.jsx'
import Carousel from './components/Carousel.jsx'
import DynamicCarousel from './components/DynamicCarousel.jsx'
import jImEsterMazurek2020 from './assets/Jim & Ester Mazurek 2020.jpeg'

const highlights = [
  {
    title: 'Outreach center in Santiago',
    text:
      'The center on the southwest side of the city continues reaching children and families in one of the most populated areas of Chile.',
  },
  {
    title: 'Second floor underway',
    text:
      'Builders International teams helped move the education wing expansion forward with energy, skill, and practical service.',
  },
  {
    title: 'Traveling ministry',
    text:
      'The team held seminars, a school opening, and strategic meetings in Patagonia, Panama, and Chihuahua during the same season.',
  },
]

const timeline = [
  {
    period: 'February',
    title: 'Patagonia',
    text:
      'Jim taught at the Patagonia Bible Institute and took part in the opening of Quiñenahuin Christian High School.',
  },
  {
    period: 'April',
    title: 'Panama',
    text:
      'He attended the annual meeting of the LAAST Administrative Committee.',
  },
  {
    period: 'May',
    title: 'Chihuahua, Mexico',
    text:
      'He spoke at the Annual Christian Education Conference of the South Chihuahua District.',
  },
  {
    period: 'June to August',
    title: 'U.S. itineration',
    text:
      'The family returns to the United States for three months to visit churches and support the work with partners and friends.',
  },
]

const supportPoints = [
  'Pray for the progress of the work and for the children and families of Santiago.',
  'Support the team as they travel for teaching and ministry connections.',
  'Continue helping financially with the center expansion and itineration.',
]

const mediaLinks = {
  recap:
    'https://ucc9ade756b16d92c908a6de37a9.dl.dropboxusercontent.com/cd/0/inline/DButizMndns2MtHWxC_7GwZVPxPbMOLq0U0zNajJYsN3qs8dH2SE_DHnZZm-raJAaQxDSXZNqK9p0FOzS5UdooBZYfxAWV74bqzYly539qWn5JkJOQp4wniNYr3otQI79qcqC-f43o7iFtX_B5MeL6BG/file?dl=1',
  video2:
    'https://uc6d4d269c2cae1bb919c7876526.dl.dropboxusercontent.com/cd/0/inline/DBvZQ9-k9cyQtEzOr1-2iFZXlBg8AV2MY2gfgp09gp1BQhtSnsVi2bQEUILuTvuoPZjH5j2GqPoDnMvqTP87I5VlkUCgcpROXLMuU_8BYNj3Y60UkKm21DUDWHl5V9RiTn1YMq1cS78t1_unRKcuWc9/file',
  video3:
    'https://uca5710b7e98b895383241fb0967.dl.dropboxusercontent.com/cd/0/inline/DBsuN6mEWezZa0_6X74uI8ybTsNbAe9tV3P-mDHUkrh_IuLPBVZTEanuZaiha5tkQ3R60kwhCcR_rUvMO9ph4GjCnLlGGQZSm9PKxMhchLaaBW53EAI4UBCAv2s77NLanstjCKXTqzk_AIOF3GnLoqNs/file',
}

function App() {
  return (
    <>
      <BackgroundSlideshow />
      <main className="newsletter-page">
      <header className="site-header" aria-label="Site branding">
        <div className="site-branding">
          <img
            className="site-logo"
            src={jImEsterMazurek2020}
            alt="Jim and Ester Mazurek"
          />
          <div className="site-branding__copy">
            <p className="site-branding__eyebrow">Reaching Children</p>
            <p className="site-branding__title">Raising Up Leaders</p>
          </div>
        </div>
      </header>
      <section className="hero-panel">
        <div className="hero-copy">
          <h1>Spring 2026</h1>
          <p className="lead">
            Latest news about our ministry in Chile: children's
            outreach, educational expansion, and ministry on the move.
          </p>

          <div className="hero-actions">
            <a href="#summary">View summary</a>
            <a href="#prayer" className="secondary-link">
              Prayer points
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Ministry contact details">
          <div className="glass-card contact-card">
            <p className="card-label">Contact and support</p>
            <h2>The Ministries of Missionaries Jim & Ester Mazurek</h2>
            <p>
              Missionaries to Chile based in Southern Pines, NC, with giving
              available through giving.ag.org.
            </p>

            <dl className="contact-list">
              <div>
                <dt>Phone</dt>
                <dd>(719) 827 0515</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>reachingandraising@gmail.com</dd>
              </div>
              <div>
                <dt>Online Giving</dt>
                <dd className="online-giving-block">
                  <a
                    className="online-giving-button"
                    href="https://giving.ag.org/donate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Give Online
                  </a>
                  <span>Acct 238874</span>
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="stats-grid" id="summary">
        {highlights.map((item) => (
          <article className="glass-card stat-card" key={item.title}>
            <p className="card-label">Highlights</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <Carousel title="Outreach in La Cisterna, Santiago de Chile" />

      <section className="story-layout">
        <article className="glass-card story-card">
          <p className="card-label">Season letter</p>
          <h2>A brief update, full of gratitude and motion</h2>
          <p>
            The newsletter opens with gratitude for prayer and support. From the
            children's center in Santiago to conversations with leaders in other
            countries, the story shows a ministry that grows through
            collaboration, teaching, and steady presence.
          </p>
          <p>
            The visual narrative should feel warm, bright, and honest: a family
            serving, a team building, and a community moving forward in faith.
          </p>
        </article>

        <article className="glass-card quote-card">
          <p className="card-label">Core idea</p>
          <blockquote>
            "The Santiago Children's Ministries Outreach Center continues to reach
            kids on the southwest side of this great city."
          </blockquote>
          <p>
            That is the heart of the design: a local work with regional impact,
            presented in clear blocks that are easy to read on mobile.
          </p>
        </article>
      </section>

      <section className="timeline-section" aria-label="Ministry timeline">
        <div className="section-heading">
          <p className="card-label">Timeline</p>
          <h2>Ministry movement through the season</h2>
        </div>

        <div className="timeline-grid">
          {timeline.map((item) => (
            <article className="timeline-card glass-card" key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <DynamicCarousel title="Our work in CMM" />

      <section className="media-section" aria-label="Mission videos">
        <div className="section-heading">
          <p className="card-label">Video</p>
          <h2>Trip recap and supporting materials</h2>
        </div>

        <div className="media-grid">
          <article className="glass-card video-card">
            <div className="video-frame">
              <video controls playsInline preload="metadata">
                <source src={mediaLinks.recap} type="video/quicktime" />
                Your browser cannot play this video directly.
              </video>
            </div>
            <div className="media-copy">
              <p className="card-label">Recap shared in service</p>
              <h3>Chile 2026 Missions Trip</h3>
              <p>
                The video summarizes the trip and should play directly in the
                browser. If your browser has trouble with the file format, open
                it in a new tab.
              </p>
              <a href={mediaLinks.recap} target="_blank" rel="noreferrer">
                Open video
              </a>
            </div>
          </article>

          <article className="glass-card video-card">
            <div className="video-frame">
              <video controls playsInline preload="metadata">
                <source src={mediaLinks.video2} type="video/quicktime" />
                Your browser cannot play this video directly.
              </video>
            </div>
            <div className="media-copy">
              <p className="card-label">Partner story</p>
              <h3>Evergreen Church Video</h3>
              <p>
                A short feature about Evergreen Church's work during the visit.
              </p>
              <a href={mediaLinks.video2} target="_blank" rel="noreferrer">
                Open video
              </a>
            </div>
          </article>

          <article className="glass-card video-card">
            <div className="video-frame">
              <video controls playsInline preload="metadata">
                <source src={mediaLinks.video3} type="video/quicktime" />
                Your browser cannot play this video directly.
              </video>
            </div>
            <div className="media-copy">
              <p className="card-label">Project highlight</p>
              <h3>Project Video</h3>
              <p>
                A closer look at a project featured during the trip and the
                people involved.
              </p>
              <a href={mediaLinks.video3} target="_blank" rel="noreferrer">
                Open video
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="support-section" id="prayer">
        <article className="glass-card support-card">
          <div>
            <p className="card-label">Prayer and support</p>
            <h2>How to support this next season</h2>
          </div>

          <ul>
            {supportPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>
      </main>
    </>
  )
}

export default App
