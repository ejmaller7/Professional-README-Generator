// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return "";
  return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue.svg)`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return `[MIT License](https://opensource.org/licenses/MIT)`;
    case 'Apache 2.0':
        return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL 3.0':
        return `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case 'BSD 3':
        return `[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
        return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return "";
  return `## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  \`\`\`
  ${data.Dependencies}
  \`\`\`

  ## Usage
  ${data["Know about repo"]}

  ${renderLicenseSection(data.License)}

  ## Contributing
  ${data["Contributing to repo"]}

  ## Tests
  \`\`\`
  ${data.Tests}
  \`\`\`

  ## Questions
  GitHub: [${data.GitHub}](https://github.com/${data.GitHub})
  Email: ${data.Email}
`;
};

export default generateMarkdown;
