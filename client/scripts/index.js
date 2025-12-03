const mockTest = document.getElementById('mockTest');

if (mockTest) {
    mockTest.addEventListener('click', () => {
        window.location.assign('pages/mocktest.html');
    });
} else {
    console.warn('mockTest not found in DOM');
}