
function askNumber1()
{
   return prompt("Пожалуйста, введите первое число");

   
}

function askNumber2()
{
   return prompt("Пожалуйста, введите второе число");
   
}

function showResult(number)
{
    alert(number);
}

function Sum()
{
    let n1=askNumber1();
    let n2=askNumber2();
    return(Number(n1)+Number(n2));
}

function Sub()
{
    let n1=askNumber1();
    let n2=askNumber2();
    return(Number(n1)-Number(n2));
}

function Div()
{
    let n1=askNumber1();
    let n2=askNumber2();
    return(Number(n1)/Number(n2));
}


function Mult()
{
    let n1=askNumber1();
    let n2=askNumber2();
    return(Number(n1)*Number(n2));
}





