# Alex Morgan Portfolio

## Overview

This is a modern, full-stack portfolio website for Alex Morgan, a full-stack developer and UI/UX designer. The project showcases a comprehensive personal portfolio with sections for about, skills, experience, projects, achievements, and contact information. Built as a single-page application with smooth scrolling navigation and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI primitives with custom shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for RESTful API endpoints
- **Development Setup**: Custom Vite integration for hot module replacement during development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be extended with database persistence
- **Middleware**: Request logging, JSON parsing, and error handling

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema**: User management schema with username/password authentication
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Development Storage**: In-memory storage for development and testing

### Authentication and Authorization
- **Session Management**: Configured for PostgreSQL session storage using connect-pg-simple
- **User Schema**: Basic user model with ID, username, and password fields
- **Storage Interface**: CRUD operations for user management (getUser, getUserByUsername, createUser)

### UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming (colors, typography, spacing)
- **Component Library**: Comprehensive set of reusable UI components (buttons, forms, cards, navigation)
- **Typography**: Inter font for UI text, Source Serif Pro for headings
- **Color Scheme**: Dark theme with purple/blue accent colors
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Performance Optimizations
- **Asset Loading**: Preconnected fonts and optimized image loading
- **Bundle Optimization**: ESBuild for server-side bundling and Vite for client-side optimization
- **Lazy Loading**: Component-based code splitting potential
- **Caching Strategy**: Query client configuration with appropriate stale times

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon database serverless driver for PostgreSQL connections
- **drizzle-orm**: TypeScript ORM for database operations
- **express**: Web framework for API server
- **react**: UI library for component-based frontend
- **@tanstack/react-query**: Server state management and caching

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (dialogs, dropdowns, navigation, forms)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for styled components
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific development enhancements (error overlay, cartographer, dev banner)

### Form and Data Handling
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for form schemas
- **zod**: Runtime type validation and schema parsing
- **date-fns**: Date manipulation and formatting utilities

### Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express
- **drizzle-kit**: Database migration and schema management tools

### Additional Utilities
- **wouter**: Lightweight routing library for React
- **clsx**: Conditional className utility
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality