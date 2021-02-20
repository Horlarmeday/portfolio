/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Mahmud Ajao',
  title: "Hi all, I'm Mahmud",
  subTitle: emoji(
    'A passionate Software Engineer 🚀 having an experience of building Web applications with JavaScript / Vuejs / Nodejs / Laravel and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1ZKLKn2NcgV12UnBk8hYJkuSnlRj48Qa0/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Horlarmeday',
  linkedin: 'https://www.linkedin.com/in/mahmud-ajao/71b5a0125',
  gmail: 'ajaomahmud@gmail.com',
  gitlab: 'https://gitlab.com/ajaomahmud',
  facebook: 'https://www.facebook.com/kunley23',
  // medium: 'https://medium.com/@saadpasta',
  stackoverflow: 'https://stackoverflow.com/users/10449648/mahmud-ajao',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop functional and sustainable web applications with clean codes'
    ),
    emoji('⚡ Manage cutting-edge technologies to improve applications'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    // {
    //   skillName: 'sass',
    //   fontAwesomeClassname: 'fab fa-sass',
    // },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'vuejs',
      fontAwesomeClassname: 'fab fa-vuejs',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'laravel',
      fontAwesomeClassname: 'fab fa-laravel',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git-alt',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Federal University of Technology, Akure',
      logo: require('./assets/images/futalogo.png'),
      subHeader: 'Bachelor of Engineering in Metallurgical Engineering',
      duration: 'November 2010 - October 2015',
      desc: 'Participated in the research of Aluminum hybrid composite.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    },
    // {
    //   schoolName: 'Stanford University',
    //   logo: require('./assets/images/stanfordLogo.png'),
    //   subHeader: 'Bachelor of Science in Computer Science',
    //   duration: 'September 2013 - April 2017',
    //   desc:
    //     'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
    //   descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    // },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Backend', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Frontend/Design',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Borome Limited',
      companylogo: require('./assets/images/borolle.png'),
      date: 'February 2018 – Present',
      desc:
        'Borome Limited is financial technology company that provides convenient and reliable financial services of various forms such as installment loans, and consumer goods finance.',
      // descBullets: [
      //   'Developed the data APIs supporting the company\'s products.',
      //   'Involved in the development of the systems architecture',
      // ],
    },
    {
      role: 'Software Engineer',
      company: 'Zebullon Developers',
      companylogo: require('./assets/images/zebullonlogo1.png'),
      date: 'July 2018 – February 2019',
      desc: 'Zebullon Developers is a company that uses its technological know-how to provide meaningful solutions to businesses to grow.'
    },
    {
      role: 'Web Developer',
      company: 'Centrifuge Info. Tech',
      companylogo: require('./assets/images/centrifugelogo.png'),
      date: 'May 2016 – June 2018',
      desc: 'Centrifuge Information Technology Ltd is a company that proffers technological solutions to. businesses of various kinds such as manufacturing, production, financial, government to engineering, oil and gas.'    
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Horlarmeday', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/log.png'),
      projectName: "Daughters of Charity Hospital",
      projectDesc: "An Hospital Management Resource System to help manage the hospital operations",
      footerLink: [
        {
          name: 'check out',
          url:
            'http://saayahealth.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/topclasslogo.jpg'),
      projectName: "Topclass Power Limited",
      projectDesc: "A Sales and Office Management System to help facilitate company's activities.",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://www.topclassng.com',
        },
      ],
    },
    {
      image: require('./assets/images/mkanlogo.jpg'),
      projectName: "Majlis Khuddam Abuja",
      projectDesc: "A census project for an NGO youth organization.",
      footerLink: [
        {
          name: 'Check out',
          url:
            'https://mkan-abuja.netlify.com',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    // {
    //   title: 'Google Code-In Finalist',
    //   subtitle:
    //     'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
    //   image: require('./assets/images/codeInLogo.webp'),
    //   footerLink: [
    //     {
    //       name: 'Certification',
    //       url:
    //         'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
    //     },
    //     {
    //       name: 'Award Letter',
    //       url:
    //         'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
    //     },
    //     {
    //       name: 'Google Code-in Blog',
    //       url:
    //         'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
    //     },
    //   ],
    // },
    {
      title: 'Okra PHP',
      subtitle: 'okra-php is a PHP library for okra core products.',
      image: require('./assets/images/okra.png'),
      footerLink: [
        {
          name: 'Check out',
          url:
            'https://packagist.org/packages/horlarmeday/okra-php',
        },
      ],
    },

    {
      title: 'NPM Package',
      subtitle: 'A CLI to bootstrap a well structured express projects.',
      image: require('./assets/images/npm.png'),
      footerLink: [
        // { name: 'Certification', url: '' },
        {
          name: 'Check out',
          url: 'https://www.npmjs.com/package/make-express-app',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+234-7035120699',
  emailAddress: 'ajaomahmud@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'MahmudAjao1', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
