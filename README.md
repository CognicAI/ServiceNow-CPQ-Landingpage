# 🚀 ServiceNow CPQ Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive landing page showcasing an AI-powered ServiceNow CPQ solution for revolutionizing medical equipment sales processes.

## 🌟 Live Demo

🔗 **[View Live Site](https://servicenow.harshajustin.me/)** *(Coming Soon)*

📄 **[Download Project Documentation](./public/Document/Cognic%20AI_Idea_SNU%20HackNow%20India.pdf)**

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Team](#-team)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This project is a comprehensive landing page for a ServiceNow CPQ (Configure, Price, Quote) solution specifically designed for medical equipment sales. Developed as part of the **SNU HackNow India** hackathon, it demonstrates how AI can transform complex healthcare procurement processes.

### 🎨 Key Highlights

- **🤖 AI-Powered**: Intelligent product recommendations and pricing optimization
- **📱 Responsive Design**: Seamless experience across all devices
- **⚡ Performance Optimized**: Built with Vite for lightning-fast loading
- **🎭 Modern UI/UX**: Professional design with smooth animations
- **♿ Accessible**: WCAG compliant with semantic HTML

## ✨ Features

### 🏠 Landing Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Compelling introduction with CTA buttons |
| **Problem** | Healthcare industry challenges |
| **Workflow** | AI-powered process visualization |
| **Solution** | Our comprehensive approach |
| **Features** | Key capabilities and benefits |
| **Demo** | Interactive showcase |
| **Architecture** | System design overview |
| **Technology** | Tech stack details |
| **Team** | Meet our developers |
| **Footer** | Links and contact information |

### 🔧 Technical Features

- **📊 Interactive Components**: Dynamic cards, hover effects, and animations
- **📱 Mobile-First Design**: Responsive grid layouts and flexible components
- **🎨 Modern Styling**: Tailwind CSS with custom color schemes
- **⚡ Fast Performance**: Optimized images and lazy loading
- **🔍 SEO Optimized**: Meta tags and semantic structure
- **📥 Document Downloads**: PDF documentation download functionality
- **🔗 Social Integration**: GitHub and social media links

## 🛠 Tech Stack

### Frontend
- **⚛️ React 18.3.1** - Modern UI library with hooks
- **📘 TypeScript 5.5.3** - Type-safe development
- **⚡ Vite 5.4.2** - Next-generation build tool
- **🎨 Tailwind CSS 3.4.1** - Utility-first CSS framework
- **🎯 Lucide React** - Beautiful SVG icons

### Development Tools
- **🔍 ESLint** - Code linting and quality
- **🎯 PostCSS** - CSS processing
- **📦 NPM** - Package management

### Deployment
- **🌊 DigitalOcean App Platform** - Cloud hosting
- **🐳 Docker** - Containerization
- **🌐 Nginx** - Web server for production

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CognicAI/ServiceNow-CPQ-Landingpage.git
   cd ServiceNow-CPQ-Landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
ServiceNow-CPQ-Landingpage/
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 📁 Document/           # PDF documentation
│   │   └── 📁 Team/               # Team member photos
│   └── 📄 index.html
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 sections/           # Page sections
│   │   │   ├── 🎯 Hero.tsx
│   │   │   ├── 🚨 Problem.tsx
│   │   │   ├── 🔄 Workflow.tsx
│   │   │   ├── ✅ Solution.tsx
│   │   │   ├── ⭐ Features.tsx
│   │   │   ├── 🎬 Demo.tsx
│   │   │   ├── 🏗️ Architecture.tsx
│   │   │   ├── 💻 Technology.tsx
│   │   │   ├── 👥 Team.tsx
│   │   │   └── 🦶 Footer.tsx
│   │   ├── 📁 ui/                 # Reusable UI components
│   │   │   ├── 🔘 Button.tsx
│   │   │   ├── 📊 FeatureCard.tsx
│   │   │   └── 📈 MetricCard.tsx
│   │   └── 🧭 Navigation.tsx
│   ├── 📄 App.tsx                 # Main app component
│   ├── 📄 main.tsx                # Entry point
│   ├── 🎨 index.css               # Global styles
│   └── 📝 vite-env.d.ts           # Vite type definitions
├── 📁 .do/                        # DigitalOcean deployment
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tailwind.config.js
├── 📄 vite.config.ts
├── 📄 Dockerfile
└── 📄 README.md
```

## 🚀 Deployment

### DigitalOcean App Platform

The project is configured for automatic deployment on DigitalOcean App Platform:

1. **Connect Repository**: Link your GitHub repository
2. **Auto-Detection**: Platform automatically detects Node.js app
3. **Build Process**: Runs `npm run build`
4. **Serving**: Static files served from `dist/` folder

### Docker Deployment

```bash
# Build Docker image
docker build -t servicenow-cpq-landingpage .

# Run container
docker run -p 8080:8080 servicenow-cpq-landingpage
```

### Manual Deployment

```bash
# Build for production
npm run build

# Serve static files from dist/ folder
npm run preview
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 👥 Team

Meet the talented team behind this project:

| Member | Role | Contact |
|--------|------|---------|
| **Harsha Vardhanu Parnandi** | Team Lead, Backend, AI, Data & ServiceNow Architect | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshavardhanuparnandi/) |
| **Abhishek Kunoju** | ServiceNow Expert - IntegrationHub & Workflows | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-kunoju/) |
| **Rahul Sai Nulakala** | Frontend & Documentation Specialist | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rahul-sai-nulakala-5803b2275/) |
| **Ravuri Sai Supreetha** | ServiceNow Expert - UI & Client Scripts | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ravuri-sai-supreetha-472128278/) |
| **Sahithi Reddy Kadar** | Business Analyst - Presentation & Research | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sahithi-reddy-kadar-30786b287/) |

## 🏆 Hackathon Information

- **Event**: SNU HackNow India
- **Theme**: ServiceNow Platform Innovation
- **Focus**: Healthcare Technology Solutions
- **Organization**: [CognicAI](https://github.com/CognicAI)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write meaningful commit messages
- Test across different browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ServiceNow** for the amazing platform
- **SNU HackNow India** for the opportunity
- **React Community** for excellent documentation
- **Tailwind CSS** for the utility-first approach
- **Vite** for the lightning-fast build tool

## 📞 Contact & Support

- **Repository**: [GitHub](https://github.com/CognicAI/ServiceNow-CPQ-Landingpage)
- **Organization**: [CognicAI](https://github.com/CognicAI)
- **Issues**: [Report a Bug](https://github.com/CognicAI/ServiceNow-CPQ-Landingpage/issues)

---

<div align="center">
  <p>Built with ❤️ by the CognicAI Team</p>
  <p>© 2025 ServiceNow CPQ Hackathon Project</p>
</div>
