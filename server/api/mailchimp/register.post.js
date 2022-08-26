import Mailchimp from 'mailchimp-api-v3'
export default defineEventHandler(async (event) => {
    const payload = await useBody(event);
    const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY)
    const audienceId = 'aaa3e2ace3'

    try{
        const response = await mailchimp.request({
            method: 'post',
            path: `/lists/${audienceId}/members`,
            body: {
                email_address:payload.email,
                status:'subscribed',
                merge_fields: {
                    FNAME: payload.firstName,
                    LNAME: payload.lastName
                }
            }
        })
    }catch(error){
        return {
            statusCode: error.statusCode,
            body: error.detail
        }
    }    

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Signed up successfully!",
        })
    }

})

// https://mailchimp.com/developer/marketing/guides/create-your-first-audience/#add-a-contact-to-an-audience
// https://mailchimp.com/developer/marketing/docs/methods-parameters/
// https://hashinteractive.com/blog/nuxt-js-mailchimp-integration-add-contact-to-list/
