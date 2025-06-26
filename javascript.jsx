function tampilkanPesan() {
    alert("Selamat! Kamu berhasil membuat website sederhana!");
  }
  function tampilkanKalimat() {
    const kalimat = document.getElementById("kalimatInput").value;
    document.getElementById("output").innerText = "Kamu menulis: " + kalimat;
  }
  