function guessGifts (wl, pres){
    let presents = []
    for(let i = 0; i < pres.length; i++){
        wl.forEach(element => {
           if( pres[i].size === element.size && pres[i].clatters === element.clatters && pres[i].weight === element.weight){
                        presents.push(element.name)
            }
        });
    }
    console.log(presents)
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]