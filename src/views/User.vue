<template>
    <div>
        <h1>Welcome user {{user}}</h1>
        <p>
            <router-link :to="{name: 'invoices'}">
                Invoices
            </router-link>
        </p>
        <button @click="_logOut" class="btn">Log Out</button>
    </div>
</template>

<script>
import store from "@/store"

export default {
    data() {
        return {
            user: store.user,
        }
    },
    methods: {
        _logOut() {
            //store.user = null;
            //this.$router.push("/");
            this.logOut(store);
        }
    }
}
</script>