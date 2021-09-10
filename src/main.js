function handleHidden(project = 'pokedex') {
    const $projects = document.querySelectorAll('.project');
    const currentProject = document.querySelector(`#${project}`);
    

    $projects.forEach(project => {
        project.classList.add('hidden');
    })

    currentProject.classList.remove('hidden');
}


document.querySelector('.projects').onclick = (e) => {
    const button = e.target.dataset.name;
    if (button === 'pokedex') {
        handleHidden(button);
    } else if (button === 'simon') {
        handleHidden(button);
    } else if (button === 'crud') {
        handleHidden(button);
    } else if (button === 'exchange') {
        handleHidden(button);
    }
}
handleHidden();