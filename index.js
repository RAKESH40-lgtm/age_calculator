function calcAge(e){
    // e.preventDefault()
    let d_1=document.getElementById("date_user").value
    let m_1=document.getElementById("month_user").value
    let y_1=document.getElementById("year_user").value
    let err=document.getElementById("error")
    let res=document.getElementById("res")
   
    if(d_1!=="" && m_1!=="" && y_1!==""){
        
        let date=new Date()
        let d_2=date.getDate()
        let m_2=date.getMonth()
        let y_2=date.getFullYear()
        let age_d=Math.abs(d_2-parseInt(d_1))
        let age_m=Math.abs(m_2-parseInt(m_1))
        let age_y=Math.abs(y_2-parseInt(y_1))
        alert(` Your Age is ${age_d} Years ${age_m} Months  ${age_y} Days. `)
        

    }else{
        alert("Please enter a valid values to given fields?")
        
        // res.innerHTML="<p>` Your Age is ${age_d} Years ${age_m} Months  ${age_y} Days. `</p>"
    
    }
   

}