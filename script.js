let btn  = document.getElementById("btn");
let inp  = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function(){
    if(inp.value != ""){
        boxs[0].innerHTML +=`
        <p class="item" draggable="true">${inp.value}</p>
        `/*draggable
        تستخدم في عمليات ال 
        drop and drag
        */ 
       inp.value = "";
    }
    dragItem()
}
function dragItem(){
    let item = document.querySelectorAll(".item");
    item.forEach(item=>{
        /*
        forEach 
         for loop  تستخدم كبديل لل  
        لعمل تنسيقات علي كل عنصر من عناصرها  array حيث تستتخدم مع ال  
        arrayName.forEach(array اسم متغري يعبر عن جميع عناصر ال =>{
            <code>
        } )
        */
        item.addEventListener("dragstart" , function(){
            // dragstart حدث يعمل عند امساك العنصر
            drag = item;
            item.style.opacity = ".5";
        })
        item.addEventListener("dragend",function(){
            // dragend حدث يعمل عند افلات العنصر
            drag = null
            item.style.opacity =1
        })
        boxs.forEach(box =>{
            box.addEventListener("dragover",function(e)
            /* 
            قمنا بعمل متغير ككائن للحدث يمكن من خلاله الوصول الي 
            معلومات الدالة 
            preventDefault
            هو امر في اللغة يستخدم في منع السلوك الافتراضي للحدث
            مثل منع السحب والافلات
               e.preventDefault       عند عمل 
           يتم ايقاف السلوك الافتراضي للحدث المستمع الذي توجد فيه الدالة
               */
            {
                //dragover حدث يستخدم عندما يلامس العنصر الصناديق
            e.preventDefault()
                box.style.background = "#090"
            box.style.color = " white"
        })
        box.addEventListener("dragleave",function(){
                box.style.background = "white"
                box.style.color = " black"

            })
            box.addEventListener("drop",function(){
                box.append(drag)
                box.style.background="white"
                box.style.color= "black"
            })

        })
    
        
    })
}