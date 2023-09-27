let displayValue = '';
function msg(value) 
{
    displayValue = displayValue + value;
    update();
}
function cd()
{
    displayValue = '';
    update();
}
function eq() 
{
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        update();
    } 
    catch (error) 
    {
        displayValue = 'Error Value';
        update();
    }
}
function update()
{
    document.getElementById('display').textContent = displayValue;
}
document.addEventListener('keydown',function(event) 
{
    const a = event.key;
    if (/[0123456789+\-*/.=]/.test(a)) 
    {
        if (a === '=') 
        {
            eq();
        } else 
        {
            msg(a);
        }
    } 
    else if (a === 'Enter')
    {
        eq();
    } 
    else (a === 'Escape') 
    {
        cd();
    }
});
update();