let elements = [
    {
        time: 2,
        type: "water",
        shape: [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "town",
        shape: [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 1,
        type: "forest",
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "farm",
        shape: [
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "forest",
        shape: [
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "town",
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "farm",
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 1,
        type: "town",
        shape: [
            [1, 1, 0],
            [1, 0, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 1,
        type: "town",
        shape: [
            [1, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 1,
        type: "farm",
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 1,
        type: "farm",
        shape: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "water",
        shape: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "water",
        shape: [
            [1, 0, 0],
            [1, 1, 1],
            [1, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "forest",
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 1],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "forest",
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
    {
        time: 2,
        type: "water",
        shape: [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0],
        ],
        rotation: 0,
        mirrored: false,
    },
];

const missions = [
    {
        title: "Az erdő széle",
        description: "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
    },
    {
        title: "Álmos-völgy",
        description: "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
    },
    {
        title: "Krumpliöntözés",
        description: "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
    },
    {
        title: "Határvidék",
        description: "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
    },
    {
        title: "Fasor",
        description: "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
    },
    {
        title: "Gazdag város",
        description: "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
    },
    {
        title: "Öntözőcsatorna",
        description: "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
    },
    {
        title: "Mágusok völgye",
        description: "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
    },
    {
        title: "Üres telek",
        description: "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
    },
    {
        title: "Sorház",
        description: "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
    },
    {
        title: "Páratlan silók",
        description: "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
    },
    {
        title: "Gazdag vidék",
        description: "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
    },
];

const mountainIcon = '<i class="fa-solid fa-mountain fa-xl"></i>';
const forestIcon = '<i class="fa-solid fa-tree fa-xl"></i>';
const townIcon = '<i class="fa-solid fa-house fa-xl"></i>';
const farmIcon = '<i class="fa-solid fa-wheat-awn fa-xl"></i>';
const waterIcon = '<i class="fa-solid fa-water fa-xl"></i>';
const clockIcon = '<i class="fa-regular fa-clock fa-sm"></i>';
const circleIcon = '<i class="fa-solid fa-circle fa-xs"></i>';

let mapMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let isNewGame = true;

const body = document.querySelector("body");

const containerDiv = document.querySelector("body > div");

const mapDiv = document.querySelector("body > div > div.matrix");

let totalPoints = 0;

const seasons = ["spring", "summer", "fall", "winter", "spring", "summer", "fall", "winter", "spring", "summer", "fall", "winter", "spring", "summer", "fall", "winter"];

const springPointsTd = document.querySelector("body > div > div.season-points-div > table > tbody > tr:nth-child(1) > td.spring.season");
const summerPointsTd = document.querySelector("body > div > div.season-points-div > table > tbody > tr:nth-child(1) > td.summer.season");
const fallPointsTd = document.querySelector("body > div > div.season-points-div > table > tbody > tr:nth-child(1) > td.fall.season");
const winterPointsTd = document.querySelector("body > div > div.season-points-div > table > tbody > tr:nth-child(1) > td.winter.season");

const totalPointsPar = document.querySelector("body > div > div.season-points-div > table > tbody > tr:nth-child(2) > td > p");

let gameMissions = [];
let missionPoints = [];

const mission1div = document.querySelector("body > div > div.missions-div > div.missions-top-left-div > div");
const mission2div = document.querySelector("body > div > div.missions-div > div.missions-top-right-div > div");
const mission3div = document.querySelector("body > div > div.missions-div > div.missions-bottom-left-div > div");
const mission4div = document.querySelector("body > div > div.missions-div > div.missions-bottom-right-div > div");

const mission1letter = document.querySelector("body > div > div.missions-div > div.missions-top-left-div > div > div.mission-group");
const mission2letter = document.querySelector("body > div > div.missions-div > div.missions-top-right-div > div > div.mission-group");
const mission3letter = document.querySelector("body > div > div.missions-div > div.missions-bottom-left-div > div > div.mission-group");
const mission4letter = document.querySelector("body > div > div.missions-div > div.missions-bottom-right-div > div > div.mission-group");

const mission1points = document.querySelector("body > div > div.missions-div > div.missions-top-left-div > div > div.mission-points");
const mission2points = document.querySelector("body > div > div.missions-div > div.missions-top-right-div > div > div.mission-points");
const mission3points = document.querySelector("body > div > div.missions-div > div.missions-bottom-left-div > div > div.mission-points");
const mission4points = document.querySelector("body > div > div.missions-div > div.missions-bottom-right-div > div > div.mission-points");

const missionPictures = document.querySelectorAll("body > div > div.missions-div > div > div > img");

const currSeasonParagraph = document.querySelector("body > div > div.curr-season-div > p");

const seasonTimeLeft = document.querySelector("body > div > div.season-left-div > p");

let currTime = 7;
let seasonCounter = 0;
let currSeason = seasons[seasonCounter];

shuffle(elements);

let elementCount = 0;
let currElementCellCount = 0;
let currElement = elements[elementCount];
let currElementStartIndex = [0, 0];
let currElementEndIndex = [0, 0];
let currElementType = 0;
const elementTime = document.querySelector("body > div > div.drawn-element-div > p");
const elementDiv = document.querySelector("body > div > div.drawn-element-div > div");

const rotateButton = document.querySelector("body > div > div.rotate-button-div > button");
const mirrorButton = document.querySelector("body > div > div.mirror-button-div > button");

function printMap() {
    mapDiv.innerHTML = "";
    const mapTable = document.createElement("table");
    for (let i = 0; i < mapMatrix.length; i++) {
        let mapRow = document.createElement("tr");
        for (let j = 0; j < mapMatrix.length; j++) {
            let mapCell = document.createElement("td");
            switch (mapMatrix[i][j]) {
                case 0:
                    break;
                case 1:
                    mapCell.setAttribute("class", "mountain");
                    mapCell.innerHTML = mountainIcon;
                    break;
                case 2:
                    mapCell.setAttribute("class", "forest");
                    mapCell.innerHTML = forestIcon;
                    break;
                case 3:
                    mapCell.setAttribute("class", "water");
                    mapCell.innerHTML = waterIcon;
                    break;
                case 4:
                    mapCell.setAttribute("class", "farm");
                    mapCell.innerHTML = farmIcon;
                    break;
                case 5:
                    mapCell.setAttribute("class", "town");
                    mapCell.innerHTML = townIcon;
                    break;
                default:
                    console.log("Wrong number in map matrix!");
            }
            mapCell.addEventListener("click", () => {
                if (checkPlaceable(i, j)) {
                    placeElement(i, j);
                }
            });
            mapCell.addEventListener("mouseenter", () => {
                for (let k = 0; k < currElement.shape.length; k++) {
                    for (let l = 0; l < currElement.shape.length; l++) {
                        try {
                            if (currElement.shape[k][l] == 1) {
                                switch (currElementType) {
                                    case 2:
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].setAttribute("class", "forest");
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].innerHTML = forestIcon;
                                        break;
                                    case 3:
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].setAttribute("class", "water");
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].innerHTML = waterIcon;
                                        break;
                                    case 4:
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].setAttribute("class", "farm");
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].innerHTML = farmIcon;
                                        break;
                                    case 5:
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].setAttribute("class", "town");
                                        mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].innerHTML = townIcon;
                                        break;
                                    default:
                                        console.log("Wrong number in current element type!");
                                }
                                mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].classList.add("hover");
                                mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].setAttribute("id", "placeable");
                                if (!checkPlaceable(i, j)) {
                                    mapTable.rows[i + k - currElementStartIndex[0]].cells[j + l - currElementStartIndex[1]].setAttribute("id", "not-placeable");
                                }
                            }
                        } catch {}
                    }
                }
            });
            mapCell.addEventListener("mouseleave", printMap);
            mapRow.appendChild(mapCell);
        }
        mapTable.appendChild(mapRow);
    }
    mapTable.classList.add("map-tb");
    mapDiv.appendChild(mapTable);
}

function changeSeason() {
    mission1div.setAttribute("class", "image-container-div");
    mission1letter.setAttribute("class", "mission-group");
    mission2div.setAttribute("class", "image-container-div");
    mission2letter.setAttribute("class", "mission-group");
    mission3div.setAttribute("class", "image-container-div");
    mission3letter.setAttribute("class", "mission-group");
    mission4div.setAttribute("class", "image-container-div");
    mission4letter.setAttribute("class", "mission-group");
    springPointsTd.setAttribute("class", "spring season");
    summerPointsTd.setAttribute("class", "summer season");
    fallPointsTd.setAttribute("class", "fall season");
    winterPointsTd.setAttribute("class", "winter season");
    currSeason = seasons[seasonCounter++];
    switch (currSeason) {
        case "spring":
            mission1div.setAttribute("class", "image-container-div spring-mission active");
            mission1letter.setAttribute("class", "mission-group spring-color active");
            mission2div.setAttribute("class", "image-container-div spring-mission active");
            mission2letter.setAttribute("class", "mission-group spring-color active");
            springPointsTd.setAttribute("class", "spring season active");
            currSeasonParagraph.textContent = "Jelenlegi évszak: Tavasz (AB)";
            break;
        case "summer":
            mission2div.setAttribute("class", "image-container-div summer-mission active");
            mission2letter.setAttribute("class", "mission-group summer-color active");
            mission3div.setAttribute("class", "image-container-div summer-mission active");
            mission3letter.setAttribute("class", "mission-group summer-color active");
            summerPointsTd.setAttribute("class", "summer season active");
            currSeasonParagraph.textContent = "Jelenlegi évszak: Nyár (BC)";
            break;
        case "fall":
            mission3div.setAttribute("class", "image-container-div fall-mission active");
            mission3letter.setAttribute("class", "mission-group fall-color active");
            mission4div.setAttribute("class", "image-container-div fall-mission active");
            mission4letter.setAttribute("class", "mission-group fall-color active");
            fallPointsTd.setAttribute("class", "fall season active");
            currSeasonParagraph.textContent = "Jelenlegi évszak: Ősz (CD)";
            break;
        case "winter":
            mission4div.setAttribute("class", "image-container-div winter-mission active");
            mission4letter.setAttribute("class", "mission-group winter-color active");
            mission1div.setAttribute("class", "image-container-div winter-mission active");
            mission1letter.setAttribute("class", "mission-group winter-color active");
            winterPointsTd.setAttribute("class", "winter season active");
            currSeasonParagraph.textContent = "Jelenlegi évszak: Tél (DA)";
            break;
    }
}

function findElementStart() {
    let found = false;
    for (let i = 0; i < currElement.shape.length; i++) {
        for (let j = 0; j < currElement.shape.length; j++) {
            if (currElement.shape[i][j] == 1) {
                currElementEndIndex = [i, j];
                if (!found) {
                    currElementStartIndex = [i, j];
                    found = true;
                }
            }
        }
    }
}

function checkCurrElementType() {
    switch (currElement.type) {
        case "forest":
            currElementType = 2;
            break;
        case "water":
            currElementType = 3;
            break;
        case "farm":
            currElementType = 4;
            break;
        case "town":
            currElementType = 5;
            break;
        default:
            console.log("Wrong current element type!");
    }
}

function checkPlaceable(mapMatrixRowIndex, mapMatrixColumnIndex) {
    let placeable = false;
    let placeableCount = 0;
    for (let k = 0; k < currElement.shape.length; k++) {
        for (let l = 0; l < currElement.shape.length; l++) {
            if (currElement.shape[k][l] == 1) {
                try {
                    mapMatrix[mapMatrixRowIndex + k - currElementStartIndex[0]][mapMatrixColumnIndex + l - currElementStartIndex[1]] == 0;
                } catch {
                    return false;
                }
            }
            if (currElement.shape[k][l] == 1 && mapMatrix[mapMatrixRowIndex + k - currElementStartIndex[0]][mapMatrixColumnIndex + l - currElementStartIndex[1]] == 0) {
                placeableCount++;
            }
        }
    }
    if (placeableCount == currElementCellCount) {
        placeable = true;
    }
    return placeable;
}

function placeElement(mapMatrixRowIndex, mapMatrixColumnIndex) {
    for (let i = 0; i < currElement.shape.length; i++) {
        for (let j = 0; j < currElement.shape.length; j++) {
            if (currElement.shape[i][j] == 1) {
                mapMatrix[mapMatrixRowIndex + i - currElementStartIndex[0]][mapMatrixColumnIndex + j - currElementStartIndex[1]] = currElementType;
            }
        }
    }
    printMap();
    updateTime();
    updateMissionPoints();
    changeElement();
    if (currTime <= 0) {
        nextSeason();
    }
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function changeElement() {
    currElement = elements[++elementCount];
    checkCurrElementType();
    printElement(currElement);
}

function printElement(element) {
    currElementCellCount = 0;
    elementDiv.innerHTML = "";
    const elementTable = document.createElement("table");
    for (let i = 0; i < element.shape.length; i++) {
        let elementRow = document.createElement("tr");
        for (let j = 0; j < element.shape.length; j++) {
            let elementCell = document.createElement("td");
            if (element.shape[i][j] == 1) {
                switch (element.type) {
                    case "forest":
                        elementCell.setAttribute("class", "forest");
                        elementCell.innerHTML = forestIcon;
                        break;
                    case "water":
                        elementCell.setAttribute("class", "water");
                        elementCell.innerHTML = waterIcon;
                        break;
                    case "farm":
                        elementCell.setAttribute("class", "farm");
                        elementCell.innerHTML = farmIcon;
                        break;
                    case "town":
                        elementCell.setAttribute("class", "town");
                        elementCell.innerHTML = townIcon;
                        break;
                    default:
                        console.log("Wrong type in elements!");
                }
                currElementCellCount++;
            }
            elementRow.appendChild(elementCell);
        }
        elementTable.appendChild(elementRow);
    }
    elementTable.classList.add("element-tb");
    elementDiv.appendChild(elementTable);
    elementTime.innerHTML = element.time + clockIcon;
    findElementStart();
}

function rotateElement() {
    currElement.shape = currElement.shape[0].map((val, index) => currElement.shape.map((row) => row[index]).reverse());
}

function mirrorElement() {
    currElement.shape = currElement.shape.map(function (arr) {
        return arr.reverse();
    });
}

rotateButton.addEventListener("click", function () {
    rotateElement();
    printElement(currElement);
});

mirrorButton.addEventListener("click", function () {
    mirrorElement();
    printElement(currElement);
});

function printMissions() {
    shuffle(missions);
    if(isNewGame) {
        for (let i = 0; i < 4; i++) {
            gameMissions[i] = missions[i].title;
        }
    }
    for (let i = 0; i < 4; i++) {
        switch (gameMissions[i]) {
            case "Az erdő széle":
                missionPictures[i].setAttribute("src", "images/az_erdo_szele.png");
                break;
            case "Álmos-völgy":
                missionPictures[i].setAttribute("src", "images/almos_volgy.png");
                break;
            case "Krumpliöntözés":
                missionPictures[i].setAttribute("src", "images/krumpliontozes.png");
                break;
            case "Határvidék":
                missionPictures[i].setAttribute("src", "images/hatarvidek.png");
                break;
            case "Fasor":
                missionPictures[i].setAttribute("src", "images/fasor.png");
                break;
            case "Gazdag város":
                missionPictures[i].setAttribute("src", "images/gazdag_varos.png");
                break;
            case "Öntözőcsatorna":
                missionPictures[i].setAttribute("src", "images/ontozocsatorna.png");
                break;
            case "Mágusok völgye":
                missionPictures[i].setAttribute("src", "images/magusok_volgye.png");
                break;
            case "Üres telek":
                missionPictures[i].setAttribute("src", "images/ures_telek.png");
                break;
            case "Sorház":
                missionPictures[i].setAttribute("src", "images/sorhaz.png");
                break;
            case "Páratlan silók":
                missionPictures[i].setAttribute("src", "images/paratlan_silok.png");
                break;
            case "Gazdag vidék":
                missionPictures[i].setAttribute("src", "images/gazdag_videk.png");
                break;
            default:
                console.log("Wrong mission title!");
        }
    }
}

function updateTime() {
    currTime = currTime - currElement.time;
    seasonTimeLeft.textContent = "Évszakból hátralévő idő: " + currTime + "/7";
}

function printTime() {
    seasonTimeLeft.textContent = "Évszakból hátralévő idő: " + currTime + "/7";
}

function checkEnd() {
    if (seasonCounter >= 4) {
        return true;
    }
    return false;
}

function nextSeason() {
    if (!checkEnd()) {
        countSeasonPoints();
        changeSeason();
        currTime = 7;
        printTime();
        shuffle(elements);
        elementCount = 0;
    } else {
        countSeasonPoints();
        updateTotalScore();
        showEndScreen();
    }
}

function countSeasonPoints() {
    switch (currSeason) {
        case "spring":
            springPointsTd.innerHTML = "Tavasz: <br>" + 
            (missionPoints[0] + missionPoints[1] + countBekeritettHegy() ? missionPoints[0] + missionPoints[1] + countBekeritettHegy() &&
            (totalPoints+=missionPoints[0] + missionPoints[1] + countBekeritettHegy()) : 0) + 
            " pont";
            break;
        case "summer":
            summerPointsTd.innerHTML = "Nyár: <br>" + (missionPoints[1] + missionPoints[2] + countBekeritettHegy()) + " pont";
            totalPoints+=missionPoints[1] + missionPoints[2] + countBekeritettHegy();
            break;
        case "fall":
            fallPointsTd.innerHTML = "Ősz: <br>" + (missionPoints[2] + missionPoints[3] + countBekeritettHegy()) + " pont";
            totalPoints+=missionPoints[2] + missionPoints[3] + countBekeritettHegy();
            break;
        case "winter":
            winterPointsTd.innerHTML = "Tél: <br>" + (missionPoints[0] + missionPoints[3] + countBekeritettHegy()) + " pont";
            totalPoints+=missionPoints[0] + missionPoints[3] + countBekeritettHegy();
            break;
        default:
            console.log("Wrong season name!");
    }
}

function countMissionPoints() {
    for (let i = 0; i < 4; i++) {
        switch (gameMissions[i]) {
            case "Az erdő széle":
                missionPoints[i] = countAzErdoSzele();
                break;
            case "Álmos-völgy":
                missionPoints[i] = countAlmosVolgy();
                break;
            case "Krumpliöntözés":
                missionPoints[i] = countKrumpliontozes();
                break;
            case "Határvidék":
                missionPoints[i] = countHatarvidek();
                break;
            case "Fasor":
                missionPoints[i] = countFasor();
                break;
            case "Gazdag város":
                missionPoints[i] = countGazdagVaros();
                break;
            case "Öntözőcsatorna":
                missionPoints[i] = countOntozocsatorna();
                break;
            case "Mágusok völgye":
                missionPoints[i] = countMagusokVolgye();
                break;
            case "Üres telek":
                missionPoints[i] = countUresTelek();
                break;
            case "Sorház":
                missionPoints[i] = countSorhaz();
                break;
            case "Páratlan silók":
                missionPoints[i] = countParatlanSilok();
                break;
            case "Gazdag vidék":
                missionPoints[i] = countGazdagVidek();
                break;
            default:
                console.log("Wrong mission title!");
        }
    }
}

function updateMissionPoints() {
    countMissionPoints();
    mission1points.textContent = "(" + missionPoints[0] + " pont)";
    mission2points.textContent = "(" + missionPoints[1] + " pont)";
    mission3points.textContent = "(" + missionPoints[2] + " pont)";
    mission4points.textContent = "(" + missionPoints[3] + " pont)";
}

function countHatarvidek() {
    let count = 0;
    let fullRow = true;
    let fullCol = true;
    for (let i = 0; i < mapMatrix.length; i++) {
        fullRow = true;
        fullCol = true;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 0) {
                fullRow = false;
            }
            if (mapMatrix[j][i] == 0) {
                fullCol = false;
            }
        }
        if (fullRow) {
            count++;
        }
        if (fullCol) {
            count++;
        }
    }
    return count * 6;
}

function countAzErdoSzele() {
    let count = 0;
    for (let i = 1; i < mapMatrix.length; i++) {
        if (mapMatrix[0][i] == 2) {
            count++;
        }
        if (mapMatrix[10][i] == 2) {
            count++;
        }
        if (mapMatrix[i][0] == 2) {
            count++;
        }
    }
    for (let i = 1; i < mapMatrix.length - 1; i++) {
        if (mapMatrix[i][10] == 2) {
            count++;
        }
    }
    return count;
}

function countAlmosVolgy() {
    let count = 0;
    let countForest = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        countForest = 0;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 2) {
                countForest++;
            }
        }
        if (countForest == 3) {
            count++;
        }
    }
    return count * 4;
}

function countKrumpliontozes() {
    let count = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 4) {
                try {
                    if (mapMatrix[i - 1][j] == 3) {
                        count++;
                    }
                } catch {}
                try {
                    if (mapMatrix[i + 1][j] == 3) {
                        count++;
                    }
                } catch {}
                try {
                    if (mapMatrix[i][j - 1] == 3) {
                        count++;
                    }
                } catch {}
                try {
                    if (mapMatrix[i][j + 1] == 3) {
                        count++;
                    }
                } catch {}
            }
        }
    }
    return count * 2;
}

function countFasor() {
    let count = 0;
    let max = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        count = 0;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[j][i] == 2) {
                count++;
            } else {
                count = 0;
            }
            if (max < count) {
                max = count;
            }
        }
    }
    return max * 2;
}

function countGazdagVaros() {
    let count = 0;
    let diff = 0;
    let tiles = [];
    for (let i = 0; i < mapMatrix.length; i++) {
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 5) {
                try {
                    if (mapMatrix[i - 1][j] != 0 && mapMatrix[i - 1][j] != undefined && !tiles.includes(mapMatrix[i - 1][j])) {
                        diff++;
                        tiles.push(mapMatrix[i - 1][j]);
                    }
                } catch {}
                try {
                    if (mapMatrix[i + 1][j] != 0 && mapMatrix[i + 1][j] != undefined && !tiles.includes(mapMatrix[i + 1][j])) {
                        diff++;
                        tiles.push(mapMatrix[i + 1][j]);
                    }
                } catch {}
                try {
                    if (mapMatrix[i][j - 1] != 0 && mapMatrix[i][j - 1] != undefined && !tiles.includes(mapMatrix[i][j - 1])) {
                        diff++;
                        tiles.push(mapMatrix[i][j - 1]);
                    }
                } catch {}
                try {
                    if (mapMatrix[i][j + 1] != 0 && mapMatrix[i][j + 1] != undefined && !tiles.includes(mapMatrix[i][j + 1])) {
                        diff++;
                        tiles.push(mapMatrix[i][j + 1]);
                    }
                } catch {}
            }
            if (diff >= 3) {
                count++;
            }
            diff = 0;
            tiles = [];
        }
    }
    return count * 3;
}

function countOntozocsatorna() {
    let count = 0;
    let farmCount = 0;
    let waterCount = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        farmCount = 0;
        waterCount = 0;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[j][i] == 4) {
                farmCount++;
            }
            if (mapMatrix[j][i] == 3) {
                waterCount++;
            }
        }
        if (farmCount == waterCount && farmCount != 0 && waterCount != 0) {
            count++;
        }
    }
    return count * 4;
}

function countMagusokVolgye() {
    let count = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 1) {
                if (mapMatrix[i - 1][j] == 3) {
                    count++;
                }
                if (mapMatrix[i + 1][j] == 3) {
                    count++;
                }
                if (mapMatrix[i][j - 1] == 3) {
                    count++;
                }
                if (mapMatrix[i][j + 1] == 3) {
                    count++;
                }
            }
        }
    }
    return count * 3;
}

function countUresTelek() {
    let count = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 5) {
                try {
                    if (mapMatrix[i - 1][j] == 0) {
                        count++;
                    }
                } catch {}
                try {
                    if (mapMatrix[i + 1][j] == 0) {
                        count++;
                    }
                } catch {}
                try {
                    if (mapMatrix[i][j - 1] == 0) {
                        count++;
                    }
                } catch {}
                try {
                    if (mapMatrix[i][j + 1] == 0) {
                        count++;
                    }
                } catch {}
            }
        }
    }
    return count * 2;
}

function countSorhaz() {
    let count = 0;
    let max = 0;
    let repetition = 1;
    for (let i = 0; i < mapMatrix.length; i++) {
        count = 0;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 5) {
                count++;
            } else {
                count = 0;
            }
            if (max < count) {
                max = count;
                repetition = 1;
            } else if (max == count) {
                repetition++;
            }
        }
    }
    return max * 2 * repetition;
}

function countParatlanSilok() {
    let count = 0;
    let fullCol = true;
    for (let i = 0; i < mapMatrix.length; i += 2) {
        fullCol = true;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[j][i] == 0) {
                fullCol = false;
            }
        }
        if (fullCol) {
            count++;
        }
    }
    return count * 10;
}

function countGazdagVidek() {
    let count = 0;
    let tiles = [];
    let rowCount = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        count = 0;
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] != 0 && !tiles.includes(mapMatrix[i][j])) {
                count++;
                tiles.push(mapMatrix[i][j]);
            }
        }
        if (count >= 5) {
            rowCount++;
        }
        tiles = [];
    }
    return rowCount * 4;
}

function countBekeritettHegy() {
    let count = 0;
    for (let i = 0; i < mapMatrix.length; i++) {
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] == 1) {
                if (mapMatrix[i - 1][j] != 0 && mapMatrix[i + 1][j] != 0 && mapMatrix[i][j - 1] != 0 && mapMatrix[i][j + 1] != 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

function updateTotalScore() {
    totalPointsPar.textContent = 'Összesen: '+ totalPoints +' pont';
}

function showEndScreen() {
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    overlayDiv.innerHTML = 'Szép Munka!<br><br>' + totalPoints + ' pont<br><br>';
    body.appendChild(overlayDiv);
}

function newGame() {
    changeElement();
    printMissions();
    printMap();
    nextSeason();
}

newGame();