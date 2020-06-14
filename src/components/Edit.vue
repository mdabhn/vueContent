<template>
  <div class="container">
    <h3 class="text-center mt-4">Edit {{ this.$route.params.slug }}</h3>
    <!--  -->
    <form class="w-50 mx-auto form" @submit.prevent="editSmoothe">
      <div class="form-group row">
        <label for="title" class="col-sm-4 col-form-label">Title</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            v-model="smoothie.title"
          />
        </div>
      </div>

      <div
        class="form-group row"
        v-for="(ing, index) in smoothie.ingredients"
        :key="index"
      >
        <label for="ingredient" class="col-sm-4 col-form-label">
          Added ingredient
        </label>
        <div class="col-sm-8">
          <!--  -->
          <input
            type="text"
            class="form-control"
            id="ingredient"
            placeholder="Ingredient"
            value="ing"
            v-model="smoothie.ingredients[index]"
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
import firebase from "firebase";
import slugify from "slugify";
export default {
  name: "Edit",
  data() {
    return {
      smoothie: null,
      ingredient: null,
      feedback: null
    };
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.slug);
    ref
      .get()
      .then(snapshot => {
        snapshot.forEach(data => {
          this.smoothie = data.data();
          this.smoothie.id = data.id;
        });
      })
      .then(() => {
        console.log(this.smoothie);
      })
      .catch(err => {});
  },
  methods: {
    editSmoothe() {
      if (this.smoothie.title && this.smoothie.ingredients.length > 0) {
        this.feedback = null;
        this.smoothie.slug = slugify(this.smoothie.title, {
          lower: true
        });
        db.collection("smoothies")
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug,
            created: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            this.$router.push({ name: "Home" });
          });
      } else {
        this.feedback = "You must Fill the fileds";
      }
    },
    addIngredient() {
      if (this.ingredient) {
        this.smoothie.ingredients.push(this.ingredient);
        this.ingredient = null;
        this.feedback = null;
      } else if (this.smoothie.ingredients.length == 0) {
        this.feedback = "Add An Ingredent please...";
      }
    }
  }
};
</script>

<style></style>
