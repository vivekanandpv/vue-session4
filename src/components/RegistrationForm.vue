<script setup lang="ts">
import { reactive, watch } from 'vue';

interface AgeErrors {
  error?: string;
}

interface FormViewModel {
  fullName: string;
  age?: number;
  newsletter: boolean;
  language: string;
  rating?: string;
  comments?: string;
}

const ageErrors = reactive<AgeErrors>({});

const form = reactive<FormViewModel>({
  fullName: '',
  newsletter: false,
  language: 'en',
});

watch(form, (nextValue: FormViewModel) => {
  if (nextValue.age && nextValue.age < 18) {
    ageErrors.error = 'Should be 18 years or more';
  } else {
    ageErrors.error = undefined;
  }
});

const onSubmit = (e: Event) => {
  e.preventDefault();
  console.log('Form', form);
};
</script>
<template>
  <h4>Registration Form</h4>
  <hr />
  <form @submit="onSubmit">
    <div class="from-group mb-3">
      <label for="fullName" class="form-label">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="fullName"
        v-model="form.fullName"
      />
    </div>

    <div class="from-group mb-3">
      <label for="age" class="form-label">Age</label>
      <input
        type="number"
        class="form-control"
        id="age"
        step="1"
        v-model="form.age"
      />
      <p class="form-text text-danger" v-if="ageErrors.error">
        {{ ageErrors.error }}
      </p>
    </div>

    <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="newsletter"
        v-model="form.newsletter"
      />
      <label class="form-check-label" for="newsletter"> Newsletter </label>
    </div>

    <div class="from-group mb-3">
      <label for="language" class="form-label">Language</label>
      <select class="form-select" id="language" v-model="form.language">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </div>

    <div class="from-group mb-3">
      <label class="form-label">Rating</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="rating"
          id="good"
          v-model="form.rating"
          value="good"
        />
        <label class="form-check-label" for="good"> Good </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="rating"
          id="okay"
          v-model="form.rating"
          value="okay"
        />
        <label class="form-check-label" for="okay"> Okay </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="rating"
          id="should-improve"
          v-model="form.rating"
          value="should-improve"
        />
        <label class="form-check-label" for="should-improve">
          Should improve
        </label>
      </div>
    </div>

    <div class="form-group mb-3">
      <label for="comments" class="form-label">Comments</label>
      <textarea
        class="form-control"
        id="comments"
        rows="3"
        v-model="form.comments"
      ></textarea>
    </div>

    <button class="btn btn-primary btn-sm">Submit</button>
  </form>
</template>
