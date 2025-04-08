export function savePdf() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const cityName = document.getElementById('cityName').innerText;
    const travelDateOutput = document.getElementById('travelDateOutput').innerText;
    const country = document.getElementById('country').innerText;
    const longitude = document.getElementById('longitude').innerText;
    const latitude = document.getElementById('latitude').innerText;
    const weatherOutput = document.getElementById('weatherOutput').innerText;
    const userResponse = document.getElementById('userResponse').innerText;

    pdf.text('Travel Summary', 10, 10);
    pdf.text(`City: ${cityName}`, 10, 20);
    pdf.text(`Travel Date: ${travelDateOutput}`, 10, 30);
    pdf.text(`Country: ${country}`, 10, 40);
    pdf.text(`Longitude: ${longitude}`, 10, 50);
    pdf.text(`Latitude: ${latitude}`, 10, 60);
    pdf.text(`Weather: ${weatherOutput}`, 10, 70);
    pdf.text(`Comments: ${userResponse}`, 10, 80);

    pdf.save('Travel_Summary.pdf');
}