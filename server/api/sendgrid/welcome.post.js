import sendgrid from '@sendgrid/mail'
export default defineEventHandler(async (event) => {
    const payload = await useBody(event);
    const msg = {
        to: payload.to, 
        from: payload.from,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
        }
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    await sendgrid.send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            // console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
            return {
                statusCode: error.statusCode,
                body: error.detail
            }            
        })

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Message sent successfully!",
        })
    }

})

// https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs
