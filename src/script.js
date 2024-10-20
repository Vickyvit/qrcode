var qrcode = new QRCode("qrcode", {
    colorDark: "#000",
    colorLight: "#fff",
  });
  
  const makeCode = () => {
    var Text = document.getElementById("text");
  
    if (!Text.value) {
      alert("Input a text");
      Text.focus();
      return;
    }
  
    qrcode.makeCode(Text.value);
  };
  
  makeCode();
  
  $("#text")
    .on("blur", function () {
      makeCode();
    })
    .on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });
  
  // Add download functionality
  const downloadQR = () => {
    const qrCodeCanvas = document.querySelector("#qrcode canvas"); // Get the QR code canvas element
    const downloadLink = document.createElement("a"); // Create a temporary download link
    downloadLink.href = qrCodeCanvas.toDataURL("image/png"); // Convert canvas to image URL
    downloadLink.download = "qrcode.png"; // Set the filename
    downloadLink.click(); // Programmatically click the download link to trigger the download
  };
  
  // Add an event listener for the download button
  document.getElementById("download-btn").addEventListener("click", downloadQR);
  