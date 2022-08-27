<template>
    <div class="h-full w-full flex flex-col justify-center pt-5 space-y-6">
        <UIInput value="" label="Username" placeholder="your username" v-model="data.username" />
        <UIInput value="" label="Password" placeholder="password" type="password" v-model="data.password" />
        <div class="pb-4"><button @click="handleLogin">Login</button></div>
        <!-- 
        <div  class="hidden border-t  border-gray-200  flex flex-col items-center space-y-2">
            <div><button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleSlack">test slack</button></div>
            <div><button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleSendgrid">test sendgrid</button></div>
            <div><button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleMailchimp">test mailchimp</button></div>                        
        </div> -->
    </div>

</template>
<script setup>

const data = reactive({
    password: '',
    username: '',
    loading: false
});

async function handleLogin() {
    const {login} = useAuth();    
    data.loading = true;

    try {
        await login({
            username: data.username,
            password: data.password,            
        })
    } catch (error) {
        console.log(error)
        
    } finally {
        data.loading = false
    }
};
/*
function handleSlack() {
    const {testSlack} = useAPI();
    try {
        testSlack()
    } catch (error) {
        console.log(error)
    }
}

function handleSendgrid() {
    const {testSendgrid} = useAPI();
    try {
        testSendgrid()
    } catch (error) {
        console.log(error)
    }
}

function handleMailchimp() {
    const {testMailchimp} = useAPI();
    try {
        testMailchimp()
    } catch (error) {
        console.log(error)
    }
}
*/
</script>