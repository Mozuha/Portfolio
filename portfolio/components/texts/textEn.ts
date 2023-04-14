import { Text } from './types';

export const textEn: Text = {
  ABOUT: {
    DESCRIPTION1:
      'I am Mizuki Hashimoto. I was born in Japan. I recently graduated from \
      Juniata College with a major in Computer Science and a minor in Chemistry. \
      I am currently studying distributed systems at TU Darmstadt. At the same time, \
      I am seeking an intern or a beginner role as a software \
      engineer, but am open to any opportunity because I enjoy challenging \
      new things.',
    DESCRIPTION2:
      'As a developer, I like to consider software as a set of components \
      and think about each component what are they, what they do, and how \
      they interact with each other.',
    DESCRIPTION3:
      'Besides the computer-related topics, I speak Japanese, English, \
      and some basic Mandarin. Also, I like traveling, walking, and listening \
      to music.',
  },
  EXPERIENCES: [
    {
      // Atrae
      POSITION: 'Frontend Engineer Intern',
      DESCRIPTION:
        'Collaborated with product team members to work on new feature implementation,\
      refactoring, debugging, etc. on a web application.',
    },
    {
      // Muni-Link
      POSITION: 'Project member',
      DESCRIPTION:
        "Automated part of the company's invoicing process by implementing the system \
        that pulls data from the company's database and generates reports on a scheduled time basis. \
        The project reduced the time consumed for the process by 12 hours per month.",
    },
  ],
  PROJECTS: [
    {
      // Todo app
      DESCRIPTION: 'Simple Todo App that provides the user an option to add content in the code style.',
      PURPOSE: 'Learn trending technologies (TypeScript, React, and Firebase).',
    },
    {
      // othello
      DESCRIPTION: 'Windows Forms game app which combined Connect Four and Othello.',
      PURPOSE: 'Learn GUI and software designing techniques (MVC, UML).',
      NOTE: 'This was done as a part of an undergraduate course assignment.',
    },
    {
      // flower
      DESCRIPTION: 'Flower image classification app based on 102 Category Flower Dataset.',
      PURPOSE:
        'Learn trending technologies (Deep learning, Tensorflow(Keras)); Construct API and connect it with the frontend.',
      NOTE: 'Training was done with a fine-tuned ResNet50 model.',
    },
    {
      // spooky
      DESCRIPTION: 'A spooky scene of objects rendered with OpenGL.',
      PURPOSE: 'Learn basics of computer graphics.',
      NOTE: 'This was done as a part of an undergraduate course assignment.',
    },
    {
      // portfolio
      DESCRIPTION: 'My Portfolio',
      PURPOSE: 'Learn React framework.',
      NOTE: 'Currently considering a better language switching and internationalization.',
    },
  ],
};
