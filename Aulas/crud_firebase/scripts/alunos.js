// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6yjMGjhq4RNBK_M_72v5lTOVmOjWeyuw",
  authDomain: "jquery-fe352.firebaseapp.com",
  databaseURL: "https://jquery-fe352-default-rtdb.firebaseio.com",
  projectId: "jquery-fe352",
  storageBucket: "jquery-fe352.firebasestorage.app",
  messagingSenderId: "202641054162",
  appId: "1:202641054162:web:980d5c7cdaa7326959100b",
  measurementId: "G-FBZB16QXLB"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("alunos");

// Carregar usuários
function carregarAlunos() {
  db.on("value", (snapshot) => {
    const tbody = $("#tabelaAlunos");
    tbody.empty();
    snapshot.forEach((child) => {
      const user = child.val();
      const key = child.key;
      tbody.append(`
        <tr>
          <td>${user.nome}</td>
          <td>${user.email}</td>
          <td>${user.telefone || "N/A"}</td>
          <td>
            <button class="btn btn-warning btn-sm edit-btn" data-id="${key}">Editar</button>
            <button class="btn btn-danger btn-sm delete-btn" data-id="${key}">Excluir</button>
          </td>
        </tr>
      `);
    });
  });
}

// Salvar usuário (create/update)
$("#formUsuario").submit(function (e) {
  e.preventDefault();

  const id = $("#id").val();
  const nome = $("#txtnome").val();
  const email = $("#txtemail").val();
  const telefone = $("#txttelefone").val();

  if (id) {
    db.child(id).update({ nome, email, telefone });
  } else {
    db.push({ nome, email, telefone });
  }

  this.reset();
  $("#id").val("");
});

// Editar
$(document).on("click", ".edit-btn", function () {
  const id = $(this).data("id");
  db.child(id)
    .get()
    .then((snapshot) => {
      const user = snapshot.val();
      $("#id").val(id);
      $("#txtnome").val(user.nome);
      $("#txtemail").val(user.email);
      $("#txttelefone").val(user.telefone || "");
    });
});

// Excluir
$(document).on("click", ".delete-btn", function () {
  const id = $(this).data("id");
  if (confirm("Tem certeza que deseja excluir?")) {
    db.child(id).remove();
  }
});

// Inicializar
carregarAlunos();
