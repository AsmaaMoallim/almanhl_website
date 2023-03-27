<template>
    <main class="faqSections">
        <div class="sections">
            <a href="#" @click="section = 'section_1'">General</a>
            <span class="seperation_line"></span>
            <a href="#" @click="section = 'section_2'">Pre-ICO & ICC</a>
            <span class="seperation_line"></span>
            <a href="#" @click="section = 'section_3'">ICO Tokens</a>
            <span class="seperation_line"></span>
            <a href="#" @click="section = 'section_4'">Legal</a>
        </div>
        <div class="question_section">
            <div class="question">
                <div v-if="section == 'section_1'">
                    <!-- <h1>section_1</h1> -->
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="2" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="3" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="4" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                </div>
                <div v-if="section == 'section_2'">
                    <!-- <h1>section_2</h1> -->

                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                </div>
                <div v-if="section == 'section_3'">
                    <!-- <h1>section_3</h1> -->

                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                </div>
                <div v-if="section == 'section_4'">
                    <!-- <h1>section_4</h1> -->

                    <Question  id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                    <Question id="1" question_prompt='What is cryptocurrency?' arrow_direction='false'
                        question_answer="The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped." />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
// import "bootstrap-icons/font/bootstrap-icons.css";
import Question from "./Question.vue"
import "./mainVueComponent.vue";

export default {
    data() {
        return {
            section: "section_1"
        };
    },

    components: {
        Question
    }
}
</script>

<style scoped>
.faqSections {
    margin: 2rem;
}

.sections {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    gap: 2rem;
}

.sections a {
    text-decoration: none;
    color: #4717f7 !important;
}

.sections a:hover {
    color: #a33acb !important;
}

.seperation_line {
    display: inline-block;
    width: 2px;
    height: 2rem;
    background-color: #4717f7;
}

.question_section {
    margin: 3rem;
}
</style>  