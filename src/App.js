import React from 'react';
import Logo from './assets/logo.png'
import mockup from './assets/mockup.png'

export default function SeoCourseLanding() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
  <div style={styles.logo}>
    <img 
      src={Logo}
      alt="logo"
      style={{ height: 80, cursor: 'pointer' }} 
    />
  </div>
  <nav style={styles.nav}>
    <a href="#about" style={styles.navLink}>About</a>
    <a href="#tutors" style={styles.navLink}>Tutors</a>
    <a href="#program" style={styles.navLink}>Program</a>
    <a href="#location" style={styles.navLink}>Onde estamos?</a>
  </nav>
</header>

      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <p style={styles.subTitle}>VEM NENÉM</p>
          <h1 style={styles.title}>O seu app de maternidade</h1>
          <p style={styles.description}>
            Learn to gather and analyze data provided by Google Analytics, search consoles & web servers with our new data science course.
          </p>
        </div>
        <img 
          src={mockup} 
          alt="Rocket Icon" 
          style={styles.heroImage} 
        />
      </section>
      
      {/* Info Cards */}
      <section style={styles.infoCards}>
        <div style={styles.card}>
          <h3>20-22 <br/> September</h3>
          <p>3 days of intensive practice</p>
        </div>
        <div style={styles.card}>
          <h3>24 <br/> Hours</h3>
          <p>10:00 AM – 6:00 PM</p>
        </div>
        <div style={styles.card}>
          <h3>20 <br/> Seats</h3>
          <p>Limited number of seats</p>
        </div>
        <div style={{...styles.card, ...styles.priceCard}}>
          <h3>Price</h3>
          <p style={styles.price}>$245</p>
          <p>Best offer</p>
        </div>
      </section>
      
      {/* About the course */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.aboutInfo}>
          <div style={styles.aboutBox}>
            <h4>24 Hours</h4>
            <p>of practice and immersion in data science for SEO specialists</p>
            <h5>Level</h5>
            <p>Intermediate</p>
          </div>
          <div style={styles.aboutText}>
            <h2>About the course</h2>
            <p>
              Every day, Google Analytics, Google Search Console and your web server collect millions of data rows, and SEO experts often only look at summary graphs and ignore when they increase and get upset when they decrease. It is time to understand the causes and consequences and take the first step in Data Science - dig into this data with your head and find the answers.
            </p>
            <p>
              There's no need to invent Google's conspiracy theories if you can find out how data science works and test its main techniques in SEO. Book your seat to get instant access to the course.
            </p>
            <button style={styles.bookBtn}>BOOK A PLACE</button>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section style={styles.benefits}>
        <h2>Who will benefit</h2>
        <div style={styles.benefitCards}>
          <div style={styles.benefitCard}>
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="SEO Specialist" style={styles.benefitImg}/>
            <p>In-house SEO specialists working on large projects</p>
          </div>
          <div style={styles.benefitCard}>
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055657.png" alt="SEO Experts" style={styles.benefitImg}/>
            <p>Licensed SEO experts and SEO enthusiasts</p>
          </div>
          <div style={styles.benefitCard}>
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055650.png" alt="SEO Geeks" style={styles.benefitImg}/>
            <p>SEO geeks</p>
          </div>
        </div>
      </section>
      
      {/* Signup CTA */}
      <section style={styles.signup}>
        <h2>Sign up for the course now</h2>
        <p>and get a PDF course report & certificate via email</p>
        <button style={styles.registerBtn}>REGISTER</button>
      </section>
      
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: '100%',
    paddingTop: 110,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
    color: '#333',
  },
  header: {
    backgroundColor: '#26b4d1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    color: 'white',
    fontWeight: '600',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: 80
  },
  logo: {
    fontWeight: '700',
    fontSize: 20,
  },
  nav: {
  display: 'flex',
  gap: 20,
  paddingLeft: 20,
  paddingRight: 20,
},
  navLink: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  bookBtn: {
    backgroundColor: '#f44a5b',
    color: 'white',
    border: 'none',
    padding: '8px 14px',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: '600',
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },
  subTitle: {
    color: '#f36f6a',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    maxWidth: 400,
  },
  heroImage: {
    width: 400,
    height: 400,
    paddingRight: 30,
  },
  infoCards: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 20,
    flex: 1,
    margin: '0 8px',
    textAlign: 'center',
  },
  priceCard: {
    backgroundColor: '#26b4d1',
    color: 'white',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  aboutSection: {
    marginBottom: 40,
  },
  aboutInfo: {
    display: 'flex',
    gap: 20,
  },
  aboutBox: {
    backgroundColor: '#26b4d1',
    color: 'white',
    padding: 20,
    borderRadius: 8,
    flex: 1,
  },
  aboutText: {
    flex: 2,
  },
  benefits: {
    marginBottom: 40,
  },
  benefitCards: {
    display: 'flex',
    gap: 20,
  },
  benefitCard: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 8,
    textAlign: 'center',
  },
  benefitImg: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  signup: {
    backgroundColor: '#2a3b60',
    color: 'white',
    textAlign: 'center',
    padding: 40,
    borderRadius: 8,
  },
  registerBtn: {
    marginTop: 16,
    backgroundColor: '#f44a5b',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: 6,
  }
};
