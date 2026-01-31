# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built with [Next.js 16](https://nextjs.org). This project is designed to showcase your professional profile, experience, and projects in a sleek, single-page layout.

## ✨ Features

- **About Section**: Introduction and bio.
- **Experience Timeline**: Highlight your professional career path.
- **Projects Showcase**: Display your key projects with descriptions.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS v4.
- **Easy Customization**: All content is driven by a single data file.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Containerization**: Docker

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher (v20 recommended)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/my-website.git
    cd my-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

You can easily update the content of the website without touching the component code.

1.  Navigate to `src/data/profile.ts`.
2.  Update the `profile` object with your own information:
    - Name, Role, Bio
    - Experience entries
    - Project details
    - Social links

The UI will automatically reflect your changes.

## 🐳 Deployment with Docker

This project includes a `Dockerfile` and `docker-compose.yml` for easy deployment.

### Build and Run

```bash
docker-compose up -d --build
```

The application will be available at `http://localhost:3000`.

### Stop the Container

```bash
docker-compose down
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
