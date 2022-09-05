<template>
  <Users />
</template>
<script>
import Users from "/src/components/DashboardUsers.vue";
export default {
  components: {
    Users,
    },
    data() {
        users: null;
    }
  
};
</script>