# [Next.js](https://nextjs.org/) Starter Template

<hr/>

## 🏗️ This project is a work in progress 🚧

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
![Repo Size](https://img.shields.io/github/repo-size/mfarabi619/nextjs-starter)
[![Maturity badge - level 1](https://img.shields.io/badge/Maturity-Level%201%20--%20New%20Project-yellow.svg)](https://github.com/tophat/getting-started/blob/master/scorecard.md)

<!--[![App Status](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://www.chemicalgraphtheory.com) -->
<!---[![Coverage Status](https://coveralls.io/repos/github/Sulstice/global-chem/badge.svg?branch=master)](https://github.com/mfarabi619/nextjs-starter) --->
<hr/>

[📄 Project Brief](https://github.com/users/MFarabi619/projects/18?pane=issue&itemId=68925427)

Over the course of my web development journey, participating in hackathons and working on various projects with student organizations, I've accumulated a wealth of knowledge and developed a list of best practices to streamline my work. This includes insights into design-dev integration, test-driven development, content management systems, back-end integration, documentation websites, and more.

I have an extremely strong 'Solve the Problem First' approach with a [Design Thinking](https://en.wikipedia.org/wiki/Design_thinking) mindset. I plan and research thoroughly to the extent of my knowledge in order to minimize wasted effort later down the line. I believe that clear and concise expectations combined with well thought-out architecture + guardrails make for an excellent developer experience. I use [Agile](https://en.wikipedia.org/wiki/Agile_software_development) as a tool to stay organized and track progress. I place heavy emphasis on aggressively tackling communication challenges, which I've found to almost always be the root cause of all problems in software development.

Given the above approach, decision fatigue tends to be a significant challenge, which is resolved to some extent by starter templates.

The biggest issues with starter templates are that they are not really modular.

You start with what you get and then have to manually either add/remove things, or modify them.

There are many opinion-driven or situation-driven decisions to make along the way, and
unfortunately that's where starter templates begin to quickly lose out.

This project was inspired by a few other projects:

- [Blazity/next-enterprise](https://github.com/Blazity/next-enterprise)
- [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)
- [Built at Lightspeed](https://www.builtatlightspeed.com/)
- [Blitz.js](https://blitzjs.com/)
- [OpenLogic](https://www.openlogic.com/open-source-stack-builder)
- [Component party](https://component-party.dev/)
- [CodebaseShow](https://codebase.show/)

These projects served as excellent references for me to learn web development tooling.

I found that they all have many things in common such as linting and formatting tools, testing libraries, and CI/CD pipelines.

However, they all contain one or two great unique features that made the choice difficult, so I decided to combine them into a single project that fits my needs.

As of right now, this project is a work in progress and I am still figuring out what I want to include in it. It's very front-end heavy, reflective of the stage that I am in of my development journey. I will continue to add and document other technologies as I gain experience in them.

One day, I hope to make this into a dynamic web app that allows users to build their preferred stack using a nice UI and/or CLI, and thus skip the boilerplate configurations and/or struggle having to shoehorn different things together.

When I ditched [create-react-app](https://create-react-app.dev/) and used [Vite](https://vitejs.dev/) to bootstrap a React project, I was blown away by the options provided by the Vite CLI. Despite being relatively inexperienced, I was still able to appreciate all the configuration work that it had saved me.

If this project had a CLI, I envision it would look like this:

- **Package Manager**: ([npm](https://www.npmjs.com/)/[pnpm](https://pnpm.io/)/[yarn](https://yarnpkg.com/)/[bun](https://bun.sh/))
- **Code Linting and Formatting**: ([ESLint](https://eslint.org/)/[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)/[Biome](https://biomejs.dev/))
- [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) Linting and Formatting: ([Commitizen](https://commitizen-tools.github.io/commitizen/)/[Commitlint](https://commitlint.js.org/#/)/[Husky](https://typicode.github.io/husky/))
- Automated [Semantic Versioning](https://semver.org/): ([Semantic Release](https://semantic-release.gitbook.io/semantic-release)/[Standard Version](https://github.com/conventional-changelog/standard-version)/[Release It](https://github.com/release-it/release-it))
- **Unit Testing Frameworks**: ([Jest](https://jestjs.io/)/[Vitest](https://vitest.dev/)/[Mocha](https://mochajs.org/)/[Chai](https://www.chaijs.com/))
- End-to-End Testing Frameworks: ([Playwright](https://playwright.dev/)/[Cypress](https://www.cypress.io/)/[Selenium](https://www.selenium.dev/)/[TestCafe](https://devexpress.github.io/testcafe/))
- **Front-End Language**: ([JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)/[Typescript](https://www.typescriptlang.org/))
- **Front-End Framework**: ([Next.js](https://nextjs.org/)/[Angular](https://angular.dev/)/[Vue](https://vuejs.org/)/[SvelteKit](https://kit.svelte.dev/))
- **Front-End Component Sandbox**: ([Storybook](https://storybook.js.org/)/[React Cosmos](https://reactcosmos.org/))
- **Back-End Language**: ([Node.js](https://nodejs.org/en)/[Node.ts](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)/[Python](https://www.python.org/)/[Go](https://go.dev/)/[Ruby](https://www.ruby-lang.org/en/)/[PHP](https://www.php.net/))
  - **Back-End Framework**
    - **Node**: ([Nest.js](https://nestjs.com/)/[Express](https://expressjs.com/)/[Koa](https://koajs.com/))
    - **Ruby**: ([Ruby on Rails](https://rubyonrails.org/)/[Sinatra](http://sinatrarb.com/))
    - **Python**: ([Django](https://www.djangoproject.com/)/[Flask](https://flask.palletsprojects.com/)/[FastAPI](https://fastapi.tiangolo.com/))
    - **Go**: ([Gin](https://gin-gonic.com/)/[Echo](https://echo.labstack.com/)/[Fiber](https://gofiber.io/))
    - **PHP**: ([Laravel](https://laravel.com/)/[Symfony](https://symfony.com/)/[CodeIgniter](https://codeigniter.com/))
- **Database**: ([PostgreSQL](https://www.postgresql.org/)/[MySQL](https://www.mysql.com/)/[SQLite](https://www.sqlite.org/index.html)/[MongoDB](https://www.mongodb.com/)/[Supabase](https://supabase.com/))
- **[ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)**: ([Prisma](https://www.prisma.io/)/[TypeORM](https://typeorm.io/)/[Sequelize](https://sequelize.org/)/[Drizzle](https://orm.drizzle.team/))
- **[CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS) UI Libraries**: ([Bootstrap](https://getbootstrap.com/)/[Material UI](https://mui.com/)/[Radix UI](https://www.radix-ui.com/)/[Chakra UI](https://chakra-ui.com/)/[Mantine UI](https://mantine.dev/)/[Ant Design](https://ant.design/))
- **[Tailwind](https://tailwindcss.com/) UI Libraries**: ([Shadcn/UI](https://shadcn.dev/)/[Next UI](https://nextui.org/)/[Park UI](https://park-ui.com/)/[Material Tailwind](https://www.material-tailwind.com/)/[Daisy UI](https://daisyui.com/)/[Preline UI](https://preline.co/)/[Flowbite](https://flowbite.com/)/[Headless UI](https://headlessui.dev/)/[Tailframes](https://www.tailframes.com/)/[Keep React](https://react.keepdesign.io/))
- **State Management**: ([Redux](https://redux.js.org/)/[Zustand](https://github.com/pmndrs/zustand)/[Jotai](https://jotai.org/)/[Recoil](https://recoiljs.org/))
- **CMS**: ([Sanity](https://www.sanity.io/)/[Payload](https://payloadcms.com/)/[Wordpress](https://wordpress.org/)/[Strapi](https://strapi.io/))

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open `localhost:3000` in your browser to see the result.
