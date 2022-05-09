let pic = ['https://static.wixstatic.com/media/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg/v1/fill/w_1519,h_911,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg','https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'];
    let count = 0;
    function moveup(){
        window.scrollTo(0,0);
    }
    function setImage(count){
        document.getElementById("main1").style.backgroundImage = `url(${pic[count]})`;
        document.getElementById("main1").style.backgroundSize = "cover";
        console.log(count);
    }
    
    function show(){
        if(count==pic.length-1){
            setImage(count);
            count=0;
            setImage(count);
        }
        else{
            setImage(count);
        }
        ++count;
    }