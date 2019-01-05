document.addEventListener('DOMContentLoaded',function(event){
    console.log(`document loaded`);
    const eatButtons = document.querySelectorAll('.eat-button');

    eatButtons.forEach(button=>{
        button.addEventListener('click',event=>{
            console.log(event.target.dataset.id);
            const data = {eaten:true};
            const id = event.target.dataset.id;
            console.log(`fetching from id ${id}`)
            fetch(`/api/${id}`,{
                method:'PUT',
                body: JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            })
            .then(res=>{
                console.log(`in response`);
                console.log(res)
                location.reload();
            })
            .catch(err=>{
                console.log(`in catch`);
                console.log(err)
            });
        })
    })

});