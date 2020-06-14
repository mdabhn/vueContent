<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-center">
      <div class="card mr-2" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card-header text-center">
          <i
            class="material-icons float-right"
            @click="deleteSmoothie(smoothie.id)"
            >delete</i
          >
          {{ smoothie.title }}
        </div>
        <div class="card-body">
          <div
            class="badge badge-pill badge-secondary"
            v-for="(ing, index) in smoothie.ingredients"
            :key="index"
          >
            {{ ing }}
          </div>
          <div class="mt-3">
            <router-link
              class="float-right"
              :to="{ name: 'Edit', params: { slug: smoothie.slug } }"
            >
              <i class="material-icons edit">edit</i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Home",
  data() {
    return {
      smoothies: [
        // { title: "Smoothies 01",slug: "smoothies-01",ingredients: ["banana", "coffee", "milk"],id: "1" }
      ]
    };
  },
  methods: {
    deleteSmoothie(id) {
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id;
          });
        });
    }
  },
  created() {
    db.collection("smoothies")
      .orderBy("created", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(data => {
          let smoothie = data.data();
          smoothie.id = data.id;
          this.smoothies.push(smoothie);
        });
      });
  }
};
</script>

<style>
.badge {
  font-size: 1rem;
  margin: 1.3px;
}

i {
  cursor: pointer;
}

.card {
  min-width: 300px;
}
</style>
