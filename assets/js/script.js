const homeCli = "cd /about/";
const aboutCli = "cat soulaimaneyahya.txt";

const homeContent = [
    "",
    "Software engineer with experience building web applications with focus on back-end development and APIs. Skilled in PHP, Laravel, MySQL, and other relevant technologies.",
    "",
    "Social media and contact:",
    "<a href='https://soulaimaneyahya.com' target='_blank' class='social-media-link'>> Website</a>",
    "<a href='https://github.com/soulaimaneyahya' target='_blank' class='social-media-link'>> GitHub</a>",
    "<a href='https://twitter.com/soulaimaneyh' target='_blank' class='social-media-link'>> Twitter</a>",
    "<a href='https://www.linkedin.com/in/soulaimane-yahya' target='_blank' class='social-media-link'>> Linkedin</a>",
    "<a href='mailto:contact@soulaimaneyahya.com' class='social-media-link'>> Email</a>",
    "",
    "Languages and frameworks I have worked with:",
    "<span class='languages-tech'>▪ PHP</span>",
    "<span class='languages-tech'>▪ Laravel</span>",
    "<span class='languages-tech'>▪ Javascript</span>",
    "<span class='languages-tech'>▪ NodeJS</span>"
];

const homeCliElement = document.getElementById('home-cli');
const aboutCliElement = document.getElementById('home-about');
const homeContentElement = document.getElementById('home-content');

const typingDelayMultiplier = 10;

setTimeout(() => {
    displayCommand(homeCliElement, '~', homeCli);
    setTimeout(() => {
        displayCommand(aboutCliElement, '~/about', aboutCli);
        typeContent(homeContent, 0);
    }, 500);
}, 500);

function displayCommand(element, path, displayText) {
    const commandText = `<span class="cli-text"><span class="cli-home">soulaimaneyahya@home:<span class="cli-home-path">${path}</span></span>$ ${displayText}</span><br>`;
    element.innerHTML += commandText;
}

function typeContent(content, index) {
    if (index < content.length) {
        const line = content[index];
        const delay = (line.length * typingDelayMultiplier) / 2;

        setTimeout(() => {
            homeContentElement.innerHTML += `<span class="cli-text">${line}</span><br>`;
            typeContent(content, index + 1);
        }, delay);
    }
}
