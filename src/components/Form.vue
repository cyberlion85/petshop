<template>
  <div>
    <my-header :cart-item-count="cartItemCount"></my-header>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Pet Depot Checkout</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4>
                  <strong>Enter Your Information</strong>
                </h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>First Name:</strong>
                <input v-model.trim="order.firstName" class="form-control" />
              </div>
              <div class="col-md-6">
                <strong>Last Name:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <strong>Address:</strong>
              </div>
              <div class="col-md-12">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <strong>City:</strong>
              </div>
              <div class="col-md-12">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-2">
                <strong>State:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value>State</option>
                  <option v-for="(state, key) in states" :key="state">{{ key }}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Zip / Postal Code:</strong>
                <input v-model.number="order.zip" class="form-control" type="number" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input
                  id="gift"
                  v-model="order.gift"
                  type="checkbox"
                  value="true"
                  :true-value="order.sendGift"
                  :false-value="order.dontSendGift"
                />
                <label for="gift">Ship As Gift?</label>
              </div>
            </div>
            <!-- end of form-group -->
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input id="home" v-model="order.method" type="radio" :value="order.home" />
                <label for="home">Home</label>
                <input id="business" v-model="order.method" type="radio" :value="order.business" />
                <label for="business">Business</label>
              </div>
            </div>
            <!-- end of form-group-->
            <div class="form-group">
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary submit" @click="submitForm">Place Order</button>
              </div>
              <!-- end of col-md-6-->
            </div>
            <!-- end of form-group-->
            <div class="col-md-12 verify">
              <pre>
                        First Name: {{ order.firstName }}
                        Last Name: {{ order.lastName }}
                        Address: {{ order.address }}
                        City: {{ order.city }}
                        Zip: {{ order.zip }}
                        State: {{ order.state }}
                        Method: {{ order.method }}
                        Gift: {{ order.gift }}
              </pre>
            </div>
            <!-- end of col-md-12 verify-->
          </div>
          <!--end of panel-body-->
        </div>
        <!--end of panel panel-info-->
      </div>
      <!--end of col-md-10 col-md-offset-1-->
    </div>
    <!--end of row-->
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import MyHeader from './Header.vue';
export default Vue.extend({
  name: 'Form',
  components: { MyHeader },
  props: {
    cartItemCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      states: {
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada',
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home Address',
        business: 'Business Address',
        home: 'Home Address',
        gift: '',
        sendGift: 'Send As A Gift',
        dontSendGift: 'Do Not Send As A Gift',
      },
    };
  },
  methods: {
    submitForm() {
      alert('Submitted');
    },
  },
});
</script>
<style scoped></style>
