const toggleCarreira = () => {
    const carreira = document.getElementById("carreira").classList.toggle("none");
    const pessoal = document.getElementById("pessoal").classList.add("none");
}

const togglePessoal = () => {
    const pessoal = document.getElementById("pessoal").classList.toggle("none");
    const carreira = document.getElementById("carreira").classList.add("none");
}

const hideAll = () => {
    const carreira = document.getElementById("carreira").classList.add("none");
    const pessoal = document.getElementById("pessoal").classList.add("none");
}