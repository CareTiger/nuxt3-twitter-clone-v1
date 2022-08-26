export default defineEventHandler(async (event) => {
    const body = await useBody(event);

    try {
        await $fetch(process.env.SLACK_WEBHOOK, {
            method: 'POST',
            body: {"text": body.message},
        })        
    } catch (error) {
        console.log(error)
        return {
            statusCode: 400,
            body: JSON.stringify({
            message: error.message,
            })
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
        message: "Message sent successfully!",
        })
    }

})

// some reading
// https://gomakethings.com/how-to-send-data-to-an-api-with-the-vanilla-js-fetch-method/
// auth - https://code-boxx.com/javascript-fetch-auth/
// https://reqbin.com/code/javascript/ricgaie0/javascript-fetch-api-example