# Simple Frontend CI/CD

A modern React application built with Vite, featuring a streamlined CI/CD pipeline and Docker containerization.

## 🚀 Features

- **React 19** with latest features and performance improvements
- **Vite** for lightning-fast development and building
- **ESLint** configuration for code quality
- **Docker** containerization for consistent deployment
- **Nginx** serving for production builds
- **CI/CD** ready setup

## 📦 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 4.5.0
- **Package Manager**: npm
- **Linting**: ESLint with React-specific rules
- **Container**: Docker with multi-stage builds
- **Web Server**: Nginx (production)

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Simple-Frontend-CICD
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🐳 Docker Deployment

### Building the Docker Image

```bash
docker build -t frontend-app .
```

### Running the Container

```bash
docker run -p 80:80 frontend-app
```

The application will be available at `http://localhost:80`

### Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

## 🔧 CI/CD Pipeline

This project is designed to work with CI/CD pipelines. The Dockerfile uses a multi-stage build process:

1. **Build Stage**: Uses Node.js to install dependencies and build the application
2. **Production Stage**: Uses Nginx to serve the built static files

### Pipeline Steps

1. **Build**: `npm run build`
2. **Lint**: `npm run lint`
3. **Docker Build**: Multi-stage Docker build
4. **Deploy**: Container deployment

## 📁 Project Structure

```
Simple-Frontend-CICD/
├── src/                 # Source code
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── assets/         # Static assets
├── public/             # Public assets
├── Dockerfile          # Docker configuration
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🚀 Deployment

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=your-api-url
VITE_APP_TITLE=Your App Title
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Docker Documentation](https://docs.docker.com/)
