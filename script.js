const form = document.getElementById("formRegistro");
const tabela = document.getElementById("tabelaRegistros").querySelector("tbody");
const toggleDark = document.getElementById("toggleDark");

// Registrar retirada
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nomeFuncionario").value;
    const cargo = document.getElementById("cargo").value;
    const setor = document.getElementById("setor").value;
    const roupa = "Roupa Privativa";
    const horaRetirada = new Date().toLocaleString();

    const row = tabela.insertRow();
    row.insertCell(0).innerText = nome;
    row.insertCell(1).innerText = cargo;
    row.insertCell(2).innerText = setor;
    row.insertCell(3).innerText = roupa;
    row.insertCell(4).innerHTML = '<span class="status status-retirada">Retirada</span>';
    row.insertCell(5).innerText = horaRetirada;
    row.insertCell(6).innerText = "-";
    const acoes = row.insertCell(7);

    const btnDevolver = document.createElement("button");
    btnDevolver.innerText = "Devolver";
    btnDevolver.className = "btn-devolver";
    btnDevolver.onclick = function() {
        row.cells[4].innerHTML = '<span class="status status-devolvida">Devolvida</span>';
        row.cells[6].innerText = new Date().toLocaleString();
        btnDevolver.disabled = true;
    };
    acoes.appendChild(btnDevolver);

    form.reset();
});

// Limpar histórico
function limparHistorico() {
    if (confirm("Tem certeza que deseja excluir todo o histórico?")) {
        tabela.innerHTML = "";
    }
}

// Alternar entre claro/escuro
toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleDark.textContent = document.body.classList.contains("dark") ? "☀️ Claro" : "🌙 Escuro";
});