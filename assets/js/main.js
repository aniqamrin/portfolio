import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Founder of Revenue Flow (self-employed) - a financial intelligence
  platform for Malaysian SMEs. Next.js + PostgreSQL + Prisma with revenue
  forecasting (moving averages, exponential smoothing, regression
  with backtesting), 30/60/90-day cash-flow projection, business
  health score, MY tax estimators, CSV import, and an AI advisor
  (OpenAI + offline fallback).`,
  "Founder & Full-Stack Developer (Self-employed)",
  "Revenue Flow",
  "2025 - Present"
);

hoverChangeExperience(
  ".contweb",
  `Web Developer at Virtual Guards (6 months). Built responsive
  websites and dashboards, worked with HTML, CSS, JavaScript and
  modern frontend tooling, collaborating on real client requirements
  and deployments.`,
  "Web Developer",
  "Virtual Guards",
  "6 months"
);

hoverChangeExperience(
  ".codigofontetv",
  `Final-year degree student in Computer Science / AI. Coursework in
  software engineering, databases, machine learning and mobile
  development (Kotlin, Python, JavaScript). Active builder with 20+
  public repos including Face2Go, EcosystemOS AI, RepLog and trading bots.`,
  "Final Year Degree Student",
  "University",
  "2022 - Present"
);

hoverChangeDescription(
  ".html",
  "HTML is a markup language where we mark up elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a stylesheet language made of layers, created to style pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that lets you implement dynamic elements in web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds features not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on building component-based user interfaces."
);
hoverChangeDescription(
  ".next",
  "Next.js is a React framework for server-side rendering, static generation and full-stack web apps - the stack behind Revenue Flow."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a utility-first CSS framework for styling pages quickly."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that adds static typing and features not present natively."
);
hoverChangeDescription(
  ".python",
  "Python is my main language for backend scripts, trading bots, sentiment pipelines and data work."
);
hoverChangeDescription(
  ".postgres",
  "PostgreSQL is the relational database behind Revenue Flow, with Prisma ORM, migrations and seeding."
);
hoverChangeDescription(
  ".docker",
  "Docker is how I ship Revenue Flow - Postgres in compose, reproducible dev and deploy environments."
);
hoverChangeDescription(
  ".kotlin",
  "Kotlin is what I used to build RepLog, a native Android workout-tracking app."
);
hoverChangeDescription(
  ".git",
  "Git is how I version everything - 20+ public repos, branching, PRs and clean commit history."
);
hoverChangeDescription(
  ".tensorflow",
  "TensorFlow / Keras is what I use for time-series and deep learning experiments."
);
hoverChangeDescription(
  ".pytorch",
  "PyTorch is what I use for FinBERT sentiment experiments and transformer fine-tuning."
);
hoverChangeDescription(
  ".jupyter",
  "Jupyter Notebook is where I prototype ML work - heart-disease case study, LSTM experiments, data exploration."
);
hoverChangeDescription(
  ".figma",
  "Figma is where I mock up dashboards and landing pages before building them in code."
);
hoverChangeDescription(
  ".prisma",
  "Prisma is the ORM in Revenue Flow - schema, migrations, seeding and type-safe DB access."
);
hoverChangeDescription(
  ".cplusplus",
  "C++ is my go-to for uni coursework, algorithms and performance-heavy assignments."
);
hoverChangeDescription(
  ".java",
  "Java is what I used for the University Course Registration System and Retail Inventory Management System."
);
hoverChangeDescription(
  ".rust",
  "Rust is what I used to build cursor-buddy - exploring memory safety and systems programming."
);
hoverChangeDescription(
  ".csharp",
  "C# is what I used for the Quant Trading Bot experiments."
);
hoverChangeDescription(
  ".php",
  "PHP is what powers Read2Rent (read2rentV2) - full-stack rental app with server-rendered pages."
);
