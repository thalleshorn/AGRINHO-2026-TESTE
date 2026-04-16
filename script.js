// =========================
// TIMELINE PROFISSIONAL
// =========================

const timelineData = [
    {
        year: "1930",
        text: "Expansão do café no Norte do Paraná, impulsionando colonização."
    },
    {
        year: "1950",
        text: "Apogeu da produção cafeeira, tornando o estado líder nacional."
    },
    {
        year: "1960",
        text: "Crescimento urbano e econômico baseado na produção agrícola."
    },
    {
        year: "1975",
        text: "Geada Negra destrói grande parte das lavouras."
    },
    {
        year: "1980+",
        text: "Diversificação agrícola após o declínio do café."
    }
];

const timeline = document.getElementById("timeline");

if (timeline) {
    timelineData.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("timeline-item");

        div.innerHTML = `
            <div class="timeline-content">
                <h3>${item.year}</h3>
                <p>${item.text}</p>
            </div>
        `;

        timeline.appendChild(div);
    });
}
