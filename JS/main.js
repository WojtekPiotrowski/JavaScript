
    let tab = ["Jan","Karol","Mateusz"]

    //dodawanie na koniec tablicy
    // tab.push("Halinka")

    //usuwanie ostatniego elementu
    // tab.pop()

    //dodawanie na początku 
    //tab.unshift("Marta")

    //usuwanie na początku tablicy
    //tab.shift()

    //odwracanie tablicy
    // tab.reverse()

    // console.log(tab)

    let obiekt = {
        imie: "Jan",
        nazwisko: "Kowalski",
    }

    // for(let i of tab){
    //     console.log(i)
    // };

    // tab.forEach(imie => {
    //     console.log(imie)
    // })

    const posts = [
        {
            id: 1,
            name: "Jan Kowalski"
        },
        {
            id: 2,
            name: "Adam Nowak"
        },
        {
            id: 3,
            name: "Anna Dymna"
        }
    ]

    // for (let i of posts){
    //     console.log(i.name)
    // }

    function dodawanie(a,b) {
        return a+b
    }

    console.log(dodawanie(2,4))
