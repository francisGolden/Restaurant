// declare variables in global scope so that I can use them
// everywhere. Otherwise it'll throw an error in the console
const content = document.querySelector("#content")
const header = document.createElement("div")
const img = document.createElement("div")
const desc = document.createElement("div")
const buttonsContainer = document.createElement("div")
const homeButton = document.createElement("button")
homeButton.addEventListener("click", () => {
    home()
})

const menuButton = document.createElement("button")
menuButton.addEventListener("click", () => {
    menu()
})
const contactButton = document.createElement("button")
contactButton.addEventListener("click", () => {
    contact()
})
const mid = document.createElement("div")

// export home module
export default function home () {
    content.innerHTML = ""
    console.log("home module loaded")
    header.setAttribute("class", "row")
    img.setAttribute("class", "row")
    desc.setAttribute("class", "row")

    content.style.height = "100vh"
    content.style.width = "100vw"
    content.style.color = "white"
    content.style.fontFamily = "Open Sans"
    content.style.maxHeight = "100%"
    content.style.maxWidth = "100%"
    content.style.margin = "0px"
    

    content.style.display = "grid"
    content.style.gridTemplateRows = '0.5fr 1fr 1fr'
    
    
    header.style.display = "flex"
    header.innerHTML = "Rifugio Porta"
    
    header.style.justifyContent = "center"
    header.style.alignItems = "center"
    header.style.fontSize = "3.4rem"
    
    desc.innerHTML = "<b>Orari del rifugio</b>: <br>Lunedì: 8am - 8pm<br>Martedì: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Mercoledì: 6am - 6pm<br>Giovedì: 6am - 10pm<br>Venerdì: 6am - 10pm<br>Sabato: 8am - 10pm"

    content.insertAdjacentElement("beforeend", header)
    
    content.insertAdjacentElement("beforeend", img)
    
    content.insertAdjacentElement("beforeend", desc);
    const rows = document.querySelectorAll(".row")

    rows.forEach(row => {
        row.style.backgroundColor = "#363062"
        row.style.width = "100%"
        row.style.height = "100%"
        row.style.textAlign = "center"
        row.style.border = "0px solid white"
        row.style.paddingBottom = "20px"
        row.style.paddingTop = "20px"
        row.style.boxSizing = "border-box"
        
    })
    
    img.style.display = "flex"
    img.style.flexDirection = "column"
    img.style.justifyContent = "center"
    img.style.alignItems = "center"
    mid.style.border = "2px dashed white"
    mid.style.padding = "20px"
    mid.style.width = "50vw"
    mid.style.maxWidth = "1000px"
    mid.innerHTML = "<b>Dove andiamo a mangiare?</b><br>Il rifugio Carlo Porta è un edificio storico situato nel Pian dei Resinelli. <br>Conserva tutto il fascino e la bellezza delle strutture di Inizio Secolo. <br>In posizione strategica per le salite in Grignetta e per le più conosciute pareti d’arrampicata, il Rifugio accoglie i suoi ospiti tutto l’anno."
    

    img.insertAdjacentElement("beforeend", mid)
    
    header.style.backgroundColor = "#F8B400"
    
    header.style.color = "#FAF5E4"
    header.style.fontWeight = "800"
    header.style.textShadow = "2px 4px 3px rgba(0,0,0,0.3)"
    header.style.display = "flex"
    header.style.flexDirection = "column"
    header.style.gap = "10px"
    
    header.insertAdjacentElement("beforeend", buttonsContainer)
    
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"
    homeButton.innerHTML = "Home"
    homeButton.style.width = "10vw"
    homeButton.style.minWidth = "fit-content"
    homeButton.style.height = "5vh"
    homeButton.style.fontSize = "1.5rem"
    homeButton.style.borderRadius = "10px"
    homeButton.style.border = "0"
    
    menuButton.innerHTML = "Menu"
    menuButton.style.width = "10vw"
    menuButton.style.minWidth = "fit-content"
    menuButton.style.height = "5vh"
    menuButton.style.fontSize = "1.5rem"
    menuButton.style.borderRadius = "10px"
    menuButton.style.border = "0"
    
    contactButton.innerHTML = "Contact"
    contactButton.style.width = "10vw"
    contactButton.style.minWidth = "fit-content"
    contactButton.style.height = "5vh"
    contactButton.style.fontSize = "1.5rem"
    contactButton.style.borderRadius = "10px"
    contactButton.style.border = "0"


    buttonsContainer.insertAdjacentElement("beforeend", homeButton)
    buttonsContainer.insertAdjacentElement("beforeend", menuButton)
    buttonsContainer.insertAdjacentElement("beforeend", contactButton)
    
    
}

// export menu module
export function menu () {
    console.log("menu module loaded")
    content.innerHTML = ""
    header.setAttribute("class", "row")
    img.setAttribute("class", "row")
    desc.setAttribute("class", "row")

    content.style.height = "100vh"
    content.style.width = "100vw"
    content.style.color = "white"
    content.style.fontFamily = "Open Sans"
    content.style.maxHeight = "100%"
    content.style.maxWidth = "100%"
    content.style.margin = "0px"
    

    content.style.display = "grid"
    content.style.gridTemplateRows = '0.5fr 1fr 1fr'
    
    
    header.style.display = "flex"
    header.innerHTML = "Rifugio Porta"
    
    header.style.justifyContent = "center"
    header.style.alignItems = "center"
    header.style.fontSize = "3.4rem"
    
    desc.innerHTML = "<img class='immagine' style='max-width: 70vw; max-height: 70vh' src='https://media-cdn.tripadvisor.com/media/photo-s/16/79/3e/df/tagliere-di-salumi.jpg'>"

    content.insertAdjacentElement("beforeend", header)
    
    
    
    content.insertAdjacentElement("beforeend", img)
    

    content.insertAdjacentElement("beforeend", desc);
    const rows = document.querySelectorAll(".row")

    rows.forEach(row => {
        row.style.backgroundColor = "#363062"
        row.style.width = "100%"
        row.style.height = "100%"
        row.style.textAlign = "center"
        row.style.border = "0px solid white"
        row.style.paddingBottom = "20px"
        row.style.paddingTop = "20px"
        row.style.boxSizing = "border-box"
        
    })
    
    img.style.display = "flex"
    img.style.flexDirection = "column"
    img.style.justifyContent = "center"
    img.style.alignItems = "center"
    mid.style.border = "2px dashed white"
    mid.style.width = "50vw"
    mid.style.maxWidth = "1000px"
    mid.style.padding = "20px"
    mid.innerHTML = "<ul><b>Menu del ristorante</b><br><li>coppa<li>noci<li>bresaola"
    

    img.insertAdjacentElement("beforeend", mid)
    

    header.style.backgroundColor = "#F8B400"
    header.style.color = "#FAF5E4"
    header.style.fontWeight = "800"
    header.style.textShadow = "2px 4px 3px rgba(0,0,0,0.3)"
    header.style.display = "flex"
    header.style.flexDirection = "column"

    
    header.insertAdjacentElement("beforeend", buttonsContainer)
    
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"
    homeButton.innerHTML = "Home"
    homeButton.style.width = "10vw"
    homeButton.style.minWidth = "fit-content"
    homeButton.style.height = "5vh"
    homeButton.style.fontSize = "1.5rem"
    homeButton.style.borderRadius = "10px"
    
    menuButton.innerHTML = "Menu"
    menuButton.style.width = "10vw"
    menuButton.style.minWidth = "fit-content"
    menuButton.style.height = "5vh"
    menuButton.style.fontSize = "1.5rem"
    menuButton.style.borderRadius = "10px"
    
    contactButton.innerHTML = "Contact"
    contactButton.style.width = "10vw"
    contactButton.style.minWidth = "fit-content"
    contactButton.style.height = "5vh"
    contactButton.style.fontSize = "1.5rem"
    contactButton.style.borderRadius = "10px"

    buttonsContainer.insertAdjacentElement("beforeend", homeButton)
    buttonsContainer.insertAdjacentElement("beforeend", menuButton)
    buttonsContainer.insertAdjacentElement("beforeend", contactButton)

    console.log("menu")
}

// export contact module
export function contact () {
    console.log("contact module loaded")
    content.innerHTML = ""
    header.setAttribute("class", "row")
    img.setAttribute("class", "row")
    desc.setAttribute("class", "row")

    content.style.height = "100vh"
    content.style.width = "100vw"
    content.style.color = "white"
    content.style.fontFamily = "Open Sans"
    content.style.maxHeight = "100%"
    content.style.maxWidth = "100%"
    content.style.margin = "0px"
    

    content.style.display = "grid"
    content.style.gridTemplateRows = '0.5fr 1fr 1fr'
    
    
    header.style.display = "flex"
    header.innerHTML = "Rifugio Porta"
    
    header.style.justifyContent = "center"
    header.style.alignItems = "center"
    header.style.fontSize = "3.4rem"
    
    desc.innerHTML = "<img class='immagine' style='max-width: 70vw; max-height: 70vh' src='https://www.rifugi.lombardia.it/wp-content/themes/rifugi-lombardia/images/cache/02CA5B871015C32E8237D81B751190AA_1440_620.jpg'>"
    
    
    content.insertAdjacentElement("beforeend", header)
    
    
    
    content.insertAdjacentElement("beforeend", img)
    

    content.insertAdjacentElement("beforeend", desc);
    const rows = document.querySelectorAll(".row")

    rows.forEach(row => {
        row.style.backgroundColor = "#363062"
        row.style.width = "100%"
        row.style.height = "100%"
        row.style.textAlign = "center"
        row.style.border = "0px solid white"
        row.style.paddingBottom = "20px"
        row.style.paddingTop = "20px"
        row.style.boxSizing = "border-box"
        
    })
    
    img.style.display = "flex"
    img.style.flexDirection = "column"
    img.style.justifyContent = "center"
    img.style.alignItems = "center"
    
    mid.style.border = "2px dashed white"
    mid.style.width = "50vw"
    mid.style.maxWidth = "1000px"
    mid.style.padding = "20px"
    mid.style.wordBreak = "break-word"
    // mid.style.minWidth = "fit-content"
    mid.innerHTML = "<b>Contattami usando questo link</b><br><br>"
    mid.innerHTML += "<a style=''>emailfinta@godomail.com</a>"

    img.insertAdjacentElement("beforeend", mid)
    

    header.style.backgroundColor = "#F8B400"
    header.style.color = "#FAF5E4"
    header.style.fontWeight = "800"
    header.style.textShadow = "2px 4px 3px rgba(0,0,0,0.3)"
    header.style.display = "flex"
    header.style.flexDirection = "column"

    
    header.insertAdjacentElement("beforeend", buttonsContainer)
    
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"
    homeButton.innerHTML = "Home"
    homeButton.style.width = "10vw"
    homeButton.style.minWidth = "fit-content"
    homeButton.style.height = "5vh"
    homeButton.style.fontSize = "1.5rem"
    homeButton.style.borderRadius = "10px"
    
    menuButton.innerHTML = "Menu"
    menuButton.style.width = "10vw"
    menuButton.style.minWidth = "fit-content"
    menuButton.style.height = "5vh"
    menuButton.style.fontSize = "1.5rem"
    menuButton.style.borderRadius = "10px"
    
    contactButton.innerHTML = "Contact"
    contactButton.style.width = "10vw"
    contactButton.style.minWidth = "fit-content"
    contactButton.style.height = "5vh"
    contactButton.style.fontSize = "1.5rem"
    contactButton.style.borderRadius = "10px"


    buttonsContainer.insertAdjacentElement("beforeend", homeButton)
    buttonsContainer.insertAdjacentElement("beforeend", menuButton)
    buttonsContainer.insertAdjacentElement("beforeend", contactButton)

    console.log("contact")
}

// solved selection of all rows
// added restaurant content to home page
// made menu buttons
// made menu page
// made contact page
// made tab-switching logic work

// PROBLEM: modules are getting loaded incrementally
// more times every time I click on the tab: 
// SOLUTION: adding event listeners inside each modules caused this issue, 
// which made the modules load multiple times and 
// in the long run made the page crash. I just added event listeners
// once and outside the modules, in global scope.

// PROBLEM: mid section of home page changes size when switching between tabs
// SOLUTION: removed mid.style.minWidth = "fit-content" from contact module

// PROBLEM: mid section text of contact tab overflows the box when using mobile device 
// SOLUTION: applied mid.style.wordBreak = "break-word". now the text doesn't overflow
