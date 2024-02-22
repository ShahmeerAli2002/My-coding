let persoName :string = '';

persoName = prompt('what is your name') || '';

if (persoName !== null && persoName !== '') {
    
    alert (`hello ${persoName} would you like to learn python toyday?`)

} else {
    alert(`you not fill your name `)
}