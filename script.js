const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText //each letter E,M,A,I,L and P,A,S,S,W,O,R,D
        .split('') //split letters into array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('') //turns array back to string
})