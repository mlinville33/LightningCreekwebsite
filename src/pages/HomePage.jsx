import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './HomePage.module.css';
import FuturisticSoftware2 from '../public/FuturisticSoftware2.png';
import FuturisticSoftware from '../public/FuturisticSoftware.png';
import DollarSign from '../public/DollarSign.png';
import Lightning1 from '../public/Lightning1.png';
import Lightning2 from '../public/Lightning2.png';
import Lightning3 from '../public/Lightning3.png';
import CTACard from "../components/CTACard";
import Carousel from "../components/Carousel";

const heroImages = [Lightning2, Lightning1, Lightning3];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.pageContainer}>
        <Carousel images={heroImages} interval={5000} />
        <div className={styles.cardContainer}>
            <CTACard
              imageSrc={FuturisticSoftware2}
              text='Custom Software Solutions'
              description='Create custom software solutions tailored to your business needs. No matter the size of your project, we can help you build software that meets your requirements.'
              altText="Developer building a custom software interface"
              buttonText="Contact us"
              onButtonClick={() => navigate('/contact')}
            />
            <CTACard
              imageSrc={DollarSign}
              text='Website Creation'
              description='Create websites that are fast, secure, and easy to use. Utilizing the latest technologies, we ensure your website is optimized for performance and user experience.'
              altText="Cost-effective website development services"
              buttonText="Get started"
              onButtonClick={() => navigate('/services')}
            />
            <CTACard
              imageSrc={FuturisticSoftware}
              text='AWS Resource Management'
              description='Manage your AWS resources to ensure optimal performance and cost efficiency. Providing you with the best practices and tools to manage your cloud infrastructure.'
              altText="Cloud infrastructure management dashboard"
              buttonText="Get started"
              onButtonClick={() => navigate('/services')}
            />
        </div>
    </main>
  );
};

export default HomePage;
