<template>
    <div class="container">
        <div class="row">
            <p class="lead">
                Aneeqa's Portfolio &copy; <span>{{ year }}</span>
                <span> All rights reserved</span>
            </p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'FooterComp',
        data(){
            return {
                year: new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>

</style>