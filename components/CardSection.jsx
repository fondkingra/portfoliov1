// src/components/CardSection.js
import React from 'react';
import Card from './Card';

const CardSection = () => {
  const projects = [
    {
      title: 'Fish BMI Prediction using YOLO',
      description: 'The Fish BMI Calculator is a tool that utilizes the YOLOv8 deep learning model to detect fish in video footage. It computes and displays the height, width, and Body Mass Index (BMI) of each detected fish based on bounding box dimensions. The output is an annotated video that overlays these metrics on the detected fish.',
      imageUrl: '../src/assets/fish bmi thumbnail.jpg',
      projectUrl: 'https://github.com/fondkingra/Fish-bmi-prediction',
    },
    {
      title: 'Vison base object detection for as-rs',
      description: 'This project contains a Python script for detecting and classifying bolts and nuts using a YOLO model via a live camera feed. It also estimates the size of detected objects and allows users to capture annotated frames.',
      imageUrl: '../src/assets/captured_frame_with_sizes.jpg',
      projectUrl: 'https://github.com/fondkingra/Vision-based-object-detection-for-as-rs',
    },
    {
      title: ' AI-Based Safety Helmet for Mining Workers Using Health Prediction with TensorFlow. ',
      description: 'Developed an AI-powered safety helmet for mining workers that incorporates a health prediction system. The helmet monitors vital signs like heart rate and body temperature in real-time, using TensorFlow for health prediction, ensuring worker safety in hazardous environments.  ',
      imageUrl: '../src/assets/ai helmet thumbnail.jpeg',
      projectUrl: 'https://github.com/fondkingra/AI-Based Safety Helmet for Mining Workers Using Health Prediction with TensorFlow',
    },
    // Add more projects as needed
    {
      title: 'Weather web app',
      description: 'A weather web app provides real-time weather updates, forecasts, and climate insights using API data. It offers users location-based weather details, including temperature, humidity, and wind speed.',
      imageUrl: '../src/assets/weather thumbnail.png',
      projectUrl: 'https://github.com/fondkingra/Weather-app',
    },
    {
      title: 'Smart Agriculture System Using IoT with Alerts via SMTP and Message Protocol',
      description: ': Developed a Smart Agriculture System that integrates IoT sensors to monitor environmental parameters such as soil moisture, temperature, humidity, and pH levels. The system uses SMTP (Simple Mail Transfer Protocol) and message protocols (e.g., MQTT) to send alerts to farmers about critical conditions, ensuring timely intervention and optimizing agricultural productivity',
      imageUrl: '../src/assets/agri.jpeg',
      projectUrl: '#',
    },
    {
      title: 'React-hn',
      description: 'A react and react-router powered website that provides you with the latest news from Hacker News, implented using firebase api.',
      imageUrl: '../src/assets/hacker_web.png',
      projectUrl: 'https://insin.github.io/react-hn',
    }
  ];

  return (
    <div className="card-section">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
};

export default CardSection;