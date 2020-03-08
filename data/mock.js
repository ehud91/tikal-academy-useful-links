const Source = [
  {
    id: 1,
    tag: "#youtube",
    url: "https://www.youtube.com/watch?v=u21W_tfPVrY",
    desc:
      "Learn how to use Visual Studio Code like a pro with my top-ten strategies for developer productivity and happiness. https://angularfirebase.com/lessons/t...",
    title: "VS Code Top-Ten Pro Tips"
  },
  {
    id: 2,
    tag: "#github",
    url:
      "https://github.com/jsBlackBelt/react-shows/blob/react-ts-auth0/src/index.tsx",
    desc: "Auth0 - react-shows project example in github",
    title: "Auth0 - react-shows example"
  },
  {
    id: 3,
    tag: "#github",
    url: "https://github.com/jsBlackBelt/react-shows/tree/react-ts",
    desc: "Auth0 - react-shows project example in github",
    title: "Auth0 - react-shows example"
  },
  {
    id: 4,
    tag: "#slide",
    url: "https://webapp-auth-slides.netlify.com/1",
    desc: "WebApp Authentication & Authorization",
    title: "auth-slides"
  },
  {
    id: 5,
    tag: "#slide",
    url:
      "https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/",
    desc:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces. They were first introduced in React and have been broadly embraced by other frameworks like Vue, Svelte, and even adapted for general functional JS. However, their functional design requires a good understanding of closures in JavaScript...",
    title: "Deep dive: How do React hooks really work?"
  },
  {
    id: 6,
    tag: "#article",
    url:
      "https://docs.google.com/presentation/d/1iG6Qg-0pcS9us6VwUlY1-SBxMxbTRmebn4e0rdSBwF4/edit#slide=id.g57536ef510_0_0",
    desc:
      "In this workshop we will take the Tech Radar Day 2019 Website and create a PWA (Progressive Web App) from it...",
    title: "Progressive Web Apps"
  },
  {
    id: 7,
    tag: "#github",
    url: "http://github.com/ShavitCohen/pwa-portfolio.git",
    desc:
      "In this workshop we will take a simple website and create a PWA (Progressive Web App) from it.",
    title: "PWA Workshop"
  },
  {
    id: 8,
    tag: "#project",
    url: "http://pwa-portfolio.surge.sh/",
    desc: "This is a sample testimonial",
    title: "PWA Workshop - Example"
  },
  {
    id: 9,
    tag: "#github",
    url: "https://github.com/rollup/rollup-starter-lib",
    desc:
      "This repo contains a bare-bones example of how to create a library using Rollup, including importing a module from node_modules and converting it from CommonJS. We're creating a library called how-long-till-lunch, which usefully tells us how long we have to wait until lunch, using the ms package:",
    title: "rollup-starter-lib - React stater clean project"
  },
  {
    id: 10,
    tag: "#github",
    url: "https://github.com/timarney/react-app-rewired",
    desc: "Create your app using create-react-app and then rewire it.",
    title: "Rewire Your App - starter project"
  },
  {
    id: 11,
    tag: "#article",
    url:
      "https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them",
    desc:
      "Ever wondered what the difference is between GET and POST requests, or when to use PUT? You're not alone. Having a basic understanding of the different HTTP methods, or verbs, an API supports is an helpful knowledge when exploring and testing APIs...",
    title: "7 HTTP methods every web developer should know and how to test them"
  },
  {
    id: 12,
    tag: "#article",
    url: "http://mobx.js.org/best/pitfalls.html",
    desc:
      "Stuck with MobX? This section contains a list of common issues people new to MobX might run into. Importing from wrong location Because MobX ships with typescript typings out of the box, some import autocompleting tools (at least in VSCode) have the habit of auto completing with a wrong import, like",
    title: "Mobx - Common pitfalls & best practices"
  },
  {
    id: 13,
    tag: "#slide",
    url:
      "https://docs.google.com/presentation/d/1lL0LMUwG2POixiZzZXCl_QGomWiLLLvYtQ-2ctyve4k/edit?usp=sharing",
    desc: "The little state management that could",
    title: "MobX"
  },
  {
    id: 14,
    tag: "#article",
    url: "https://github.com/tzachi81/generators",
    desc:
      "Main points covered in this document iterable data types and objects and the iterator protocol generator functions and generator object generator functions with promises and their late ES8 edtion: async/await.",
    title: "Generators and Iterators in JavaScript"
  },
  {
    id: 15,
    tag: "#article",
    url: "https://mobx.js.org/refguide/autorun.html",
    desc:
      "mobx.autorun can be used in those cases where you want to create a reactive function that will never have observers itself. This is usually the case when you need to bridge from reactive to imperative code, for example for logging, persistence, or UI-updating code. When autorun is used, the provided function will always be...",
    title: "Mobx - Autorun"
  },
  {
    id: 16,
    tag: "#article",
    url: "https://mobx.js.org/refguide/computed-decorator.html",
    desc:
      "Computed values are values that can be derived from the existing state or other computed values. Conceptually, they are very similar to formulas in spreadsheets. Computed values can't be underestimated, as they help you to make your actual modifiable state as small as possible. Besides that they are highly optimized, so use them wherever possible...",
    title: "Mobx - computed"
  },
  {
    id: 17,
    tag: "#article",
    url:
      "https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/",
    desc:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces. They were first introduced in React and have been broadly embraced by other frameworks like Vue, Svelte, and even adapted for general functional JS. However, their functional design requires a good understanding of closures in JavaScript...",
    title: "Deep dive: How do React hooks really work?"
  },
  {
    id: 18,
    tag: "#article",
    url:
      "https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub",
    desc:
      "Stub I believe the biggest distinction is that a stub you have already written with predetermined behavior. So you would have a class that implements the dependency (abstract class or interface most likely) you are faking for testing purposes and the methods would just be stubbed out with set responses. They would not do anything fancy and you would have already written the stubbed code for it outside of your test...",
    title: "What's the difference between a mock & stub?"
  },
  {
    id: 19,
    tag: "#github",
    url: "https://github.com/orimazrafi/shows-hooks",
    desc: "project shows-hooks",
    title: "Ori Mazrafi - project shows-hooks"
  },
  {
    id: 20,
    tag: "#slide",
    url: "https://redux-hooks-training.netlify.com/2",
    desc:
      "Why Redux Hooks? When using React Hooks, it is more intuitive to also use Reac-Redux Hooks...",
    title: "Redux Hooks Slides - By Assaf Gannon"
  },
  {
    id: 21,
    tag: "#github",
    url: "https://github.com/jsBlackBelt/react-shows",
    desc: "react-shows - project example",
    title: "react-shows - project exaample"
  },
  {
    id: 22,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/tv-shows-kdvs1",
    desc: "the project writen in - codesandbox.io",
    title: "tv-shows - with routers"
  },
  {
    id: 23,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/tv-shows-okebq",
    desc: "the project writen in - codesandbox.io",
    title: "tv-shows - with react - redux"
  },
  {
    id: 24,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/react-redux-ts-starter-3yu7g",
    desc: "the project writen in - codesandbox.io",
    title: "react - Counter project"
  },
  {
    id: 25,
    tag: "#slide",
    url: "https://redux-hooks-training.netlify.com/2",
    desc:
      "Why Redux Hooks? When using React Hooks, it is more intuitive to also use Reac-Redux Hooks...",
    title: "Redux Hooks - By Assaf Gannon"
  },
  {
    id: 26,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/sleepy-river-ovc3f",
    desc: "the project writen in - codesandbox.io",
    title: "Display shows - react - redux"
  },
  {
    id: 27,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/boring-diffie-z7w2t",
    desc: "the project writen in - codesandbox.io",
    title: "Display shows + Counter - react - redux"
  },
  {
    id: 28,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/loving-mountain-trek6",
    desc: "the project writen in - codesandbox.io",
    title: "Display shows + Counter - react - redux"
  },
  {
    id: 29,
    tag: "#github",
    url:
      "https://github.com/okozolin/REACT-in-class-examples/tree/master/lesson08-css-grid",
    desc: "React - lessions examples",
    title: "REACT-in-class-examples"
  },
  {
    id: 30,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/my-take-counter-button-trx43",
    desc: "the project writen in - codesandbox.io",
    title: "React - Buttom increment / Decrement example"
  },
  {
    id: 31,
    tag: "#article",
    url:
      "https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5",
    desc:
      "Introduction React Hooks API is officially released in React 16.8.In this post, we focus especially on useReducer by introducing various use cases. Before continuing reading this tutorial, please read the official document if you haven’t. This tutorial assumes readers already have a basic understanding of hooks...",
    title: "How to use useReducer in React Hooks for performance optimization"
  },
  {
    id: 32,
    tag: "#github",
    url: "https://github.com/streamich/react-use",
    desc: "Useful react hooks for use",
    title: "react-use - Hooks"
  },
  {
    id: 33,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/use-callbacks-ce2wn",
    desc: "the project writen in - codesandbox.io",
    title: "React project - Display Counter example"
  },
  {
    id: 34,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/component-render-unnecessary-zzh20",
    desc: "the project writen in - codesandbox.io",
    title: "Custom hooks example - useCountRenders"
  },
  {
    id: 35,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/strange-thunder-57uk1",
    desc: "the project writen in - codesandbox.io",
    title: "React - example - 2 Values"
  },
  {
    id: 36,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/happy-sky-tprkf",
    desc: "the project writen in - codesandbox.io",
    title: "React - example - Changing Screen ligths..."
  },
  {
    id: 37,
    tag: "#codesandbox",
    url: "https://codesandbox.io/s/hardcore-beaver-wq97j",
    desc: "the project writen in - codesandbox.io",
    title: "React - example - Navigation"
  },
  {
    id: 38,
    tag: "#codepen",
    url: "https://codepen.io/evyatarnc/pen/oNgMeey?editors=1100",
    desc: "the project writen in - codepen.io",
    title: "Css - Examples"
  },
  {
    id: 39,
    tag: "#article",
    url:
      "https://dev.to/codeartistryio/10-javascript-concepts-you-need-to-master-react-cheatsheet-3njh",
    desc:
      "This is the 3rd article in the series Learn React in 2020. Subscribe here to stay up to date. Aside from a few unique features that it has, such as JSX, React is at it's core plain JavaScript.",
    title: "10 JavaScript Concepts You Need to Master React (+ Cheatsheet)..."
  },
  {
    id: 40,
    tag: "#game",
    url: "https://flexboxfroggy.com/",
    desc: "Froggy Game - for play and test CSS flexbox...",
    title: "Flexbox - Froggy Game"
  },
  {
    id: 41,
    tag: "#youtube",
    url: "https://m.youtube.com/watch?v=3dx5mHfmN0g",
    desc:
      "Want to work collaboratively during the hackathon? Let Git help you achieve that. Heard about GIT but never understood what is it for? I invite you to get closer acquainted with GIT and GitHub, where we will explore Git essentials, live coding and fun.",
    title: "HackExtend Prep Event - Orit Kozolin Nachum - Take GIT easy..."
  },
  {
    id: 42,
    tag: "#codepen",
    url: "https://codepen.io/netcraft/pen/Doqlg?editors=100",
    desc: "the project writen in - codepen.io",
    title: "Css tests from Eviatar"
  },
  {
    id: 43,
    tag: "#codepen",
    url: "https://codepen.io/evyatarnc/pen/gJPjKz?editors=1100",
    desc: "the project writen in - codepen.io",
    title: "Css tests from Eviatar"
  },
  {
    id: 44,
    tag: "#codepen",
    url: "https://codepen.io/evyatarnc/pen/joWYEO",
    desc: "the project writen in - codepen.io",
    title: "Css Example from Eviatar"
  },
  {
    id: 45,
    tag: "",
    url: "https://pedantic-tereshkova-8281aa.netlify.com/1",
    desc: "Slides from Assaf Gannon...",
    title: "React - Slides From Assaf Gannon"
  },
  {
    id: 46,
    tag: "",
    url: "https://github.com/jsBlackBelt/react-shows.git",
    desc: "React project github - react-shows...",
    title: "React project github - react-shows"
  },
  {
    id: 47,
    tag: "",
    url: "https://github.com/jsBlackBelt/react-shows",
    desc: "React project github - react-shows...",
    title: "React project github - react-shows"
  },
  {
    id: 48,
    tag: "",
    url: "https://codesandbox.io/s/funny-matsumoto-qhniz",
    desc: "the project writen in - codesandbox.io",
    title: "React Car make - Example"
  },
  {
    id: 49,
    tag: "",
    url: "https://usehooks.com/",
    desc:
      "What's all this about? Hooks are a new addition in React that lets you use state and other React features without writing a class. This website provides easy to understand code examples to help you learn how hooks work and inspire you to take advantage of them in your next project. You may also like my React app builder ✨️...",
    title: "React - useHooks article"
  },
  {
    id: 50,
    tag: "",
    url: "https://github.com/okozolin/REACT-in-class-examples?files=1",
    desc: "React example projects on github...",
    title: "REACT-in-class-examples"
  },
  {
    id: 51,
    tag: "",
    url: "https://reactjs.org/docs/hooks-reference.html",
    desc:
      "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This page describes the APIs for the built-in Hooks in React...",
    title: "Hooks API Reference"
  },
  {
    id: 52,
    tag: "",
    url: "https://codesandbox.io/s/modern-grass-up48n",
    desc: "the project writen in - codesandbox.io",
    title: "React hooks - project example"
  },
  {
    id: 53,
    tag: "",
    url:
      "https://github.com/typescript-cheatsheets/react-typescript-cheatsheet",
    desc:
      "The Basic Cheatsheet (/README.md) is focused on helping React devs just start using TS in React apps focus on opinionated best practices, copy+pastable examples explains some basic TS types usage and setup along the way answers the most Frequently Asked Questions does not cover generic type logic in detail. Instead we prefer to teach simple troubleshooting techniques for newbies.The goal is to get effective with TS without learning too much TS...",
    title: "React+TypeScript Cheatsheets"
  },
  {
    id: 54,
    tag: "",
    url:
      "https://docs.google.com/presentation/d/1XJHLIBYvxaYM1SkKzAHhRlPw0OMMe9i_sVoR3A-TrGo/edit?usp=sharing",
    desc: "Enhancing functional components...",
    title: "React Hooks Slides - Assaf Gannon"
  },
  {
    id: 55,
    tag: "",
    url: "https://github.com/okozolin/react-shows",
    desc: "the project writen in - codesandbox.io",
    title: "React Project - react-shows"
  },
  {
    id: 56,
    tag: "",
    url:
      "https://overreacted.io/how-are-function-components-different-from-classes/",
    desc:
      "How do React function components differ from React classes? For a while, the canonical answer has been that classes provide access to more features (like state). With Hooks, that’s not true anymore...",
    title: "How Are Function Components Different from Classes?"
  },
  {
    id: 57,
    tag: "",
    url: "https://react-basics-slides.netlify.com/33",
    desc: "React Slide by Assaf Gannon",
    title: "Transformation function - Slide by Assaf Gannon"
  },
  {
    id: 58,
    tag: "",
    url: "https://typescript-101.netlify.com/1",
    desc:
      "What exactly is typescript? A typed language that compiles to Javascript...",
    title: "Introduction to Typescript - Slide by Assaf Gannon"
  },
  {
    id: 59,
    tag: "",
    url: "https://react-basics-slides.netlify.com/",
    desc:
      "Why use a library? VanillaJS apps lack standard structure Cross browser support Focus on logic Common usecases solutions...",
    title: "React 101 - Slide by Assaf Gannon"
  },
  {
    id: 60,
    tag: "",
    url: "https://github.com/daumann/ECMAScript-new-features-list",
    desc:
      "A comprehensive list of new ES features, including ES2015 (ES6), ES2016, ES2017, ES2018, ES2019 (2015-2019)...",
    title: "Lists and examples for new Javascript features"
  },
  {
    id: 61,
    tag: "",
    url: "https://typescript-101.netlify.com/5",
    desc: "Create a .ts file",
    title: "TypeScript - The very basic - Slide by Assaf Gannon"
  },
  {
    id: 62,
    tag: "",
    url: "https://github.com/assafg/lab1-es6",
    desc: "Es6 Lab - example",
    title: "lab1-es6"
  },
  {
    id: 63,
    tag: "",
    url: "https://intro-webapps-es6.netlify.com/55",
    desc: "Create an API class for fetching shows data from a server... ",
    title:
      "Create an API class for fetching shows data from a server - Slide by Assaf Gannon"
  },
  {
    id: 64,
    tag: "",
    url:
      "https://www.w3resource.com/javascript-exercises/fundamental/index.php",
    desc:
      "1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. Go to the editor...",
    title: "JavaScript fundamental - Exercises, Practice, Solution"
  },
  {
    id: 65,
    tag: "",
    url:
      "https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php",
    desc:
      "1. Write a JavaScript function that reverse a number. Go to the editor Example x = 32243; Expected Output : 34223 Click me to see the solution...",
    title: "JavaScript functions - Exercises, Practice, Solution"
  },
  {
    id: 66,
    tag: "",
    url: "https://intro-webapps-es6.netlify.com/1",
    desc:
      "A stateless protocol originally used to transfer mainly HTML (HyperText Markup Language) The server does not retain state between client calls Each request consists of:...",
    title: "Introduction to WebApps"
  },
  {
    id: 67,
    tag: "",
    url: "https://www.saltycrane.com/cheat-sheets/typescript/react/latest/",
    desc:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. This is a list of TypeScript types generated from the declaration files for react, react-dom, react-native and other libraries in https://github.com/DefinitelyTyped/DefinitelyTyped/tree/8a31a2f. The script to generate this list is on github. Fixes welcome. See also my TypeScript cheat sheet.",
    title: "TypeScript React Cheat Sheet"
  },
  {
    id: 68,
    tag: "",
    url:
      "https://www.google.com/url?q=https://docs.google.com/presentation/d/1HY5vGKpyW6KmtkHpq3e5xh8ZVduxq4TNv2ikFGr_UDk/edit%23slide%3Did.g1e113e8030_0_161&sa=D&source=hangouts&ust=1581695140121000&usg=AFQjCNGP62jM2KsKV09pJpXuIRS7-4U7Pg",
    desc:
      "Open source JavaScript engine developed by The Chromium Project (Google)",
    title: "Node.js - V8 engine"
  },
  {
    id: 69,
    tag: "",
    url: "https://github.com/noygal/nodejs-npm-beginner-tutorial",
    desc: "A step by step beginner tutorial.",
    title: "nodejs-npm-beginner-tutorial"
  },
  {
    id: 70,
    tag: "",
    url:
      "https://www.google.com/url?q=https://docs.google.com/presentation/d/1Ld2EPjdXhq9u0XEr2q_BN_8Mx0xr0a7symGCYQpTd1s/edit%23slide%3Did.p&sa=D&source=hangouts&ust=1581695219947000&usg=AFQjCNFOpFOdsk_IENZEHsia9dLHKbW3zw",
    desc:
      "A package manager or package management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing software packages for a computer's operating system in a consistent manner. It typically maintains a database of software dependencies and version information to prevent software mismatches and missing prerequisites.",
    title: "Introduction to npm"
  },
  {
    id: 71,
    tag: "",
    url: "https://github.com/coreybutler/nvm-windows",
    desc:
      "This is not the same thing as nvm, which is a completely separate project for Mac/Linux only.",
    title:
      "The npm/Microsoft/Google recommended Node.js version manager for Windows"
  },
  {
    id: 72,
    tag: "",
    url: "https://gist.github.com/noygal/6b7b1796a92d70e24e35f94b53722219",
    desc:
      "Windows just released the windows subsystem for linux feature to the public with its latest windows fall creator update, if you are not familiar with this feature it allows you to run linux binaries natively on windows - F.A.Q.",
    title:
      "Windows 10 Fall Creators Update - Installing Node.js on Windows Subsystem for Linux (WSL)"
  },
  {
    id: 73,
    tag: "",
    url: "https://github.com/assafg/express-demo-second-hand",
    desc: "Class demo - Server (Node-Js) / Client (React-Js)",
    title: "express-demo-second-hand"
  },
  {
    id: 74,
    tag: "",
    url: "https://mashable.com/shopping/may-16-degoo-cloud-storage-sale/",
    desc:
      "Real talk: storing your files exclusively on your phone or computer will only make them more susceptible to sudden disappearance. Whether it's an accidental drop, theft, or a botched software update, your data can be wiped out faster than Thanos' snap, and there's usually no way to recover it. When your files are gone (including your once-in-a-lifetime photos), they're gone forever...",
    title:
      "Stop paying monthly fees for iCloud — get a lifetime of cloud storage with this deal"
  },
  {
    id: 75,
    tag: "",
    url: "https://github.com/darkish1990/node-js-nedb-excercise",
    desc: "Roey Liba Project - client/server using express...",
    title: "Roey Liba Project"
  },
  {
    id: 76,
    tag: "",
    url: "https://mongodb-101-slides.netlify.com/1",
    desc:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License...",
    title: "MongoDB Slides - By Assaf Gannon"
  },
  {
    id: 77,
    tag: "",
    url: "https://www.mongodb.com/download-center/community",
    desc:
      "MongoDB Atlas is a fully-managed and fully-automated global cloud database service available on AWS, Azure, and Google Cloud...",
    title: "MongoDB download center"
  },
  {
    id: 78,
    tag: "",
    url: "https://university.mongodb.com/",
    desc: "Become a MongoDB expert by learning from the experts...",
    title: "Welcome to MongoDB University"
  },
  {
    id: 79,
    tag: "",
    url: "https://robomongo.org/download",
    desc:
      "Studio 3T is the professional GUI and IDE for MongoDB available for Windows, Mac, and Linux. Explore and manage your data faster with features like query building, data exploration, aggregation and data comparison, import/export, code generation, and more – with or without the knowledge of the MongoDB query language...",
    title: "MongoDB - Robo 3T"
  },
  {
    id: 80,
    tag: "",
    url: "http://insideairbnb.com/get-the-data.html",
    desc:
      "The data behind the Inside Airbnb site is sourced from publicly available information from the Airbnb site...",
    title: "Airbnb Data"
  },
  {
    id: 81,
    tag: "",
    url:
      "https://www.upgrad.com/blog/full-stack-coding-project-ideas-topics-for-beginners/",
    desc:
      "A Full stack developer is an engineer who can design and develop an end-to-end application independently by handling all the work of coding, databases, servers and platforms. Full stack projects can be further classified as web stack, mobile stack or native application stack depending on the solution stack being used...",
    title: "8 Exciting Full Stack Coding Project Ideas & Topics For Beginners"
  },
  {
    id: 82,
    tag: "",
    url: "https://react.rocks/tag/FullStack",
    desc: "94 FullStack Examples...",
    title: "94 FullStack Examples"
  },
  {
    id: 83,
    tag: "",
    url: "https://redux-hooks-training.netlify.com/1",
    desc:
      "When using React Hooks, it is more intuitive to also use Reac-Redux Hooks...",
    title: "Redux Hooks Slides - By Assaf Gannon"
  },
  {
    id: 84,
    tag: "",
    url: "https://github.com/jsBlackBelt/graphql-workshop",
    desc: "GraphQL workshop using apolo-server - By Sefi Ninio...",
    title: "graphql-workshop - By Sefi Ninio"
  },
  {
    id: 85,
    tag: "",
    url: "https://www.tutorialspoint.com/graphql/graphql_query.htm",
    desc:
      "A GraphQL operation can either be a read or a write operation. A GraphQL query is used to read or fetch values while a mutation is used to write or post values. In either case, the operation is a simple string that a GraphQL server can parse and respond to with data in a specific format. The popular response format that is usually used for mobile and web applications is JSON...",
    title: "GraphQL - Query: Article"
  },
  {
    id: 86,
    tag: "",
    url:
      "https://docs.google.com/presentation/d/1b68tF8AJ4DdnUSmsHmX8ZKrzaXr9WHuiaZwKu8aC_kQ/edit",
    desc:
      "Allows the server to describe the data as a graph of interconnections...",
    title: "Demystifying GraphQL Slides - By Sefi Ninio"
  },
  {
    id: 87,
    tag: "",
    url:
      "https://www.youtube.com/watch?v=AslncyG8whg&fbclid=IwAR3S0tfvtd1dj7CFOYOPoQDeKS0v62P_Hkp18LeE5JqFlEW_OpWOMCddsfM",
    desc:
      "Jay Phelps (@_jayphelps ) talks about why Netflix loves reactive programming with Rx. In this talk he shares the basics of RxJS 5 Observables and how they can be used with React and Redux to manage asynchronous effects using redux-observable...",
    title: "Netflix JavaScript Talks - RxJS + Redux + React = Amazing!"
  },
  {
    id: 88,
    tag: "",
    url:
      "https://medium.com/@elad/why-the-world-needs-css-developers-318025a6f5c1",
    desc:
      "n the last ten years, give or take a few, CSS has grown extensively with the addition of more and more features, thus gradually becoming quite elaborate and complicated. The CSS of our days is very different from the CSS of the 2001–2010 decade...",
    title: "Why the World Needs CSS Developers"
  }
];

export default Source;
