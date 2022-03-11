const jsonData = [
    {
        imageUrl: "https://cdn.vox-cdn.com/thumbor/9BsZ7_6lH1ir-vvWS-XmI5M6KqM=/0x0:2040x1360/1200x800/filters:focal(472x211:798x537)/cdn.vox-cdn.com/uploads/chorus_image/image/55393645/nstatt_170418_1624_0052.0.0.jpg",
        answer: "Mark Zuckerberg",
        question:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms',
text2:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
title:"Mark Zuckerberg"
},
    {
        imageUrl: "https://assets.entrepreneur.com/content/3x2/2000/1596830499-GettyImages-1189261010.jpg",
        answer: "Billgates",
        question:'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
text2:"AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications.",
title:"Billgates"
    },
    {
        imageUrl: "https://images.news18.com/ibnlive/uploads/2021/08/elon-musk-16303829933x2.png?impolicy=website&width=510&height=356",
        answer: "Elon Mask",
        question:'Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO and Chief Engineer at SpaceX',
        text2:"Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side",
        title:"Elon Mask"
    },

]

// Global variable
const title= document.getElementById('title')
const image_url = document.getElementById('image_url')
const answer_feild = document.getElementById('answer_feild')
const answer = document.getElementById('answer')
const popup_view = document.getElementById('popup_view')
const try_again = document.getElementById('try_again')
const user_question = document.getElementById('user_question')
const text_feild = document.getElementById('text_feild')
const data_length = jsonData.length===0?0:jsonData.length - 1

//data load by eventually load event from json_data
window.addEventListener("load", () => {
    const data = jsonData[Math.round(Math.random() * data_length)]
    image_url.src = data.imageUrl
    user_question.innerHTML=data.question
    text_feild.innerHTML=data.text2
    title.innerHTML=data.title

    answer.addEventListener("click", () => {
        const user_answer = answer_feild.value
        console.log(user_answer)
        if (user_answer) {
            if (user_answer.toUpperCase() === data.answer.toUpperCase()) {
                window.location.href = './../pages/page1a.html'
                answer_feild.value=""
            }
            else {
                document.getElementById('popup_heading').innerHTML="Try Again"
                popup_view.style.display='block'
                answer_feild.value = ""
            }

        }
        else {
           document.getElementById('popup_heading').innerHTML="Please Select One Answer"
           popup_view.style.display='block'
        }

    })


})



try_again.addEventListener('click', (e) => {
    popup_view.style.display = "none"
})


