import {createSlice} from '@reduxjs/toolkit';
import {IEmployment} from "../components/employment/Employment.tsx";

interface SkillCategory {
  name: string;
  id: number;
  skills: string[];
}

interface HomeState {
  email: string;
  phone: string;
  employment: IEmployment[];
  skillsData: SkillCategory[];
}

const email = 'forzee451@gmail.com'
const phone = '+447493802593'
const employment: IEmployment[] = [
  {
    title: 'Frontend Developer',
    date: 'Oct 2022 - Present',
    subtitle: 'Atmos International, Manchester, UK',
    id: 0,
    achievements: [
      {
        achievement: 'Developing and maintaining complex web applications using Vue 3, React, TypeScript, and Canvas',
        id: 0
      },
      {achievement: 'Working with tools such as Jira, Storybook, and internal prototyping framework PROTO', id: 1},
      {achievement: 'Collaborating with designers and backend developers in an international team', id: 2},
      {
        achievement: 'Independently implemented the entire frontend part of a complex commercial project:',
        id: 3,
        details: [
          'Rewrote an existing C++ application in Vue 3',
          'Designed architecture, routing, state management, and helper modules',
          'Integrated the frontend with backend services via REST APIs',
          'The product was successfully commercialized and is now generating revenue for the company',
        ]
      },
    ]
  },
  {
    title: 'Frontend Developer',
    date: 'Jul 2021 - Feb 2022',
    subtitle: 'ITomych, Kharkiv, Ukraine',
    id: 1,
    achievements: [
      {
        achievement: 'Migrated multiple React.js projects to TypeScript, improving maintainability and type safety',
        id: 0
      },
      {
        achievement: 'Refactored existing components to eliminate redundant renders and optimize performance',
        id: 1
      },
      {
        achievement: 'Contributed to development and support of the company\'s website: fixed bugs, implemented features, enhanced UX',
        id: 2
      },
      {
        achievement: 'Gained commercial experience with React Native, building a mobile app for a British fintech product — muchBetter (English mobile banking solution)',
        id: 3
      },
    ]
  },
  {
    title: 'Frontend Developer',
    date: 'Mar 2021 - Jun 2021',
    subtitle: 'Telesens, Kharkiv, Ukraine',
    id: 2,
    achievements: [
      {
        achievement: 'Participated in records and documentation management, including maintaining technical documentation in Confluence',
        id: 0
      },
      {
        achievement: 'Applied basic principles of object-oriented programming (OOP) in real-world scenarios',
        id: 1
      },
    ]
  },
]

const skillsData: SkillCategory[] = [
  {
    name: 'Technical Skills',
    id: 0,
    skills: ['Vue3', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Scss', 'Storybook', 'Canvas', 'Git', 'Jira', 'Proto']
  },
  {
    name: 'Languages',
    id: 1,
    skills: ['English', 'Russian', 'Ukrainian']
  },
  {
    name: 'Interests',
    id: 2,
    skills: ['Chess', 'Fitness', 'Travel', 'Technology']
  }
]

const initialState: HomeState = {
  email,
  phone,
  employment,
  skillsData
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});
export default homeSlice.reducer;