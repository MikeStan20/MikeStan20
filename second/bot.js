const BYN = ('Bying BYN to EUR 3.145/BYN to USD 2.657/BYN') 
const EUR = 2
const USD = 3 


let a=prompt
a('Привет, я бот белорусского курса валют', 'Курс какой валюты Вы хотите узнать?')
if (a==='BYN'||'белки'){
  alert(BYN)
} else if (a==='USD'||'usd'||'доллар'){
  alert(USD)
} else if (a==='EUR'||'евро'||'угк'){
  alert(EUR)
} else {a('выберите валюту')}


