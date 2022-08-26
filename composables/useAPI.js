export default () => {
    const testSlack = () => {
        return new Promise(async (resolve, reject) => {
            console.log("Testing slack")
            try {
                const data = await $fetch('/api/slack/sendMessage', {
                    method: 'POST',
                    body: {
                        "message" : "whats up mofo"
                    }
                })

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const testSendgrid = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/sendgrid/welcome', {
                    method: 'POST',
                    body: {
                        "to": "ven@sampyl.com",
                        "from": "ven@coachwith.com",
                        "subject": "Sending with SendGrid is Fun",
                        "text": "and easy to do anywhere, even with Node.js",
                        "html": "<strong>and easy to do anywhere, even with Node.js</strong>"
                    }
                })

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }  
    
    const testMailchimp = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/mailchimp/register', {
                    method: 'POST',
                    body: {
                        "firstName": "Prudence",
                        "lastName": "McVankab",
                        "email": "prudence.mcvankab@gmail.com"
                    }
                })

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }      

    return {
        testSlack,
        testMailchimp,
        testSendgrid
    }
}

// custom composable methids - https://www.thisdot.co/blog/custom-composable-methods-with-vue-3
