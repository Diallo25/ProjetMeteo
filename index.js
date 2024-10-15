// Fonction pour récupérer les données météorologiques
async function getWeatherData(city) {
    const apiKey = 'eab54c69135949e1ba7f3da236231531'; // Remplacez par votre clé API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Fonction pour afficher les données météorologiques
function displayWeatherData(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;

    document.getElementById('temperature').textContent = `Température: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('location').textContent = `Emplacement: ${location}`;
}

// Exemple d'appel de la fonction avec une ville
getWeatherData('france');


