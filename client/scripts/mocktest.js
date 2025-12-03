const takeTestBtn = document.getElementById('takeTestBtn');
const createTestBtn = document.getElementById('createTestBtn');

if (takeTestBtn) {
    takeTestBtn.addEventListener('click', () => {
        window.location.assign('pages/takeTest.html');
    });
} else {
    console.warn('takeTestBtn not found in DOM');
}

if (createTestBtn) {
    createTestBtn.addEventListener('click', () => {
        alert('Redirecting to Create Test Page');
        window.location.assign('../pages/createTest.html');
    });
} else {
    console.warn('createTestBtn not found in DOM');
}