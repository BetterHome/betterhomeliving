import SlideShow from '../components/SlideShow/SlideShow';
import styles from '../styles/About.module.scss';
import slides from '../data/aboutPageImages.json';
import {useEffect} from 'react';

const containerStyles = {
  width: "375px",
  height: "500px",
  margin: "0 auto"
};

export default function About() {
  useEffect(()=>{
    document.title = 'Better Home Living | About'
  },[]);

  return (
    <div className={styles.AboutContainer}>
      <img className={`${styles.coverImage} cover-image`} src="/Company_Splash_Image.jpg" alt="AC Cover Image"/>
      <main className={styles.AboutMain}>
        <h1>About Us</h1>
        <p>Originally founded in 2017, Better Home Living Services Home Services is dedicated in providing the highest quality comfort services in and around North Georgia. We provide repair, installation, and maintenance services on furnaces, air conditioners, and heat pumps, as well as indoor air quality and air duct services. Our clients include homes and businesses in North Georgia.</p>
      </main>
      <section className={styles.Owner}>
        <h1>Meet the Owner:</h1>
        <figure className={styles.portrait}>
          <img src="/Portrait.jpg" alt="Luis Medina Profile Picture"/>
          <figcaption>Luis&apos;s seasoned leadership propels Better Home Living Home Services to the forefront of the industry. With over 15 years of hands-on experience, he has consistently demonstrated a commitment to excellence. Luis&apos;s deep understanding of the field, combined with his innovative approach, ensures that our services remain cutting-edge and customer-focused.</figcaption>
        </figure>
      </section>
      <section className={styles.Comfort}>
        <h1>Your Comfort is Our Priority</h1>
        <div>
        <p>We go beyond simply fixing problems. Our goal is to prevent them altogether. By offering comprehensive maintenance plans, we can save you money in the long run and ensure your system runs smoothly for years to come.</p>
        <img src="/NewUnit.jpg" alt="New Installation"/>
        </div>
      </section>
      <section className={styles.Installation}>
        <h1>Full Installations</h1>
        <div className={styles.slides}>
        <span className={styles.slideText}>
        <p>Whether you&apos;re starting from scratch with a new build or upgrading your existing comfort systems, our end-to-end installations have got you covered. From out-of-the-box setup to full installation, we ensure seamless service.</p>
        </span>
        <div style={containerStyles}>
        <SlideShow slides={slides} parentWidth={375}/>
        </div>
        </div>
      </section>
      <section className={styles.Socials}>
        <h1>Follow Us or Check out our Reviews:</h1>
        <ul>
          <li><a href="https://www.facebook.com/betterhomelivinghomeservices" target="_blank" rel="noopener noreferrer"> <img src="/Facebook_Logo.svg" alt="Facebook Logo"/></a></li>
          <li><a href="https://www.yelp.com/biz/better-home-living-doraville" target="_blank" rel="noopener noreferrer"> <img src="/yelp_favicon.svg" alt="Yelp Logo"/></a></li>
        </ul>
      </section>
    </div>
  )
}
