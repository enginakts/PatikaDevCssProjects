// Kullanıcıdan isim al
const userName = prompt("Lütfen isminizi girin:");

// İsmi ve zamanı gösteren fonksiyon
function showWelcomeMessage() {
    const welcomeMessage = document.getElementById("welcome-message");
    const dateTimeElement = document.getElementById("date-time");

    // Hoş geldin mesajını güncelle
    welcomeMessage.textContent = `Hoş geldin, ${userName}!`;

    // Tarih ve saat formatını oluştur
    function updateDateTime() {
        const now = new Date();
        const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        const day = days[now.getDay()];
        const time = now.toLocaleTimeString("tr-TR");
        const date = now.toLocaleDateString("tr-TR");

        dateTimeElement.textContent = `Bugün: ${date}, ${day} - Saat: ${time}`;
    }

    // Zamanı güncelle
    updateDateTime();
    setInterval(updateDateTime, 1000); // Her saniye yenile
}

// Mesajı göster
showWelcomeMessage();
