const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const messages = [
    "analyzing phone...",
    "System rebooting, Please wait...",
    "Your device: ANDROID",
    "Testing network connection and stability...",
    "Network connection: Wi-Fi (Strong)",
    "IP ADRESS: 209.332.108.908",
    "NUMBER PHONE : +62-877-7554-****",
    "Location device : https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126791.12193777908!2d108.4716355398652!3d-6.7426852042482945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee2649e6e5bbb%3A0x70a07638a7fe12fe!2sCirebon%2C%20Kota%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1734944839204!5m2!1sid!2sid",
    "Scanning for unauthorized access attempts...",
    "Alert: System integrity compromised.",
];

let messageIndex = 0;

// Fungsi untuk mengetikkan teks dengan efek seperti mesin ketik
function typeText(text, callback) {
    let i = 0;
    inputElement.textContent = ''; // Pastikan sebelumnya kosong
    const interval = setInterval(() => {
        inputElement.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(callback, 500); // Callback setelah selesai mengetik
        }
    }, 50);
}

// Fungsi untuk menampilkan pesan ke layar
function printMessage(message) {
    const line = document.createElement('div');
    line.textContent = `> ${message}`;
    outputElement.appendChild(line);
    outputElement.scrollTop = outputElement.scrollHeight;
}

// Fungsi utama untuk menjalankan efek prank
function hackerEffect() {
    if (messageIndex === 0) {
        // Tampilkan pesan pertama (menganalisis hp.....) selama 3 detik
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 11000); // Delay 3 detik
    } else if (messageIndex < messages.length) {
        // Tampilkan pesan berikutnya dengan delay 1,5 detik antar pesan
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 9000); // Delay 1,5 detik antar pesan
    } else {
        typeText("succes", () => {});
    }
}

// Menjalankan efek setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    hackerEffect();
});
