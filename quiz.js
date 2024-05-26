function quiz()
{
    var ss = document.querySelectorAll('.me');
    var yes = 0;
    var no = 0;
    ss.forEach(function(i){
        if(i.checked && i.value == 'yes'){
            yes++;
        }
        else if(i.checked && i.value == 'no'){
            no++
        }
    })
    alert(`YES = ${yes} && NO = ${no}`);
}