const check = () =>{
    let a = +document.getElementById("money").value;
    let b = +document.getElementById("rate").value;
    let c = +document.getElementById("year").value;
    console.log(a)
    console.log(b)
    console.log(c)
    let result = a + c * b ;
    console.log("result")
    alert("Số tiền phải trả sau " + c + " năm là: " + result);
}