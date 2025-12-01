const addtestBtn = document.getElementById('addtestBtn');

if (addtestBtn) {
    addtestBtn.addEventListener('click', () => {
        window.location.assign('pages/addtest.html');
    });
} else {
    console.warn('addtestBtn not found in DOM');
}