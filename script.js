// Objekto struktura su marsruto informacija
class TrainRoute {
    constructor(routeName, departureDate, departureTime, duration) {
      this.routeName = routeName;
      this.departureDate = departureDate;
      this.departureTime = departureTime;
      this.duration = duration;
    }
  }
  
  // Masyvas su marsrutu pavadinimais
  const trainRoutes = [
    new TrainRoute('Vilnius - Helsinkis', '2024-01-25', '18:45', '4:25'),
    new TrainRoute('Vilnius - Kaunas - Klaipėda', '2024-02-26', '11:25', '3:15'),
    new TrainRoute('Kaunas - Varšuva', '2024-01-27', '06:15', '24:30'),
    new TrainRoute('Šiauliai - Vilnius', '2024-01-28', '15:20', '4:55'),
    new TrainRoute('Klaipėda - Panevėžys', '2024-01-29', '12:15', '26:10'),
    new TrainRoute('Klaipėda - Vilnius', '2024-01-30', '14:30', '24:01')
  ];
  
  // Funkcija: Rasti trumpiausios keliones duomenis
  function findShortestRoute() {
    let shortestRoute = trainRoutes[0];
  
    for (const route of trainRoutes) {
      if (calculateMinutes(route.duration) < calculateMinutes(shortestRoute.duration)) {
        shortestRoute = route;
      }
    }
  
    return shortestRoute;
  }
  
  // Funkcija: Rasti ilgiausios keliones duomenis
  function findLongestRoute() {
    let longestRoute = trainRoutes[0];
  
    for (const route of trainRoutes) {
      if (calculateMinutes(route.duration) > calculateMinutes(longestRoute.duration)) {
        longestRoute = route;
      }
    }
  
    return longestRoute;
  }
  
  // Funkcija: Rasti ir atspausdinti visa informacija apie marsrutus, kurie truko ilgiau nei para
  function findAndPrintLongerRoutes() {
    const oneDayInMinutes = 24 * 60;
  
    for (const route of trainRoutes) {
      if (calculateMinutes(route.duration) > oneDayInMinutes) {
        console.log("Informacija apie maršrutą:", route);
      }
    }
  }
  
  // Funkcija: Apskaiciuoti laika 
  function calculateMinutes(duration) {
    const [hours, minutes] = duration.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
  }
  
  
  // Testas
  console.log("Trumpiausia kelionė:", findShortestRoute());
  console.log("Ilgiausia kelionė:", findLongestRoute());
  console.log("Maršrutai trukę ilgiau nei para:");
  findAndPrintLongerRoutes();
  
  
  
  
  
  
  
  