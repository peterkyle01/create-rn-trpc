# 🚀 Create React Native + tRPC

<div align="center">

![Version](https://img.shields.io/npm/v/create-rn-trpc?style=for-the-badge&color=blue)
![License](https://img.shields.io/npm/l/create-rn-trpc?style=for-the-badge&color=green)
![Downloads](https://img.shields.io/npm/dm/create-rn-trpc?style=for-the-badge&color=orange)

**The fastest way to create React Native apps with tRPC, TypeScript, and modern tooling** ⚡️

</div>

---

## ✨ Features

🎯 **Zero Config Setup** - Get started in seconds, not hours  
🚀 **Modern Stack** - tRPC, TypeScript, Expo Router, and more  
🎨 **Beautiful UI** - Pre-configured NativeWind + React Native Reusables  
📱 **Cross Platform** - iOS, Android, and Web support out of the box  
🌙 **Dark Mode Ready** - Beautiful themes included  
⚡️ **Type Safety** - End-to-end type safety with tRPC  
🔧 **Developer Experience** - Hot reload, debugging, and more

---

## 🚀 Quick Start

### Interactive Mode

```bash
npx create-rn-trpc
```

### Direct Usage

```bash
npx create-rn-trpc my-awesome-app
```

That's it! Your React Native + tRPC app is ready to go! 🎉

---

## 📋 Usage Options

```bash
# Create with specific package manager
npx create-rn-trpc my-app --package-manager yarn
npx create-rn-trpc my-app --package-manager pnpm
npx create-rn-trpc my-app --package-manager bun

# Skip dependency installation (install manually later)
npx create-rn-trpc my-app --skip-install

# Get help
npx create-rn-trpc --help
```

---

## 🎯 What You Get

Your generated project includes everything you need to build modern React Native apps:

### 🏗️ **Core Framework**

- ⚛️ **React Native** - Cross-platform mobile development
- 🧭 **Expo Router** - File-based routing for React Native
- 📱 **Expo SDK** - Access to native APIs and services

### 🔄 **API & State Management**

- 🚀 **tRPC** - End-to-end typesafe APIs
- 🔄 **React Query** - Powerful data synchronization
- 🔗 **SuperJSON** - Automatic serialization

### 🎨 **Styling & UI**

- 🎨 **NativeWind** - Tailwind CSS for React Native
- 🧩 **React Native Reusables** - Beautiful, accessible components
- 🌙 **Dark/Light Themes** - Built-in theme switching
- 📐 **Responsive Design** - Mobile-first approach

### 🛠️ **Developer Experience**

- � **TypeScript** - Full type safety
- 🌐 **Environment Variables** - Type-safe env with T3 Env
- 📦 **Modern Bundling** - Metro bundler optimized
- 🔍 **ESLint & Prettier** - Code quality tools

### 📁 **Project Structure**

```
my-app/
├── app/                 # Expo Router pages
│   ├── api/trpc/       # tRPC API routes
│   ├── _layout.tsx     # Root layout
│   └── index.tsx       # Home page
├── components/ui/       # Reusable UI components
├── server/             # tRPC server setup
│   ├── api/           # API routers
│   └── trpc/          # Client configuration
├── lib/               # Utilities
└── assets/            # Images and static files
```

---

## 🎬 CLI Preview

When you run `npx create-rn-trpc`, you'll see:

```
  ╔══════════════════════════════════════╗
  ║    🚀 Create React Native + tRPC    ║
  ║    TypeScript • Expo • React Query   ║
  ╚══════════════════════════════════════╝

📝 Let's set up your new React Native + tRPC project!

🏷️  What would you like to name your project? my-awesome-app
🎯 Creating React Native + tRPC project: my-awesome-app

✔ 📁 Project directory created
✔ 📋 Template files copied
✔ ⚙️  Project configuration updated
✔ 📦 Dependencies installed with npm

🎉 Project created successfully!

🚀 Next steps:
   1. cd my-awesome-app
   2. npm run dev

� What's included:
   • React Native with Expo
   • tRPC for type-safe APIs
   • React Query for data fetching
   • TypeScript configuration
   • NativeWind for styling
   • React Native Reusables UI components

Happy coding! 🚀✨
```

---

## 🚀 Getting Started

After creating your project:

### 1. Navigate to your project

```bash
cd my-awesome-app
```

### 2. Start the development server

```bash
npm run dev
# or yarn dev / pnpm dev / bun dev
```

### 3. Open in your preferred platform

- **📱 iOS**: Press `i` in the terminal or scan QR code with Camera app
- **🤖 Android**: Press `a` in the terminal or scan QR code with Expo Go
- **🌐 Web**: Press `w` in the terminal or open `http://localhost:8081`

---

## 📖 Learn More

### 🔗 **tRPC Resources**

- [tRPC Documentation](https://trpc.io)
- [React Query Guide](https://tanstack.com/query)

### ⚛️ **React Native Resources**

- [Expo Documentation](https://docs.expo.dev)
- [React Native Reusables](https://rnr-docs.vercel.app)
- [NativeWind Documentation](https://nativewind.dev)

### 🎨 **Styling Resources**

- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

## 🛠️ Development

Want to contribute or modify the CLI tool?

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/create-rn-trpc.git
cd create-rn-trpc

# Install dependencies
npm install

# Build the CLI
npm run build

# Test locally
npm link
create-rn-trpc test-project

# Clean up
npm unlink
```

### Commands

```bash
npm run build      # Build TypeScript
npm run dev        # Watch mode for development
npm run publish    # Build and publish to npm
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Areas for Contribution

- 🐛 Bug fixes and improvements
- 📚 Documentation enhancements
- ✨ New features and templates
- 🧪 Tests and quality assurance

---

## 📄 License

MIT © [Your Name](https://github.com/your-username)

---

<div align="center">

**Made with ❤️ for the React Native community**

[Report Bug](https://github.com/your-username/create-rn-trpc/issues) • [Request Feature](https://github.com/your-username/create-rn-trpc/issues) • [Documentation](https://github.com/your-username/create-rn-trpc#readme)

</div>
