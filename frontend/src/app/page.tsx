'use client';

import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    text: "They carefully guided us through every step of buying our first home. Their negotiation skills are 10 out of 10, we couldn't have asked for a better team by our side.",
    author: 'First-Time Homebuyer, Beverly Hills',
  },
  {
    text: "Ross and Ryan did an incredible job helping me with my real estate needs and went above and beyond to make sure I was receiving the best deal. I've now used them twice, as both a buyer and seller.",
    author: 'Repeat Client, Venice Beach',
  },
  {
    text: 'The Ross and Ryan Group made things very easy and seamless. They are well known and highly respected in the local and wider city real estate markets. Truly world-class service.',
    author: 'Luxury Property Seller, Bel Air',
  },
];

const LISTINGS = [
  {
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    badge: 'New Listing',
    price: '$8,495,000',
    address: '1952 N Beverly Drive, Beverly Hills',
    specs: ['4 Bed', '5 Bath', '4,200 sqft'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    badge: 'Featured',
    price: '$2,495,000',
    address: 'Woodland Hills Resort Living',
    specs: ['4 Bed', '4.25 Bath', '3,500+ sqft'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    badge: 'Open House',
    price: '$3,250,000',
    address: '726 Howard Street, Venice',
    specs: ['3 Bed', '3.5 Bath', '2,800 sqft'],
  },
];

const COMMUNITIES = [
  {
    name: 'Beverly Hills',
    img: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80',
  },
  {
    name: 'Bel Air',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
  },
  {
    name: 'Venice',
    img: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80',
  },
  {
    name: 'Hollywood Hills',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  },
];

const INSTAGRAM = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80',
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80',
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('visible');
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );
    for (const el of document.querySelectorAll('.reveal')) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" aria-label="Ross & Ryan Group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/rrg-logo-trans-white.png" alt="Ross & Ryan Group" />
        </a>
        <ul className={`nav-links ${mobileNavOpen ? 'show' : ''}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#listings">Listings</a>
          </li>
          <li>
            <a href="#communities">Communities</a>
          </li>
          <li>
            <a href="#testimonials">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="nav-contact">
          Get In Touch
        </a>
        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setMobileNavOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-tag">Beverly Hills · Los Angeles · Luxury Real Estate</p>
          <h1 className="hero-title">
            Your Home. <span className="hero-accent">Our Mission.</span>
          </h1>
          <p className="hero-subtitle">
            Top-producing agents at Douglas Elliman, specializing in luxury residential and
            commercial properties across Los Angeles.
          </p>
          <div className="hero-cta">
            <a href="#listings" className="btn-primary">
              View Listings
            </a>
            <a href="#contact" className="btn-secondary">
              Schedule a Consultation
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      <section className="section" id="about">
        <div className="about">
          <div className="about-images reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ross-headshot.jpg" alt="Ross Groefsema" className="about-img" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ryan-headshot.jpg" alt="Ryan Hirsh" className="about-img" />
          </div>
          <div className="about-text reveal">
            <p className="section-tag">About Us</p>
            <h2 className="section-title">
              Three Generations of
              <br />
              Real Estate Excellence
            </h2>
            <p className="section-subtitle">
              Ross Groefsema and Ryan Hirsh, two of Beverly Hills&rsquo; top sales producers, joined
              forces at Douglas Elliman to deliver an unmatched level of service in luxury real
              estate.
            </p>
            <p className="section-subtitle">
              Ross brings a legacy rooted in three generations of real estate brokers, having sold
              record-shattering residences at the Montage Beverly Hills. Ryan contributes over 15
              years of institutional experience in brokerage, asset management, and luxury
              development.
            </p>
            <p className="section-subtitle">
              Together, they serve an elite clientele of celebrities, athletes, and international
              investors, making every transaction seamless, strategic, and personal.
            </p>
            <div className="about-details">
              <div>
                <div className="about-detail-label">Brokerage</div>
                <div className="about-detail-value">Douglas Elliman</div>
              </div>
              <div>
                <div className="about-detail-label">Specialties</div>
                <div className="about-detail-value">Residential & Commercial</div>
              </div>
              <div>
                <div className="about-detail-label">Recognition</div>
                <div className="about-detail-value">RealTrends 2025 Verified</div>
              </div>
              <div>
                <div className="about-detail-label">Location</div>
                <div className="about-detail-value">Beverly Hills, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section listings-section" id="listings">
        <div className="listings-header reveal">
          <div>
            <p className="section-tag">Featured Properties</p>
            <h2 className="section-title">Curated Luxury Listings</h2>
          </div>
          <a href="#contact" className="btn-secondary">
            View All Properties
          </a>
        </div>
        <div className="listings-grid">
          {LISTINGS.map((l) => (
            <div key={l.address} className="listing-card reveal">
              <div className="listing-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.img} alt={l.address} className="listing-img" />
                <div className="listing-overlay" />
                <div className="listing-badge">{l.badge}</div>
              </div>
              <div className="listing-info">
                <div className="listing-price">{l.price}</div>
                <div className="listing-address">{l.address}</div>
                <div className="listing-specs">
                  {l.specs.map((spec, i) => (
                    <span key={spec}>
                      <span>{spec}</span>
                      {i < l.specs.length - 1 ? <span className="dot" /> : null}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="communities">
        <div className="section reveal" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
          <p className="section-tag">Our Markets</p>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Communities We Serve
          </h2>
        </div>
        <div className="communities-grid">
          {COMMUNITIES.map((c) => (
            <div key={c.name} className="community-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.name} className="community-img" />
              <div className="community-content">
                <div className="community-name">{c.name}</div>
                <div className="community-tag">Explore Listings</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="reveal">
          <p className="section-tag">Client Experiences</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonial-quote">{TESTIMONIALS[activeTestimonial].text}</div>
          <div className="testimonial-author">{TESTIMONIALS[activeTestimonial].author}</div>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.author}
                type="button"
                className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section instagram-section" id="instagram">
        <div className="instagram-header reveal">
          <p className="section-tag">Follow Along</p>
          <h2 className="section-title">@rossandryangroup</h2>
          <a
            href="https://www.instagram.com/rossandryangroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-handle"
          >
            View on Instagram &rarr;
          </a>
        </div>
        <div className="instagram-grid">
          {INSTAGRAM.map((src) => (
            <div key={src} className="instagram-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Property" />
              <div className="instagram-item-overlay">
                <span className="instagram-icon">&#9825;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-info reveal">
          <div className="contact-copy">
            <p className="section-tag">Let&rsquo;s Connect</p>
            <h2 className="section-title">
              Ready to Make
              <br />
              Your Move?
            </h2>
            <p className="section-subtitle">
              Whether you&rsquo;re buying, selling, or investing, we&rsquo;re here to guide you
              through every step with the expertise and care you deserve.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">&#9993;</div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">
                  <a href="mailto:ross@rossandryangroup.com">ross@rossandryangroup.com</a>
                </div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">&#9742;</div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">
                  <a href="tel:3107950943">(310) 795-0943</a>
                </div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">&#9873;</div>
              <div>
                <div className="contact-detail-label">Office</div>
                <div className="contact-detail-value">
                  150 El Camino Dr, Suite 300
                  <br />
                  Beverly Hills, CA 90212
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/rrg-logo-trans-white.png" alt="Ross & Ryan Group" />
        </div>
        <div className="footer-legal">
          &copy; 2026 Ross & Ryan Group. All rights reserved.
          <br />
          DRE #01915056 | Douglas Elliman Real Estate
        </div>
        <div className="footer-brokerage">
          Beverly Hills, California
          <br />
          <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>Powered by Douglas Elliman</span>
        </div>
      </footer>
    </>
  );
}
