/*
Úkol:
=====
Tvoříš galerii obrázků. Seznam obrázků máš uložený v poli obrazky[].
Z celé galerie je vidět vždy jen jeden obrázek.
Na stránce jsou tlačítka "Předchozí" a "Další"- při stisknutí tlačítka
zobraz předchozí/následující obrázek (nahraď zdroj "src" obrázku
jménem nového obrázku).

Na stránce je také prvek <div id="pocitadlo", do kterého vždy vypiš,
název a pořadí obrázku, na kterém se nacházíš. Např. "ovce.jpg - 3 / 5".
Mysli na to, že člověk a JavaScript přemýšlí o "prvním" obrázku
každý trochu jinak :)


Bonusový úkol:
==============
Doplň logiku, která zajistí, že po poslední fotce následuje znovu
ta první a před první fotkou je znovu ta poslední. Tzn. galerii lze
procházet v kruhu "dokola".

Tlačítka předchozí/následující nahraď malým náhledem dalšího/
předcházejícího obrázku. Všechny tři obrázky (velký aktuální a malý
předchozí/následující se samozřejmě budou měnit adekvátně tomu, jak procházíš
galerií.


Extra bonus:
============================
Na konec stránky přidej proužek, kde budou malé náhledy všech obrázků
v galerii. Aktuální obrázek bude vždy nějakým způsobem zvýrazněn.

Co musíš udělat:
- doplnit do HTML značku, do které pak JavaScriptem vygeneruješ seznam obrázků
- trochu CSS, aby to nevypadalo úplně příšerně. Pokud CSS neovládáš tak dobře,
netrap se tím - jde nám hlavně o JavaScript. Případně se zeptej na Facebooku
a my ti rádi připravíme CSS na míru tvému řešení úkolu.
- při startu stránky musíš do svého nového HTML prvku vygenerovat seznam
všech obrázků v galerii
- aktuální obrázek zvýraznit - např. přidáním nějaké třídy s červeným rámečkem
nebo něco podobného
- při změně obrázku odstranit zvýraznění z předchozího obrázku a zvýraznit nový
*/


let obrazky = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg',
]


let obrazek = document.querySelector("#foto")
let sipkaVpravo = document.querySelector("#sipkaPrava")
let sipkaVlevo = document.querySelector("#sipkaLeva")
let pocitadlo = document.querySelector("#pocitadlo")
let prouzekObrazku = document.querySelector("#prouzek")

/*---!!! Dotaz - Chtela bych se zeptat - v nektere predchozi lekci jsem narazila na to, ze eventListener by se mely psat az za funkce, jinak muze byt problem s jejich nactenim, prtz se funkce cte az potom .... me to vlastne az do ted nedelalo problem, tak se chci zeptat pro jistotu jeste jednou - jestli je to lepsi mit takto pokupe nebo lepe to psat vzdy ya danou funkci? Dekuji ---*/

sipkaVlevo.addEventListener("click", obrazekDoleva)
sipkaVpravo.addEventListener("click", obrazekDoprava)
document.addEventListener ("keydown", stiskKlavesy)

//Nacteni uvodniho obrazky

let imageCnt = 0

function prvniObrazek() {
    pocitadlo.textContent = obrazky[imageCnt] + " " + (imageCnt + 1) + "/" + obrazky.length
    obrazek.src = "obrazky/" + obrazky[imageCnt]
    sipkaVpravo.src = "obrazky/" + obrazky[imageCnt + 1]
    sipkaVlevo.src = "obrazky/" + obrazky[obrazky.length - 1]
}

prvniObrazek()

//pohyb pomoci klikani na obrazkove sipky

function obrazekDoleva() {
    if (imageCnt-- > 0) {
        //imageCnt = imageCnt - 1;
        pocitadlo.textContent = obrazky[imageCnt] + " " + (imageCnt + 1) + "/" + obrazky.length
        sipkaVpravo.src = "obrazky/" + obrazky[imageCnt + 1]
        sipkaVlevo.src = "obrazky/" + obrazky[imageCnt - 1]
        if (imageCnt === 0) {
            sipkaVlevo.src = "obrazky/" + obrazky[obrazky.length - 1]
        }
    } else {
        imageCnt = obrazky.length - 1
        pocitadlo.textContent = obrazky[imageCnt] + " " + (imageCnt + 1) + "/" + obrazky.length
        sipkaVpravo.src = "obrazky/" + obrazky[obrazky.length - obrazky.length]
        sipkaVlevo.src = "obrazky/" + obrazky[imageCnt - 1]
    }
    obrazek.src = "obrazky/" + obrazky[imageCnt]
}

function obrazekDoprava() {
     if (imageCnt++ < obrazky.length - 1) {
        //  imageCnt = imageCnt + 1
        pocitadlo.textContent = obrazky[imageCnt] + " " + (imageCnt + 1) + "/" + obrazky.length
        sipkaVlevo.src = "obrazky/" + obrazky[imageCnt - 1]
        sipkaVpravo.src = "obrazky/" + obrazky[imageCnt + 1]
        if (imageCnt === obrazky.length - 1 ) {
            sipkaVpravo.src = "obrazky/" + obrazky[obrazky.length - obrazky.length]
        }
    } else {
        imageCnt = 0
        pocitadlo.textContent = obrazky[imageCnt] + " " + (imageCnt + 1) + "/" + obrazky.length
        sipkaVpravo.src = "obrazky/" + obrazky[imageCnt + 1]
        sipkaVlevo.src = "obrazky/" + obrazky[obrazky.length - 1]
    }
    obrazek.src = "obrazky/" + obrazky[imageCnt]
}

//zmena obrazku pomoci stisku sipek

/*---Dotaz!!! Snazila jsem se ty stisky klavesy pridat do funkci vyse, ale nejak mi to nefungovalo (mozna se mi to zdalo i slozitejsi, ze bych musela osetrit stisky jinych klaves ktere mi spadaly do "else"). Navic se mi ani nelibi, ze by to vsechno bylo uz tak moc "nacpane". Dotaz tedy zni jestli nevadi, ze to takhle davam do dalsi funkce? Dekuji---*/

function stiskKlavesy(event) {
    
    let stiskKlavesy = event.key
 
     if (stiskKlavesy === "ArrowRight") {
         obrazekDoprava()
     } 
     else if (stiskKlavesy === "ArrowLeft") {
         obrazekDoleva()
     }    
 }



/*---Doplnila jsem ukoly co jsi navrhnul, jen mam ted jeste dva dotazy na radku 62 a 121. Stredniky jsem se snazila vymazat kde to slo - budu si to urcite vice hlidat, diky ale za dalsi upozorneni 😅. Az budu mit trochu casu navic, jeste zkusim doplnit ten posledni bonusovy ukol, jen musis  vymyslet, jak tam obrazky nahrat - ale to mi chvilku jeste zabere. Diky moc za vsechno ! ---*/