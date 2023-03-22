const app = document.querySelector<HTMLDivElement>('#app')!;

const location = window.location;
console.log(location.href);

interface Data {
    email:string;
    phone?:string;
    countryCode:string;
}

export default function thankyou(data:Data) {
    console.log('thankyou page');
    const dataRec = data;
    console.log('data shared : ', dataRec);
    if(app) {
        return (
            app.innerHTML=`
            <div>
                <h1>Thanks a ton for taking out your precious time and for completing the survey</h1>
                <h2>${dataRec?.email}</h2>
                <h2>${dataRec.countryCode}-${dataRec?.phone}</h2>
            </div>       
        `
        );
    }
};