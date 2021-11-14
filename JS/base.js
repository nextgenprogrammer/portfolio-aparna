function DisplayBio(bio) {
    var short = document.getElementById('bioshort');
    var long = document.getElementById('biolong');
    var research = document.getElementById('bioresearch');
    var outreach = document.getElementById('biooutreach');
    

    long.style.display = 'none';
    short.style.display = 'none';
    research.style.display = 'none';
    outreach.style.display = 'none';

    switch(bio)
    {
        case 'long':
            long.style.display = 'block';
            break;

        case 'short':
            short.style.display = 'block';
            break;

        case 'research':
            research.style.display = 'block';
            break;

        case 'outreach':
            outreach.style.display = 'block';
            break;
    }
}

function ToggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }