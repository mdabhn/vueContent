<template>
  <div class="container">
    <h3 class="text-center mt-4">Create A New Smoothie</h3>
    <form class="w-50 mx-auto form" @submit.prevent="createSmoothe">
      <div class="form-group row">
        <label for="title" class="col-sm-4 col-form-label">Title</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            v-model="title"
          />
        </div>
      </div>

      <div
        class="form-group row"
        v-for="(ing, index) in ingredients"
        :key="index"
      >
        <label for="ingredient" class="col-sm-4 col-form-label">
          Added ingredient
        </label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="ingredient"
            placeholder="Ingredient"
            value="ing"
            v-model="ingredients[index]"
            @keydown.tab.prevent="addIngredient"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="ingredient" class="col-sm-4 col-form-label"
          >Add an ingredient</label
        >
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="ingredient"
            placeholder="Ingredient"
            v-model="ingredient"
            @keydown.tab.prevent="addIngredient"
          />
        </div>
      </div>
      <p class="text-danger text-center mt-3" v-if="feedback">
        {{ feedback }}
      </p>
      <button class="btn btn-success float-right">Submit</button>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Create",
  data() {
    return {
      title: null,
      ingredient: null,
      ingredients: [],
      slug: null,
      feedback: null
    };
  },
  methods: {
    createSmoothe() {
      if (this.title) {
        this.feedback = null;
        db.collection("smoothies").add({
          title: this.title,
          ingredients: this.ingredients
          // slug:
        });
      } else {
        this.feedback = "You must Give title";
      }
    },
    addIngredient() {
      if (this.ingredient) {
        this.ingredients.push(this.ingredient);
        this.ingredient = null;
        this.feedback = null;
      } else if (this.ingredients.length == 0) {
        this.feedback = "Add An Ingredent please...";
      }
    }
  }
};
</script>

<style>
.form {
  margin-top: 100px;
}
</style>
