export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

export const categoryStudyAnimation = {
  hidden: {
    x: -150,
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const categoryFunAnimation = {
  hidden: {
    x: 150,
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const descriptionAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const textAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeIn",
    },
  },
  exit: {
    x: 200,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const percAnimation = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const imgAnimation = {
  hidden: {
    x: -30,
    scale: 0.5,
    opacity: 0.7,
  },
  show: {
    x: 0,
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeIn",
    },
  },
};

export const finishAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
