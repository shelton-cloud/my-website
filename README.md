# Bryan Shelton - Personal Portfolio

A professional personal portfolio website showcasing expertise in IT/AV engineering, broadcast systems, and technical leadership. Built with focus on performance, aesthetics, and a clean user experience.

## ✨ Features

- **About & Bio**: Detailed professional background (Riot Games, Music).
- **Professional Timeline**: Comprehensive experience history from IT Specialist to Lead AV Engineer.
- **Interactive Music Player**: Custom-built audio integration to showcase musical projects.
- **Dynamic Skills & Certifications**: Categorized technical expertise and professional certifications.
- **Analytics Integrated**: Built-in Vercel Analytics for tracking engagement.
- **Responsive Design**: Fully responsive layout optimized for all devices using Tailwind CSS v4.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Language**: TypeScript
- **Containerization**: Docker & Docker Compose

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher (v20+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/my-website.git
    cd my-website
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **View the app**:
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

The portfolio is designed to be easily updated by modifying a single data file.

1. Open `src/data/profile.ts`.
2. Update the `profile` object with your details:
    - **name**, **title**, **contact**
    - **bio**, **personal** (journey, family, pets, etc.)
    - **experience** (array of roles and responsibilities)
    - **skills** (categorized lists)
    - **projects** and **social** links

The UI components (Header, About, Experience, etc.) will automatically update based on this data.

## 🐳 Deployment

This project is Docker-ready for consistent deployment across environments.

### Using Docker Compose

```bash
docker-compose up -d --build
```

The application will be accessible at `http://localhost:3000`.

### Stopping the service

```bash
docker-compose down
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
