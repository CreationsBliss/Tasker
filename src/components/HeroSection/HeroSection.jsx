import React from "react";
import listImage from "../../assets/list.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto mb-12">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={listImage} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-amber-500 lg:text-4xl">
              Tasker
            </h1>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              Takser is a simple task management app that allows users to add,
              organize, and track their tasks. With an intuitive interface,
              users can easily input their tasks, set priorities, and stay on
              top of their responsibilities, ensuring better productivity and
              time management throughout the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
