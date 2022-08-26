<template>
    <div class="flex h-screen">
        <!-- https://www.kindacode.com/article/tailwind-css-how-to-place-text-over-an-image/ -->
        <div class="relative flex-1 hidden w-0 md:block">
            <img class=" inset-0 object-cover w-full h-full" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
            <h1 class="absolute font-extrabold top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span class="text-indigo-600 text-6xl">{{ whois[0] }}</span>
            <span class="text-gray-600 text-6xl">&#32; trending?</span>
            </h1>
        </div>
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20">
            <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-48">
                <AuthForm />
            </div>
        </div>
    </div>
</template>
<script>
// https://stackoverflow.com/questions/54770812/how-to-change-random-text-with-interval-5-seconds-in-vue-nuxt-js
export default {
    data() {
        return {
        whois: ['What is', 'Who is']
        }
    },
    mounted(){
        window.setInterval(()=>{
        this.pollPerson();
        }, 2000);

    },
    methods: {
        pollPerson(){
        const first = this.whois.shift();
        this.whois = this.whois.concat(first);
        }
    }
}
</script>