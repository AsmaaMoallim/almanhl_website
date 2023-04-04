<template >
  <main :id="id" class="question hidden">
    <div class="question_header" @click="toggle_question">
      <div class="question_icon">
        <i class="bi bi-question-circle-fill"></i>
      </div>
      <div class="question_title">{{ question_prompt }}{{ id }}</div>
      <div class="question_nav">
        <!-- <i class=></i> -->
        <i class="bi bi-arrow-down-short" v-if="open"></i>
        <i class="bi bi-arrow-right-short" v-if="!open"></i>
      </div>
    </div>
    <div class="">

    </div>
    <div class="question_body" v-if="open & question == id">
      <p>
        {{ question_answer }}
      </p>
    </div>
  </main>
</template>
<script>
import "./mainVueComponent.vue";

export default {


  data() {
    return {
      question: '',
      open: false,
    };
  },

  props: ['question_prompt', 'arrow_direction', 'question_answer', 'id'],

  methods: {
    toggle_question() {
      this.open = !this.open;
      this.question = this.id

    },
  },



  // watch: {
  //   'open'() {
  //     this.open = false;
  //   },
  // }
}
</script>


<style scoped>
/* question */


.question {
  width: 50rem;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  border: 1.5px solid #4717f7;
  margin-bottom: .2rem;
  animation: floatUp 0.8s linear forwards;

}

.question_header {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-bottom: 1px solid #4717f7;
  padding: 1rem;
  font-weight: 700;
}

.question_header>* {
  color: #4717f7 !important;
}

.question_header:hover>* {
  color: #a33acb !important;
}

.question_header .bi {
  color: #4717f7 !important;
}

.question_nav {
  margin-left: auto;
  font-weight: 700;
}

.question_body {
  text-align: left;
  margin: 1rem;
  font-size: 1.2rem;
  border-left: 1px solid black;
  padding-left: 1rem;
  margin-left: 1.5rem;

}

.question_body p {
  color: #0e0a18 !important;
  opacity: 0.7;
}
</style>
