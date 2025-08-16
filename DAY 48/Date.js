
// Internationalizing Dates (Intl)
const date = new Date()

//US Format
console.log("US format:",new Intl.DateTimeFormat('en-US').format(date));//MM-DD-YYYY
//Great Britain Format
console.log("Great Britian format:",new Intl.DateTimeFormat('en-GB').format(date));//DD-MM-YYYY
//JP format stands for
console.log("JP format format:",new Intl.DateTimeFormat('ja-JP').format(date));//YYYY-MM-DD


// Internationalizing Numbers (Intl)
const amount = 1234567.89;

console.log(`US format: ${new Intl.NumberFormat('en-US',{style: 'currency', currency:'USD'}).format(amount)}`)
console.log(`European Format: ${new Intl.NumberFormat('de-DE', {style : 'currency', currency: 'EUR'}).format(amount)}`)
console.log(`Indian Format: ${new Intl.NumberFormat('en-IN').format(amount)}`) // Indian numbering system


// set timeout/ set interval

setTimeout(() =>
{
    console.log("will print after 2 seconds");
    
},2000)

setInterval(()=>{console.log("will print every 1 second");
},1000)