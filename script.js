
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Tema değiştirme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Kayıtlı temayı yükleme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☾";
}

// Mobil menü
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Menüden bağlantı seçilince menüyü kapat
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Güncel yıl
document.getElementById("year").textContent =
    new Date().getFullYear();

