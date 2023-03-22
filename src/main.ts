import './style.css';
import { setupCounter } from './counter';
import { setupEmail } from './email';
// import { US } from 'country-flag-icons/unicode';
import thankyou from './thankyou/thankyou';

const countryURLs = [
  {country:"IND", cc:"+91"},
  {country:"USA", cc:"+1"},
  {country:"BAN", cc:"+880"},
  {country:"AUS", cc:"+61"},
  {country:"SL", cc:"+94"},
  {country:"RSA", cc:"+7"},
  {country:"NEP", cc:"+977"},
]

const app = document.querySelector<HTMLDivElement>('#app')!;

const landing = ` <div class='app-container'>
<div class='left'></div>
<div class='right'>
  <div class='logo-img'></div>
  <h1>Get a FREE</h1>
  <h2>consultation with an expert</h2>
  <form class='form'>
      <input id='in-email' type='email' name='in-email' placeholder='Enter your email' required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" />
      <div class='in-cont'>
        <select name="select-country" class="select-country">
          ${countryURLs.map((item, index)=> {
            return(
              `<option value=${item.cc} required selected=${item.country==='IND'}>${item.country}</option> `
            );
          })}
        </select>
        <input id='in-phone' type='text' name='in-phone' required placeholder='Enter your mobile' minLength="10" maxLength="10" />
      </div>
      <button class='submit-button'>Talk to Us</button>
    </form>
</div>
</div>`

app!.innerHTML = `${landing}`;

const email = document.querySelector<HTMLInputElement>('#in-email')!;
const cc = document.querySelector<HTMLSelectElement>('.select-country')!
const button = document.querySelector<HTMLButtonElement>('.submit-button')!;
const phone = document.querySelector<HTMLButtonElement>('#in-phone')!;
const thankyouPage = document.querySelector<HTMLDivElement>('#thankyou')!;

email?.addEventListener('input', (e:any)=>{
  let initVal = '';
  console.log('value : ', e.target?.value)
  function setValue(val:string) {
    initVal=val;
    email.value = initVal;
  };
  setValue(e.target.value);
});

cc.addEventListener('change', (e:any) => {
  let initVal = '';
  console.log('value : ', e.target?.value)
  function setValue(val:string) {
    initVal=val;
    cc.value = initVal;
  };
  setValue(e.target.value);
  // console.log('selected country : ', e.target.value);
});

phone.addEventListener('input', (e:any) => {
  let initVal = '';
  console.log('value : ', e.target?.value)
  function setValue(val:string) {
    initVal=val;
    phone.value = initVal;
  };
  (typeof e.target.value==='number') && setValue(e.target.value);
});

button?.addEventListener('click', (e) => {
  e.preventDefault();
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const em = email.value;
  const cd = cc.value; 
  const ph = phone.value;
  const test = regexp.test(em) && cd && ((ph.length===10));
  if(test) thankyou({email:em, countryCode:cd, phone:ph});
  
  // window.location.replace(`/thankyou/`);
})


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupEmail(document.querySelector<HTMLInputElement>('#in-email')!)
