function redirectToAdmin(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    let password = document.getElementById("password").value;

    // สามารถกำหนดรหัสผ่านที่ถูกต้องได้ที่นี่
    let correctPassword = "4321"; 

    if (password === correctPassword) {
        window.location.href = "AdminStatus.html"; // เปลี่ยนหน้าไปที่ AdminStatus.html
    } else {
        alert("รหัสผ่านผิด!"); // แจ้งเตือนถ้ารหัสผิด
    }
}
