export default function closeModal(modal){
    const myModal = document.getElementById(modal)
    myModal.setAttribute('data-bs-dismiss', 'modal');
    myModal.click()
}