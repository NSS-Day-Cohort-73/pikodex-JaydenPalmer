import { grabData } from "./database.js";
import { pikodexCards } from "./pikomon.js";
const container = document.querySelector('#container')
const pikodexData = grabData()
const pikodexHTML = pikodexCards(pikodexData)
//console.log(pikodexHTML)


container.innerHTML = pikodexHTML


