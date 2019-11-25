$(document).ready(()=>{
    let arr=[];
    for(let i=0;i<=400;i++)
    arr.push(1);

    arr[0]=0;
    arr[1]=0;
    let height=$(window).innerHeight();
    let width=$(window).innerWidth();

    function setGrid(){
        $("#table").html('');
    for(let i=0;i<20;i++){
        let tr=$(document.createElement('tr'));
        for(let j=0;j<20;j++){
            let td=$(document.createElement('td'));
            $(td).attr('id',20*i+j+1);
            $(td).attr('height',height/20);
            $(td).attr('width',width/20);
            $(td).text(20*i + j+1);
            $(tr).append(td);
        }
        
        $("#table").append(tr);
    }
}
    function setPrime(id){
        $("#"+id).css({"background-color":"green"})
    }

    function setNonPrime(id){
        $("#"+id).css({"background-color":"red"});
    }

    // function run(i){
    //     if(i>20)
    //     return 0;
    //         pick(i);
    //         setTimeout(()=>{run(i+1)},2000)
    // }
    function setNonPrimePromise(arr2){
        if(arr2[0]<=400){
            return new Promise((resolve,reject)=>{
                arr[arr2[0]]=0;
                setNonPrime(arr2[0]);
                setTimeout(() => {
                    resolve(arr2)
                }, 100);
            }).then((arr2)=>{
                arr2[0]+=arr2[1];
                setNonPrimePromise(arr2);
            })
        }
        else setPrimePromise(arr2[1]+1)
        
    }

    // setNonPrimePromise([4,2]);    
    
    function setPrimePromise(i){
        if(i<=400 && arr[i]){
            return new Promise((resolve,reject)=>{
            $("#step").html('Step : '+ i +' is still white so it is prime and set to green ,all its multiple set to red'); 
            $("#prime").append(i+',')
            setPrime(i);
            setTimeout(()=>{
                setNonPrimePromise([i+i,i])},500)
            })
        }
        else if(i<=400){
            $("#step").html('Step : '+ i +' is red so it is non-prime');
        setTimeout(()=>{setPrimePromise(i+1)},1000);
        }
    }

    $("#start").click(()=>{
        setNonPrime(1);
        $("#start").attr('disabled',true);
        $("#step").html('Step : 1 is non prime it is set red');
        $("#prime").html('Prime : ')
        setTimeout(()=>{setPrimePromise(2);},1000);
    })

    $("#reset").click(()=>{
        location.reload(true);
    })

    setGrid();

    
  })