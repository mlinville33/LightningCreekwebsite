import React from "react";
import '../App.css';
import styles from './HomePage.module.css';
import FuturisticSoftware2 from '../public/FuturisticSoftware2.png';
import FuturisticSoftware from '../public/FuturisticSoftware.png';
import DollarSign from '../public/DollarSign.png';
import CTACard from "../components/CTACard";
import Carousel from "../components/Carousel";

const heroImages = [
  require('../public/Lightning2.png'),
  require('../public/Lightning1.png'),
  require('../public/Lightning3.png'),
];

const HomePage = () => {
  return (
    <div className={styles.header}>
        <h2>Offering low cost software solutions for your business needs</h2>
        <Carousel images={heroImages} interval={5000} />
        <div className={styles.cardContainer}>
            <CTACard
              imageSrc={FuturisticSoftware2}
              text='Custom Software Solutions'
              description='Create custom software solutions tailored to your business needs. No matter the size of your project, we can help you build software that meets your requirements.'
              altText="Futuristic Software 2"
              buttonText="Contact us"
              onButtonClick={() => window.location.href='/software'}
            />
            <CTACard
              imageSrc={DollarSign}
              text='Website Creation'
              description='Create websites that are fast, secure, and easy to use. Utilizing the latest technologies, we ensure your website is optimized for performance and user experience.'
              altText="DollarSign"
              buttonText="Get started"
              onButtonClick={() => window.location.href='/software'}
            />
            <CTACard
              imageSrc={FuturisticSoftware}
              text='AWS Resource Management'
              description='Manage your AWS resources to ensure optimal performance and cost efficiency. Providing you with the best practices and tools to manage your cloud infrastructure.'
              altText="Futuristic Software"
              buttonText="Get started"
              onButtonClick={() => window.location.href='/software'}
            />
        </div>
    </div>
  );
};

export default HomePage;