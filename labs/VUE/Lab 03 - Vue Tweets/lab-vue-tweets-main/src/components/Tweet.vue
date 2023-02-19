<template>
  <div className="tweet">
    <ProfileImage :image="image" />
    <div className="body">
      <div className="top">
        <span className="user">
          <User :user="user" />
        </span>
        <span className="timestamp">
          <Timestamp :timestamp="timestamp" />
        </span>
      </div>
      <p className="message">
        <Message :message="message" />
      </p>
      <Actions />
    </div>
    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>
<script>
import ProfileImage from "./ProfileImage.vue";
import User from "./User.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import Actions from "./Actions.vue";
export default {
  props: {
    user: {
      name: String,
      handle: String,
    },
    timestamp: String,
    message: String,
    image: String,
  },
  components: { ProfileImage, User, Timestamp, Message, Message, Actions },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>