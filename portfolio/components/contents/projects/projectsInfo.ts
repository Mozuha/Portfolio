import type { ProjectInfo } from './types';

export const projectsInfo: ProjectInfo[] = [
  {
    title: 'Todo App',
    image: '/img/todo_app.png',
    description: 'Simple Todo App that provides the user an option to add content in the code style.',
    purpose: 'Learn trending technologies (TypeScript, React, and Firebase).',
    techStack: 'TypeScript, React, Firebase',
    link: 'https://todolist-ebad1.firebaseapp.com/',
    github: 'https://github.com/Mozuha/TodoList',
  },
  {
    title: 'Connect Four Othello',
    image: '/img/connect_four_othello.png',
    description: 'Windows Forms game app which combined Connect Four and Othello.',
    purpose: 'Learn GUI and software designing techniques (MVC, UML).',
    techStack: 'C#, Visual Studio Windows Forms App',
    note: 'This was done as a part of an undergraduate course assignment.',
    github: 'https://github.com/Mozuha/Connect-Four-Othello-GUI',
  },
  {
    title: 'Oxford Flower 102 Classification',
    image: '/img/oxford_flower_102_prediction.png',
    description: 'Flower image classification app based on 102 Category Flower Dataset.',
    purpose:
      'Learn trending technologies (Deep learning, Tensorflow(Keras)); Construct API and connect it with the frontend.',
    techStack: 'Python, Flask, TypeScript, React, Google Colab, Tensorflow(Keras)',
    note: 'Training was done with a fine-tuned ResNet50 model.',
    github: 'https://github.com/Mozuha/Oxford-Flower-102-Classification',
    qiita: 'https://qiita.com/Mozuha/items/3b0784a9829004035049',
  },
  {
    title: 'Spooky Trail',
    image: '/img/spooky_trail.png',
    description: 'A spooky scene of objects rendered with OpenGL.',
    purpose: 'Learn basics of computer graphics.',
    techStack: 'C++, OpenGL, freeglut, GLEW',
    note: 'This was done as a part of an undergraduate course assignment.',
    github: 'https://github.com/Mozuha/Computer-Graphics/tree/master/Final_Project',
  },
  {
    title: 'Portfolio',
    image: '/img/portfolio.png',
    description: 'My Portfolio',
    purpose: 'Learn React framework.',
    techStack: 'TypeScript, React, Next.js, Vercel',
    note: 'Took user friendliness, responsive design, and Lighthouse scores into account.',
    link: 'https://portfolio-mozuha.vercel.app/',
    github: 'https://github.com/Mozuha/Portfolio',
  },
];
