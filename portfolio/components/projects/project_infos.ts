import { ProjectInfo } from './types'

export const projectInfos: ProjectInfo[] = [
  {
    title: 'Todo App',
    image: '/img/todo_app.png',
    description: 'Simple Todo App that provides the user an option to add content in the code style.',
    detail: [
      'Purpose: Learn trending technologies (TypeScript, React, and Firebase).',
      'Tech Stack: TypeScript, React, Firebase',
    ],
    link: 'https://todolist-ebad1.firebaseapp.com/',
    github: 'https://github.com/Mozuha/TodoList',
  },
  {
    title: 'Connect Four Othello',
    image: '/img/connect_four_othello.png',
    description: 'Windows Forms game app which combined Connect Four and Othello.',
    detail: [
      'Purpose: Learn GUI and software designing techniques (MVC, UML).',
      'Tech Stack: C#, Visual Studio Windows Forms App',
      'Note: This was done as a part of an undergraduate course assignment.',
    ],
    github: 'https://github.com/Mozuha/Connect-Four-Othello-GUI',
  },
  {
    title: 'Oxford Flower 102 Prediction',
    image: '/img/oxford_flower_102_prediction.png',
    description: 'Flower image prediction app based on 102 Category Flower Dataset.',
    detail: [
      'Purpose: Learn trending technologies (Deep learning, Tensorflow(Keras)); Construct API and connect it with the frontend.',
      'Tech Stack: Python, Flask, TypeScript, React, Google Colab, Tensorflow(Keras)',
      'Note: Training was done with a fine-tuned ResNet50 model.',
    ],
    github: 'https://github.com/Mozuha/Oxford-Flower-102-Prediction',
  },
  {
    title: 'Spooky Trail',
    image: '/img/spooky_trail.png',
    description: 'A spooky scene of objects rendered with OpenGL.',
    detail: [
      'Purpose: Learn basics of computer graphics.',
      'Tech Stack: C++, OpenGL, freeglut, GLEW',
      'Note: This was done as a part of an undergraduate course assignment.',
    ],
    github: 'https://github.com/Mozuha/Computer-Graphics/tree/master/Final_Project',
  },
  {
    title: 'Portfolio',
    image: '/img/arches_med.jpg',
    description: 'My Portfolio',
    detail: [
      'Purpose: Learn React framework.',
      'Tech Stack: TypeScript, React, Next.js',
    ],
  },
]