export const SlideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};


export const SlideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
export const Slide = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -30,
       duration: 1,
        delay: delay,
      
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};


export const SlideDown = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};


export const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const ZoomIn = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};


export const FadeIn = (delay) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};




export const Animation = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 30, // Optional: gives it a smooth slide-up effect along with the fade
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: delay, // Staggers based on the passed delay
      },
    },
  };
};




export const SlideUpward = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 40,  // Starts 40px down (slides UP)
      x: -30, // Starts 30px to the left (slides RIGHT/IN) - change to positive if you want it to slide from the right!
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay, // Uses your manual index delay
        ease: "easeOut",
      },
    },
  };
};






