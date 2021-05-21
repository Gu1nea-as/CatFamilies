let string = `{
    "title": "Cat Families",
    "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
    "cats": [
      {
        "name": "Lindy",
        "breed": "Cymric",
        "color": "white",
        "kittens": [
          {
            "name": "Percy",
            "gender": "m"
          },
          {
            "name": "Thea",
            "gender": "f"
          },
          {
            "name": "Annis",
            "gender": "f"
          }
        ]
      },
      {
        "name": "Mina",
        "breed": "Aphrodite Giant",
        "color": "ginger",
        "kittens": [
          {
            "name": "Doris",
            "gender": "f"
          },
          {
            "name": "Pickle",
            "gender": "f"
          },
          {
            "name": "Max",
            "gender": "m"
          }
        ]
      },
      {
        "name": "Antonia",
        "breed": "Ocicat",
        "color": "leopard spotted",
        "kittens": [
          {
            "name": "Bridget",
            "gender": "f"
          },
          {
            "name": "Randolph",
            "gender": "m"
          }
        ]
      }
    ]
  }`
  

let header = document.getElementById("header")
let section = document.getElementById("section")


init(string)

function init(string){
  let catObj = JSON.parse(string)
  createHeader(catObj)
  createSection(catObj)
}

function createHeader(obj){
  const H1 = document.createElement("h1")
  H1.textContent = obj.title
  header.appendChild(H1)

  const PARA = document.createElement("p")
  PARA.textContent = `${obj["intro"]}`
  header.appendChild(PARA)
}

function createSection(obj){
  const PARENT = obj["cats"]
  for(cat in PARENT){
    const ARTICLE = document.createElement("article")
    const H2 = document.createElement("h2")
    const P1 = document.createElement("p")
    const P2 = document.createElement("p")
    const P3 = document.createElement("p")

    const LIST = document.createElement("ul")

    H2.textContent = PARENT[cat]["name"]
    P1.textContent = `Breed: ${PARENT[cat]["breed"]}`
    P2.textContent = `Color: ${PARENT[cat]["color"]}`
    P3.textContent = `Kittens`
    const KITTENS = PARENT[cat]["kittens"]
    for(kitten in KITTENS){
      let gender = ''
      if(KITTENS[kitten]["gender"] == 'f'){
        gender = 'Female'
      }else{
        gender = 'Male'
      }
      const LISTITEM = document.createElement("li")
      LISTITEM.innerHTML = `Name: ${KITTENS[kitten]["name"]} <br> Gender: ${gender}`
      LIST.appendChild(LISTITEM)
    }
    ARTICLE.appendChild(H2)
        ARTICLE.appendChild(P1)
        ARTICLE.appendChild(P2)
        ARTICLE.appendChild(P3)
        ARTICLE.appendChild(LIST)
 
        section.appendChild(ARTICLE)
  }
}