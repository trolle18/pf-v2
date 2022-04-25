
/* ---------- FETCH PROJECTS ---------- */
let portfolioProjects = [];

/* Fetches json data from the file persons.json */

async function fetchProjects() {
    let response = await fetch("projects.json");
    let data = await response.json();
    _portfolioProjects = data;
    appendProjects(_portfolioProjects);
}

fetchProjects();

/* Appends json data to the DOM */
function appendProjects(projects) {
    let htmlTemplate = "";
    for (let project of projects) {
        htmlTemplate += /*html*/ `
        <article>
        <div class="project" id="card-c">
            <div class="gallery">
                <div class="gallery-row">
                    <div class="img1-cntr"> <img src="${project.img1}" class="img1 modal-hover-opacity" id="img1" onclick="onClick(this)"> </div>
                    <div class="img2-cntr"> <img src="${project.img2}" class="img2 modal-hover-opacity" id="img2" onclick="onClick(this)"> </div>
                </div>
                <div class="gallery-row">
                    <div class="img2-cntr"> <img src="${project.img3}" class="img2 modal-hover-opacity" id="img3" onclick="onClick(this)"> </div>
                    <div class="img1-cntr"> <img src="${project.img4}" class="img1 modal-hover-opacity" id="img4" onclick="onClick(this)"> </div>
                </div>
            </div>
            <div class="project-details">
                <div class="project-title">
                    <h3 id="title">${project.title}</h3>
                    <div class="project-links">
                    <a href="${project.repo}" target="_blank" id="repo">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 
                            c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 
                            C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 
                            c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z">
                            </path>
                        </svg>
                    </a>
                    <a href="${project.weblink}" class="web-link" id="weblink">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 
                            249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 
                            110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 
                            280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/>
                        </svg>
                    </a>
                </div>
                </div> 
                <p id="description">${project.description}</p>
                <span class="ellipsis">...</span><br>
                <span class="more"> 
                    <p id="more">${project.more}</p> 
                </span>
                <button class="moreBtn">Read more</button>                  
            </div>
        </div>
        </article>
    `;
    }
    document.querySelector("#projects").innerHTML = htmlTemplate;
}

/* Filtering family members by given searchValue*/
    function search(searchValue) {
        searchValue = searchValue.toLowerCase();
        console.log(searchValue);

        let filteredPortfolioProjects = [];

        for (let portfolioProject of _portfolioProjects) {
            let name = portfolioProject.name.toLowerCase();
            if (name.includes(searchValue.toLowerCase())) {
                filteredPortfolioProjects.push(portfolioProject);
            }
        }
        appendProjects(filteredPortfolioProjects);
    }

/* Adding a new family member to the _familyMember array*/
    function add() {
        let inputTitel = document.getElementById("inputTitel");
        let inputWeblink = document.getElementById("inputWeblink");
        let inputRepo = document.getElementById("inputRepo");
        let inputDescription = document.getElementById("inputDescription");
        let inputImg1 = document.getElementById("inputImg1");
        let inputImg2 = document.getElementById("inputImg2");
        let inputImg3 = document.getElementById("inputImg3");
        let inputImg4 = document.getElementById("inputImg4");

        let newProject = {
            titel: inputTitel.value,
            weblink: inputWeblink.value,
            repo: inputRepo.value,
            description: inputDescription.value,
            img1: inputImg1.value,
            img2: inputImg2.value,
            img3: inputImg3.value,
            img4: inputImg4.value
        };
        console.log(newProject);

        _portfolioProjects.push(newProject);
        appendProjects(_portfolioProjects);
    }