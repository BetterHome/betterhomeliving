import styles from '../styles/Home.module.scss';
import {useEffect} from 'react';

function Home() {
  useEffect(()=>{
    document.title = 'Better Home Living | Home'
  },[]);
  return (
    <div className={styles.welcome}>
      <img className="cover-image" src="/CoverImage.jpg" alt="AC Cover Image"/>
      <main>
        <img className="medium-image" src="/CompanyBrandImage.png" alt="Company Image"/>
        <span>
        <h1>Better Home Living Home Services: Your Premier Partner for Home Comfort and Efficiency. </h1>
        <p>Elevate your living experience with 
        our expert solutions in HVAC, plumbing, and electrical services. We&apos;re dedicated to enhancing your home&apos;s functionality with reliable, swift, and top-quality service. Trust us to 
        go beyond the basics and ensure your home runs seamlessly.
        </p>
        </span>
      </main>
      <article>
        <h1>Book a Service:</h1>
        <a className="email-links" href="mailto: betterhomeliving@outlook.com ?subject=Better Home Living Consultation">Reserve your Appointment</a>
      </article>
      <section className={styles.imageBlock}>
        <span>
          <h1>Trusted Home Services</h1>
        <h2>Family-Owned.</h2>
        <h2>Quality Services Guaranteed.</h2>
        </span>
        <img src="/AC4.jpg" alt="Outdoor AC Unit"/>
      </section>

    <section className={styles.Services}>
        <h1 id="ServicesHeader">Services:</h1>
        <div>
        <section className={styles.Cooling}>
        <div>        
        <h3>Cooling Services</h3>
        <ul>
          <li>AC Replacement</li>
          <li>AC Maintenance</li>
          <li>AC Installation</li>
          <li>AC Repair</li>
          <li>New Construction</li>
        </ul>
        </div>
        </section>
        <section className={styles.Heating}>
          <div>
          <h3>Heating Services</h3>
          <ul>
            <li>Furnace Replacement</li>
            <li>Furnace Maintenance</li>
            <li>Furnace Installation</li>
            <li>Furnace Repair</li>
          </ul>
          </div>
        </section>
        <section className={styles.splitServices}>
          <div>
          <h3>Mini-Split Services</h3>
          <ul>
            <li>Replacement</li>
            <li>Installation</li>
          </ul>
          </div>
        </section>
        <section className={styles.AirQuality}>
          <div>
          <h3>Air Quality Services</h3>
          <ul>
            <li>Air Purifiers</li>
            <li>UV Lights</li>
            <li>Dehumidifiers & Humidifiers</li>
          </ul>
          </div>
        </section>
        <section className={styles.Plumbing}>
          <div>
          <h3>Plumbing Services</h3>
          <ul>
          <li>Water Heater Repair</li>
          <li>Water Heater Replacement</li>
          <li>Water Heater Maintenance</li>
          </ul>
          </div>
        </section>
        <section className={styles.Electrical}>
        <div>
          <h3>Electrical Services</h3>
          <ul>
            <li>Fixture Installation</li>
            <li>Ceiling Fan Installation</li>
          </ul>
        </div>
      </section>
    </div>
    </section>
      <section className={styles.BottomMessage}>
        <h1>Protecting Your Home Like It&apos;s Our Own</h1>
        <p>Your trusted partner for all your home needs! Whether you’re facing an HVAC emergency or looking to enhance your living space with a state-of-the-art heating and cooling system, we’ve got you covered. Our commitment to high-quality service ensures that you can rely on us for top-notch solutions. Discover the comfort and convenience of Better Home Living today!
        </p>
      </section>
    </div>
  )
}

export default Home;
