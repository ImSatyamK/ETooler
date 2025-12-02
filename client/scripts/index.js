const toolPareeksha = document.getElementById('toolPareeksha');

if (toolPareeksha) {
    toolPareeksha.addEventListener('click', () => {
        window.location.assign('pages/addtest.html');
    });
} else {
    console.warn('addtestBtn not found in DOM');
}