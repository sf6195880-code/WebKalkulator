// ================= KALKULATOR =================
let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// ================= AI =================
function processNLP() {
    let input = document.getElementById("nlpInput").value.toLowerCase();
    let result = document.getElementById("nlpResult");

    // ===== NAMA =====
    if (
        input.includes("siapa nama kamu") ||
        input.includes("siapa namamu") ||
        input.includes("namamu siapa") ||
        input.includes("siapa kamu")
    ) {
        result.innerText = "Nama saya Rexona AI 🤖";
        return;
    }

    // ===== AMBIL ANGKA =====
    let numbers = input.match(/\d+/g);

    // ===== ANGKA KATA =====
    let angkaMap = {
        "nol":0,"satu":1,"dua":2,"tiga":3,"empat":4,
        "lima":5,"enam":6,"tujuh":7,"delapan":8,
        "sembilan":9,"sepuluh":10
    };

    for (let kata in angkaMap) {
        if (input.includes(kata)) {
            if (!numbers) numbers = [];
            numbers.push(angkaMap[kata]);
        }
    }

    // ===== TAMBAH =====
    if (input.includes("tambah") || input.includes("ditambah")) {
        if (numbers && numbers.length > 0) {
            let total = numbers.reduce((a, b) => Number(a) + Number(b), 0);
            result.innerText = "Hasilnya: " + total;
            return;
        }
    }

    // ===== DEFAULT =====
    result.innerText = "Maaf, saya belum mengerti 😅";
}