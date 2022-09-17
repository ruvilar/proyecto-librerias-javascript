delete Hammer.defaults.cssProps.userSelect

const body = document.getElementById('body'),
      hammerjs = new Hammer(body)

hammerjs.on('panleft panright', ev => {
    // console.log(ev)
    if(ev.pointerType === 'touch') {
        if(ev.type === 'panleft' && ev.distance > 100) {
            asideForm.classList.add('active')
        };
        if(ev.type === 'panright' && ev.distance > 100) {
            asideForm.classList.remove('active')
        };
    };
});

