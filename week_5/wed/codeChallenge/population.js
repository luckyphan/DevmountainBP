function nbYear(currentPop, percent, inhabitants, wantPopulation){
    let year = 0;
    percent /= 100;
    while(currentPop < wantPopulation){
        currentPop += (currentPop*percent) + inhabitants;
        year++;
    }
return console.log(year);
}

nbYear(1500, 5, 100, 5000)
nbYear(1500000, 2.5, 10000, 2000000)