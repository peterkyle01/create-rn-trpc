#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import validateNpmName from "validate-npm-package-name";

const program = new Command();

interface CreateOptions {
  packageManager?: "npm" | "yarn" | "pnpm" | "bun";
  skipInstall?: boolean;
}

// CLI Banner
function displayBanner() {
  console.log();
  console.log(chalk.cyan("  ╔══════════════════════════════════════╗"));
  console.log(
    chalk.cyan("  ║") +
      chalk.bold.white("    🚀 Create React Native + tRPC    ") +
      chalk.cyan("║")
  );
  console.log(
    chalk.cyan("  ║") +
      chalk.gray("    TypeScript • Expo • React Query   ") +
      chalk.cyan("║")
  );
  console.log(chalk.cyan("  ╚══════════════════════════════════════╝"));
  console.log();
}

program
  .name("create-rn-trpc")
  .description(
    "🚀 Create a React Native app with tRPC, TypeScript, and React Native Reusables"
  )
  .version("1.0.0")
  .argument("[project-name]", "Name of the project")
  .option(
    "-pm, --package-manager <manager>",
    "Package manager to use (npm, yarn, pnpm, bun)",
    "npm"
  )
  .option("--skip-install", "Skip installing dependencies")
  .action(async (projectName: string, options: CreateOptions) => {
    displayBanner();

    try {
      await createProject(projectName, options);
    } catch (error) {
      console.error(chalk.red("❌ Error creating project:"), error);
      process.exit(1);
    }
  });

async function createProject(projectName: string, options: CreateOptions) {
  let name = projectName;

  // If no project name provided, ask for it
  if (!name) {
    console.log(
      chalk.yellow("📝 Let's set up your new React Native + tRPC project!")
    );
    console.log();

    const response = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "🏷️  What would you like to name your project?",
        validate: (input: string) => {
          if (!input.trim()) {
            return "❌ Project name is required";
          }
          const validation = validateNpmName(input);
          if (!validation.validForNewPackages) {
            return `❌ ${validation.errors?.[0] || "Invalid project name"}`;
          }
          return true;
        },
      },
    ]);
    name = response.projectName;
  }

  // Validate project name
  const validation = validateNpmName(name);
  if (!validation.validForNewPackages) {
    console.error(
      chalk.red("❌ Invalid project name:"),
      validation.errors?.[0]
    );
    process.exit(1);
  }

  const projectPath = path.resolve(process.cwd(), name);

  // Check if directory already exists
  if (fs.existsSync(projectPath)) {
    console.error(
      chalk.red(`❌ Directory ${chalk.bold(name)} already exists.`)
    );
    process.exit(1);
  }

  console.log(
    chalk.blue(
      `🎯 Creating React Native + tRPC project: ${chalk.bold.white(name)}`
    )
  );
  console.log();

  // Create project directory
  const spinner = ora({
    text: "📁 Creating project directory...",
    spinner: "dots",
  }).start();

  try {
    fs.ensureDirSync(projectPath);
    spinner.succeed(chalk.green("📁 Project directory created"));
  } catch (error) {
    spinner.fail(chalk.red("❌ Failed to create project directory"));
    throw error;
  }

  // Copy template files
  spinner.start("📋 Copying template files...");
  try {
    const templatePath = path.join(__dirname, "../template");
    await fs.copy(templatePath, projectPath);
    spinner.succeed(chalk.green("📋 Template files copied"));
  } catch (error) {
    spinner.fail(chalk.red("❌ Failed to copy template files"));
    throw error;
  }

  // Update package.json with project name
  spinner.start("⚙️  Updating project configuration...");
  try {
    await updateProjectFiles(projectPath, name);
    spinner.succeed(chalk.green("⚙️  Project configuration updated"));
  } catch (error) {
    spinner.fail(chalk.red("❌ Failed to update project configuration"));
    throw error;
  }

  // Install dependencies
  if (!options.skipInstall) {
    const packageManager = options.packageManager || "npm";
    spinner.start(`📦 Installing dependencies with ${packageManager}...`);

    try {
      const installCommand = getInstallCommand(packageManager);
      execSync(installCommand, {
        cwd: projectPath,
        stdio: "pipe",
      });
      spinner.succeed(
        chalk.green(`📦 Dependencies installed with ${packageManager}`)
      );
    } catch (error) {
      spinner.fail(chalk.red("❌ Failed to install dependencies"));
      console.log(chalk.yellow("💡 You can install them manually by running:"));
      console.log(chalk.cyan(`   cd ${name}`));
      console.log(chalk.cyan(`   ${getInstallCommand(packageManager)}`));
      console.log();
    }
  } else {
    console.log(chalk.yellow("⚠️  Skipping dependency installation..."));
  }

  // Success message
  console.log();
  console.log(chalk.green.bold("🎉 Project created successfully!"));
  console.log();

  // Next steps
  console.log(chalk.bold("🚀 Next steps:"));
  console.log(chalk.cyan(`   1. cd ${name}`));

  if (options.skipInstall) {
    console.log(
      chalk.cyan(`   2. ${getInstallCommand(options.packageManager || "npm")}`)
    );
    console.log(
      chalk.cyan(`   3. ${getDevCommand(options.packageManager || "npm")}`)
    );
  } else {
    console.log(
      chalk.cyan(`   2. ${getDevCommand(options.packageManager || "npm")}`)
    );
  }

  console.log();
  console.log(chalk.magenta("📚 What's included:"));
  console.log(chalk.gray("   • React Native with Expo"));
  console.log(chalk.gray("   • tRPC for type-safe APIs"));
  console.log(chalk.gray("   • React Query for data fetching"));
  console.log(chalk.gray("   • TypeScript configuration"));
  console.log(chalk.gray("   • NativeWind for styling"));
  console.log(chalk.gray("   • React Native Reusables UI components"));
  console.log();
  console.log(chalk.green.bold("Happy coding! 🚀✨"));
}

async function updateProjectFiles(projectPath: string, projectName: string) {
  // Update package.json with project name
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = await fs.readJson(packageJsonPath);
  packageJson.name = projectName;
  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

  // Update app.json with project name
  const appJsonPath = path.join(projectPath, "app.json");
  if (fs.existsSync(appJsonPath)) {
    const appJson = await fs.readJson(appJsonPath);
    if (appJson.expo) {
      const slug = projectName.toLowerCase().replace(/[^a-z0-9-]/g, "-");
      appJson.expo.name = projectName;
      appJson.expo.slug = slug;
      appJson.expo.scheme = slug;
    }
    await fs.writeJson(appJsonPath, appJson, { spaces: 2 });
  }
}

function getInstallCommand(packageManager: string): string {
  switch (packageManager) {
    case "yarn":
      return "yarn install";
    case "pnpm":
      return "pnpm install";
    case "bun":
      return "bun install";
    default:
      return "npm install";
  }
}

function getDevCommand(packageManager: string): string {
  switch (packageManager) {
    case "yarn":
      return "yarn dev";
    case "pnpm":
      return "pnpm dev";
    case "bun":
      return "bun dev";
    default:
      return "npm run dev";
  }
}

// Handle the case where no arguments are provided
if (process.argv.length === 2) {
  displayBanner();
  program.help();
}

program.parse(process.argv);
