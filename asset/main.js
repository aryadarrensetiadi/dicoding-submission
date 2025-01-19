function sendMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const whatsappMessage = `Halo, saya ${name}. ${message}`;
        const whatsappURL = `https://wa.me/6282134637063?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, '_blank');
    } else {
        alert('Harap isi semua kolom sebelum mengirim pesan!');
    }
}