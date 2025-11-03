![Release Badge](https://img.shields.io/github/v/release/lazercaveman/vue-starter)
[![Vue 3](https://img.shields.io/badge/Vue-3.5.17-42b883?logo=vue.js)](https://vuejs.org)
[![MIT License](https://img.shields.io/github/license/lazercaveman/vue-starter)](LICENSE)

# Vue 3 Starter
A lightweight, ready-to-use template for Vue 3 with Vite and TypeScript. Fully configured with essential tools to kickstart your project.

## Table of Contents
1. [Features](#features)
2. [Quick Start](#quick-start)
3. [Scripts](#scripts)
4. [Dependencies](#dependencies)
5. [Contributing](#contributing)
6. [License](#license)

---

## Features
* **Vue 3 & Vite**: Modern framework paired with a fast development server and build tool.
* **TypeScript**: Static typing for safer, more maintainable code.
* **Pinia & Vue Router**: State management and routing out of the box.
* **Tailwind CSS**: Utility-first styling for rapid UI development.
* **Vitest & Vue Test Utils**: Unit and UI testing configured.
* **ESLint & OXLint**: Automated linting and code style enforcement.
* **Husky**: Git hooks for pre-commit and pre-push checks.
* **Storybook**: Isolated component development and documentation.

---

## Quick Start
```bash
# Clone the repository
git clone https://github.com/lazercaveman/vue-starter.git
cd vue-starter

# Ensure Node.js >= 18 and pnpm >= 4.x
corepack enable

# Install dependencies
pnpm

# Start development server
pnpm dev
```

---

## Scripts
| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `pnpm dev`             | Start Vite development server            |
| `pnpm build`           | Run type checks and build for production |
| `pnpm preview`         | Preview the production build             |
| `pnpm test:unit`       | Run unit tests with Vitest               |
| `pnpm test:ui`         | Launch UI testing interface              |
| `pnpm test:coverage`   | Generate test coverage report            |
| `pnpm lint`            | Run ESLint and OXLint with auto-fix      |
| `pnpm storybook`       | Start Storybook development server       |
| `pnpm build-storybook` | Build Storybook static documentation     |

---

## Dependencies
| Package                | Purpose                                | Docs                                                                                     |
| ---------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| **vue**                | Core framework                         | [https://vuejs.org](https://vuejs.org)                                                   |
| **vite**               | Dev server and build tool              | [https://vitejs.dev](https://vitejs.dev)                                                 |
| **pinia**              | State management                       | [https://pinia.vuejs.org](https://pinia.vuejs.org)                                       |
| **vue-router**         | Application routing                    | [https://router.vuejs.org](https://router.vuejs.org)                                     |
| **typescript**         | Static type checking                   | [https://typescriptlang.org](https://typescriptlang.org)                                 |
| **tailwindcss**        | Utility-first CSS                      | [https://tailwindcss.com](https://tailwindcss.com)                                       |
| **eslint & plugins**   | Linting and code style                 | [https://eslint.org](https://eslint.org)                                                 |
| **vitest & plugins**   | Testing framework                      | [https://vitest.dev](https://vitest.dev)                                                 |
| **@vue/test-utils**    | Vue component testing utilities        | [https://vue-test-utils.vuejs.org](https://vue-test-utils.vuejs.org)                     |
| **husky**              | Git hooks                              | [https://typicode.github.io/husky/](https://typicode.github.io/husky/)                   |
| **storybook & addons** | Component documentation and UI library | [https://storybook.js.org/docs/vue/overview](https://storybook.js.org/docs/vue/overview) |

---

## Contributing
Contributions are welcome! Fork the repository, create a feature branch, commit your changes, and open a pull request.

---

## License Notice
This project is licensed under the [MIT License](LICENSE), by [Ali Soueidan](https://alisoueidan.com/) - see the [LICENSE](LICENSE) file for details.  
*Please note that the software is provided without any warranty. The authors accept no liability for any security gaps or damage that may arise from the use of the software.*
