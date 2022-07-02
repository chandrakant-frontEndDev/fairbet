export default async function displayRazorpay () {



    const data = await fetch("",{
        method: "POST"
    }).then((t)=> t.json())
    console.log(data)

    const options ={
        key: "rzp_test_ky0MEBtdsuw185",
        currency: data.currency,
        amount: data.amount,
        description: "Wallet Transaction",
        image:"url",
        order_id:data.id,
        handler: function (response){
            alert("PAYMENT ID: " + response.razorpay_payment_id)
            alert("ORDER ID: " + response.razorpay_payment_id)
        },
        prefill:{
            name: "SUDHANSHU SITOLE",
            email: "sudhanshu.infograins@gmail.com",
            contact: "9691280130"
        }
    };
    
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}