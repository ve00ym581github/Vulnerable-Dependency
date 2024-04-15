// config.js
module.exports = {
 platform: "gitlab",
 endpoint: 'https://gitlab.com/api/v4',
 onboarding: true,
 token: "${REN_GITHUB_TOKEN}",
 baseBranches: ["master"],
 extends: [
 "config:recommended"
 ]
}
